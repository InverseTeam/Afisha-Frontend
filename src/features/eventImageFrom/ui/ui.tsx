'use client';

import { UploadImages } from '@/widgets/uploadImages/ui/ui';
import { UploadManyImages } from '@/widgets/uploadManyImages/ui/ui';
import { useState, FC, FormEvent } from 'react';

export const EventImageForm: FC = () => {
  return (
    <div className='flex gap-30'>

      <UploadImages />
      <UploadManyImages />
      
    </div>
  );
};
