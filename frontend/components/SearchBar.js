// frontend/components/SearchBar.js

import React from 'react';

const SearchBar = ({ model, setModel, location, setLocation, year, setYear, fuel_type, setFuelType, transmission, setTransmission, handleSearch }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Car Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />

        <label
          htmlFor="UserEmail"
          className="relative block bg-black/20 backdrop-blur-md overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
        <input
          type="text"
          placeholder="Fuel Type"
          value={fuel_type}
          onChange={(e) => setFuelType(e.target.value)}
          className="peer h-10 w-48 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span
          className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Fuel Type
          </span>
        </label>
        
        <label
          htmlFor="UserEmail"
          className="relative block bg-black/20 backdrop-blur-md overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            placeholder="Transmission"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className="peer h-10 w-48 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <span
          className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Transmission
          </span>
        </label>
      </div>
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;