import styles from './ui.module.scss';

interface PageLayoutProps {
  children: React.ReactElement;
}

export const PageLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <main className={styles.layout__landing}>{children}</main>
    </>
  );
};
