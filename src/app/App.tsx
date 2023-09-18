import { Suspense, useEffect } from 'react';
import { AppRouter } from '@/app/providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { userActions } from '@/entities/User';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
