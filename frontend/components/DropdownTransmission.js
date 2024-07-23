// components/DropdownTransmission.js
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const DropdownTransmission = ({ transmission, setTransmission }) => {
  const transmissions = ['Manual', 'Automatic'];
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-48 text-white">
      <div
        onClick={() => setOpen(!open)}
        className="bg-black/20 backdrop-blur-md p-2 flex items-center justify-between rounded-md border border-gray-200 cursor-pointer h-12 sm:text-sm"
      >
        {transmission
          ? transmission.length > 25
            ? transmission.substring(0, 25) + "..."
            : transmission
          : "Select Transmission"}
        <BiChevronDown size={20} className={`${open && "rotate-180"} transition-transform`} />
      </div>
      {open && (
        <ul className="absolute bg-black/20 backdrop-blur-md mt-1 border border-gray-200 rounded-md max-h-60 overflow-y-auto z-10 w-full">
          {transmissions.map((trans) => (
            <li
              key={trans}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer ${
                trans === transmission ? 'bg-sky-600 text-black' : ''
              }`}
              onClick={() => {
                setTransmission(trans);
                setOpen(false);
              }}
            >
              {trans}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownTransmission;
