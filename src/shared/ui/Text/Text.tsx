import { memo } from 'react';
import styles from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum TEXT_THEMES {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TEXT_THEMES,
  textAlign?: 'right' | 'left' | 'center'
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TEXT_THEMES.PRIMARY,
  textAlign = 'left',
}: TextProps) => {
  const clsMods = {
    [styles.error]: theme === TEXT_THEMES.ERROR,
  };

  return (
    <div className={classNames(styles.text, clsMods, [className, styles[textAlign]])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
