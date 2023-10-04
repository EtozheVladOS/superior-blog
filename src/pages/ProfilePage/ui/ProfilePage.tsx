import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TEXT_THEMES } from '@/shared/ui/Text/Text';
import { CURRENCY } from '@/entities/Currency';
import { COUNTRY } from '@/entities/Country';
import {
  ProfileCard,
  TRANSLATION_VALIDATE_PROFILE_ERROR,
  VALIDATE_PROFILE_ERROR,
  fetchProfileData,
  getProfileEditableForm,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from '@/entities/Profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const numRegExp = /^\d+$/;

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const editableForm = useSelector(getProfileEditableForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  useEffect(() => {
    if (__PROJECT_ENIRONMENT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeUsername = useCallback((username: string = '') => {
    dispatch(profileActions.updateProfile({ username }));
  }, [dispatch]);
  const onChangeFirstname = useCallback((firstname: string = '') => {
    dispatch(profileActions.updateProfile({ firstname }));
  }, [dispatch]);
  const onChangeLastname = useCallback((lastname: string = '') => {
    dispatch(profileActions.updateProfile({ lastname }));
  }, [dispatch]);
  const onChangeAge = useCallback((age: string = '') => {
    const ageIsEmpty = age === '';

    if (numRegExp.test(age) || ageIsEmpty) {
      const newAgeValue = Number(age);
      dispatch(profileActions.updateProfile({ age: newAgeValue }));
    }
  }, [dispatch]);
  const onChangeCountry = useCallback((country: COUNTRY) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);
  const onChangeCity = useCallback((city: string = '') => {
    dispatch(profileActions.updateProfile({ city }));
  }, [dispatch]);
  const onChangeCurrency = useCallback((currency: CURRENCY) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);
  const onChangeAvatar = useCallback((avatar: string = '') => {
    dispatch(profileActions.updateProfile({ avatar }));
  }, [dispatch]);

  const errorList = useMemo(() => validateErrors?.map((err) => {
    const errorText = TRANSLATION_VALIDATE_PROFILE_ERROR[VALIDATE_PROFILE_ERROR[err]];
    return (
      <Text
        theme={TEXT_THEMES.ERROR}
        text={t(errorText)}
        key={err}
      />
    );
  }), [validateErrors]);

  return (
    <DynamicReducerLoader reducersList={reducers} removeAfterUnmount>
      <ProfilePageHeader />

      {errorList}

      <ProfileCard
        data={editableForm}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeUsername={onChangeUsername}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCountry={onChangeCountry}
        onChangeCity={onChangeCity}
        onChangeCurrency={onChangeCurrency}
        onChangeAvatar={onChangeAvatar}
      />
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
