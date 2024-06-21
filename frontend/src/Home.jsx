import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import MyMapComponent from './MyMapComponent';
import './EmojiSelector.css';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [mapisready, setMapisready] = useState(false);
  const [sessionId] = useState(uuidv4());

  const emojis = [
    'https://img.icons8.com/?size=512&id=PEmFcgjhBgKF&format=png',
    'https://img.icons8.com/?size=512&id=BDv3d2v8kzSg&format=png',
    'https://img.icons8.com/?size=512&id=3GmNQSEMEZJI&format=png',
    'https://img.icons8.com/?size=512&id=bY5t0noHcfXn&format=png',
    'https://img.icons8.com/?size=512&id=0mtgUqNnGOy0&format=png'
  ];

  useEffect(() => {
    let intervalId;

    const updateLocationAndSend = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            if (selectedEmoji !== null) {
              const timestamp = new Date().toISOString();
              const data = {
                "userId": sessionId,
                "latitude":latitude ,
                "longitude":longitude,
                "emojiId" : selectedEmoji,
                "timestamp":timestamp,
                "testeando":"limites"
              };

              console.log(data);

              axios.post("https://hernangallardo.me/api/saveposition", data)
                .then(response => {
                  console.log('Position sent:', response.data);
                  setMapisready(true);
                })
                .catch(error => {
                  console.error('Error sending position:', error);
                });
            }
          },
          error => {
            console.error('Error obtaining location:', error);
          }
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    if (location && selectedEmoji !== null) {
      intervalId = setInterval(updateLocationAndSend, 10000);
    }

    return () => clearInterval(intervalId);
  }, [location, selectedEmoji]);

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
          console.error('Error obtaining location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleEmojiSelect = (index) => {
    setSelectedEmoji(index);
    console.log(index);
    setShowEmojiSelector(false);
    
  };

  return (
    <div className="app">
      {showModal && <Modal onAccept={handleAccept} />}
      {showEmojiSelector && (
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
        </div>
      )}
      { showModal==false && mapisready==false && showEmojiSelector==false && <p className='waiting-text'>Esperando respuesta del servidor 😅 </p> /*😳 */}
      {mapisready && <MyMapComponent></MyMapComponent>}
    </div>
  );
};

export default Home;
