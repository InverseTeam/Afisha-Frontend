import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import { MapWrapper } from '../../mapWrapper';
export const Map = () => {
  useEffect(() => {
    let map: any;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [60.611183, 56.827345],
        zoom: 13,
        key: '5390b679-c914-47e0-88a8-5ca19b3c2764',
      });
    });
    return () => map && map.destroy();
  }, []);

  return (
    <div style={{ width: '100vm', height: '100vh' }}>
      <MapWrapper />
    </div>
  );
};
