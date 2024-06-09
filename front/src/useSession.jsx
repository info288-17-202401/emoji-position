import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useSession = () => {
  const [session, setSession] = useState(null);

  const login = () => {
    let currentSession = localStorage.getItem('session');
    if (currentSession) {
      currentSession = JSON.parse(currentSession);
    } else {
      const newSession = { sessionId: uuidv4() };
      localStorage.setItem('session', JSON.stringify(newSession));
      currentSession = newSession;
    }
  
    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😡'];
    
    // make a post to the server
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: currentSession.sessionId,
        emojiId: emojis[Math.floor(Math.random() * emojis.length)],
      }),
    })
    .then(response => response.json())
    .then(data => {console.log('Server response:', data);
      setSession(currentSession);
     })
    .catch(error => console.error('Server error:', error));
  };

  const logout = () => {
    setSession(null);
    localStorage.removeItem('session');
  };

  return [session, login, logout];
};

export default useSession;