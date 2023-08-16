'use client';

import styles from './ui.module.scss';
import { FC, useState, FormEvent } from 'react';

interface DataInputProps {
  inputTypes?: string;
  inputPlaceholder: string;
  inputId: string;
  inputName: string;
  setText: (inputText: string) => void;
  inputValue: string;
  inputWidth?: 'large' | 'fit-content';
  inputStyle?: object;
  inputMaxLength?: number;
  handler: (event: FormEvent<HTMLInputElement>) => void;
}

export const TextInput: FC<DataInputProps> = ({
  inputTypes = 'text',
  inputPlaceholder = '',
  inputId,
  inputName,
  inputValue,
  inputWidth,
  inputStyle,
  inputMaxLength = 100,
  setText,
  handler,
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

  const style = {
    input: {
      width: '100%',
      backgroundColor: inputFocus ? '#F8F8FA' : '#F8F8FA',
      borderLeft: inputFocus ? '1px solid #EBEBEB' : 'none',
      borderTop: inputFocus ? '1px solid #EBEBEB' : 'none',
      borderBottom: inputFocus ? '1px solid #EBEBEB' : 'none',
      ...inputStyle,
    },
    wrap: {
      width:
        inputWidth === 'large' ? '438px' : inputWidth === 'fit-content' ? 'fit-content' : '100%',
    },
    iconWrap: {
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

  const handleBlur = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const inputText = input.value;

    setInputFocus(false);
    setText(inputText);
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
    } else {
      setText(inputText);
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
            value={inputValue}
            style={style.input}
            onInput={(event: FormEvent<HTMLInputElement>) => {
              handleInput(event);
              handler(event)
            }}
            onFocus={() => handleFocus()}
            onBlur={(event: FormEvent<HTMLInputElement>) => handleBlur(event)}
            maxLength={inputMaxLength}
          />
        </div>
      </div>
    </>
  );
};
