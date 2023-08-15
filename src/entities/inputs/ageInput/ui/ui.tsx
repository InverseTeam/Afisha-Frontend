'use client';
import styles from './ui.module.scss';
import { FC, useState, FormEvent } from 'react';
import ArrowDown from '../../../../../public/dataInput/ic_arrowdown.svg';
import ArrowDownHover from '../../../../../public/dataInput/ic_arrowdownHover.svg';
import { Items } from '../lib';
import { AgeItems } from '../lib';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { InputButton } from '@/store/features/inputButton-slice';
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
}
interface InitialState {
    ageId: string;
    ageNumber: number;
}

export const AgeInput: FC<DataInputProps> = ({
    inputTypes = 'text',
    inputPlaceholder = '',
    inputId,
    inputName,
    inputValue,
    inputDropDown = 'false',
    inputWidth,
    inputStyle,
    inputMaxLength = 30,
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
    const [selectedItem, setSelectedItem] = useState<string | null>('');
    const [isItemSelected, setIsItemSelected] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
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

    const handleFocus = () => {
        setInputFocus(!inputFocus);
    };

    const handleBlur = () => {
        setInputFocus(!inputFocus);
    };

    const iconOnClick = () => {
        setIsDropDownClick(!isDropDownClick);
    };
    const handleItemClick = (id: string) => {
        Items.map((data: AgeItems) => {
            if (id === data.id) {
                const dataToSave: InitialState = {
                    ageId: data.id,
                    ageNumber: data.value,
                };
                dispatch(InputButton.actions.DataSave(dataToSave));
                setSelectedItem(data.id);
            }
        });

        setIsItemSelected(true);
        setText(id);
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
                    <input
                        name={inputName}
                        type={inputType}
                        className={styles.input}
                        placeholder={inputPlaceholder}
                        id={inputId}
                        value={selectedItem ? selectedItem : inputValue}
                        style={style.input}
                        onInput={(event: FormEvent<HTMLInputElement>) => handleInput(event)}
                        onFocus={() => handleFocus()}
                        onBlur={() => handleBlur()}
                        maxLength={inputMaxLength}
                    />
                    <div style={style.iconWrap} className={styles.iconWrap}>
                        <i
                            id={inputId}
                            onMouseLeave={() => setDropDownIconsHover(!dropDownIconsIsHover)}
                            onMouseEnter={() => setDropDownIconsHover(!dropDownIconsIsHover)}
                            onClick={iconOnClick}
                            className={styles.icon}
                            style={style.icon}
                            draggable="false"
                        />
                    </div>
                </div>
                {isDropDownClick && (
                    <ul id={inputId} className={styles.dropDownItems}>
                        {Items.map((data: AgeItems) => (
                            <li
                                style={style.item}
                                onClick={() => handleItemClick(data.id)}
                                key={data.id}
                                className={styles.dropDownItem}>
                                {data.id}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
