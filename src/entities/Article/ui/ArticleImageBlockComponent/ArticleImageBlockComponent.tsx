import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({
  className,
  block,
}: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(styles.articleimageblockcomponent, {}, [className])}>
      ArticleImageBlockComponent
    </div>
  );
});
