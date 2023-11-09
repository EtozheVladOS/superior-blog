import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ArticleSortField,
  ArticleSortSelect,
  ArticleView,
  ArticleViewSelector,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card/Card';
import { ConsoleInput } from '@/shared/ui/ConsoleInput';
import { SortOrder } from '@/shared/types';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import cl from './ArticlePageFilters.module.scss';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo(({ className }: ArticlePageFiltersProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);

  const fetchArticlesData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const onChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(sort));
    dispatch(articlesPageActions.setPage(1));
    fetchArticlesData();
  }, [dispatch, fetchArticlesData]);
  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(articlesPageActions.setOrder(order));
    dispatch(articlesPageActions.setPage(1));
    fetchArticlesData();
  }, [dispatch, fetchArticlesData]);
  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    fetchArticlesData();
  }, [dispatch, fetchArticlesData]);
  const onViewClick = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <div className={classNames(cl.container, {}, [className])}>
      <div className={cl.sortWrapper}>
        <ArticleSortSelect
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
      </div>
      <Card>
        <ConsoleInput
          placeholder={`${t('search')}>`}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
    </div>
  );
});
