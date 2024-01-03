import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { Text } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleDetailsComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getIsArticleDetailsCommentsLoading } from '../../model/selectors/comments';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cl from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
  id: string;
  className?: string;
}

export const ArticleDetailsComments = memo(({ id, className }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isCommentsLoading = useSelector(getIsArticleDetailsCommentsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback((value: string | undefined) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

  return (
    <div className={className}>
      <Text className={cl.blockTitle} title={t('comments')} />
      <AddCommentForm onSendComment={onSendComment} className={cl.addComment} />
      <CommentList comments={comments} isLoading={isCommentsLoading} />
    </div>
  );
});
