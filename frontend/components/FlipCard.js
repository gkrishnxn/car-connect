// frontend/components/FlipCard.js

import React from 'react';

const FlipCard = ({ data }) => {
  const handleButtonClick = () => {
    window.open(data.link, '_blank'); // Open link in a new tab
  };

  return (
    <div className="mt-5 mr-5 mb-8 w-[500px] h-[300px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <h4 className="text-black text-xl font-bold">{data.model}</h4>
          <p className="text-black text-lg font-semibold">{data.price_rs} Rs</p>
          <img src={data.img} className="w-full h-full" alt={data.model} />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-[500px] h-[350px] bg-blue-200 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-[300px] text-gray-800 px-2 pb-2">
            <h1 className="text-3xl font-semibold">{data.model}</h1>
            <p className="my-2"><b>Price:</b> {data.price_rs} Rs</p>
            <p className="my-2"><b>Year:</b> {data.year}</p>
            <p className="my-2"><b>Kilometers:</b> {data.kms_driven}</p>
            <p className="my-2"><b>Fuel Type:</b> {data.fuel_type}</p>
            <p className="my-2"><b>Transmission:</b> {data.transmission}</p>
            <p className="my-2"><b>Location:</b> {data.location}</p>
            <button
              className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
              onClick={handleButtonClick}
            >
              Go to page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
