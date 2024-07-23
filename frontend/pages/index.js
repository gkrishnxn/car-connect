import React from 'react';
import Link from 'next/link';
const Index = () => {
  return (
<section
  className="relative bg-[url(https://images.unsplash.com/photo-1506469717960-433cebe3f181?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative text-left max-w-screen-xl px-4 pt-36 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-32"
  >
    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-black sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-orange-700"> Forever Car. </strong>
      </h1>

      <p className="text-left mt-4 max-w-lg text-orange-700 sm:text-xl/relaxed">
      Discover your dream used car effortlessly with our web app. We aggregate listings from multiple 
      sites into one easy-to-navigate platform, so you can find the perfect vehicle at the best price, all in one place
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          href="/car"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

  );
};

export default Index;


<section className ="text-gray-600 body-font">
  <div className ="container px-5 py-24 mx-auto">
    <div className ="flex flex-col">
      <div className ="h-1 bg-gray-200 rounded overflow-hidden">
        <div className ="w-24 h-full bg-green-500"></div>
      </div>
      <div className ="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className ="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Your stop for used products</h1>
        <p className ="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Welcome to My Used Product Scrapping Website! We're a dedicated team passionate about connecting sellers of pre-owned 
        items with interested buyers. We offer a diverse selection of used products at competitive prices. Our goal is to ensure a seamless 
        and hassle-free experience for both sellers and buyers  </p>
      </div>
    </div>
    <div className ="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className ="p-4 md:w-1/3 sm:mb-0 mb-6">
        <Link href = "/car">
          <div className ="rounded-lg h-64 overflow-hidden">
            <img alt="content" className ="object-cover object-center h-full w-full" src="https://img.freepik.com/premium-vector/car-illustration-logo-design-concept-super-car-logo_695276-1164.jpg?w=740" />
          </div>
          <h2 className ="text-xl font-medium title-font text-gray-900 mt-5">Used Vehicles</h2>
          <p className ="text-base leading-relaxed mt-2">Tested and Certified Vehicles for sale at best prices</p>
          <div className ="text-green-500 inline-flex items-center mt-3">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className ="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </Link>
      </div>
      <div className ="p-4 md:w-1/3 sm:mb-0 mb-6">
        <Link href = "/phone">
          <div className ="rounded-lg h-64 overflow-hidden">
            <img alt="content" className ="object-cover object-center h-full w-full" src="https://media.istockphoto.com/id/1057455004/vector/hand-hold-phone-logotype-hand-hold-smartphone.jpg?s=612x612&w=0&k=20&c=-RXiEdROvJMurKjA09aBGn4FJ2_qo_gIRMHdnV92oS4=" />
          </div>
          <h2 className =" text-xl font-medium title-font text-gray-900 mt-5">Used Phone</h2>
          <p className ="text-base leading-relaxed mt-2">Premium Quality</p>
          <div className ="text-green-500 inline-flex items-center mt-3">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className ="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>