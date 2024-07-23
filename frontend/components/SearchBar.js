import React from 'react';
import DropdownLocation from './DropdownLocation';
import DropdownTransmission from './DropdownTransmission';
import DropdownFuel from './DropdownFuel';

const SearchBar = ({ model, setModel, location, setLocation, year, setYear, fuel_type, setFuelType, transmission, setTransmission, handleSearch }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex space-x-4 mb-4">
        <label
          htmlFor="Model"
          className="relative block bg-black/20 backdrop-blur-md overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 h-12"
        >
          <input
            type="text"
            placeholder="Car Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="peer w-48 h-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
          />
          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Select Model
          </span>
        </label>
        <DropdownLocation location={location} setLocation={setLocation} />
        <label
          htmlFor="Year"
          className="relative block bg-black/20 backdrop-blur-md overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 h-12"
        >
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="peer w-48 h-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
          />
          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Select Year
          </span>
        </label>
        <DropdownFuel fuel_type={fuel_type} setFuelType={setFuelType} />
        <DropdownTransmission transmission={transmission} setTransmission={setTransmission} />
      </div>
      <button onClick={handleSearch} className="group relative inline-flex items-center overflow-hidden rounded bg-orange-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-orange-500 mt-2">
        <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          </span>
        <span className="text-sm font-medium transition-all group-hover:me-4"> Search </span>
      </button>
    </div>
  );
};

export default SearchBar;
