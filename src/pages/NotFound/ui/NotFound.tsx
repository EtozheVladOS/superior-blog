import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface NotFoundProps {
  className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.notFound, {}, [className])}>
      {t('page.not.found')}
    </div>
  );
};
