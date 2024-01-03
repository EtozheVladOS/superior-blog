import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { Text } from '@/shared/ui/Text/Text';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import {
  fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cl from './ArticlesPage.module.scss';

const reducersList: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const onLoadNextArticlePage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <PageWrapper onScrollEnd={onLoadNextArticlePage} shouldRestoreScroll>
      <DynamicReducerLoader reducersList={reducersList} removeAfterUnmount={false}>
        <Text title={t('articles.page')} className={cl.title} />
        <ArticlePageFilters />
        <ArticleInfiniteList />
      </DynamicReducerLoader>
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
