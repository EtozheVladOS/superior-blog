import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { Button } from '@/shared/ui/Button/ui/Button';
import { ConsoleInput } from '@/shared/ui/ConsoleInput';
import { Text, TEXT_THEMES } from '@/shared/ui/Text/Text';
import styles from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialRedusers: ReducersList = { loginForm: loginReducer };

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();
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

  const onLoginBtnClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  const getPlaceholderText = (text: string) => `${text}>`;

  return (
    <DynamicReducerLoader reducersList={initialRedusers} removeAfterUnmount>
      <div className={classNames(styles.form, {}, [className])}>
        <Text title={t('auth.form.title')} className={styles.modalTitle} />
        <ConsoleInput
          wrapperClassName={styles.input}
          onChange={onChangeUsername}
          value={username}
          placeholder={getPlaceholderText(t('username'))}
          disabled={isLoading}
          autoFocus
        />
        <ConsoleInput
          wrapperClassName={styles.input}
          value={password}
          onChange={onChangePassword}
          placeholder={getPlaceholderText(t('password'))}
          disabled={isLoading}
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
    </DynamicReducerLoader>
  );
});

export default LoginForm;
