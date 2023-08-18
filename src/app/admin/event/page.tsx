'use client';

import { Gapped } from '@/shared/gapped/ui/ui';
import { AuthLayout } from '@/shared/layouts/authLayout';

import { EventForm } from '@/widgets/cardsRender';

export default function Home() {
  return (
    <>
      <AuthLayout isAuth blockPageLink="/admin/event">
        <Gapped style={{ width: '100%', display: 'flex' }} vertical gap="32px">
          <EventForm />
          
        </Gapped>
      </AuthLayout>
    </>
  );
}
