
import { instanceLogged } from '@/shared/api/axios';

export const getPlatforms = async () => {
    try {
        const getPlatform = await instanceLogged.get(`events/platforms/`);
        return getPlatform.data;
    } catch (e) {
        alert('Ошибка при получении площадок')
        return e;
    }
};
