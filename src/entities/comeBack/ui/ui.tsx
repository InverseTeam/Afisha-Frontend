'use client';

import { FC } from 'react';
import styles from './ui.module.scss';
import arrowLeftIcon from '../../../../public/icon/ic-arrowleft.svg';


interface ComeBackProps {
  title: string;
}

export const ComeBack: FC<ComeBackProps> = ({ title }) => {
  return (
    <div className="flex items-center">
      <i
        onClick={() => {}}
        className={styles.icon}
        style={{ backgroundImage: `url(${arrowLeftIcon.src})` }}
        draggable="false"
      />
      <span className="mr-7 mont font-semibold text-gray leading-none">{title}</span>
    </div>
  );
};
