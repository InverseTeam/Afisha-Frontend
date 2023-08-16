import { instanceLogged } from '@/shared/api/axios';

export const Get = async () => {
  try {
    const getEvent: any = await instanceLogged.get('/users/auth/token/login/');
    return getEvent.data;
  } catch (error) {
    return error;
  }
};
