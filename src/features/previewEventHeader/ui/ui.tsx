import { PageLayout } from '@/shared/layouts/pageLayout';
import styles from './ui.module.scss';
import { ArrowButton } from '@/entities/buttons/arrowButton';
import { useRouter } from 'next/navigation';
import InfoIcon from '../../../../public/icon/PreviewEventInfoIcon.svg';
import Image from 'next/image';

export const PreviewEventHeader = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.wrap}>
        <PageLayout>
          <div className={styles.btnWrap}>
            <ArrowButton onClick={() => router.push('/admin/event')} arrowPosition="left">
              Назад
            </ArrowButton>
          </div>
          <div className={styles.centerElement}>
            <Image src={InfoIcon} alt="Info" width={24} height={24} />
            <span className={styles.elementTitle}>Предпросмотр</span>
          </div>
        </PageLayout>
      </div>
    </>
  );
};
