import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CarItem = ({ car }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleRent = () => {
    // Lógica para alquilar
    setShowModal(true);
  };

  const handleBuy = () => {
    // Lógica para comprar
    setShowModal(true);
  };

  return (
    <div className="car-item">
      <h3>{car.name}</h3>
      <p>Precio: ${car.price}</p>
      <Button variant="primary" onClick={handleRent}>Alquilar</Button>
      <Button variant="success" onClick={handleBuy}>Comprar</Button>

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Desea completar esta acción?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CarItem;
