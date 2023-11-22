import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User/index';
import { classNames } from '@/shared/lib/classNames/classNames';
import { APP_LINK_THEME, AppLink } from '@/shared/ui/AppLink/ui/AppLink';
import styles from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation(item.translationName);

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      theme={APP_LINK_THEME.INVERTED}
      className={classNames(styles.linkItem, {
        [styles.collapsed]: collapsed,
      })}
    >
      <item.Icon />
      <span>{t(item.text)}</span>
    </AppLink>
  );
});
