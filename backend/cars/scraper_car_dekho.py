from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
import re
import time
import django
import os
import sys
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Add the project root directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Initialize Django settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "upsbackend.settings")
django.setup()

from cars.models import Car  # Use absolute import

def scrape_cardekho(url, location, max_cars=200):
    service = Service(ChromeDriverManager().install())
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')

    driver = webdriver.Chrome(service=service, options=options)
    driver.maximize_window()

    driver.get(url)
    time.sleep(5)

    last_height = driver.execute_script("return document.body.scrollHeight")
    cars_scraped = 0

    while True:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(5)
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height or cars_scraped >= max_cars:
            break
        last_height = new_height

    # Additional wait to ensure all images are loaded
    time.sleep(10)
    car_entries = driver.find_elements(By.CSS_SELECTOR, "div.cardColumn")

    # Scroll each car entry into view to ensure lazy-loaded images are loaded
    for car_entry in car_entries:
        if cars_scraped >= max_cars:
            break

        # Scroll the element into view
        action = ActionChains(driver)
        action.move_to_element(car_entry).perform()
        time.sleep(1)  # Give time for the image to load

        try:
            name_year = car_entry.find_element(By.CSS_SELECTOR, 'h3.title').text.strip()
            year_match = re.search(r'\b\d{4}\b', name_year)
            year = year_match.group(0) if year_match else None
            name = name_year.replace(year, '').strip() if year else name_year

            details = car_entry.find_element(By.CSS_SELECTOR, 'div.dotsDetails').text.strip().split(' • ')
            km_driven = details[0] if len(details) > 0 else None
            fuel_type = details[1] if len(details) > 1 else None
            transmission = details[2] if len(details) > 2 else None

            current_price = None
            try:
                price_div = car_entry.find_element(By.CSS_SELECTOR, 'div.Price p')
                current_price = price_div.text.strip()
            except Exception as e:
                logger.error(f"Error extracting price: {e}")

            link = car_entry.find_element(By.CSS_SELECTOR, 'h3.title a').get_attribute('href')

            img_url = None
            try:
                img_element = car_entry.find_element(By.CSS_SELECTOR, 'div.imagebox img')
                img_url = img_element.get_attribute('data-src') or img_element.get_attribute('src')

                # Check for known invalid image patterns
                if not img_url or 'spacer3x2.png' in img_url or 'stimg.cardekho.com/pwa/img' in img_url:
                    logger.error(f"Invalid image URL found or it's a placeholder: {img_url}")
                    img_url = None

            except Exception as e:
                logger.error(f"Error extracting image URL: {e}")

            if not img_url:
                img_url = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'

            # Save the car data to the database
            logger.info(f"Scraped car: {name}, Year: {year}, Image URL: {img_url}")

            try:
                Car.objects.create(
                    model=name,
                    year=year,
                    kms_driven=km_driven,
                    fuel_type=fuel_type,
                    transmission=transmission,
                    price_rs=current_price,
                    location=location,
                    link=link,
                    img=img_url
                )
            except Exception as e:
                logger.error(f"Error saving car data to the database: {e}")

            cars_scraped += 1

        except Exception as e:
            logger.error(f"Error processing car entry: {e}")

    driver.quit()

if __name__ == "__main__":
    urls_and_locations = [
        ("https://www.cardekho.com/used-cars+in+ahmedabad", "Ahmedabad"),
        ("https://www.cardekho.com/used-cars+in+bangalore", "Bangalore"),
        ("https://www.cardekho.com/used-cars+in+chandigarh", "Chandigarh"),
        ("https://www.cardekho.com/used-cars+in+chennai", "Chennai"),
        ("https://www.cardekho.com/used-cars+in+delhi-ncr", "Delhi NCR"),
        ("https://www.cardekho.com/used-cars+in+gurgaon", "Gurgaon"),
        ("https://www.cardekho.com/used-cars+in+hyderabad", "Hyderabad"),
        ("https://www.cardekho.com/used-cars+in+mumbai", "Mumbai"),
        ("https://www.cardekho.com/used-cars+in+new-delhi", "New Delhi"),
        ("https://www.cardekho.com/used-cars+in+noida", "Noida"),
        ("https://www.cardekho.com/used-cars+in+pune", "Pune"),
        ("https://www.cardekho.com/used-cars+in+kochi", "Kochi"),
    ]

    for url, location in urls_and_locations:
        scrape_cardekho(url, location)
