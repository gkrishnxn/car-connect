import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SearchBar_phone from '../components/SearchBar_phone';
import FlipCard_phone from '../components/FlipCard_phone';

const Phone = () => {
  const cardsData = [
    {
      image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg",
      title: "iPhone 12 Pro",
      price: "80,000",
      year: "2020",
      condition: "Excellent",
      description: 'A top-of-the-line iPhone 12 Pro in excellent condition.',
      buttonText: 'Learn more'
    },
    {
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672425/Croma%20Assets/Communication/Mobiles/Images/300445_0_c2ehra.png?tr=w-640',
      title: "Samsung Galaxy S21",
      price: "70,000",
      year: "2021",
      condition: "Like New",
      description: 'A Samsung Galaxy S21 with minimal usage.',
      buttonText: 'Learn more',
      link: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      image: 'images/phone3.jpg',
      title: "Google Pixel 5",
      price: "50,000",
      year: "2020",
      condition: "Good",
      description: 'A Google Pixel 5 with some signs of use.',
      buttonText: 'Learn more',
      link: "https://www.google.com/url?sa=i&url=+%3A%2F%2Fwww.kinps.inhttps://cdn.dxomark.com/wp-content/uploads/medias/post-79199/OnePlus-8T-featured-image-1.jpg%2Fleaked-google-pixel-5-marketing-renders-confirm-green-colour-B8096861&psig=AOvVaw31Lc-7l1HyhXEAeJ9tNMiX&ust=1716881202051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPj5yYOnrYYDFQAAAAAdAAAAABAJ"
    },
    {
      image: 'images/phone4.jpg',
      title: "OnePlus 8T",
      price: "40,000",
      year: "2020",
      condition: "Very Good",
      description: 'A OnePlus 8T in very good condition.',
      buttonText: 'Learn more',
      link: "https://cdn.dxomark.com/wp-content/uploads/medias/post-79199/OnePlus-8T-featured-image-1.jpg"
    },
    {
      image: 'images/phone5.jpg',
      title: "Sony Xperia 1 II",
      price: "60,000",
      year: "2020",
      condition: "Good",
      description: 'A Sony Xperia 1 II with minor scratches.',
      buttonText: 'Learn more',
      link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hispasonic.com%2Fproductos%2Fapple-iphone-5%2F29056&psig=AOvVaw3-D2KOy_JmhXQ4CkS2AGaX&ust=1716881338669000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiv78SnrYYDFQAAAAAdAAAAABAZ"
    },
    {
      image: 'https://9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-6-vintage.jpg?quality=82&strip=all&w=1600',
      title: "Huawei P40 Pro",
      price: "55,000",
      year: "2020",
      condition: "Excellent",
      description: 'A Huawei P40 Pro in excellent condition.',
      buttonText: 'Learn more',
      link: ""
    }
    // Add more phone objects as needed
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Hero />
      <SearchBar_phone />
      <main className="shadow-xl flex flex-wrap justify-center items-center gap-4 p-4">
        {cardsData.map((data, index) => (
          <FlipCard_phone key={index} data={data} /> // Pass data as prop to FlipCard_phone
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Phone;
