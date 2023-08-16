'use client';
import { PageLayout } from '@/shared/layouts/pageLayout';
import { EventPageHeader } from '@/features/eventPageHeader';
import { ModeratorEventCard } from '@/features/cards/moderatorState';
import { Gapped } from '@/shared/gapped/ui/ui';
import { useState } from 'react';
import { PublishedEventCard } from '@/features/cards/publishedState';
export const EventForm = () => {
  const [moderatorBtnActive, setModeratorBtnActive] = useState<boolean>(true);
  return (
    <>
      <main>
        <PageLayout>
          <Gapped vertical gap="16px">
            <EventPageHeader
              pageTitle="Мероприятия"
              leftBtnTitle="На модерации"
              rightBtnTitle="Опубликованные"
              setActive={setModeratorBtnActive}
            />
            {moderatorBtnActive ? <ModeratorEventCard /> : <PublishedEventCard />}
          </Gapped>
        </PageLayout>
      </main>
    </>
  );
};
