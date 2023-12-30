import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

// for dev only
export const ErrorButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw Error;
    }
  }, [error]);

  const onThrowError = () => setError(true);

  return (
    <Button onClick={onThrowError}>{t('throw.error')}</Button>
  );
};
