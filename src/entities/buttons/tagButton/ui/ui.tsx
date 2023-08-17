'use client';

import styles from './ui.module.scss';

export const TagButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={styles.btn} type="button">
      {children}
    </button>
  );
};
