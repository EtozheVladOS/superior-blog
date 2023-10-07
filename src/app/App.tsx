import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserStateInited, userActions } from '@/entities/User';

export const App = () => {
  const dispatch = useAppDispatch();
  const isUserStateInited = useSelector(getUserStateInited);

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isUserStateInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
