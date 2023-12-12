import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TEXT_THEMES {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

type TextSize = 'small' | 'middle' | 'large';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TEXT_THEMES,
  textAlign?: 'right' | 'left' | 'center',
  size?: TextSize,
}

type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeader: Record<TextSize, HeaderTag> = {
  small: 'h3',
  middle: 'h2',
  large: 'h1',
};

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

  const HeaderTag = mapSizeToHeader[size];

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
      {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
