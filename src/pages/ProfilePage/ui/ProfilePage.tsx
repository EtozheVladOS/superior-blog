import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
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
  // const onChangeCountry = useCallback((country: string = '') => {
  // dispatch(profileActions.updateProfile({ country }));
  // }, [dispatch]);
  const onChangeCity = useCallback((city: string = '') => {
    dispatch(profileActions.updateProfile({ city }));
  }, [dispatch]);
  // const onChangeCurrency = useCallback((currncy: string = '') => {
  // dispatch(profileActions.updateProfile({ currncy }));
  // }, [dispatch]);

  return (
    <DynamicReducerLoader reducersList={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      <ProfileCard
        data={editableForm}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        // onChangeCountry={onChangeCountry}
        onChangeCountry={() => undefined}
        onChangeCity={onChangeCity}
        // onChangeCurrency={onChangeCurrency}
        onChangeCurrency={() => undefined}
      />
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
