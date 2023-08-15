import { instanceLogged } from '@/shared/api/axios';

export const Post = ({ mail, password }: { mail: string; password: string }) => {
  instanceLogged.post('/users/auth/token/login/', { mail, password });
};
