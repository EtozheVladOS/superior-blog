import { memo, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexAlign = 'center' | 'start' | 'end';
export type FlexDirection = 'column' | 'row';
export type FlexGap = '4' | '8' | '12' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: cl.justifyStart,
  end: cl.justifyEnd,
  center: cl.justifyCenter,
  between: cl.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cl.alignStart,
  end: cl.alignEnd,
  center: cl.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
  column: cl.directionColumn,
  row: cl.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
  4: cl.gap4,
  8: cl.gap8,
  12: cl.gap12,
  16: cl.gap16,
  32: cl.gap32,
};

export interface FlexProps {
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  /** width: 100% */
  isFullWidth?: boolean;
  className?: string;
}

export const Flex = memo(({
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  isFullWidth,
  className,
}: FlexProps) => {
  const classes = useMemo(() => [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ], [align, className, direction, justify, gap]);

  return (
    <div className={classNames(cl.flex, {
      [cl.maxWidth]: isFullWidth,
    }, classes)}
    >
      {children}
    </div>
  );
});
