import styles from './PageLoader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Spinner } from '@/shared/ui/Spinner';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(styles.pageLoader, {}, [className])}>
    <Spinner />
  </div>
);
