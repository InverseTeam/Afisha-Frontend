import { HamburgerMenu } from '@/entities/buttons/hamburgerMenu';
import { InverseAfishaLogo } from '@/shared/inverseLogo';
import styles from './ui.module.scss';

export const NavBarMobile = ({ handleClickSide }: { handleClickSide: () => void }) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.blockLeft}>
          <InverseAfishaLogo />
        </div>
        <div className={styles.switchNavbar} onClick={() => handleClickSide()}>
          <div className={styles.blockRight}>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </>
  );
};
