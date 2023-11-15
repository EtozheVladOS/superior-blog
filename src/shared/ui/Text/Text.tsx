import { memo } from 'react';
import styles from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum TEXT_THEMES {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TEXT_THEMES,
  textAlign?: 'right' | 'left' | 'center',
  size?: 'small' | 'middle' | 'large',
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TEXT_THEMES.PRIMARY,
  textAlign = 'left',
  size = 'middle',
}: TextProps) => {
  const clsMods = {
    [styles.error]: theme === TEXT_THEMES.ERROR,
    [styles.inverted]: theme === TEXT_THEMES.INVERTED,
  };

  return (
    <div
      className={
        classNames(
          styles.text,
          clsMods,
          [
            className,
            styles[textAlign],
            styles[size],
          ],
        )
      }
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
