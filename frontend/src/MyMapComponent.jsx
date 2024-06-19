import React, { useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import axios from 'axios';
import '@arcgis/core/assets/esri/themes/light/main.css';

const MyMapComponent = () => {
  const [positions, setPositions] = useState([]);
  const mapRef = useRef(null);
  const viewRef = useRef(null); // Using ref to persist the MapView instance

  const emojis = [
    'https://img.icons8.com/?size=512&id=PEmFcgjhBgKF&format=png',
    'https://img.icons8.com/?size=512&id=BDv3d2v8kzSg&format=png',
    'https://img.icons8.com/?size=512&id=3GmNQSEMEZJI&format=png',
    'https://img.icons8.com/?size=512&id=bY5t0noHcfXn&format=png',
    'https://img.icons8.com/?size=512&id=0mtgUqNnGOy0&format=png'
  ];

  useEffect(() => {
    const fetchPositions = () => {
      console.log('Fetching positions');
      axios.get('http://localhost:5000/api/getpositions')
        .then(response => {
          setPositions(response.data);
          console.log('Positions fetched:', response.data);
        })
        .catch(error => {
          console.error('Error fetching positions:', error);
        });
    };

    fetchPositions(); // Fetch positions initially
    const intervalId = setInterval(fetchPositions, 10000); // Fetch positions every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (mapRef.current && !viewRef.current) {
      const webMap = new WebMap({
        basemap: 'streets-navigation-vector'
      });

      const view = new MapView({
        container: mapRef.current,
        map: webMap,
        center: [-73.23, -39.83],
        zoom: 10
      });

      viewRef.current = view; // Store the view instance in ref
    }
  }, []);

  useEffect(() => {
    if (viewRef.current && positions.length > 0) {
      const view = viewRef.current;
      
      view.graphics.removeAll(); // Clear existing graphics

      positions.forEach(position => {
        const { latitude, longitude, emojiId } = position;

        const pictureMarkerSymbol = new PictureMarkerSymbol({
          url: emojis[emojiId],
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
    }
  }, [positions]);

  return <div style={{ height: '89vh', width: '55vw' }} ref={mapRef}></div>;
};

export default MyMapComponent;
