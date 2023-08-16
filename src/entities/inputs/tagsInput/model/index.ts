import { instanceLogged } from '@/shared/api/axios';

export const getTags = async () => {
  try {
    const getTags = await instanceLogged.get(`events/tags/`);
    return getTags.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
