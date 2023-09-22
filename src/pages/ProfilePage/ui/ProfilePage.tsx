import { useEffect } from 'react';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, profileReducer } from '@/entities/Profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducersList={reducers} removeAfterUnmount>
      <ProfilePage />
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
