import { CheckBox } from '@/entities/buttons/checkBox/ui/ui';
import styles from './ui.module.scss';
import { FC } from 'react';

interface CheckBoxProps {
    title: string;
    child_1: string;
    child_2: string;
    child_3: string;
}

export const CheckBoxLabel: FC<CheckBoxProps> = ({ title, child_1, child_2, child_3 }) => {
    return (
        <>
            <div className={styles.wrap}>
                <h2 className={styles.h2}>{title}</h2>
                <div className={styles.checkBoxWrap}>
                    <CheckBox isText>{child_1}</CheckBox>
                    <CheckBox isText>{child_2}</CheckBox>
                    <CheckBox isText>{child_3}</CheckBox>
                </div>
            </div>
        </>
    );
};
