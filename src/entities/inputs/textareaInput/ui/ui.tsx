'use client';

import styles from './ui.module.scss';
import { FC, useState, ChangeEvent, FocusEvent } from 'react';

interface DataInputProps {
  inputTypes?: string;
  inputPlaceholder: string;
  inputId: string;
  inputName: string;
  setText: (inputText: string) => void;
  inputValue: string;
  width: string;
  height: string;
  inputStyle?: object;
  inputMaxLength?: number;
}

export const TextareaInput: FC<DataInputProps> = ({
  inputTypes = 'text',
  inputPlaceholder = '',
  inputId,
  inputName,
  inputValue,
  width,
  height,
  inputStyle,
  inputMaxLength = 100,
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
      width: width,
      height: height,
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

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    const input = event.target as HTMLTextAreaElement;
    const inputText = input.value;

    setInputFocus(false);
    setText(inputText);
  };

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target as HTMLTextAreaElement;
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
          <textarea
            name={inputName}
            className={styles.input}
            placeholder={inputPlaceholder}
            id={inputId}
            value={inputValue}
            style={style.input}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              handleInput(event);
            }}
            onFocus={() => handleFocus()}
            onBlur={(event: FocusEvent<HTMLTextAreaElement>) => handleBlur(event)}
            maxLength={inputMaxLength}
          />
        </div>
      </div>
    </>
  );
};
