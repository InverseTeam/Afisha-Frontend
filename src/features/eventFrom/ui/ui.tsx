'use client';

import { TextInput } from '@/entities/inputs/textInput';
import { FC } from 'react';

export const EventForm: FC = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });
  return (
    <div>
      <section>
        <TextInput
          inputPlaceholder="Почта"
          inputId="Почта"
          inputName="Почта"
          inputValue={}
          setText={}
        />
      </section>
      <section></section>
    </div>
  );
};
