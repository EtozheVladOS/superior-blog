import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectProps } from '@/shared/ui/Select/Select';
import { makeSelectOptionsFromObj } from
  '@/shared/utils/makeSelectOptionsFromObj/makeSelectOptionsFromObj';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import {
  makeListboxItemsFromObj,
} from '@/shared/utils/makeListboxItemsFromObj/makeListboxItemsFromObj';
import { CURRENCY } from '../../model/types/currency';

export const currencyOptions = makeSelectOptionsFromObj(CURRENCY);
export const currencyListboxItems = makeListboxItemsFromObj(CURRENCY);

type CurrencySelectProps = Omit<SelectProps<CURRENCY>, 'value' | 'onChange'> & {
  value?: CURRENCY;
  onChange?: (value: CURRENCY) => void;
}

export const CurrencySelect = memo(({
  label = '',
  value,
  onChange,
  ...otherProps
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onCurrencyChange = useCallback((value: string) => {
    onChange?.(value as CURRENCY);
  }, [onChange]);

  const labeltoDisplay = label || t('currencySelect');

  return (
    <ListBox
      {...otherProps}
      value={value}
      onChange={onCurrencyChange}
      items={currencyListboxItems}
      label={labeltoDisplay}
      dropdowmDirection="top"
    />
  );

  // return (
  //   <Select
  //     {...otherProps}
  //     value={value}
  //     onChange={onCurrencyChange}
  //     options={currencyOptions}
  //     label={labeltoDisplay}
  //   />
  // );
});
