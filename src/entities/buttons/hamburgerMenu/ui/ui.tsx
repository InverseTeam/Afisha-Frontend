'use client';

import { FC, useState } from 'react';
import styles from './ui.module.scss';

export const HamburgerMenu: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className={styles.burgerContainer}>
      <div className={opened ? styles.open : styles.wrap} onClick={() => setOpened(!opened)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
