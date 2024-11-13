import React, { useState } from 'react';

const AdminCarForm = () => {
  const [car, setCar] = useState({ name: '', price: 0, type: 'rent' });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3003/api/admin/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    }).then(response => {
      if (response.ok) alert('Auto agregado con éxito');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre del Auto</label>
      <input type="text" onChange={(e) => setCar({ ...car, name: e.target.value })} />

      <label>Precio</label>
      <input type="number" onChange={(e) => setCar({ ...car, price: e.target.value })} />

      <label>Tipo</label>
      <select onChange={(e) => setCar({ ...car, type: e.target.value })}>
        <option value="rent">Alquilar</option>
        <option value="buy">Comprar</option>
      </select>

      <button type="submit">Agregar Auto</button>
    </form>
  );
};

export default AdminCarForm;
