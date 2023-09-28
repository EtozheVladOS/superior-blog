import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CURRENCY } from '@/entities/Currency';
import { COUNTRY } from '@/entities/Country';
import {
  ProfileCard,
  fetchProfileData,
  getProfileEditableForm,
  getProfileError,
  getProfileIsLoadnig,
  getProfileReadonly,
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

  const editableForm = useSelector(getProfileEditableForm);
  const isLoading = useSelector(getProfileIsLoadnig);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
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
      const newAgeValue = ageIsEmpty ? 0 : Number(age);
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

  return (
    <DynamicReducerLoader reducersList={reducers} removeAfterUnmount>
      <ProfilePageHeader />
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
