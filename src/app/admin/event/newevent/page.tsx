'use client';

import { NewEventForm } from '@/widgets/newEventForm';
// import { NavBar } from '@/widgets/navBar/ui/ui';
import { useState, useRef, useEffect } from 'react';
// import { Gapped } from '@/shared/gapped';

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
      {/* <Gapped vertical gap="32px">
        <header style={{ zIndex: '9999' }}>
                    <NavBar mobile={mobile} active_event={true} />
                </header>
        <main>
        </main>
      </Gapped> */}
      <NewEventForm />
    </>
  );
}
