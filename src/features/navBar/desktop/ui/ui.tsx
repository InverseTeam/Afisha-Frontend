import styles from './ui.module.scss';
import { InverseAfishaLogo } from '@/shared/inverseLogo';
import { NavBarElements } from '@/entities/navBarElements';
import { PageLayout } from '@/shared/layouts/pageLayout';

export const NavBarDesktop = () => {
  return (
    <div className={styles.wrap}>
      <PageLayout>
        <div className={styles.logo}>
          <InverseAfishaLogo />
        </div>
        <div className={styles.elements}>
          <NavBarElements />
        </div>
      </PageLayout>
    </div>
  );
};
