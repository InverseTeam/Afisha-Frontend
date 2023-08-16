'use client';

import { EventPageHeader } from '@/features/eventPageHeader';
import { Gapped } from '@/shared/gapped/ui/ui';
import { PageLayout } from '@/shared/layouts/pageLayout';
import { NavBar } from '@/widgets/navBar';
import { useRef, useState, useEffect } from 'react';

export default function Test() {
  const [mobile, setMobile] = useState(false);
  const width = useRef<number>(0);

  useEffect(() => {
    width.current = window && window.innerWidth;
    if (width.current < 900) {
      setMobile(true);
    }
  }, []);
  const [moderatorBtnActive, setModeratorBtnActive] = useState<boolean>(true);
  return (
    <>
      <Gapped vertical gap="32px">
        <NavBar mobile={mobile} />
        <main>
          <PageLayout>
            <EventPageHeader
              pageTitle="Мероприятия"
              leftBtnTitle="На модерации"
              rightBtnTitle="Опубликованные"
              setActive={setModeratorBtnActive}
            />
          </PageLayout>
        </main>
      </Gapped>
    </>
  );
}
