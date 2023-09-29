import { Profile, VALIDATE_PROFILE_ERROR } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [VALIDATE_PROFILE_ERROR.NONE_DATA];
  }

  const {
    firstname, lastname, age, country,
  } = profile;

  const errorList: VALIDATE_PROFILE_ERROR[] = [];

  if (!firstname?.trim() || !lastname?.trim()) {
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
