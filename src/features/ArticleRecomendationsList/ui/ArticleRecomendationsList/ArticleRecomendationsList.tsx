import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { useGetArticleRecomandationsListQuery } from '../api/articleRecomendationsApi';
import cl from './ArticleRecomendationsList.module.scss';

interface ArticleRecomendationsListProps {
  className?: string;
}

export const ArticleRecomendationsList = memo(({ className }: ArticleRecomendationsListProps) => {
  const { t } = useTranslation('articles');

  const {
    data: recommendations,
    isLoading: isRecommendationsLoading,
    error: getRecommendationsError,
  } = useGetArticleRecomandationsListQuery(3);

  if (isRecommendationsLoading || getRecommendationsError) {
    return null;
  }

  return (
    <VStack gap="8" className={className}>
      <Text className={cl.blockTitle} title={t('recommendations')} />
      <ArticleList
        articles={recommendations}
        isLoading={isRecommendationsLoading}
        view={ArticleView.SMALL}
        target="_blank"
        className={cl.recommendationList}
      />
    </VStack>
  );
});
