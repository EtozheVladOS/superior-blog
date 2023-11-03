import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
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
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import {
  fetchNextArticlesPage,
} from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  getArticlesPageView,
  getIsArticlesPageLoading,
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

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onViewClick = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextArticlePage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <PageWrapper onScrollEnd={onLoadNextArticlePage} shouldRestoreScroll>
      <DynamicReducerLoader reducersList={reducersList} removeAfterUnmount={false}>
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
