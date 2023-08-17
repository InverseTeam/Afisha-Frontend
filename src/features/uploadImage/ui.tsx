'use client';
import { FC } from 'react';
import styles from './ui.module.scss';
import React from 'react';
import Image from 'next/image';
import binIcon from '../../../public/icon/ic-bin.svg';
import { IconButton } from '@/entities/buttons/iconButton';

interface IImageProps {
  src: any;
  width: number;
  height: number;
  name: string;
  handlerDel: (id: number) => void;
  id?: number,
}

export const UploadImage: FC<IImageProps> = ({ src, width, height, name, handlerDel, id }) => {
  return (
    <div className={styles.imageBox}>
      {/* <button className={styles.buttonDelete}>
        <i
          className={styles.icon}
          style={{ backgroundImage: `url(${binIcon.src})` }}
          draggable="false"
        />
      </button> */}
      <div className={styles.buttonDelete}>
        <IconButton
          width="48px"
          height="48px"
          color="#F8F8FA"
          rounded={true}
          iconSrc={binIcon.src}
          onClick={() => handlerDel(0)}
        />
      </div>
      <Image
        style={{ width: `${width}px`, height: `${height}px` }}
        className={styles.image}
        src={src}
        width={width}
        height={height}
        alt="preview image"></Image>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
