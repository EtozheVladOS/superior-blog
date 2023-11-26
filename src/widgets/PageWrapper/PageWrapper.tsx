import {
  MutableRefObject,
  ReactNode,
  UIEvent,
  memo,
  useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSctollRestorationByPath, scrollRestorationActions } from '@/features/ScrollRestoration';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

import cl from './PageWrapper.module.scss';

interface PageWrapperProps {
  children: ReactNode;
  shouldRestoreScroll?: boolean;
  onScrollEnd?: () => void;
  className?: string;
}

export const PAGE_WRAPPER_ID = 'page-wrapper-id';

export const PageWrapper = memo(({
  children,
  shouldRestoreScroll,
  onScrollEnd,
  className,
}: PageWrapperProps) => {
  const dispatch = useAppDispatch();
  const navigate = useLocation();

  const scrollPosition = useSelector(
    (state: StateSchema) => getSctollRestorationByPath(state, navigate.pathname),
  );

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    if (shouldRestoreScroll) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (shouldRestoreScroll) {
      dispatch(scrollRestorationActions.setScrollPosition({
        path: navigate.pathname,
        position: e.currentTarget.scrollTop,
      }));
    }
  }, 1000);

  return (
    <section
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cl.wrapper, {}, [className])}
      id={PAGE_WRAPPER_ID}
    >
      {children}
      {shouldRestoreScroll && <div ref={triggerRef} className={cl.trigger} />}
    </section>
  );
});
