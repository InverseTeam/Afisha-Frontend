import { FC, PropsWithChildren, ReactElement, useState } from 'react';
import styles from './ui.module.scss';
import ActiveCheckBox from './../../../../../public/checkBox/Active.svg';
import HoverCheckBox from './../../../../../public/checkBox/hover.svg';
import DefaultCheckBox from './../../../../../public/checkBox/Default.svg';

interface props {
    children?: string | ReactElement;
    isText?: boolean;
    textSize?: string;
}

export const CheckBox: FC<PropsWithChildren<props>> = ({ children, isText = false, textSize }) => {
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState<boolean>(false);
    const style = {
        textStyle: {
            display: isText ? 'block' : 'none',
            fontSize: textSize ? textSize : '14px',
            color: active && !hover ? '#222' : !active && hover ? '#7aac5c' : active && hover ? '#222' : '#222' ,
        },
        checkBox: {
            backgroundImage: active
                ? `url(${ActiveCheckBox.src})`
                : hover
                ? `url(${HoverCheckBox.src})`
                : `url(${DefaultCheckBox.src})`,
        },
    };
    return (
        <div
            className={styles.wrap}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <span
                className={styles.checkBox}
                onClick={() => setActive(!active)}
                style={style.checkBox}
            />
            <span
                onClick={() => setActive(!active)}
                className={styles.checkBoxText}
                style={style.textStyle}>
                {children}
            </span>
        </div>
    );
};
