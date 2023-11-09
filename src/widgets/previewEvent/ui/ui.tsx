import { MainButton } from '@/entities/buttons/mainButton';
import styles from './ui.module.scss';
import { PreviewEventHeader } from '@/features/previewEventHeader';
import { Gapped } from '@/shared/gapped/ui/ui';
import { PageLayout } from '@/shared/layouts/pageLayout';
import { PageTitle } from '@/shared/pageTitle';
import { useEffect, useState } from 'react';
import { EventData } from '@/shared/interfaces/event';
import { Get, rejectHandleClick, publishHandleClick } from '../model/';
import { parseISO } from 'date-fns';
import { TagButton } from '@/entities/buttons/tagButton';
import Image from 'next/image';
import PushkinBanner from '../../../../public/img/pushkinBanner.svg';

export const PreviewEvent = () => {
  const [postData, setPostData] = useState<EventData | null>(null);

  useEffect(() => {
    const getEvent = async () => {
      const url = window?.location.href;
      const fetchEvent: EventData = await Get(url.split('/')[5]);
      console.log(url.split('/')[5])
      setPostData(fetchEvent);
    };
    getEvent();
  }, []);
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const renderUrl: string = 'https://inverse-tracker.store/';

  if (!postData) {
    return null;
  }
  const eventDate = parseISO(postData.date);
  const monthIndex = eventDate.getMonth();
  const formattedDate = `${eventDate.getDate()} ${months[monthIndex]}`;
  return (
    <>
      {postData ? (
        <Gapped vertical gap="24px">
          <PreviewEventHeader />
          <PageLayout>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div key={postData.id} style={{ width: '50%' }} className={styles.mainWrap}>
                <header className={styles.eventHeader}>
                  <PageTitle>{postData.name}</PageTitle>
                  <h2 className={styles.platform}>
                    {postData.platform.name} · {formattedDate}, {postData.time.substring(0, 5)}
                  </h2>
                  <h3 className={styles.ticket}>{postData.total_tickets} билетов</h3>
                </header>
                <main className={styles.eventMain}>
                  <div className={styles.cover}>
                    <div
                      style={{
                        backgroundImage: `url(${renderUrl + postData.cover})`,
                        display: 'block',
                      }}
                      className={styles.bgImg}></div>
                  </div>
                  <div className={styles.description}>{postData.description}</div>
                </main>
                <footer style={{ marginBottom: '96px' }} className={styles.btnFooter}>
                  <MainButton
                    onClick={() => publishHandleClick(postData.id)}
                    width="large"
                    height="large"
                    bgColor="#7AAC5C"
                    textColor="white">
                    Опубликовать
                  </MainButton>
                  <MainButton
                    onClick={() => rejectHandleClick(postData.id)}
                    width="large"
                    height="large"
                    bgColor="#EB5757"
                    textColor="white">
                    Отклонить
                  </MainButton>
                </footer>
              </div>
              <div style={{ marginRight: '64px', marginTop: '48px' }} className={styles.secondWrap}>
                <div className={styles.renderBtn}>
                  {postData &&
                    postData.tags.map((tag) => <TagButton key={tag.id}>{tag.name}</TagButton>)}
                </div>
                <div className={styles.pushkinBanner}>
                  <h3 className={styles.pushkinActive}>Есть по “Пушкинской”</h3>
                  <Image
                    className={styles.imgPushkin}
                    src={PushkinBanner}
                    alt="banner"
                    width={197}
                    height={115}
                  />
                </div>
              </div>
            </div>
          </PageLayout>
        </Gapped>
      ) : (
        <span style={{ alignSelf: 'center', justifySelf: 'center' }}>Загрузка</span>
      )}
    </>
  );
};
