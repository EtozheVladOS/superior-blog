import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { NotFound } from '@/pages/NotFound';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum APP_ROUTES {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAIL = 'article_detail',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.ABOUT]: '/about',
  [APP_ROUTES.PROFILE]: '/profile',
  [APP_ROUTES.ARTICLES]: '/articles',
  [APP_ROUTES.ARTICLE_DETAIL]: '/article-detail/', // + :id

  // last
  [APP_ROUTES.NOT_FOUND]: '*',
};

export const routeConfig: Record<APP_ROUTES, AppRouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [APP_ROUTES.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [APP_ROUTES.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },

  [APP_ROUTES.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },

  [APP_ROUTES.ARTICLE_DETAIL]: {
    path: `${RoutePath.article_detail}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  // last
  [APP_ROUTES.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};
