import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum THEME_BTN {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: THEME_BTN;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...otherPrpos
}) => (
  <button
    type="button"
    className={classNames(
      styles.button,
      {
        [styles.clear]: theme === THEME_BTN.CLEAR,
        [styles.outline]: theme === THEME_BTN.OUTLINE,
      },
      [className],
    )}
    {...otherPrpos}
  >
    {children}
  </button>
);
