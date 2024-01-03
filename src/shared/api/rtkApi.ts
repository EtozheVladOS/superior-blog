import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCALSTORAGE_USER_KEY } from '@/shared/constants/localStorage';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const tokken = localStorage.getItem(LOCALSTORAGE_USER_KEY) || '';

      if (tokken) {
        headers.set('Authorization', tokken);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
