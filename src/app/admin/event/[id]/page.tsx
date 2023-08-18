'use client';

import { Gapped } from '@/shared/gapped/ui/ui';
import dynamic from 'next/dynamic';

const DynamicPreview = dynamic(() =>
  import('@/widgets/previewEvent').then((module) => module.PreviewEvent),
);

export default function EditEvent() {
  return (
    <>
      <Gapped vertical gap="32px">
        <main>
          <DynamicPreview />
        </main>
      </Gapped>
    </>
  );
}
