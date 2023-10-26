import {
  MutableRefObject,
  ReactNode,
  memo,
  useRef,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PageWrapper.module.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageWrapperProps {
  children: ReactNode;
  onScrollEnd?: () => void;
  className?: string;
}

export const PageWrapper = memo(({ children, onScrollEnd, className }: PageWrapperProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cl.wrapper, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
