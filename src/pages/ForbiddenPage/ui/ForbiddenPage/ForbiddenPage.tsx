import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      {t('has-no-access')}
    </PageWrapper>
  );
};

export default memo(ForbiddenPage);
