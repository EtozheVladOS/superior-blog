import { Profile } from '@/entities/Profile';

export enum VALIDATE_PROFILE_ERROR {
  INCORECT_PROFILE_DATA = 'INCORECT_PROFILE_DATA',
  INCORECT_AGE = 'INCORECT_AGE',
  INCORECT_COUNTRY = 'INCORECT_COUNTRY',
  NONE_DATA = 'NONE_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export const TRANSLATION_VALIDATE_PROFILE_ERROR = {
  [VALIDATE_PROFILE_ERROR.INCORECT_PROFILE_DATA]: 'incorrectProfileData',
  [VALIDATE_PROFILE_ERROR.INCORECT_AGE]: 'incorrectAge',
  [VALIDATE_PROFILE_ERROR.INCORECT_COUNTRY]: 'incorrectCountry',
  [VALIDATE_PROFILE_ERROR.NONE_DATA]: 'noneProfileData',
  [VALIDATE_PROFILE_ERROR.SERVER_ERROR]: 'updateProfileServerError',
};

export interface ProfileSchema {
  data?: Profile,
  editableForm?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
  validateError?: VALIDATE_PROFILE_ERROR[],
}
