import React from 'react';
import { TransaltionNames } from '@/shared/constants/translationNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';
import StackIcon from '@/shared/assets/icons/stack.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  translationName: TransaltionNames;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
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
];
