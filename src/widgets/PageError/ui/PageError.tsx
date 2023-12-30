import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => location.reload();

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      <p>{t('something.went.wrong')}</p>
      <Button onClick={reloadPage}>
        {t('reload.page')}
      </Button>
    </div>
  );
};
