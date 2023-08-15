'use client';

import { NavBarMobile } from '@/features/navBar/mobile';
import { useState } from 'react';
import { NavBarDesktop } from '@/features/navBar/desktop';
import { SideNavBar } from '@/features/navBar/sideBar';

export const NavBar = ({ mobile }: { mobile: boolean }) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClickSide = () => {
    setShow(!show);
  };
  return (
    <>
      <header>
        {mobile ? (
          <>
            <NavBarMobile handleClickSide={handleClickSide} />
            <SideNavBar show={show} />
          </>
        ) : (
          <NavBarDesktop />
        )}
      </header>
    </>
  );
};
