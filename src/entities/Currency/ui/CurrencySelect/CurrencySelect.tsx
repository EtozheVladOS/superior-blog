import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectProps } from '@/shared/ui/Select/Select';
import { makeSelectOptionsFromObj } from
  '@/shared/utils/makeSelectOptionsFromObj/makeSelectOptionsFromObj';
import { CURRENCY } from '../../model/types/currency';

export const currencyOptions = makeSelectOptionsFromObj(CURRENCY);

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
    <Select
      {...otherProps}
      value={value}
      onChange={onCurrencyChange}
      options={currencyOptions}
      label={labeltoDisplay}
    />
  );
});
