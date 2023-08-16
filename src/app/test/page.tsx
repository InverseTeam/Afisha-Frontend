'use client';

import { DeletePopUp } from '@/features/deletePopUp/ui/ui';

export default function Test() {
  return (
    <>
      <DeletePopUp
        title="Удаление события"
        description="Вы действительно хотите удалить “Концерт джаза”?
Это действие нельзя отменить"
        btn_false_text="Удалить"
        btn_true_text="Вернутся к модерации"
      />
    </>
  );
}
