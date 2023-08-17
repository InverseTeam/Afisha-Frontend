'use client';

import { Gapped } from '@/shared/gapped/ui/ui';
import { AuthLayout } from '@/shared/layouts/authLayout';
import { Map } from '@/widgets/routes/map';
export default function Home() {
  return (
    <>
      <AuthLayout isAuth blockPageLink="/admin/routes">
        <Gapped style={{ width: '100%', display: 'flex' }} vertical gap="0px">
          <Map />
        </Gapped>
      </AuthLayout>
    </>
  );
}
