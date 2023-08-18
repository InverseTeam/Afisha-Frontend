'use client';

import { EventImageForm } from '@/features/eventImageFrom/ui/ui';
import { EventInfoForm } from '@/features/eventInfoFrom';
import { ProgressNavBar } from '@/features/progressNavBar';
import { EventData } from '@/shared/interfaces/event';
import { UploadImages } from '@/widgets/uploadImages/ui/ui';
import { UploadManyImages } from '@/widgets/uploadManyImages/ui/ui';
import { FC, useState } from 'react';

export const NewEventForm: FC = () => {
  const [isActiveInfo, setIsActiveInfo] = useState<Boolean>(true);

  // const [eventData, setEventData] = useState<EventData> ({})

  return (
    <div className="px-14">
      <ProgressNavBar title={'Создание мероприятия'} />
      {isActiveInfo ? <EventInfoForm setIsActiveInfo={() =>   setIsActiveInfo} /> : <EventImageForm />}
    </div>
  );
};
