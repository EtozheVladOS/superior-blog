import { memo } from 'react';
import { Code } from '@/shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({
  className,
  block,
}: ArticleCodeBlockComponentProps) => {
  return (
    <div className={className}>
      <Code text={block.code} />
    </div>
  );
});
