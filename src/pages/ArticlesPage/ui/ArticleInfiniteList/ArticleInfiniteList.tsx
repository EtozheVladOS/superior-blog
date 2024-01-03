import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageView,
  getIsArticlesPageLoading,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const dispatch = useAppDispatch();
  const [serachParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getIsArticlesPageLoading);

  useInitialEffect(() => {
    dispatch(initArticlesPage(serachParams));
  });

  return (
    <ArticleList
      articles={articles}
      view={view}
      isLoading={isLoading}
      className={className}
    />
  );
});
