import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { CommentEntity } from '../../model/types/comment';
import cl from './CommentCard.module.scss';

interface CommentCardProps {
  comment?: CommentEntity;
  isLoading?: boolean;
  className?: string;
}

export const CommentCard = memo(({ className, isLoading, comment }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cl.root, {}, [className, cl.loading])}>
        <div className={cl.header}>
          <Skeleton height={50} width={50} borderRadius="50%" />
          <Skeleton height={20} width={80} />
        </div>

        <hr className={cl.line} />

        <Skeleton height={50} width="100%" />
      </div>
    );
  }

  if (comment === undefined) {
    return null;
  }

  return (
    <div className={classNames(cl.root, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`} withoutUnderline>
        <div className={cl.header}>
          <Avatar src={comment?.user.avatar} size={50} />
          <Text text={comment?.user.username} />
        </div>
      </AppLink>

      <hr className={cl.line} />

      <Text text={comment?.text} />
    </div>
  );
});
