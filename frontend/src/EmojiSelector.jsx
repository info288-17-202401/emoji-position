import React from 'react';
import './EmojiSelector.css';

const emojis = [
  'https://img.icons8.com/?size=512&id=PEmFcgjhBgKF&format=png',
  'https://img.icons8.com/?size=512&id=BDv3d2v8kzSg&format=png',
  'https://img.icons8.com/?size=512&id=3GmNQSEMEZJI&format=png',
  'https://img.icons8.com/?size=512&id=bY5t0noHcfXn&format=png',
  'https://img.icons8.com/?size=512&id=0mtgUqNnGOy0&format=png'
];

const EmojiSelector = ({ onSelect, onClose }) => {
  const handleEmojiClick = (emoji) => {
    onSelect(emoji);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Selecciona un emoji:</h2>
        <div className="emoji-container">
          {emojis.map((emoji, index) => (
            <img
              key={index}
              src={emoji}
              alt={`emoji-${index}`}
              className="emoji"
              onClick={() => handleEmojiClick(emoji)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmojiSelector;