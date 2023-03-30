import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/ui/Button';
import { ConsoleInput } from '@/shared/ui/ConsoleInput';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const getPlaceholderText = (text: string) => `${text}>`;

  return (
    <div className={classNames(styles.form, {}, [className])}>
      <ConsoleInput
        wrapperClassName={styles.input}
        placeholder={getPlaceholderText(t('username'))}
        autoFocus
      />
      <ConsoleInput
        wrapperClassName={styles.input}
        placeholder={getPlaceholderText(t('password'))}
      />
      <Button className={styles.btn}>{t('login')}</Button>
    </div>
  );
};
