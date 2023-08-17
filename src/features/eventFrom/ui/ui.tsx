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
import { DataInput } from '@/entities/inputs/dataInput';

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
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [pushCard, setPushCard] = useState<string>('');
  const [platform, setPlatform] = useState<Platform>({});
  const [category, setCategory] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const [total, setTotal] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  
  const handleClick = () => {};
  console.log(time)
  

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
        

        <DataInput
          inputStyle={{ width: '100%' }}
          inputDropDown={false}
          inputName="Дата"
          inputPlaceholder="Дата"
          inputId={'Дата'}
          fetchUrl="https://inverse-tracker.store/api/events/categories/"
          inputTypes={'date'}
          inputValue={date}
          setText={(value) => setDate(value)}
          inputMaxLength={20}
        />
        <DataInput
          inputStyle={{ width: '100%' }}
          inputDropDown={false}
          inputName="Время"
          inputPlaceholder="Время"
          inputId={'Время'}
          fetchUrl="https://inverse-tracker.store/api/events/categories/"
          inputTypes={'time'}
          inputValue={time}
          setText={(value) => setTime(value)}
          inputMaxLength={20}
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
          placeholder="Тип события"
          listVariant={['Есть', 'Нет']}
          setValue={() => setPushCard}
        />
        <SelectInput
          item={form.name}
          placeholder="Возрастное ограничение”"
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
          placeholder="Условия входа"
          listVariant={['Есть', 'Нет']}
          setValue={() => setPushCard}
        />

        <TextInput
          inputPlaceholder="Количество билетов"
          inputId="Количество билетов"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
        <TextInput
          inputPlaceholder="Цена билета"
          inputId="Цена билета"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
      </section>
    </div>
  );
};
