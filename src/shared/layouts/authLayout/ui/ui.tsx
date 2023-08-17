'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getCookie } from '@/shared/getCookie';

interface AuthLayoutProps {
  children: React.ReactElement;
  isAuth: boolean;
  blockPageLink?: string; // the link for page which need block without Auth
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children, isAuth, blockPageLink }) => {
  const router = useRouter();
  const [pageRender, setPageRender] = useState<boolean>(false);

  useEffect(() => {
    const Token = getCookie('accessToken');
    if (isAuth && Token) {
      setPageRender(true);
      router.push(`${blockPageLink}`);
    } else {
      router.push('/');
      setPageRender(true);
    }
  }, [blockPageLink, isAuth, router, setPageRender]);

  return (
    <>
      <span>{pageRender && children}</span>
    </>
  );
};
