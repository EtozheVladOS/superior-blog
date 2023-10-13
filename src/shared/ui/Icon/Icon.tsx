import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  SvgIcon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, SvgIcon }: IconProps) => {
  return (
    <SvgIcon className={classNames(styles.icon, {}, [className])} />
  );
});
