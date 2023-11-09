import styles from './ui.module.scss';
import { Get, publishHandleClick, rejectHandleClick } from '../model/index';
import { useEffect, useState } from 'react';
import { EventData } from '@/shared/interfaces/event';
import TicketIcon from '../../../../../public/icon/ModeratorCardTicketIcon.svg';
import Image from 'next/image';
import { Gapped } from '@/shared/gapped/ui/ui';
import { MainButton } from '@/entities/buttons/mainButton';
import { parseISO } from 'date-fns';
import { IconButton } from '@/entities/buttons/iconButton';
import SettingIcon from '../../../../../public/icon/CardSettingsIcon.svg';
import Link from 'next/link';


export const ModeratorEventCard = () => {
  const [postData, setPostData] = useState<EventData[] | null>(null);

  useEffect(() => {
    const getEvent = async () => {
      const fetchEvent: EventData[] = await Get();
      
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
  const handleClick = () => {
    return;
  };

  console.log("post data", postData);
  return (
    <>
      <div className={styles.cardRenderWrap}>
        {postData &&
          postData.map((event: EventData) => {
            const eventDate = parseISO(event.date);
            const monthIndex = eventDate.getMonth();
            const formattedDate = `${eventDate.getDate()} ${months[monthIndex]}`;

            return (
              <Link key={event.id} href={`/admin/event/${event.id}`}>
                <div className={styles.card}>
                  <div className={styles.cover}>
                    <div
                      style={{
                        backgroundImage: `url(${event.cover})`,
                        display: 'block',
                      }}
                      className={styles.bg}>
                      <span className={styles.buttonDate}>
                        {formattedDate ? formattedDate : '18.08.2023'}
                      </span>
                      <span className={styles.settingIcon}>
                        <IconButton
                          iconSrc={SettingIcon.src}
                          onClick={handleClick}
                          height="48px"
                          width="48px"
                          color="#F8F8FA"
                        />
                      </span>
                    </div>
                  </div>
                  <main className={styles.info}>
                    <Gapped vertical gap="4px">
                      <h2 className={styles.cardTitle}>{event.name}</h2>
                      <div className={styles.ticket}>
                        <Image src={TicketIcon} width={18} height={18} alt="Иконка билета" />
                        {(() => {
                          if (event.total_tickets) {
                            return `${event.total_tickets} билетов`;
                          } else return `Билеты не поступили в продажу`;
                        })()}
                      </div>
                    </Gapped>
                    <h3
                      title={event.platform ? event.platform.name : 'Улица не найдена'}
                      className={styles.platform}>
                      {event.platform ? event.platform.name : 'Место не найдено'}
                    </h3>
                    <MainButton
                      onClick={() => publishHandleClick(event.id)}
                      height="large"
                      width="fit-content"
                      bgColor="#7AAC5C"
                      textColor="white">
                      Опубликовать
                    </MainButton>
                    <MainButton
                      onClick={() => rejectHandleClick(event.id)}
                      height="large"
                      width="fit-content"
                      bgColor="#fff"
                      textColor="black">
                      Отклонить
                    </MainButton>
                  </main>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
