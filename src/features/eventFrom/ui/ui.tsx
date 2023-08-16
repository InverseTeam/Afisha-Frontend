'use client';

import { TextareaInput } from '@/entities/inputs/textareaInput';
import { SelectInput } from '@/entities/inputs/selectInput';
import { SmartSelectInput } from '@/entities/inputs/smartSelectInput';
import { TextInput } from '@/entities/inputs/textInput';
import { EventData } from '@/shared/interfaces/event';
import { useState, FC, FormEvent } from 'react';
import { MainButton } from '@/entities/buttons/mainButton';

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

  // const changeHandler = (event: FormEvent<HTMLInputElement>) => {
  //   const input = event!.target as HTMLInputElement;

  //   setForm({ ...form, [input.name]: input.value });
  // };

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [pushCard, setPushCard] = useState<string>('');

  console.log(pushCard);

  const handleClick = () => {
    
  }

  return (
    <div className="flex w-full h-full">
      <section className="w-1/2">
        <TextInput
          inputPlaceholder="Название"
          inputId="Название"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
        <TextareaInput
          width="437px"
          height="183px"
          inputPlaceholder="Описание"
          inputId="Описание"
          inputName="description"
          inputValue={description}
          setText={setDescription}
        />

        <SelectInput
          value={form.name}
          placeholder="Оплата по “Пушкинской”"
          listVariant={['Есть', 'Нет']}
          setValue={() => setPushCard}
        />

        <MainButton
          width="large"
          height="large"
          bgColor="#7AAC5C"
          textColor="white"
          onClick={handleClick}>
          Далее
        </MainButton>

        {/* <SmartSelectInput value={text} placeholder="text" setValue={setText} /> */}
      </section>
      <section></section>
    </div>
  );
};
