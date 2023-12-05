import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../../Article';
import cl from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
  value: ArticleType;
  onChangeType: (value: ArticleType) => void;
  className?: string;
}

export const ArticleTypeTabs = memo(({ value, onChangeType, className }: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const tabList = useMemo<TabItem<ArticleType>[]>(() => {
    return Object.entries(ArticleType).map(([key, value]) => ({
      value,
      content: t(`filter-${key}`),
    }));
  }, [t]);

  const handleOnChangeTab = useCallback((tab: TabItem<ArticleType>) => {
    onChangeType(tab.value);
  }, [onChangeType]);

  return (
    <Tabs
      value={value}
      onTabChange={handleOnChangeTab}
      tabList={tabList}
      className={classNames(cl.tabs, {}, [className])}
    />
  );
});
