import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const [authModalVisible, setAuthModalVisible] = useState(false);

  const toggleModalVisibility = useCallback(() => {
    setAuthModalVisible((prev) => !prev);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <div className={styles.links}>
          <Button
            theme={THEME_BTN.CLEAR_INVERTED}
            onClick={onLogout}
          >
            {t('logout')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links} />
      <Button
        theme={THEME_BTN.CLEAR_INVERTED}
        onClick={toggleModalVisibility}
      >
        {t('login')}
      </Button>
      <LoginModal visible={authModalVisible} onClose={toggleModalVisibility} />
    </div>
  );
};
