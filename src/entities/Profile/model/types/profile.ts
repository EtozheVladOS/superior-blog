import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';

export interface Profile {
  id?: string;
  username?: string,
  firstname?: string,
  lastname?: string,
  age?: number,
  country?: COUNTRY,
  city?: string,
  currency?: CURRENCY,
  avatar?: string,
}
