import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TEXT_THEMES, Text } from '@/shared/ui/Text/Text';
import { ProfileCard } from '@/entities/Profile';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';

import {
  getProfileEditableForm,
} from '../../model/selectors/getProfileEditableForm/getProfileEditableForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
  getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import {
  TRANSLATION_VALIDATE_PROFILE_ERROR,
  VALIDATE_PROFILE_ERROR,
} from '../../model/types/EditableProfileCardSchema';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  id: string | undefined;
}

const numRegExp = /^\d+$/;

export const EditableProfileCard = memo(({ id }: EditableProfileCardProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const editableForm = useSelector(getProfileEditableForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  useInitialEffect(() => {
    if (id !== undefined) {
      dispatch(fetchProfileData(id));
    }
  });

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
    <DynamicReducerLoader reducersList={reducers}>
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
});
