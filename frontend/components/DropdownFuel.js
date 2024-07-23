import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const DropdownFuel = ({ fuel_type, setFuelType }) => {
  const options = ["CNG", "Petrol", "Diesel", "Electric"];
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-48 text-white">
      <div
        onClick={() => setOpen(!open)}
        className="bg-black/20 backdrop-blur-md p-3 flex items-center justify-between rounded-md border border-gray-200 cursor-pointer h-12 sm:text-sm"
      >
        {fuel_type
          ? fuel_type.length > 25
            ? fuel_type.substring(0, 25) + "..."
            : fuel_type
          : "Select Fuel Type"}
        <BiChevronDown size={20} className={`${open && "rotate-180"} transition-transform`} />
      </div>
      {open && (
        <ul className="absolute bg-black/20 backdrop-blur-md mt-1 border border-gray-200 rounded-md max-h-60 overflow-y-auto z-10 w-full">
          {options.map((option) => (
            <li
              key={option}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer ${
                option.toLowerCase() === fuel_type.toLowerCase() ? 'bg-sky-600 text-white' : ''
              }`}
              onClick={() => {
                setFuelType(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownFuel;
