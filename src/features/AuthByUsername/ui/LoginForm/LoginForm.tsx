import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/ui/Button';
import { ConsoleInput } from '@/shared/ui/ConsoleInput';
import { Text, TEXT_THEMES } from '@/shared/ui/Text/Text';
import styles from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((username: string) => {
    dispatch(loginActions.setUsername(username));
  }, [dispatch]);
  const onChangePassword = useCallback((password: string) => {
    dispatch(loginActions.setPassword(password));
  }, [dispatch]);

  const onLoginBtnClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  const getPlaceholderText = (text: string) => `${text}>`;

  return (
    <div className={classNames(styles.form, {}, [className])}>
      <Text title={t('auth.form.title')} className={styles.modalTitle} />
      <ConsoleInput
        wrapperClassName={styles.input}
        onChange={onChangeUsername}
        value={username}
        placeholder={getPlaceholderText(t('username'))}
        autoFocus
      />
      <ConsoleInput
        wrapperClassName={styles.input}
        value={password}
        onChange={onChangePassword}
        placeholder={getPlaceholderText(t('password'))}
      />
      {error && <Text text={t(error)} theme={TEXT_THEMES.ERROR} />}
      <Button
        className={styles.btn}
        onClick={onLoginBtnClick}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  );
});
