import styles from './ui.module.scss';

export const PageTitle = ({ children }: { children: string }) => {
  return (
    <>
      <h1 className={styles.titleStyle}>{children}</h1>
    </>
  );
};
