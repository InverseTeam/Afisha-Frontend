'use client';

import { AddFileButton } from '@/entities/buttons/addFileButton';
import { CheckBoxLabel } from '@/features/checkBoxLabel';
import { useState } from 'react';
import image from '../../../../public/images/image.png';
import Image from 'next/image';
import { DeleteEventButton } from '@/entities/buttons/deleteEventButton/ui/ui';
import { AuthButton } from '@/entities/buttons/authButton/ui/ui';
import { MainButton } from '@/entities/buttons/mainButton';

//TODO: change architecture
//TODO: change tags
export const TargetAdd = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

  const handleSubmit = () => {};
  return (
    <div>
      <span className="text-xl text-black leading-5 font-extrabold ">Тартегированая реклама</span>
      <div className="w-96 mb-10">
        <AddFileButton
          setFile={setSelectedFile}
          title="Банер "
          text="Прикрепите файл формата jpg,
                    минимальный размер 375*812"
        />
      </div>
      <Image className="mb-10" src={image} width={235} height={190} alt="Ticket" />

      <div className="mb-8">
        <CheckBoxLabel title="Категории" child_1="Туристы" child_2="Родители" child_3="Подростки" />
      </div>
      <MainButton
        width="large"
        height="large"
        bgColor="#7AAC5C"
        textColor="white"
        onClick={() => {}}>
        Опубликовать
      </MainButton>
      <MainButton
        width="large"
        height="large"
        bgColor="#eb5757"
        textColor="white"
        onClick={() => {}}>
        Остановить
      </MainButton>
    </div>
  );
};
