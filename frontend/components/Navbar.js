import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
    <header className="bg-black/20 backdrop-blur-md z-10 absolute w-full">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="px-0" href="/">
              <span className="sr-only">Home</span>
              <img src="https://i.postimg.cc/YSRdXjf6/image.png" className="h-12 w-50"/>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="font-bold text-orange-700 transition hover:text-black" href="/about">About</Link>
                </li>

                <li>
                  <Link className="font-bold text-orange-700 transition hover:text-black" href="/about"> Careers </Link>
                </li>

                <li>
                  <Link className="font-bold text-orange-700 transition hover:text-black" href="/about"> History </Link>
                </li>

                <li>
                  <Link className="font-bold text-orange-700 transition hover:text-black" href="/about"> Services </Link>
                </li>

                <li>
                  <Link className="font-bold text-orange-700 transition hover:text-black" href="/about"> Projects </Link>
                </li>

                <li>
                  <Link className="font-bold text-orange-700 transition hover:text-black" href="/about"> Blog </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Navbar;
