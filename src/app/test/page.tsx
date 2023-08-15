'use client';
import { FC, useState, FormEvent } from 'react';

import { MainButton } from '@/entities/buttons/mainButton/ui/ui';
import { IconButton } from '@/entities/buttons/iconButton/ui/ui';
import iconPlus from '../../../public/icon/Plus.svg';
import { TextInput } from '@/entities/inputs/textInput';

export default function Test() {
const [text, setText] = useState<string> ('')
  return (
    <div>
      <MainButton
        width="large"
        height="large"
        color="#528D3D"
        textColor="white"
        onClick={() => {
          console.log('ghghg');
        }}>
        Pfhfh
      </MainButton>
      <IconButton height="46px" width="46px" iconSrc={iconPlus.src} color="#528D3D" onClick={() => {}} />
      <TextInput inputStyle={{ width: '100%' }}
                        inputName="Ответ"
                        inputPlaceholder="Ответ"
                        inputId="Ответ"
                        inputTypes="text"
                        inputValue={text}
                        setText={setText}/>
    </div>
  );
}
