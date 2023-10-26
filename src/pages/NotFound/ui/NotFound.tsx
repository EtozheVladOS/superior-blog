import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper';
import cl from './NotFound.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className={classNames(cl.notFound, {}, [className])}>
        {t('page.not.found')}
      </div>
    </PageWrapper>
  );
};
