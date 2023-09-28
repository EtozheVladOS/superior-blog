import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';

export interface Profile {
  username?: string,
  firstname?: string,
  lastname?: string,
  age?: number,
  country?: COUNTRY,
  city?: string,
  currency?: CURRENCY,
  avatar?: string,
}

export interface ProfileSchema {
  data?: Profile,
  editableForm?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
}
