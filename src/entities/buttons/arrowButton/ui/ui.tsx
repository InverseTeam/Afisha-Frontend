'use client';

import { FC } from 'react';
import LeftArrow from '../../../../../public/icon/BtnLeftArrowIcon.svg';
import RightArrow from '../../../../../public/icon/BtnRightArrowIcon.svg';
import styles from './ui.module.scss';
import Image from 'next/image';

interface ArrowButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  arrowPosition: 'left' | 'right';
}

export const ArrowButton: FC<ArrowButtonProps> = ({
  onClick,
  children,
  arrowPosition = 'right',
}) => {
  return (
    <>
      <div className={styles.btnWrap}>
        {arrowPosition === 'left' ? (
          <Image src={LeftArrow} alt="Arrow" width={24} height={24} />
        ) : null}
        <button onClick={onClick} className={styles.btn} type="button">
          {children}
        </button>
        {arrowPosition === 'right' ? (
          <Image src={RightArrow} alt="Arrow" width={24} height={24} />
        ) : null}
      </div>
    </>
  );
};
