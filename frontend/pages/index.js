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
        <Link className="group relative inline-block focus:outline-none focus:ring" href="/car">
        <span
        className="absolute inset-0 translate-x-0 translate-y-0 bg-orange-700 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        />
        <span
        className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
        >
          Find Cars
        </span>
        </Link>
      </div>
    </div>
  </div>
</section>

  );
};

export default Index;