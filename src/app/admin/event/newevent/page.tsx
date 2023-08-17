'use client';

import { NewEventForm } from '@/widgets/newEventForm';
import { NavBar } from '@/widgets/navBar';
import { useState, useRef, useEffect } from 'react';
import { Gapped } from '@/shared/gapped';


export default function Home() {
  const [mobile, setMobile] = useState(false);
  const width = useRef(0);

  useEffect(() => {
    width.current = window && window.innerWidth;
    if (width.current < 900) {
      setMobile(true);
    }
  }, []);
  return (
    <>
      <Gapped style={{ width: '100%', height: '100%', display: 'flex' }} vertical gap="32px" >
        <NewEventForm />
      </Gapped>
    </>
  );
}
