from django.core.management.base import BaseCommand
from cars.models import Car
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import re
import time

class Command(BaseCommand):
    help = 'Scrape car data and save to the database'

    def handle(self, *args, **kwargs):
        self.scrape_cars('honda-city', 'mumbai')  # Replace with valid car name and location

    def generate_url(self, car_name, location):
        car_name = car_name.replace(' ', '-').lower()
        location = location.replace(' ', '-').lower()
        return f"https://www.cars24.com/buy-used-{car_name}-cars-{location}/"

    def scrape_cars(self, car_name, location):
        url = self.generate_url(car_name, location)
        print(f"Scraping URL: {url}")

        service = Service(ChromeDriverManager().install())
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')

        driver = webdriver.Chrome(service=service, options=options)
        driver.maximize_window()

        try:
            driver.get(url)
            time.sleep(5)

            scroll_pause_time = 3
            screen_height = driver.execute_script("return window.innerHeight")
            scroll_height = driver.execute_script("return document.body.scrollHeight")
            
            for i in range(0, scroll_height, screen_height):
                driver.execute_script(f"window.scrollTo(0, {i});")
                time.sleep(scroll_pause_time)
            
            time.sleep(5)

            names = []
            years = []
            km_drivens = []
            fuel_types = []
            transmissions = []
            prices = []
            locations = []
            links = []
            images = []

            car_entries = driver.find_elements(By.CSS_SELECTOR, "a.IIJDn")

            for car_entry in car_entries:
                name = car_entry.find_element(By.CSS_SELECTOR, 'h3._11dVb').text.strip()
                year_match = re.search(r'\b\d{4}\b', name)
                year = year_match.group(0) if year_match else None

                if year:
                    name = name.replace(year, '').strip()

                details = car_entry.find_elements(By.CSS_SELECTOR, 'ul._3J2G- li')
                km_driven = details[0].text.strip() if len(details) > 0 else None
                fuel_type = details[2].text.strip() if len(details) > 2 else None
                transmission = details[4].text.strip() if len(details) > 4 else None

                current_price = None
                try:
                    price_div = car_entry.find_element(By.CSS_SELECTOR, 'div._2KyOK')
                    current_price = price_div.find_element(By.CSS_SELECTOR, 'strong._3RL-I').text.strip()
                except:
                    pass

                location = None
                try:
                    location_tag = car_entry.find_element(By.CSS_SELECTOR, 'p._3dGMY')
                    location = location_tag.find_elements(By.TAG_NAME, 'span')[-1].text.strip()
                except:
                    pass

                link = car_entry.get_attribute('href')

                img_url = None
                try:
                    img_element = car_entry.find_element(By.CSS_SELECTOR, 'div.RPKrE img')
                    img_url = img_element.get_attribute('src')
                except Exception as e:
                    print(f"Error extracting image URL: {e}")

                names.append(name)
                years.append(year)
                km_drivens.append(km_driven)
                fuel_types.append(fuel_type)
                transmissions.append(transmission)
                prices.append(current_price)
                locations.append(location)
                links.append(link)
                images.append(img_url)

            print(f"Scraped {len(names)} cars.")

            for i in range(len(names)):
                # Clean the 'km_driven' data to remove non-numeric characters
                km_driven_cleaned = int(re.sub(r'\D', '', km_drivens[i])) if km_drivens[i] else None

                car = Car(
                    model=names[i],
                    year=int(years[i]) if years[i] else None,
                    kms_driven=km_driven_cleaned,
                    fuel_type=fuel_types[i],
                    transmission=transmissions[i],
                    price_rs=int(re.sub(r'\D', '', prices[i])) if prices[i] else None,
                    location=locations[i],
                    link=links[i],
                    img=images[i]
                )
                car.save()

        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            driver.quit()
