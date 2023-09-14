import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './ConsoleInput.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps =
  Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface ConsoleInputProps extends HTMLInputProps {
  wrapperClassName?: string;
  placeholderClassname?: string;
  inputClassname?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const ConsoleInput = memo(({
  wrapperClassName,
  placeholderClassname,
  inputClassname,
  value,
  disabled,
  onChange,
  type = 'text',
  placeholder,
  autoFocus,
  ...otherProps
}: ConsoleInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus && !disabled) {
      setIsFocused(true);
      inputRef?.current?.focus();
    }
  }, [autoFocus]);

  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const hangleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const { value = '' } = e.target;
      onChange?.(value);
      setCaretPosition(value.length);
    }
  };

  return (
    <div
      className={classNames(
        styles.inputWrapper,
        { [styles.disabled]: disabled },
        [wrapperClassName],
      )}
    >
      {placeholder && (
        <div
          className={classNames(styles.plcaeholder, {}, [placeholderClassname])}
        >
          {placeholder}
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          className={classNames(styles.input, {}, [inputClassname])}
          value={value}
          onChange={hangleOnChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          type={type}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 10}px` }}
          />
        )}
      </div>
    </div>
  );
});
