import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  tabList: TabItem<T>[];
  value: T;
  onTabChange: (tab: TabItem<T>) => void;
  className?: string;
}

export const Tabs = <T extends string>({
  tabList,
  value,
  onTabChange,
  className,
}: TabsProps<T>) => {
  const clickHandle = useCallback((tab: TabItem<T>) => {
    return () => onTabChange(tab);
  }, [onTabChange]);

  return (
    <div className={classNames(cl.container, {}, [className])}>
      {tabList.map((tab) => (
        <Card
          key={tab.value}
          theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          onClick={clickHandle(tab)}
          className={cl.tabItem}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
