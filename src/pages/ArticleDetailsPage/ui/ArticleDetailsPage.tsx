import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t('not.found')}</div>;
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
