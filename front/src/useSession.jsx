import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useSession = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const savedSession = localStorage.getItem('session');
    if (savedSession) {
      setSession(JSON.parse(savedSession));
    }
  }, []);

  const login = () => {
    savedSession = JSON.parse(localStorage.getItem('session'));
    if (savedSession) {
      setSession(savedSession);
      return;
    }

    const newSession = { sessionId: uuidv4() };
    setSession(newSession);
    localStorage.setItem('session', JSON.stringify(newSession));

    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😡']

    // make a post to the server
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: newSession.sessionId,
        emojiId: emojis[Math.floor(Math.random() * emojis.length)],
      }),
    })
    .then(response => response.json())
    .then(data => console.log('Server response:', data))
    .catch(error => console.error('Server error:', error))

  };

  const logout = () => {
    setSession(null);
    localStorage.removeItem('session');
  };

  return [session, login, logout];
};

export default useSession;