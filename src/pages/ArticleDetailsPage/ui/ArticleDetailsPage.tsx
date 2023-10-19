import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
} from '../model/slices/articleDetailsCommentsSlice';
import { getIsArticleDetailsCommentsLoading } from '../model/selectors/comments';
import {
  fetchCommentsByArticleId,
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cl from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetaildComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isCommentsLoading = useSelector(getIsArticleDetailsCommentsLoading);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  if (!id) {
    return <div>{t('not.found')}</div>;
  }

  //        {
  // id: '1',
  // text: 'ahahahahah lol',
  // user: {
  // id: '1',
  // username: 'PRO_PROGGER',
  // },
  // },
  // {
  // id: '2',
  // text: 'nice article',
  // user: {
  // id: '2',
  // username: 'vasyaJKE',
  // avatar:
  // 'https://cdn.vox-cdn.com/thumbor/VZNJM5S4Cw2i3JaycT9waVLCwqw=/715x248:1689x721/1200x800/filters:focal(972x299:1278x605)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg',
  // },
  // },

  return (
    <DynamicReducerLoader reducersList={reducers} removeAfterUnmount>
      <ArticleDetails id={id} />
      <Text className={cl.commentBlockTitle} title={t('comments')} />
      <CommentList comments={comments} isLoading={isCommentsLoading} />
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
