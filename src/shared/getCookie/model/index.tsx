import { parse } from 'cookie';

// getCookie can work just in a client. Use useEffectHook for working with getCookie
export const getCookie = (name: string) => {
  const cookies = parse(document.cookie);
  return cookies[name] || null;
};
