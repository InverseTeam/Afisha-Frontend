'use client';

import infoIcon from '../../../../public/icon/ic-info-active.svg';
import { FC } from 'react';
import styles from './ui.module.scss';
import { ComeBack } from '@/entities/comeBack';

interface ProgressNavBar {
  title: string;
}

export const ProgressNavBar: FC<ProgressNavBar> = ({ title }) => {
  return (
    <div className="w-full flex h-16 mb-6">
      <ComeBack title={'Создание мероприятия'} />
      {/* <div className={styles.line} /> */}
      {/* <div>
        <div>
          <i
            onClick={() => {}}
            className={styles.icon}
            style={{ backgroundImage: `url(${infoIcon.src})` }}
            draggable="false"
          />
          <span className="mr-7 mont font-semibold text-gray leading-none">Общая Информация</span>
        </div>
      </div> */}
    </div>
  );
};
