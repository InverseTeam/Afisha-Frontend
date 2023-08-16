'use client';

import { TextareaInput } from '@/entities/inputs/textareaInput';
import { SelectInput } from '@/entities/inputs/selectInput';
import { SmartSelectInput } from '@/entities/inputs/smartSelectInput';
import { TextInput } from '@/entities/inputs/textInput';
import { EventData, Platform } from '@/shared/interfaces/event';
import { useState, FC, FormEvent } from 'react';
import { MainButton } from '@/entities/buttons/mainButton';
import { AuthInput } from '@/entities/inputs/authInput';
import { TagsInput } from '@/entities/inputs/tagsInput';

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
  const [platform, setPlatform] = useState<Platform>({});

  const handleClick = () => {};

  return (
    <div className="flex px-14">
      <section className="w-33 flex flex-col gap-2 mr-16">
        <TextInput
          inputPlaceholder="Название"
          inputId="Название"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
        <TextareaInput
          width="100%"
          height="183px"
          inputPlaceholder="Описание"
          inputId="Описание"
          inputName="description"
          inputValue={description}
          setText={setDescription}
        />
        <TextInput
          inputPlaceholder="Дата"
          inputId="Дата"
          inputName="date"
          inputValue={name}
          setText={setName}
        />
        <AuthInput
          text={name}
          setText={setName}
          placeholder="Дата"
          errorMessage="notError"
          setErrorMessage={() => undefined}
          inputName=""
          password={false}
          mail={false}
          number={false}
          passwordSignInMode={false}
          date={true}
        />
        <TextInput
          inputPlaceholder="Время"
          inputId="Название"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
        

        <SelectInput
          item={form.name}
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
      </section>

      <section className="w-33 flex flex-col gap-2">
        <SmartSelectInput value={platform} placeholder="Площадка" setValue={setPlatform} />
        <SelectInput
          item={form.name}
          placeholder="Оплата по “Пушкинской”"
          listVariant={['Есть', 'Нет']}
          setValue={() => setPushCard}
        />
        <SelectInput
          item={form.name}
          placeholder="Оплата по “Пушкинской”"
          listVariant={['Есть', 'Нет']}
          setValue={() => setPushCard}
        />
        <TagsInput
          inputPlaceholder="Название"
          inputId="Название"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
        <SelectInput
          item={form.name}
          placeholder="Оплата по “Пушкинской”"
          listVariant={['Есть', 'Нет']}
          setValue={() => setPushCard}
        />

        <TextInput
          inputPlaceholder="Название"
          inputId="Название"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
        <TextInput
          inputPlaceholder="Название"
          inputId="Название"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
      </section>
    </div>
  );
};
