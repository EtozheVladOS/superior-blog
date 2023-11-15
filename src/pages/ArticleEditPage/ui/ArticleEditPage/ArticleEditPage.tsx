import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';

export const ArticleEditPage = () => {
  const { t } = useTranslation();
  const { id: aticleId } = useParams<{ id?: string }>();
  const isEdit = aticleId !== undefined;

  return (
    <PageWrapper>
      {isEdit ? 'EDIT ARTICLE' : 'CREATE ARTICLE'}
    </PageWrapper>
  );
};

export default memo(ArticleEditPage);
