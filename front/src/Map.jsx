import React from 'react';
import { Map as EsriMap, WebMap } from '@esri/react-arcgis';

const Map = ({ latitude, longitude }) => {
  return (
    <EsriMap style={{ width: '100vw', height: '100vh' }}>
      <WebMap id="your-webmap-id" />
    </EsriMap>
  );
};

export default Map;