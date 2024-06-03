import React, { useEffect, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import '@arcgis/core/assets/esri/themes/light/main.css';

const ArcGISMap = () => {
  const mapRef = useRef(null);

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
      url: 'https://static-00.iconduck.com/assets.00/cat-face-emoji-512x455-gda5rvrc.png',
      width: '24px',
      height: '24px'
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
  }, []);

  return <div style={{ height: '100vh', width: '100vw' }} ref={mapRef}></div>;
};

export default ArcGISMap;