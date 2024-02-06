import { RouteProps } from 'react-router-dom';
import { UserRoles } from '@/entities/User/model/types/user';
import { NotFound } from '@/pages/NotFound';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};

export enum APP_ROUTES {
  MAIN = 'main',
  FORBIDDEN = 'forbidden',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.FORBIDDEN]: '/forbidden',
  [APP_ROUTES.ABOUT]: '/about',
  [APP_ROUTES.PROFILE]: '/profile/', // + :id
  [APP_ROUTES.ARTICLES]: '/articles',
  [APP_ROUTES.ARTICLE_DETAILS]: '/article-details/', // + :id
  [APP_ROUTES.ARTICLE_CREATE]: '/article-details/create',
  [APP_ROUTES.ARTICLE_EDIT]: '/article-details/:id/edit',
  [APP_ROUTES.ADMIN_PANEL]: '/admin-panel',

  // last
  [APP_ROUTES.NOT_FOUND]: '*',
};

export const routeConfig: Record<APP_ROUTES, AppRouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [APP_ROUTES.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },

  [APP_ROUTES.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [APP_ROUTES.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },

  [APP_ROUTES.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },

  [APP_ROUTES.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  [APP_ROUTES.ARTICLE_CREATE]: {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },

  [APP_ROUTES.ARTICLE_EDIT]: {
    path: RoutePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },

  [APP_ROUTES.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },

  // last
  [APP_ROUTES.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};
