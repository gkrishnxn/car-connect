import React from 'react';
import Link from 'next/link';
const FlipCard_phone = ({ data }) => {
  const handleButtonClick = () => {
    // Redirect to the specified link when the button is clicked
    window.location.href = data.link;
  };
  return (
    <div className="mt-4 mr-4 w-[305px] h-[380px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full" hi>
        <h4 class="text-black text-xl font-bold">{data.title}<p>{data.price}</p></h4>
          <img src={data.image} className="w-full h-full object-cover" alt={data.title} />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blue-200 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <p className="my-2"><b>Price:</b> {data.price}</p>
            <p className="my-2"><b>Year:</b> {data.year}</p>
            <p className="my-2"><b>Condition:</b> {data.condition}</p>
            <p>{data.description}</p>
            <button 
              className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              onClick={handleButtonClick} // Call handleButtonClick function when button is clicked
            >
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard_phone;
