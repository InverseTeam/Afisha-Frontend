'use client';

import { SelectInput } from '@/entities/inputs/selectInput';
import { SmartSelectInput } from '@/entities/inputs/smartSelectInput';
import { TextInput } from '@/entities/inputs/textInput';
import { EventData } from '@/shared/interfaces/event';
import { useState, FC, FormEvent } from 'react';

export const EventForm: FC = () => {
  const [form, setForm] = useState<EventData>({
    id: '',
    name: '',
    cover: '',
    description: '',
    date: '',
    total_tickets: '',
    age_limit: '',
    time: '',
    price: 0,
    artist: '',
    pushkin_payment: false,
    platform: [],
    tags: [],
    category: [],
    images: [],
  });

  const changeHandler = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    setForm({ ...form, [input.name]: input.value });
  };

  console.log(form);

  return (
    <div>
      <section>
        <TextInput
          inputPlaceholder="Название"
          inputId="Название"
          inputName="name"
          inputValue={form.name}
          setText={() => {}}
          handler={() => changeHandler}
        />
        <TextInput
          inputPlaceholder="Название"
          inputId="Название"
          inputName="name"
          inputValue={form.name}
          setText={() => {}}
          handler={() => changeHandler}
        />

        {/* <SmartSelectInput value={text} placeholder="text" setValue={setText} />
        <SelectInput value={text} placeholder="text" setValue={() => setText}/> */}
      </section>
      <section></section>
    </div>
  );
};
