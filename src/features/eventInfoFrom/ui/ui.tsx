'use client';

import { TextareaInput } from '@/entities/inputs/textareaInput';
import { SelectInput } from '@/entities/inputs/selectInput';
import { SmartSelectInput } from '@/entities/inputs/smartSelectInput';
import { TextInput } from '@/entities/inputs/textInput';
import { EventData, Platform, Tags } from '@/shared/interfaces/event';
import { useState, FC, FormEvent, useEffect } from 'react';
import { MainButton } from '@/entities/buttons/mainButton';
import { AuthInput } from '@/entities/inputs/authInput';
import { TagsInput } from '@/entities/inputs/tagsInput';
import { DataInput } from '@/entities/inputs/dataInput';
import { instanceLogged } from '@/shared/api/axios';

interface EventInfoFormProps {
  setIsActiveInfo: (state: boolean) => void;
}

export const EventInfoForm: FC<EventInfoFormProps> = ({ setIsActiveInfo }) => {
  // const changeHandler = (event: FormEvent<HTMLInputElement>) => {
  //   const input = event!.target as HTMLInputElement;

  //   setForm({ ...form, [input.name]: input.value });
  // };

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [pushCard, setPushCard] = useState<string>('Оплата по “Пушкинской”');
  const [platform, setPlatform] = useState<any>();
  const [category, setCategory] = useState<string>('Тип события');
  const [age, setAge] = useState<string>('Возрастное ограничение');
  const [condition, setCondition] = useState<string>('Условия входа');
  const [total, setTotal] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const [allCategoty, setAllCategoty] = useState<{ id: number; name: string; tags: Tags[] } | null>(null);

  const handleClick = () => {
    // const eventData: EventData = {name, description, date, time}
    // handlerSubmit()
    setIsActiveInfo(false)
    
  };

  const getCategory = async () => {
    try {
      const getCategory = await instanceLogged.get(`events/categories/`);
      console.log(getCategory.data);
      setAllCategoty(getCategory.data);
      return getCategory.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  useEffect(() => {
    // getCategory();
  }, []);

  console.log(allCategoty);

  return (
    <div className="flex px-14">
      <section className="w-33 flex flex-col gap-2 mr-32">
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
          value={pushCard}
          placeholder="Оплата по “Пушкинской”"
          listVariant={[
            { id: 1, name: 'Есть' },
            { id: 2, name: 'Нет' },
          ]}
          setValue={setPushCard}
        />

        {price ? (
          <MainButton
            width="large"
            height="large"
            bgColor="#7AAC5C"
            textColor="white"
            onClick={handleClick}>
            Далее
          </MainButton>
        ) : (
          <MainButton
            width="large"
            height="large"
            bgColor="#7AAC5C"
            textColor="white"
            onClick={handleClick}
              isActive = {false}
            >
            Далее
          </MainButton>
        )}
      </section>

      <section className="w-33 flex flex-col gap-2">
        <SmartSelectInput value={platform} placeholder="Площадка" setValue={setPlatform} />
        <SelectInput
          value={category}
          placeholder="Тип события"
          listVariant={[
            { id: 1, name: 'Кино' },
            { id: 2, name: 'Литературный вечер' },
            { id: 3, name: 'Иммерсивный театр' },
            { id: 4, name: 'Шоу' },
            { id: 5, name: 'Читка пьесы' },
            { id: 6, name: 'Моноспектакль' },
            { id: 7, name: 'Кукольный спектакль' },
            { id: 8, name: 'Пластический спектакль' },
          ]}
          setValue={setCategory}
        />
        <SelectInput
          value={age}
          placeholder="Возрастное ограничение"
          listVariant={[
            { id: 1, name: '21+' },
            { id: 2, name: '18+' },
            { id: 3, name: '16+' },
            { id: 4, name: '12+' },
            { id: 5, name: '6+' },
            { id: 6, name: '0+' },
          ]}
          setValue={setAge}
        />

        <TagsInput
          inputPlaceholder="Название"
          inputId="Название"
          inputName="name"
          inputValue={name}
          setText={setName}
        />
        <SelectInput
          value={condition}
          placeholder="Условия входа"
          listVariant={[
            { id: 5, name: 'По билетам' },
            { id: 6, name: 'Свободный' },
          ]}
          setValue={setCondition}
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
          inputName="price"
          inputValue={price}
          setText={setPrice}
        />
      </section>
    </div>
  );
};
