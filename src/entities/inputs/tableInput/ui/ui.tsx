'use client';

import styles from './ui.module.scss';
import { useState, KeyboardEvent, FC, useEffect, useRef } from 'react';

interface TableInputProps {
    inputTypes?: string;
    inputId: string;
    inputName: string;
    setText: (inputText: string) => void;
    inputValue: string;
    inputWidth?: 'large' | 'fit-content';
    inputStyle?: object;
    inputMaxLength?: number;
    inputPlaceholder: string;
    isMoney: boolean;
}

export const TableInput: FC<TableInputProps> = ({
    inputTypes = 'text',
    inputId,
    inputPlaceholder,
    inputName,
    inputValue,
    inputStyle,
    inputMaxLength = 25,
    isMoney = 'false',
    setText,
}) => {
    const [isEditing, setIsEditing] = useState<boolean>(true);
    const inputFetchValue = useRef<string>('');

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setIsEditing(false);
        }
    };
    const handleDivClick = (): void => {
        setIsEditing(true);
    };

    const handleBlur = (): void => {
        setIsEditing(false);
    };

    useEffect(() => {
        if (isEditing) {
            inputFetchValue.current = inputValue;
        }
    }, [inputValue, isEditing, inputFetchValue]);
    return (
        <>
            <div  className={styles.wrap}>
                {isEditing ? (
                    <input
                        type={isMoney ? 'number' : inputTypes}
                        id={inputId}
                        name={inputName}
                        value={inputValue}
                        maxLength={inputMaxLength}
                        placeholder={inputPlaceholder}
                        onChange={(event) => setText(event.target.value)}
                        onKeyDown={handleKeyDown}
                        className={styles.input}
                        onBlur={handleBlur}
                        autoFocus
                        style={inputStyle}
                    />
                ) : (
                    <div
                        
                        className={styles.staticInput}
                        onClick={handleDivClick}>
                        {inputFetchValue.current && isMoney
                            ? `${inputFetchValue.current} ₽`
                            : inputFetchValue.current && !isMoney
                            ? inputFetchValue.current
                            : 'Изменить'}
                    </div>
                )}
            </div>
        </>
    );
};
