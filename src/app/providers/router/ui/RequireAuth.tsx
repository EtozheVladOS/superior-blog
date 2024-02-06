import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from '@/entities/User/index';
import { UserRoles } from '@/entities/User/model/types/user';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: JSX.Element,
  roles?: UserRoles[],
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const isAuth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);
  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (roles === undefined) {
      return true;
    }
    return roles?.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children as JSX.Element;
};
