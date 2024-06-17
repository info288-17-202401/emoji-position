import React, { useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import axios from 'axios';
import '@arcgis/core/assets/esri/themes/light/main.css';


const Hello = () => {
  const [positions, setPositions] = useState([]);
  const [view, setView] = useState(null);

  useEffect(() => {
    if (positions) {
      const fetchPositions = () => {
        console.log('se trajieron las posiciones')
        axios.get('http://127.0.0.1:5000/getpositions')
          .then(response => {
            setPositions(response.data);
            console.log('Positions fetched:', response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.error('Error fetching positions:', error);
          });
      };

      fetchPositions(); // Fetch positions initially

      const intervalId = setInterval(fetchPositions, 10000); // Fetch positions every 10 seconds

      return () => clearInterval(intervalId);
    }
  }, []);

  const mapRef = useRef(null);
  const emojis = [
    'https://img.icons8.com/?size=512&id=PEmFcgjhBgKF&format=png',
    'https://img.icons8.com/?size=512&id=BDv3d2v8kzSg&format=png',
    'https://img.icons8.com/?size=512&id=3GmNQSEMEZJI&format=png',
    'https://img.icons8.com/?size=512&id=bY5t0noHcfXn&format=png',
    'https://img.icons8.com/?size=512&id=0mtgUqNnGOy0&format=png'
  ];

  useEffect(() => {
    if (mapRef.current) {
      const webMap = new WebMap({
        basemap: 'streets-navigation-vector'
      });

      const view = new MapView({
        container: mapRef.current,
        map: webMap,
        center: [-73.23,-39.83],
        zoom: 10
      });
      
      console.log('se intento limpiar los puntos')
      // Limpiar los gráficos al cambiar las posiciones
      if (view.graphics.items.length !== 0) {
        view.graphics.removeAll();
      }

      positions.forEach(position => {
        const { latitude, longitude, emojiId } = position;

        const pictureMarkerSymbol = new PictureMarkerSymbol({
          url: emojis[emojiId], // emojis array is 0-indexed, emojiId starts from 1
          width: '34px',
          height: '34px'
        });

        const point = new Point({
          longitude: longitude,
          latitude: latitude
        });

        const graphic = new Graphic({
          geometry: point,
          symbol: pictureMarkerSymbol
        });

        view.graphics.add(graphic);
      });

      return () => {
        if (view) {
          view.container = null;
        }
      };
    }
  }, [positions]);

  return <div style={{ height: '89vh', width: '55vw' }} ref={mapRef}></div>;
};

export default Hello;
