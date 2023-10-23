import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { CommentEntity } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cl from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: CommentEntity[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cl.commentlist, {}, [className])}>
        <CommentCard isLoading className={cl.commentItem} />
        <CommentCard isLoading className={cl.commentItem} />
        <CommentCard isLoading className={cl.commentItem} />
      </div>
    );
  }

  return (
    <div className={classNames(cl.commentlist, {}, [className])}>
      {comments?.length ? comments.map((comment) => (
        <CommentCard comment={comment} isLoading={isLoading} className={cl.commentItem} />
      )) : (
        <Text text={t('no-comments-yet')} />
      )}
    </div>
  );
});
