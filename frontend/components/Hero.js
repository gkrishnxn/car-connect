import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero mt-20 pt-16 pb-10 h-10 bg-cover bg-center z-[1000]" >
      <div className="container mx-auto text-white text-center ">
        <h2 className="text-4xl font-bold mb-4">Find Your Dream Vehicle</h2>
        <p className="text-lg mb-8">Browse our extensive selection of new and used cars, trucks, and SUVs.</p>
      </div>
      
    </section>
  );
};

export default Hero;
