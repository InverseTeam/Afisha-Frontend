import Link from 'next/link';
import React, { FC } from 'react';
import InverseAfisha from '../../../../public/inverseBrand/inverseAfishaText.svg';
import Image from 'next/image';

interface InverseAfishaProps {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  link?: string;
}

export const InverseAfishaLogo: FC<InverseAfishaProps> = ({
  width = '234',
  height = '26',
  link = '/',
}) => {
  return (
    <>
      <Link href={`/${link}`}>
        <Image src={InverseAfisha} alt="MainLogo" width={width} height={height} />
      </Link>
    </>
  );
};
