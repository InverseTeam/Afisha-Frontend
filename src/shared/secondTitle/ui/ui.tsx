import styles from './ui.module.scss';
import { FC } from 'react';

interface Props {
    children: string;
}

export const SecondTitle: FC<Props> = ({ children }) => {
    return (
        <>
            <span className={styles.titleStyle}>{children}</span>
        </>
    );
};
