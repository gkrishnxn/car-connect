// frontend/utils/api.js

export const fetchCars = async ({ model, location, year, fuel_type, transmission }) => {
  const response = await fetch(
    `http://localhost:8000/cars/api/cars?model=${model}&location=${location}&year=${year}&fuel_type=${fuel_type}&transmission=${transmission}`
  );
  if (!response.ok) {
    throw new Error('Error fetching cars');
  }
  const data = await response.json();
  return data;
};

