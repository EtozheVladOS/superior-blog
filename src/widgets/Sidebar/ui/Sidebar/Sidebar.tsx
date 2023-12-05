import { useMemo, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-double-right.svg';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import styles from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const sidebarItems = useSelector(getSidebarItems);

  const [collapsed, setCollapsed] = useState(true);

  const onToggleCollapsed = () => setCollapsed((prevState) => !prevState);

  const siderbarItemsToDisplay = useMemo(() => sidebarItems.map((item) => (
    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
  )), [collapsed, sidebarItems]);

  return (
    <menu
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
        {siderbarItemsToDisplay}
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
    </menu>
  );
});
