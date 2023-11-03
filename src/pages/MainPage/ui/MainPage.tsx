import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { ErrorButton } from '@/widgets/PageError';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      <div>
        {t('main.page')}
        <ErrorButton />
      </div>
    </PageWrapper>
  );
};

export default MainPage;
