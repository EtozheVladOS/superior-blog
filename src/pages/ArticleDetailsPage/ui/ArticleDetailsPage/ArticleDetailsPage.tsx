import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRecomendationsList } from '@/features/ArticleRecomendationsList';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t('not.found')}</div>;
  }

  return (
    <PageWrapper>
      <DynamicReducerLoader reducersList={reducers}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecomendationsList />
        <ArticleDetailsComments id={id} />
      </DynamicReducerLoader>
    </PageWrapper>
  );
};

export default memo(ArticleDetailsPage);
