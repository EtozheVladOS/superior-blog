import styles from './Spinner.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
  <div className={classNames(styles.spinner, {}, [className])} />
);
