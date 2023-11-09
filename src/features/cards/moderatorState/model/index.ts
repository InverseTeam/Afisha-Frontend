import { instanceLogged } from '@/shared/api/axios';

export const Get = async () => {
  try {
    const getEvent: any = await instanceLogged.get('events/not_published/');
    return getEvent.data;
  } catch (error) {
    return [];
  }
};

export const publishHandleClick = async (eventDataID: string) => {
  try {
    const published = await instanceLogged.patch(`/events/${eventDataID}/`, { published: true });
    if (typeof window !== undefined) {
      window.location.reload();
    }
    return published.data;
  } catch (error) {
    return error;
  }
};

export const rejectHandleClick = async (eventDataID: string) => {
  try {
    prompt('Подтверждение', 'Вы точно хотите это сделать?');
    const reject = await instanceLogged.delete(`/events/${eventDataID}/`);
    if (typeof window !== undefined) {
      window.location.reload();
    }
    return reject.data;
  } catch (error) {
    return error;
  }
};
