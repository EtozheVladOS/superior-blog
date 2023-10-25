import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = memo(({ children, className, ...restProps }: CardProps) => {
  return (
    <div {...restProps} className={classNames(cl.card, {}, [className])}>
      {children}
    </div>
  );
});
