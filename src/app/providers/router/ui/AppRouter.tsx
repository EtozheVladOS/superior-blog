import { Suspense, memo, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routes).map((route) => (
          <Route
            {...route}
            key={route.path}
            element={(
              <div className="page-wrapper">
                {route.element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
