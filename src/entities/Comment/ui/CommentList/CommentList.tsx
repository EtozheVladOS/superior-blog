import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { CommentEntity } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: CommentEntity[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" isFullWidth className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" isFullWidth className={classNames('', {}, [className])}>
      {comments?.length ? comments.map((comment) => (
        <CommentCard
          comment={comment}
          isLoading={isLoading}
          key={comment.id}
        />
      )) : (
        <Text text={t('no-comments-yet')} />
      )}
    </VStack>
  );
});
