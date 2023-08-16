'use client';

import { NavBar } from '@/widgets/navBar';
import { useRef, useState, useEffect } from 'react';
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [mobile, setMobile] = useState(false);
  const width = useRef<number>(0);

  useEffect(() => {
    width.current = window && window.innerWidth;
    if (width.current < 900) {
      setMobile(true);
    }
  }, []);
  return (
    <section>
      <nav>
        <NavBar mobile={mobile} />
      </nav>
      {children}
    </section>
  );
}
