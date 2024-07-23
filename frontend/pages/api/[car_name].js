// pages/api/[cars].js

import axios from 'axios';

export default async function handler(req, res) {
  const { model, location, year, fuelType, transmission } = req.query;

  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cars/api/cars/`, {
      params: {
        model,
        location,
        year,
        fuel_type: fuelType,
        transmission
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: 'Error fetching cars' });
  }
}
