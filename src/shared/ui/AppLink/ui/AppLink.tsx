import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum APP_LINK_THEME {
  'PRIMARY' = 'primary',
  'INVERTED' = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: APP_LINK_THEME;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = APP_LINK_THEME.PRIMARY,
  ...otherProps
}) => (
  <Link
    className={classNames(
      styles.appLink,
      {
        [styles.primary]: theme === APP_LINK_THEME.PRIMARY,
        [styles.inverted]: theme === APP_LINK_THEME.INVERTED,
      },
      [className],
    )}
    {...otherProps}
  >
    {children}
  </Link>
);
