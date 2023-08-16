'use client';

import { Gapped } from '@/shared/gapped/ui/ui';
import { NavBar } from '@/widgets/navBar';
import { useRef, useState, useEffect } from 'react';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobile, setMobile] = useState(false);
  const width = useRef<number>(0);

  useEffect(() => {
    width.current = window && window.innerWidth;
    if (width.current < 900) {
      setMobile(true);
    }
  }, []);
  return (
    <Gapped style={{height: '100vh'}} vertical gap="32px">
      <nav>
        <NavBar mobile={mobile} />
      </nav>

      {children}
    </Gapped>
  );
}
