import { instance } from '@/shared/api/axios';
import { setCookie } from '@/shared/api/setCookie';

export const postLogin = async (userData: { email: string; password: string }) => {
  try {
    const loginUser = await instance.post('users/auth/token/login/', userData);
    setCookie('accessToken', loginUser.data.auth_token, { expires: 30, path: '/' });
  } catch (e) {
    return e;
  }
};
