'use client';

import { useState } from 'react';
import { MainButton } from '@/entities/buttons/mainButton/ui/ui';
import { IconButton } from '@/entities/buttons/iconButton/ui/ui';
import iconPlus from '../../../public/icon/Plus.svg';
import { TextInput } from '@/entities/inputs/textInput';
import { SmartSelectInput } from '@/entities/inputs/smartSelectInput';
import { SelectInput } from '@/entities/inputs/selectInput';
// import Example from '@/entities/inputs/comboboxInput/ui/ui';
import '../../entities/inputs/smartSelectInput/ui/ui.scss';

export default function Test() {
  const [text, setText] = useState<string>('');
  console.log('text', text);
  return (
    <>
      
      <TextInput
        inputStyle={{ width: '100%' }}
        inputName="Ответ"
        inputPlaceholder="Ответ"
        inputId="Ответ"
        inputTypes="text"
        inputValue={text}
        setText={setText}
      />

      
      <div className="w-96 h-96 p-10 flex justify-center items-center">
        {/* <SmartSelectInput value={text} placeholder="text" setValue={setText} /> */}
        {/* <Example/> */}

        <SelectInput value={text} placeholder="text" setValue={setText}/>
      </div>
    </>
  );
}
