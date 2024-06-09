import React, { useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import '@arcgis/core/assets/esri/themes/light/main.css';

import useSession from './useSession';

const ArcGISMap = () => {
  const [session, login, logout] = useSession();
  const [users, setUsers] = useState([]);
  const [currentPosition, seCurrentPosition] = useState({
    latitude: 0,
    longitude: 0
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        seCurrentPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    if (!session) login();
  }, []);

  useEffect(() => {
    if (session){
      const intervalId = setInterval(() => {
        let {latitude, longitude} = currentPosition;

        fetch('http://127.0.0.1:5000/position', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId: session.sessionId,
            location: {
              longitude,
              latitude
            }
          }),
        })
        .then(response => response.json())
        .then(data => console.log('Server response:', data))
        .catch(error => console.error('Error:', error));

        fetch('http://127.0.0.1:5000/position', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => response.json())
        .then(data => {
          setUsers(data.users)
          console.log(data.users)
        })
        .catch(error => console.error('Error:', error));
      }, 5000); 
  
      return () => clearInterval(intervalId);
    }
  }, [session])

  const mapRef = useRef(null);
  const emojis = [
    'https://img.icons8.com/?size=512&id=PEmFcgjhBgKF&format=png',
    'https://img.icons8.com/?size=512&id=BDv3d2v8kzSg&format=png',
    'https://img.icons8.com/?size=512&id=3GmNQSEMEZJI&format=png',
    'https://img.icons8.com/?size=512&id=bY5t0noHcfXn&format=png',
    'https://img.icons8.com/?size=512&id=0mtgUqNnGOy0&format=png'
  ];

  useEffect(() => {
    // Crear el mapa web
    const webMap = new WebMap({
      basemap: 'streets-navigation-vector'
    });


    // Crear la vista del mapa
    const view = new MapView({
      container: mapRef.current,
      map: webMap,
      center: [-118.80500, 34.02700], // Longitud, latitud
      zoom: 13
    });

    // Crear el símbolo de marcador de imagen
    const pictureMarkerSymbol = new PictureMarkerSymbol({
      url: emojis[1],
      width: '34px',
      height: '34px'
    });

    // Crear un punto
    const point = new Point({
      longitude: -118.80500,
      latitude: 34.02700
    });

    // Crear el gráfico utilizando el símbolo de marcador de imagen
    const graphic = new Graphic({
      geometry: point,
      symbol: pictureMarkerSymbol
    });

    // Agregar el gráfico a la vista
    view.graphics.add(graphic);

    // Limpiar la vista al desmontar el componente
    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, [currentPosition]);

  return <div style={{ height: '100vh', width: '100vw' }} ref={mapRef}></div>;
};

export default ArcGISMap;