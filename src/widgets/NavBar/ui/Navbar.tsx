import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, THEME_BTN } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User/index';
import { TEXT_THEMES, Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { APP_LINK_THEME } from '@/shared/ui/AppLink/ui/AppLink';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { HStack } from '@/shared/ui/Stack';
import cl from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const [authModalVisible, setAuthModalVisible] = useState(false);

  const toggleModalVisibility = useCallback(() => {
    setAuthModalVisible((prev) => !prev);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelEnable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cl.navbar, {}, [className])}>
        <Text
          title="Superior App"
          theme={TEXT_THEMES.INVERTED}
          className={cl.appTitle}
        />

        <HStack align="center" className={cl.links}>
          <AppLink to={RoutePath.article_create} theme={APP_LINK_THEME.INVERTED}>
            {t('create-articel')}
          </AppLink>

          <Dropdown
            trigger={<Avatar size={40} src={authData.avatar} />}
            items={[
              ...(isAdminPanelEnable ? [{
                contnent: t('admin-panel'),
                href: RoutePath.admin_panel,
              }] : []),
              {
                contnent: t('my-profile'),
                href: RoutePath.profile + authData.id,
              },
              {
                contnent: t('logout'),
                onClick: onLogout,
              },
            ]}
            dropdowmDirection="bottom-left"
            className={cl.dropdown}
          />
        </HStack>
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
