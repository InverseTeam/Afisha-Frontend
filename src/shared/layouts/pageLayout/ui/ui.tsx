import styles from './ui.module.scss';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className={styles.layout__landing}>{children}</main>
    </>
  );
};
