'use client';

import { Gapped } from '@/shared/gapped/ui/ui';

import { EventForm } from '@/widgets/cardsRender';

export default function Home() {
  return (
    <>
      <Gapped style={{ width: '100%', display: 'flex' }} vertical gap="32px">
        <EventForm />
      </Gapped>
    </>
  );
}
