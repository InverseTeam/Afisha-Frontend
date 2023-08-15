'use client';
import styles from './ui.module.scss';
import { CSSProperties, FC, MouseEventHandler, useState } from 'react';

interface Props {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    use?: 'active' | 'disabled';
    width: 'small' | 'medium' | 'large' | 'fit-content'; // 280px | 320px | 438px | 100%
    height: 'small' | 'medium' | 'large' | 'fit-content'; // 32 | 40 px | 48 px | 100%
    type?: 'default' | 'transparent'; // blue | transparentGreen (colors)
    btnStyle?: CSSProperties | undefined;
}

export const AuthButton: FC<Props> = ({
    children,
    onClick,
    use = 'active',
    width = 'fit-content',
    height = '48px',
    type = 'default',
    btnStyle,
}) => {
    const [hover, setHover] = useState<boolean>(false);
    const isDisable = (use: string): boolean => {
        return use === 'disabled';
    };
    const buttonClassNameVariant: string = `${styles.button} button-${use} 
    ${
        hover && use === 'active' && type === 'default'
            ? 'isHover'
            : hover && use === 'active' && type === 'transparent' && !isDisable(use)
            ? 'transparentIsHover'
            : null
    }`;

    const style: any = {
        buttonStyle: {
            width:
                width === 'small'
                    ? '280px'
                    : width === 'medium'
                    ? '320px'
                    : width === 'large'
                    ? '438px'
                    : width === 'fit-content'
                    ? '100%'
                    : null,
            height:
                height === 'small'
                    ? '32px'
                    : height === 'medium'
                    ? '40px'
                    : height === 'large'
                    ? '48px'
                    : width === 'fit-content'
                    ? '100%'
                    : null,
            background:
                type === 'default' && !isDisable(use) && hover
                    ? '#4F51CB'
                    : type === 'default' && !isDisable(use)
                    ? '#6466E9'
                    : type === 'transparent' && !isDisable(use) && hover
                    ? '#528D3D'
                    : type === 'transparent' && !isDisable(use)
                    ? 'transparent'
                    : type === 'default' && isDisable(use)
                    ? '#F6F6F6'
                    : type === 'transparent' && isDisable(use)
                    ? '#F6F6F6'
                    : null,

            color: isDisable(use)
                ? '#222'
                : type === 'default'
                ? '#FFF'
                : type === 'transparent' && !isDisable(use) && hover
                ? '#fff'
                : type === 'transparent'
                ? '#7AAC5C'
                : null,
            cursor: isDisable(use) ? 'not-allowed' : 'pointer',
            border:
                type === 'transparent' && !isDisable(use) && hover
                    ? '2px solid #528D3D'
                    : type === 'transparent'
                    ? '2px solid #B8D4AB'
                    : null,
            ...btnStyle,
        },
    };

    return (
        <>
            <button
                type="button"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                className={buttonClassNameVariant}
                onClick={onClick}
                style={style.buttonStyle}>
                {children}
            </button>
        </>
    );
};
