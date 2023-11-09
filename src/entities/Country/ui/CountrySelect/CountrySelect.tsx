import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { makeSelectOptionsFromObj }
  from '@/shared/utils/makeSelectOptionsFromObj/makeSelectOptionsFromObj';
import { COUNTRY } from '../../model/types/country';
import { Select, SelectProps } from '@/shared/ui/Select/Select';

export const countryOptions = makeSelectOptionsFromObj(COUNTRY);

type CountrySelectProps = Omit<SelectProps<COUNTRY>, 'value' | 'onChange'> & {
  value?: COUNTRY;
  onChange?: (value: COUNTRY) => void;
}

export const CountrySelect = memo(({
  label = '',
  value,
  onChange,
  ...otherProps
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onCountryChange = useCallback((value: string) => {
    onChange?.(value as COUNTRY);
  }, [onChange]);

  const labeltoDisplay = label || t('countrySelect');

  return (
    <Select
      {...otherProps}
      value={value}
      onChange={onCountryChange}
      options={countryOptions}
      label={labeltoDisplay}
    />
  );
});
