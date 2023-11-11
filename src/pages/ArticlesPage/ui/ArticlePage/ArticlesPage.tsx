import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import cl from './ArticlesPage.module.scss';
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  getArticlesPageView,
  getIsArticlesPageLoading,
} from '../../model/selectors/articlesPageSelectors';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';

const reducersList: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const [serachParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getIsArticlesPageLoading);

  useInitialEffect(() => {
    dispatch(initArticlesPage(serachParams));
  });

  const onLoadNextArticlePage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <PageWrapper onScrollEnd={onLoadNextArticlePage} shouldRestoreScroll>
      <DynamicReducerLoader reducersList={reducersList} removeAfterUnmount={false}>
        <Text title={t('articles.page')} className={cl.title} />
        <ArticlePageFilters />
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
