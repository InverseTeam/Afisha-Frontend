import { MainButton } from '@/entities/buttons/mainButton';
import styles from './ui.module.scss';
import { FC } from 'react';
import { BtnFalse, BtnTrue } from '../model';

interface DeletePopUpProps {
  title: string;
  description: string;
  btn_false_text: string;
  btn_true_text: string;
  modal: boolean;
  setModal: (arg: boolean) => void;
}

export const DeletePopUp: FC<DeletePopUpProps> = ({
  title,
  description,
  btn_false_text,
  btn_true_text,
  modal,
  setModal,
}) => {
  const PopUpBtnStyles = `${modal ? 'screen active' : 'screen'}`;
  console.assert(modal);
  return (
    <>
      <div className={PopUpBtnStyles} onClick={() => setModal(false)}>
        <div className={styles.card} onClick={(e) => e.stopPropagation()}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.text}>{description}</h3>
          </div>
          <div className={styles.btnBlock}>
            <MainButton
              onClick={() => BtnFalse}
              width="large"
              height="large"
              bgColor="#F8F8FA"
              textColor="black">
              {btn_false_text}
            </MainButton>
            <MainButton
              onClick={() => BtnTrue}
              width="large"
              height="large"
              bgColor="#7AAC5C"
              textColor="white">
              {btn_true_text}
            </MainButton>
          </div>
        </div>
      </div>
    </>
  );
};
