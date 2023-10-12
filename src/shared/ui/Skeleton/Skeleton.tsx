import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton = ({
  className, height, width, borderRadius,
}: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return <div style={styles} className={classNames(cl.skeleton, {}, [className])} />;
};
