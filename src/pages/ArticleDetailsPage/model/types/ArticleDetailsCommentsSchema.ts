import { EntityState } from '@reduxjs/toolkit';
import { CommentEntity } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentEntity> {
  data?: CommentEntity[];
  isLoading?: boolean;
  error?: string;
}
