import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-double-right.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import StackIcon from '@/shared/assets/icons/stack.svg';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { APP_LINK_THEME } from '@/shared/ui/AppLink/ui/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const { t: tMain } = useTranslation('main');
  const { t: tAbout } = useTranslation('about');
  const [collapsed, setCollapsed] = useState(true);

  const onToggleCollapsed = () => setCollapsed((prevState) => !prevState);

  return (
    <div
      data-testid="sidebar"
      className={
        classNames(
          styles.sidebar,
          { [styles.collapsed]: collapsed },
          [className],
        )
      }
    >
      <div className={classNames(styles.linksItemList, {
        [styles.collapsed]: collapsed,
      })}
      >
        <AppLink
          to={RoutePath.main}
          theme={APP_LINK_THEME.INVERTED}
          className={classNames(styles.linkItem, {
            [styles.collapsed]: collapsed,
          })}
        >
          <HomeIcon />
          <span>{tMain('main.page')}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={APP_LINK_THEME.INVERTED}
          className={classNames(styles.linkItem, {
            [styles.collapsed]: collapsed,
          })}
        >
          <StackIcon />
          <span>{tAbout('about.page')}</span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <div>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
        <Button
          onClick={onToggleCollapsed}
          theme={THEME_BTN.CLEAR}
          data-testid="toggle-sidebar"
        >
          <div className={classNames(
            styles.arrowIcon,
            {
              [styles.collapsedIcon]: collapsed,
            },
          )}
          >
            <ArrowIcon />
            <span>{t('collapse')}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
