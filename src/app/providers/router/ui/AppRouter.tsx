import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { AppRouteProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithAuthWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        {...route}
        key={route.path}
        path={route.path}
        element={
          route.authOnly
            ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
            : element
        }
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithAuthWrapper)}
    </Routes>
  );
};

export default memo(AppRouter);
