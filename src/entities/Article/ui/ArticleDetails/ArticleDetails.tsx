import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Spinner } from '@/shared/ui/Spinner';

import cl from './ArticleDetails.module.scss';
import { articleDeatilsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticlesDetailsData,
  getArticlesDetailsError,
  getArticlesDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
  id: string;
}

const reducersList: ReducersList = {
  articleDeatils: articleDeatilsReducer,
};

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const articleData = useSelector(getArticlesDetailsData);
  const isLoading = useSelector(getArticlesDetailsIsLoading);
  const errorMsg = useSelector(getArticlesDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [id]);

  let articleContent;

  if (isLoading) {
    articleContent = (
      <div className={cl.skeletons}>
        <Skeleton className={cl.avarat} width={140} height={140} borderRadius="50%" />
        <Skeleton width="60%" height={32} />
        <Skeleton width="80%" height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="80%" height={24} />
        <Skeleton width="100%" height={200} />
      </div>
    );
  } else if (errorMsg) {
    articleContent = (
      <Text text={t('error-loading')} textAlign="center" />
    );
  } else {
    articleContent = (
      <div>PASS</div>
    );
  }

  return (
    <DynamicReducerLoader reducersList={reducersList} removeAfterUnmount>
      <div className={cl.container}>
        {articleContent}
      </div>
    </DynamicReducerLoader>
  );
});
