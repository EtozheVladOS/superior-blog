import {
  FC,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/Portal/Portal';

const CLOSING_DELAY = 150;

interface ModalProps {
  className?: string;
  visible?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  visible,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleOnClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, CLOSING_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleOnClose();
    }
  }, [handleOnClose]);

  useEffect(() => {
    if (visible) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [visible, onKeyDown]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const classes: Record<string, boolean> = {
    [styles.opened]: visible,
    [styles.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(styles.modal, classes, [className])}>
        <div
          role="presentation"
          className={styles.overlay}
          onClick={handleOnClose}
        >
          <div
            role="presentation"
            className={styles.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
