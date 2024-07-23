// components/DropdownLocation.js
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

const DropdownLocation = ({ location, setLocation }) => {
  const locations = [
    'Gurgaon', 'Bangalore', 'Mumbai', 'New Delhi', 'Chennai',
    'Delhi NCR', 'Hyderabad', 'Ahmedabad', 'Chandigarh'
  ];
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-48 text-white">
      <div
        onClick={() => setOpen(!open)}
        className="bg-black/20 backdrop-blur-md p-2 flex items-center justify-between rounded-md border border-gray-200 cursor-pointer h-12 sm:text-sm"
      >
        {location
          ? location.length > 25
            ? location.substring(0, 25) + "..."
            : location
          : "Select Location"}
        <BiChevronDown size={20} className={`${open && "rotate-180"} transition-transform`} />
      </div>
      {open && (
        <ul className="absolute bg-black/20 backdrop-blur-md mt-1 border border-gray-200 rounded-md max-h-36 overflow-y-auto z-10 w-full">
          <div className="flex items-center px-2 sticky top-0 bg-black">
            <AiOutlineSearch size={18} className="text-white" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Search location"
              className="placeholder:text-white p-2 outline-none bg-transparent w-full"
            />
          </div>
          {locations
            .filter((loc) =>
              loc.toLowerCase().startsWith(inputValue.toLowerCase())
            )
            .map((loc) => (
              <li
                key={loc}
                className={`p-2 text-sm hover:bg-sky-600 hover:text-black cursor-pointer ${
                  loc === location ? 'bg-sky-600 text-white' : ''
                }`}
                onClick={() => {
                  setLocation(loc);
                  setOpen(false);
                  setInputValue("");
                }}
              >
                {loc}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownLocation;
