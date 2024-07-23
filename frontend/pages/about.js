import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>
        Welcome to My Used Product Scrapping Website! We're a dedicated team passionate about connecting sellers of pre-owned 
        items with interested buyers. We offer a diverse selection of used products at competitive prices. Our goal is to ensure a seamless 
        and hassle-free experience for both sellers and buyers alike.        </p>
        <Link href="/car">Car</Link>
        <p>
          Here are some of the things that set us apart:
        </p>
        <ul className="list-disc pl-4 mt-4">
          <li>Extensive inventory of vehicles</li>
          <li>Competitive pricing and financing options</li>
          <li>Knowledgeable and friendly sales staff</li>
          <li>Hassle-free buying and selling process</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
