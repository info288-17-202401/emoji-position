import React, { useState } from 'react';
import Modal from './Modal';
import Map from './Map';
import './App.css';

const App = () => {
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setShowModal(false);
        },
        error => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    } else {
      alert('La geolocalización no es compatible con este navegador.');
    }
  };

  return (
    <div className="app">
      {showModal && <Modal onAccept={handleAccept} />}
      {location && <Map latitude={location.latitude} longitude={location.longitude} />}
    </div>
  );
};

export default App;
