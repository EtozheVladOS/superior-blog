import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import cl from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
  view: ArticleView;
  className?: string;
}

export const ArticleListItemSkeleton = memo(({ view, className }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cl.articlelistitem, {}, [className, cl[view]])}>
        <Card className={cl.card}>
          <div className={cl.header}>
            <Skeleton width={60} height={60} borderRadius="50%" />
            <Skeleton width={120} height={16} className={cl.username} />
            <Skeleton width={60} height={16} className={cl.creationDate} />
          </div>

          <Skeleton width={120} height={20} className={cl.articleTitle} />

          <Skeleton height={100} className={cl.articleImg} />

          <Skeleton className={cl.textBlock} />

          <div className={cl.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cl.articlelistitem, {}, [className, cl[view]])}>
      <Card className={cl.card}>
        <div className={cl.imgWrapper}>
          <Skeleton className={cl.articleImg} />
        </div>

        <div className={cl.infoWrapper}>
          <Skeleton width={120} height={16} />
        </div>

        <Skeleton width={160} height={20} className={cl.articleTitle} />
      </Card>
    </div>
  );
});
