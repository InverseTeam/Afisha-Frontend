import axios, { AxiosInstance } from 'axios';
import { parse } from 'cookie';

let getCookie = null;
let Token = null;
if (typeof document !== 'undefined') {
    getCookie = (name: string) => {
        const cookies = parse(document.cookie);
        return cookies[name] || null;
    };
    Token = getCookie('accessToken');
}

const BASE_URL = 'https://inverse-tracker.store/api';

export const instanceLogged: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { Authorization: `Token ${Token}` },
});

export const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});