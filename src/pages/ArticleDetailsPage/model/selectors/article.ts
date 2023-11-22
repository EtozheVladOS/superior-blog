import { createSelector } from '@reduxjs/toolkit';
import { getArticlesDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from '@/entities/User/index';

export const getCanUserEditArticle = createSelector(
  getArticlesDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  },
);
