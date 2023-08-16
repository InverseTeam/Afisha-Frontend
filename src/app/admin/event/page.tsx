'use client';
import { useRef, useState, useEffect } from 'react';
import { Gapped } from '@/shared/gapped/ui/ui';
import { NavBar } from '@/widgets/navBar';
import { EventForm } from '@/widgets/cardsRender';

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const width = useRef<number>(0);

  useEffect(() => {
    width.current = window && window.innerWidth;
    if (width.current < 900) {
      setMobile(true);
    }
  }, []);
  return (
    <>
      <Gapped style={{ width: '100%', display: 'flex' }} vertical gap="32px">
        <NavBar mobile={mobile} />

        <EventForm />
      </Gapped>
    </>
  );
}
