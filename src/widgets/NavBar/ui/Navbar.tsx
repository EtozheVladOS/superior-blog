import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities/User';
import { TEXT_THEMES, Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { APP_LINK_THEME } from '@/shared/ui/AppLink/ui/AppLink';
import cl from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
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
      <header className={classNames(cl.navbar, {}, [className])}>
        <Text
          title="Superior App"
          theme={TEXT_THEMES.INVERTED}
          className={cl.appTitle}
        />

        <div className={cl.links}>
          <AppLink to={RoutePath.article_create} theme={APP_LINK_THEME.INVERTED}>
            {t('create-articel')}
          </AppLink>

          <Button
            theme={THEME_BTN.CLEAR_INVERTED}
            onClick={onLogout}
          >
            {t('logout')}
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(cl.navbar, {}, [className])}>
      <Text
        title="Superior App"
        theme={TEXT_THEMES.INVERTED}
        className={cl.appTitle}
      />

      <div className={cl.links} />
      <Button
        theme={THEME_BTN.CLEAR_INVERTED}
        onClick={toggleModalVisibility}
      >
        {t('login')}
      </Button>
      <LoginModal visible={authModalVisible} onClose={toggleModalVisibility} />
    </header>
  );
};
