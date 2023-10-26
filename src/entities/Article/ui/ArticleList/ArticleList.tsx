import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import cl from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  className?: string;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 3 : 9)
  .fill(null)
  .map((_, idx) => (
    <ArticleListItemSkeleton view={view} key={idx} />
  ));

export const ArticleList = memo(({
  articles = [],
  isLoading,
  view = ArticleView.SMALL,
  className,
}: ArticleListProps) => {
  const { t } = useTranslation('articles');

  return (
    <div className={classNames(cl.articleList, {}, [className, cl[view]])}>
      {articles.length > 0
        ? articles.map((article) => (
          <ArticleListItem article={article} view={view} key={article.id} />
        ))
        : !isLoading && <Text text={t('no-articles-yet')} />}

      {isLoading && getSkeletons(view)}
    </div>
  );
});
