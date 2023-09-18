import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { profileReducer } from '@/entities/Profile/ui';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <DynamicReducerLoader reducersList={reducers} removeAfterUnmount>
      <div>{t('profile.page')}</div>
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
