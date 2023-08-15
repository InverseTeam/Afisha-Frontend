'use client';

import styles from './ui.module.scss';
import { FC, useState, FormEvent, useEffect } from 'react';
import ArrowDown from '../../../../../public/dataInput/ic_arrowdown.svg';
import ArrowDownHover from '../../../../../public/dataInput/ic_arrowdownHover.svg';
import axios from 'axios';
import { parse } from 'cookie';

interface DataInputProps {
    inputTypes?: string;
    inputPlaceholder: string;
    inputId: string;
    inputName: string;
    setText: (inputText: string) => void;
    inputValue: string;
    inputDropDown?: boolean;
    inputWidth?: 'large' | 'fit-content';
    inputStyle?: object;
    inputMaxLength?: number;
    fetchUrl?: string;
}

interface inputDropDownItems {
    id: number;
    name: string;
}

export const DescriptionInput: FC<DataInputProps> = ({
    inputTypes = 'text',
    inputPlaceholder = '',
    inputId,
    inputName,
    inputValue,
    inputDropDown = 'false',
    inputWidth,
    inputStyle,
    inputMaxLength = 100,
    fetchUrl = '',
    setText,
}) => {
    const [inputType, setInputType] = useState<'text' | 'tel' | 'number' | 'date' | 'time'>(
        inputTypes === 'text'
            ? 'text'
            : inputTypes === 'tel'
            ? 'tel'
            : inputTypes === 'number'
            ? 'number'
            : inputTypes === 'date'
            ? 'date'
            : 'time',
    );
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [dropDownIconsIsHover, setDropDownIconsHover] = useState<boolean>(false);
    const [isDropDownClick, setIsDropDownClick] = useState<boolean>(false);
    const [inputDropDownItems, setInputDropDownItems] = useState<inputDropDownItems[]>([]);
    const [selectedItem, setSelectedItem] = useState<string | null>('');
    const [token, setToken] = useState<string>('');
    const [isItemSelected, setIsItemSelected] = useState<boolean>(false);
    const [isFetch, setIsFetch] = useState<boolean>(false);

    const style = {
        icon: {
            backgroundImage:
                inputDropDown && dropDownIconsIsHover
                    ? `url(${ArrowDownHover.src})`
                    : inputDropDown && !isDropDownClick
                    ? `url(${ArrowDown.src})`
                    : inputDropDown && isDropDownClick
                    ? `url(${ArrowDown.src})`
                    : '',
        },
        input: {
            width: '100%',
            backgroundColor: inputFocus ? '#F8F8FA' : '#F8F8FA',
            borderRadius: inputDropDown === 'false' ? '15px 15px 15px 15px' : 'none',
            borderLeft: inputFocus ? '1px solid #EBEBEB' : 'none',
            borderTop: inputFocus ? '1px solid #EBEBEB' : 'none',
            borderBottom: inputFocus ? '1px solid #EBEBEB' : 'none',
            borderRight: inputFocus && inputDropDown ? '1px solid #EBEBEB' : 'none',
            borderTopRightRadius: inputDropDown ? '0' : '15px',
            borderBottomRightRadius: inputDropDown ? '0' : '15px',
            transition: 'height 0.2s ease-in-out',   
            ...inputStyle,
        },
        wrap: {
            width:
                inputWidth === 'large'
                    ? '438px'
                    : inputWidth === 'fit-content'
                    ? 'fit-content'
                    : '100%',
        },
        iconWrap: {
            display: inputDropDown ? 'flex' : 'none',
            borderTop: inputFocus ? '1px solid #EBEBEB' : 'none',
            borderBottom: inputFocus ? '1px solid #EBEBEB' : 'none',
            borderRight: inputFocus ? '1px solid #EBEBEB' : 'none',
        },
        item: {
            width: '100%',
        },
    };

    useEffect(() => {
        const getCookie = (name: string) => {
            const cookies = parse(document.cookie);
            return cookies[name] || '';
        };
        const Token = getCookie('accentToken');
        setToken(Token);
    }, []);
    useEffect(() => {
        if (fetchUrl !== '') {
            setIsFetch(true);
        }
        if (isDropDownClick && isFetch) {
            axios
                .get<inputDropDownItems[]>(fetchUrl, {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                })
                .then((response) => {
                    setInputDropDownItems(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching cities:', error);
                });
        }
    }, [fetchUrl, isDropDownClick, isFetch, token]);

    const handleFocus = () => {
        setInputFocus(!inputFocus);
    };

    const handleBlur = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const inputText = input.value;

        setInputFocus(false);
        setText(inputText);
        setSelectedItem(null);
        setIsItemSelected(false);
    };
    const iconOnClick = () => {
        setIsDropDownClick(!isDropDownClick);
    };
    const handleItemClick = (name: string, id: string) => {
        setSelectedItem(name);
        setIsItemSelected(true);
        localStorage.setItem(`${inputName}`, id);
        setText(name);
        setSelectedItem(null);
        setIsItemSelected(false);
    };

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const inputText = input.value;
        const inputTextLength = inputText.length;
        if (
            //@ts-ignore
            event.nativeEvent.inputType === 'deleteContentBackward'
        ) {
            setText(inputText);
            setSelectedItem(null);
            setIsItemSelected(false);
        } else {
            setText(inputText);
           
            if (!isItemSelected && inputType !== 'tel' && inputTextLength <= inputMaxLength) {
                setText!(inputText);
            }
        }
    };
    return (
        <>
            <div style={{ width: '100%' }} className={styles.wrap}>
                <div style={style.wrap} className={styles.inputWrap}>
                    <textarea
                        name={inputName}
                        className={styles.input}
                        placeholder={inputPlaceholder}
                        id={inputId}
                        value={selectedItem ? selectedItem : inputValue}
                        style={style.input}
                        
                        onFocus={() => handleFocus()}
                        
                        maxLength={inputMaxLength}
                    />
                    
                </div>

                
            </div>
        </>
    );
};
