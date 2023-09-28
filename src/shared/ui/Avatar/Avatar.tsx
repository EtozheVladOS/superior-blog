import { CSSProperties, memo, useMemo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import cl from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo(({
  className,
  src,
  size,
  alt,
}: AvatarProps) => {
  const inlinesStyles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={inlinesStyles}
      className={cn(cl.avatar, {}, [className])}
    />
  );
});
