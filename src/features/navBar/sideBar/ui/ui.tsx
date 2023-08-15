import { NavBarElements } from '@/entities/navBarElements';
import styles from './ui.module.scss';

export const SideNavBar = ({ show }: { show: boolean }) => {
  const style = {
    wrap: {
      maxHeight: show ? '100vh' : '0',
      height: show ? '100vh' : '0',
      display: show ? 'flex' : 'none',
    },
  };
  return (
    <div className={styles.wrap} style={style.wrap}>
      <NavBarElements />
    </div>
  );
};
