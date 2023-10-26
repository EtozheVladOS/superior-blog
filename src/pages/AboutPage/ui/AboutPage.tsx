import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper>
      <div>{t('about.page')}</div>
    </PageWrapper>
  );
};

export default AboutPage;
