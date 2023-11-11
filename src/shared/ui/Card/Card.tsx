import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  theme?: CardTheme;
  className?: string;
}

export const Card = memo(({
  children,
  theme = CardTheme.NORMAL,
  className,
  ...restProps
}: CardProps) => {
  return (
    <div
      {...restProps}
      className={classNames(cl.card, {}, [className, cl[theme]])}
    >
      {children}
    </div>
  );
});
