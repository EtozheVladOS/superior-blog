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
}

export const Text = ({
  className,
  title,
  text,
  theme = TEXT_THEMES.PRIMARY,
}: TextProps) => {
  const classes = {
    [styles.error]: theme === TEXT_THEMES.ERROR,
  };

  return (
    <div className={classNames(styles.text, classes, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
