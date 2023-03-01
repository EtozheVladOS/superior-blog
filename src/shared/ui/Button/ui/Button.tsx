import styles from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib/className';

export enum THEME_BTN {
  CLEAR = 'clear',
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
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.clear]: theme === THEME_BTN.CLEAR
        },
        [className]
      )}
      {...otherPrpos}
    >
      {children}
    </button>
  );
};
