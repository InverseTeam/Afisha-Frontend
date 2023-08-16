import styles from './ui.module.scss';
import { Get } from '../model/index';
import { useEffect, useState } from 'react';
import { EventData } from '@/shared/interfaces';

export const EventCard = () => {
  const [postData, setPostData] = useState<EventData[] | null>(null);
  useEffect(() => {
    const getEvent = async () => {
      const fetchEvent: EventData[] = await Get();
      setPostData(fetchEvent);
    };
    getEvent();
  }, []);
  console.log(postData);
  return (
    <>
      <div className={styles.cardRenderWrap}></div>
    </>
  );
};
