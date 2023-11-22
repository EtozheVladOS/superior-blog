import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User/index';
import { TransaltionNames } from '@/shared/constants/translationNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';
import StackIcon from '@/shared/assets/icons/stack.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: HomeIcon,
        translationName: TransaltionNames.MAIN,
        text: 'main.page',
      },
      {
        path: RoutePath.about,
        Icon: StackIcon,
        translationName: TransaltionNames.ABOUT,
        text: 'about.page',
      },
    ];

    if (userData?.id !== undefined) {
      sidebarItemsList.push(
        {
          path: `${RoutePath.profile}${userData?.id}`,
          Icon: ProfileIcon,
          translationName: TransaltionNames.PROFILE,
          text: 'profile.page',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          translationName: TransaltionNames.ARTICLES,
          text: 'articles.page',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
