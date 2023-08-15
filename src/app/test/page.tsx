'use client';
import { FC, useState, FormEvent } from 'react';

import { MainButton } from '@/entities/buttons/mainButton/ui/ui';
import { IconButton } from '@/entities/buttons/iconButton/ui/ui';
import iconPlus from '../../../public/icon/Plus.svg';
import { TextInput } from '@/entities/inputs/textInput';
import { AuthButton } from '@/entities/buttons/authButton/ui/ui';
import { SelectInput } from '@/entities/inputs/selectInput';

export default function Test() {
  const [text, setText] = useState<string>('');
  return (
    <div>
      {/* <MainButton
        width="large"
        height="large"
        color="#528D3D"
        textColor="white"
        isActive
        onClick={() => {
          console.log('ghghg');
        }}>
        Push
      </MainButton>
      <IconButton
        height="46px"
        width="46px"
        iconSrc={iconPlus.src}
        color="#528D3D"
        onClick={() => { console.log('icon')}}
      />
      <TextInput
        inputStyle={{ width: '100%' }}
        inputName="Ответ"
        inputPlaceholder="Ответ"
        inputId="Ответ"
        inputTypes="text"
        inputValue={text}
        setText={setText}
      />

      <AuthButton
        onClick={()=>{}}
        width="fit-content"
        btnStyle={{ marginBottom: '8px' }}
        use={'disabled'}
        height="large">
        Опубликовать
      </AuthButton> */}
      <div className='w-96 h-96 flex justify-center items-center'>
        <SelectInput />
      </div>
    </div>
  );
}
