import styles from './ui.module.scss';
import { FC, CSSProperties } from 'react';

interface GappedProps {
  children?: React.ReactNode;
  className?: string | null;
  gap?: string | null; // Пример: '16px' | Начальное значение: '8px'
  style?: CSSProperties;
  vertical?: boolean | null;
  verticalAlign?: 'top' | 'middle' | 'baseline' | 'bottom' | null;
  wrap?: boolean | null;
  alignItems?: 'center' | 'start' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end';
}

export const Gapped: FC<GappedProps> = ({
  children,
  className,
  gap,
  style,
  vertical,
  verticalAlign,
  wrap,
  alignItems,
}) => {
  const gappedStyle: any = {
    gappedStyle: {
      gap: gap ? gap : '8px',
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      verticalAlign: verticalAlign ? verticalAlign : 'baseline',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      alignItems: alignItems ? alignItems : '',
      ...style,
    },
  };
  const classNameVariant = `gapped ${className}`;
  return (
    <>
      <div className={classNameVariant} style={gappedStyle.gappedStyle}>
        {children}
      </div>
    </>
  );
};
