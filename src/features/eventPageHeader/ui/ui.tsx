'use client';

import { PageTitle } from '@/shared/pageTitle';
import styles from './ui.module.scss';
import { Gapped } from '@/shared/gapped/ui/ui';
import { useState } from 'react';
import { IconButton } from '@/entities/buttons/iconButton';
import BtnPlucIcon from '../../../../public/icon/BtnPlusIcon.svg';
import { useRouter } from 'next/navigation';

export const EventPageHeader = ({
  setActive,
  leftBtnTitle,
  rightBtnTitle,
  pageTitle,
}: {
  setActive: (arg: boolean) => void;
  leftBtnTitle: string;
  rightBtnTitle: string;
  pageTitle: string;
}) => {
  const [btnModeratorActive, setBtnModeratorActive] = useState<boolean>(false);
  const [btnPublishedActive, setBtnPublishedActive] = useState<boolean>(true);
  const router = useRouter();
  return (
    <>
      <Gapped vertical gap="16px">
        <PageTitle>{pageTitle}</PageTitle>
        <Gapped>
          <button
            className={`${styles.tabBtn} ${btnPublishedActive ? styles.active : ''}`}
            onClick={() => {
              setBtnPublishedActive(true);
              setBtnModeratorActive(false);
              setActive(true);
            }}>
            {leftBtnTitle}
          </button>
          <button
            className={`${styles.tabBtn} ${btnModeratorActive ? styles.active : ''}`}
            onClick={() => {
              setBtnModeratorActive(true);
              setBtnPublishedActive(false);
              setActive(false);
            }}>
            {rightBtnTitle}
          </button>
          <IconButton
            onClick={() => router.push('/admin/createnewevent')}
            width="48px"
            height="48px"
            color="#7AAC5C"
            iconSrc={BtnPlucIcon.src}
          />
        </Gapped>
      </Gapped>
    </>
  );
};
