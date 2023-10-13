import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cl from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({
  className,
  block,
}: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(cl.articletextblockcomponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cl.title} />
      )}

      {block.paragrafs.map((paragraf) => (
        <Text key={paragraf} text={paragraf} className={cl.paragraf} />
      ))}
    </div>
  );
});
