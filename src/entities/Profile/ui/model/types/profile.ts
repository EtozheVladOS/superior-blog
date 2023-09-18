import { COUNTRY, CURRENCY } from '@/shared/constants/common';

export interface Profile {
  'username': string,
  'firstname': string,
  'lastname': string,
  'age': number,
  'country': COUNTRY,
  'city': string,
  'currency': CURRENCY,
  'avatar': string,
}

export interface ProfileSchema {
  data?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
}
