import React, { useEffect, useState } from 'react';
import CarList from '../components/CarList';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/cars') // Cambia esta URL según tu backend
      .then(response => response.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div>
      <h1>Alquiler y Compra de Autos</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default Home;
