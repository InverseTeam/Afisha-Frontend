'use client';
import { useState } from 'react';
import { UploadImage } from './../../../features/uploadImage/ui';
import { AddFileButton } from '@/entities/buttons/addFileButton';
import { TextInput } from '@/entities/inputs/textInput';
import { MainButton } from '@/entities/buttons/mainButton';

export const UploadImages = () => {
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState<string>('');

  const onImageChange = (selectedFiles: File | null) => {
    setFile(selectedFiles);
  };

  const handlerDel = (id: number) => {
    setFile(null);
  };

  return (
    <div className="w-77">
      <div className="mb-2">
        <AddFileButton
          title="Обложка мероприятия"
          text="Прикрепите файл формата jpg,
        минимальный размер 1280*812"
          onChange={onImageChange}
        />
      </div>
      {file && (
        <UploadImage
          src={URL.createObjectURL(file)}
          width={477}
          height={303}
          name={file.name}
          handlerDel={handlerDel}
        />
      )}

      <div className='flex flex-col gap-2 '>
        <TextInput
          inputPlaceholder="Ссылка на тизер"
          inputId="Ссылка на тизер"
          inputName="link"
          inputValue={link}
          setText={setLink}
        />
        <MainButton
          width="fit-content"
          height="large"
          bgColor="#7AAC5C"
          textColor="white"
          onClick={() => {}}>
          Опубликовать
        </MainButton>
        <MainButton
          width="fit-content"
          height="large"
          bgColor="#F8F8FA"
          textColor="black"
          onClick={() => {}}>
          Предпросмотр
        </MainButton>
      </div>
    </div>
  );
};
