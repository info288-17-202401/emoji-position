import React, { useState } from 'react';
import Modal from './Modal';
import Maaap from './ArcGISMap';
import EmojiSelector from './EmojiSelector';
import './App.css';

const Wes = () => {
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);


  const emojis = [
    'https://img.icons8.com/?size=512&id=PEmFcgjhBgKF&format=png',
    'https://img.icons8.com/?size=512&id=BDv3d2v8kzSg&format=png',
    'https://img.icons8.com/?size=512&id=3GmNQSEMEZJI&format=png',
    'https://img.icons8.com/?size=512&id=bY5t0noHcfXn&format=png',
    'https://img.icons8.com/?size=512&id=0mtgUqNnGOy0&format=png'
  ];

  const handleAccept = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setShowModal(false);
          setShowEmojiSelector(true);
        },
        error => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    } else {
      alert('La geolocalización no es compatible con este navegador.');
    }
  };

  const handleEmojiSelect = (index) => {
    //const emojiIndex = emojis.indexOf(emoji) + 1;
    console.log(index)
    setShowEmojiSelector(false);
    setSelectedEmoji(index);
    console.log(selectedEmoji);
  };

  return (
    <div className="app">
      {showModal && <Modal onAccept={handleAccept} />}
      {showEmojiSelector &&
      <div className="modal">
      <div className="modal-content">
        
        <h2>Selecciona un emoji:</h2>
        <div className="emoji-container">
          {emojis.map((emoji, index) => (
            <img
              key={index}
              src={emoji}
              alt={`emoji-${index}`}
              className="emoji"
              onClick={() => handleEmojiSelect(index)}
            />
          ))}
        </div>
      </div>
    </div>}

    {selectedEmoji && <Maaap></Maaap>
    }
    </div>
  );
};
export default Wes;