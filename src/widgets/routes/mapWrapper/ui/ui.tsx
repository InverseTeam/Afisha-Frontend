import React from 'react';

// eslint-disable-next-line react/display-name
export const MapWrapper: React.FC = React.memo(() => {
  return (
    <div id="map-container" style={{ width: '100vw', height: '90%', position: 'relative' }}></div>
  );
});
