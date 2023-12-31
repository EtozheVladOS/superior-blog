import { Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox as HeadlessListbox } from '@headlessui/react';
import TickIcon from '@/shared/assets/icons/tick.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdowmDirection } from '@/shared/types/ui';
import { HStack } from '../Stack';
import { Button, THEME_BTN } from '../Button';
import cl from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

const mapDropdowmDirection: Record<DropdowmDirection, string> = {
  'top-right': cl.optionTopRight,
  'top-left': cl.optionTopLeft,
  'bottom-right': cl.optionBottomRight,
  'bottom-left': cl.optionBottomLeft,
};

export interface ListBoxProps {
  items: ListBoxItem[];
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  label?: string;
  dropdowmDirection?: DropdowmDirection;
  className?: string;
  onChange?: (value: string) => void;
}

export const ListBox = ({
  items,
  disabled,
  value,
  placeholder,
  label,
  dropdowmDirection = 'bottom-right',
  className,
  onChange,
}: ListBoxProps) => {
  const { t } = useTranslation();

  const handleOnChange = (value: string) => {
    onChange?.(value);
  };

  return (
    <HStack gap="8" className={className}>
      {label && <span className={classNames('', { [cl.disabled]: disabled })}>{label}</span>}

      <HeadlessListbox
        value={value}
        onChange={handleOnChange}
        disabled={disabled}
        className={cl.listBox}
        as="div"
      >
        <HeadlessListbox.Button disabled={disabled} className={cl.trigger}>
          <Button disabled={disabled} theme={THEME_BTN.OUTLINE}>
            {value ?? placeholder ?? t('select-value')}
          </Button>
        </HeadlessListbox.Button>

        <HeadlessListbox.Options
          className={
            classNames(
              cl.optionList,
              {},
              [mapDropdowmDirection[dropdowmDirection]],
            )
          }
        >
          {items.map((item) => (
            <HeadlessListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={
                    classNames(
                      cl.optionItem,
                      {
                        [cl.activeOption]: active,
                        [cl.disabled]: item.disabled,
                      },
                    )
                  }
                >
                  <HStack justify="between" gap="12">
                    {item.content}
                    {selected && <TickIcon className={cl.tickIcon} />}
                  </HStack>
                </li>
              )}
            </HeadlessListbox.Option>
          ))}
        </HeadlessListbox.Options>
      </HeadlessListbox>
    </HStack>
  );
};
