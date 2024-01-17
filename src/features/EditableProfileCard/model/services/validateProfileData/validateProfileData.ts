import { Profile } from '@/entities/Profile';
import { VALIDATE_PROFILE_ERROR } from '../../types/EditableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [VALIDATE_PROFILE_ERROR.NONE_DATA];
  }

  const {
    firstname, lastname, age, country, username,
  } = profile;

  const errorList: VALIDATE_PROFILE_ERROR[] = [];

  if (!firstname?.trim() || !lastname?.trim() || !username?.trim()) {
    errorList.push(VALIDATE_PROFILE_ERROR.INCORECT_PROFILE_DATA);
  }
  if (!age) {
    errorList.push(VALIDATE_PROFILE_ERROR.INCORECT_AGE);
  }
  if (!country) {
    errorList.push(VALIDATE_PROFILE_ERROR.INCORECT_COUNTRY);
  }

  return errorList;
};
