import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import { MapWrapper } from '../../mapWrapper';
export const Map = () => {
  useEffect(() => {
    let map: any;
    //dcdb5f82-9ab6-4116-ac75-367df24d5560
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [55.31878, 25.23584],
        zoom: 13,
        key: 'шв',
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
