import { ChangeEventHandler, useCallback, useMemo } from 'react';
import { classNames as cn, ClassnamesMods } from '@/shared/lib/classNames/classNames';
import cl from './Select.module.scss';

export type SelectOption<T extends string> = {
  value: T;
  name: string;
}

export interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  align?: 'vertical' | 'horizontal';
  options?: SelectOption<T>[];
  value?: T;
  disabled?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>({
  className,
  label,
  align = 'horizontal',
  options,
  value,
  disabled = false,
  onChange,
}: SelectProps<T>) => {
  const mods: ClassnamesMods = {
    [cl.verticalAlign]: align === 'vertical',
    [cl.horizontalAlign]: align === 'horizontal',
    [cl.disabled]: disabled,
  };

  const optionsList = useMemo(() => options?.map(({ value, name }) => (
    <option value={value} key={value} className={cl.option}>{name}</option>
  )), [options]);

  const onSelectChange: ChangeEventHandler<HTMLSelectElement> = useCallback((e) => {
    onChange?.(e.target.value as T);
  }, [onChange]);

  return (
    <div className={cn(cl.wrapper, mods, [className])}>
      {label && <span className={cl.label}>{label}</span>}
      <select
        value={value}
        onChange={onSelectChange}
        disabled={disabled}
        className={cl.select}
      >
        {optionsList}
      </select>
    </div>
  );
};
