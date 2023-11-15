import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { ArticleDetails, ArticleList, ArticleView } from '@/entities/Article';
import { AddCommentForm } from '@/features/AddCommentForm';
import { Text } from '@/shared/ui/Text/Text';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

import cl from './ArticleDetailsPage.module.scss';
import {
  getArticleDetailsComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
  getArticleDetailsRecommendations,
} from '../../model/slices/articleDetailsRecommendationsSlice';
import { articleDetailsPageReducer } from '../../model/slices';
import { getIsArticleDetailsCommentsLoading } from '../../model/selectors/comments';
import { getIsArticleDetailsRecommendationsLoading } from '../../model/selectors/recommendations';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isCommentsLoading = useSelector(getIsArticleDetailsCommentsLoading);
  const recommendations = useSelector(getArticleDetailsRecommendations.selectAll);
  const isRecommendationsLoading = useSelector(getIsArticleDetailsRecommendationsLoading);

  const onSendComment = useCallback((value: string | undefined) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return <div>{t('not.found')}</div>;
  }

  return (
    <PageWrapper>
      <DynamicReducerLoader reducersList={reducers}>
        <ArticleDetailsPageHeader />

        <ArticleDetails id={id} />

        <Text className={cl.blockTitle} title={t('recommendations')} />
        <ArticleList
          articles={recommendations}
          isLoading={isRecommendationsLoading}
          view={ArticleView.SMALL}
          target="_blank"
          className={cl.recommendationList}
        />

        <Text className={cl.blockTitle} title={t('comments')} />
        <AddCommentForm onSendComment={onSendComment} className={cl.addComment} />
        <CommentList comments={comments} isLoading={isCommentsLoading} />
      </DynamicReducerLoader>
    </PageWrapper>
  );
};

export default memo(ArticleDetailsPage);
