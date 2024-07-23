// frontend/pages/CarPage.js

import { useState } from 'react';
import { fetchCars } from '../utils/api';
import FlipCard from '../components/FlipCard';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';

const CarPage = () => {
  const [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('');
  const [fuel_type, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [cars, setCars] = useState([]);

  const handleSearch = async () => {
    try {
      const carDetails = await fetchCars({ model, location, year, fuel_type, transmission });
      console.log('Fetched car details:', carDetails);
      setCars(carDetails);
    } catch (error) {
      console.error('Error fetching car details:', error);
      setCars([]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative bg-[url(https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat pb-24">
        <Hero />
        <SearchBar
          model={model}
          setModel={setModel}
          location={location}
          setLocation={setLocation}
          year={year}
          setYear={setYear}
          fuel_type={fuel_type}
          setFuelType={setFuelType}
          transmission={transmission}
          setTransmission={setTransmission}
          handleSearch={handleSearch}
        />
      </div>
      <main className="flex flex-wrap justify-center items-center gap-4 p-4">
        {cars.length === 0 ? (
          <img src='https://cdn.dribbble.com/users/665029/screenshots/16162764/media/3ea69cb1655fba401acc6c4328d38633.gif' className='w-1/2 h-1/4'/>
        ) : (
          cars.map((car, index) => (
            <FlipCard key={index} data={car} />
          ))
        )}
      </main>
    </div>
  );
};

export default CarPage;
