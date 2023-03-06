import { useTranslation } from 'react-i18next';
import { ErrorButton } from '@/widgets/PageError';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('main.page')}
      <ErrorButton />
    </div>
  );
};

export default MainPage;
