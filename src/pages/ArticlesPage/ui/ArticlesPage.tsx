import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleList, ArticleView, ArticleViewSelector } from '@/entities/Article';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import cl from './ArticlesPage.module.scss';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
  fetchNextArticlesPage,
} from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  getArticlesPageView,
  getIsArticlesPageLoading,
  getArticlesPageError,
} from '../model/selectors/articlesPageSelectors';

const reducersList: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getIsArticlesPageLoading);
  const error = useSelector(getArticlesPageError);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  });

  const onViewClick = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextArticlePage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <PageWrapper onScrollEnd={onLoadNextArticlePage}>
      <DynamicReducerLoader reducersList={reducersList}>
        <Text title={t('articles.page')} className={cl.title} />
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </DynamicReducerLoader>
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
