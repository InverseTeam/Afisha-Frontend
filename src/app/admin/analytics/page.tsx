'use client';
import { Gapped } from '@/shared/gapped/ui/ui';
import { Map } from '@/widgets/routes/map';

export default function Home() {
  return (
    <>
      <Gapped style={{ width: '100%', display: 'flex' }} vertical gap="0px">
        <Map />
      </Gapped>
    </>
  );
}
