'use client';
import { useState } from 'react';
import { UploadImage } from './../../../features/uploadImage/ui';
import { AddManyFileButton } from '@/entities/buttons/addManyFileButton';

export const UploadManyImages = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onImageChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
  };

  const handlerDel = (id: number) => {
    // console.log(id);
    setFiles([...files.filter((file, index) => id !== index)]);
  };

  return (
    <div className="w-77">
      <div className="mb-2">
        <AddManyFileButton
          title="Фотографии мероприятия"
          text="Прикрепите 3-5 файлов формата jpg,
        минимальный размер 1280*812"
          onChange={onImageChange}
        />
      </div>
      <div className="flex flex-wrap">
        {files.map((image, index) => (
          <UploadImage
            key={index}
            src={URL.createObjectURL(image)}
            width={235}
            height={148}
            name={image.name}
            id={index}
            handlerDel={handlerDel}
          />
        ))}
      </div>
    </div>
  );
};
