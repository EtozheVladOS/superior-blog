import axios from 'axios';
import { LOCALSTORAGE_USER_KEY } from '@/shared/constants/localStorage';

export const $api = axios.create({
  baseURL: __API__,
  // headers: {
  //   authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY) || '',
  // },
});

// interceptors.request отрабатывает на каждый запрос
$api.interceptors.request.use((config) => {
  // Для того чтобы при первом заходе работало корреткно, в ином случае апишка
  // не переинициализирует хеддерсы с инфой по юзеру
  // (выше закомменчен старый вариант)
  if (config.headers !== undefined) {
    config.headers.Authorization = localStorage.getItem(LOCALSTORAGE_USER_KEY) || '';
  }

  return config;
});
