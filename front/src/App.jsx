import React, { useState } from 'react';
import Modal from './Modal';
import Map from './Map';
import useSession from './useSession';

import './App.css';

const App = () => {
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [session, login, logout] = useSession();

  useEffect(() => {
    console.log("aa")
    login();
  }, []);


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

  console.log("QUE PAZAA")

  return (
    <div className="app">
      {showModal && <Modal onAccept={handleAccept} />}
      {location && <Map latitude={location.latitude} longitude={location.longitude} />}
      <div>q pasa</div>
    </div>
  );
};

export default App;
