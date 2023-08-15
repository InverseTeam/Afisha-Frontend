'use client'

import { NavBar } from '@/widgets/navBar';
import { useRef, useState, useEffect } from 'react';

export default function Test() {
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
      <NavBar mobile={mobile} />
    </>
  );
}
