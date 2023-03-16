import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum THEME_BTN {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

export enum SIZE_BTN {
  SMALL = 'size_s',
  MEDIUM = 'size_m',
  LARGE = 'size_l',
  EXTRA_LARGE = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: THEME_BTN;
  size?: SIZE_BTN;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  size = SIZE_BTN.MEDIUM,
  ...otherPrpos
}) => {
  const classes = {
    [styles.clear]: theme === THEME_BTN.CLEAR,
    [styles.outline]: theme === THEME_BTN.OUTLINE,
    [styles.size_s]: size === SIZE_BTN.SMALL,
    [styles.size_m]: size === SIZE_BTN.MEDIUM,
    [styles.size_l]: size === SIZE_BTN.LARGE,
    [styles.size_xl]: size === SIZE_BTN.EXTRA_LARGE,
  };

  return (
    <button
      type="button"
      className={classNames(styles.button, classes, [className])}
      {...otherPrpos}
    >
      {children}
    </button>
  );
};
