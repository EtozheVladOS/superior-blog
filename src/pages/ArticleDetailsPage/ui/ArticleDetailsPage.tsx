import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { ArticleDetails } from '@/entities/Article';
import { AddCommentForm } from '@/features/AddCommentForm';
import { Text } from '@/shared/ui/Text/Text';
import { CommentList } from '@/entities/Comment';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

import cl from './ArticleDetailsPage.module.scss';
import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
} from '../model/slices/articleDetailsCommentsSlice';
import { getIsArticleDetailsCommentsLoading } from '../model/selectors/comments';
import {
  fetchCommentsByArticleId,
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  addCommentForArticle,
} from '../model/services/addCommentForArticle/addCommentForArticle';

const reducers: ReducersList = {
  articleDetaildComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isCommentsLoading = useSelector(getIsArticleDetailsCommentsLoading);

  const onSendComment = useCallback((value: string | undefined) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  if (!id) {
    return <div>{t('not.found')}</div>;
  }

  return (
    <DynamicReducerLoader reducersList={reducers}>
      <Button onClick={onBackToList} theme={THEME_BTN.OUTLINE}>
        {t('back-to-list')}
      </Button>
      <ArticleDetails id={id} />
      <Text className={cl.commentBlockTitle} title={t('comments')} />
      <AddCommentForm onSendComment={onSendComment} className={cl.addComment} />
      <CommentList comments={comments} isLoading={isCommentsLoading} />
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
