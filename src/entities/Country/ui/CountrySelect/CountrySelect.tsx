import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { makeSelectOptionsFromObj }
  from '@/shared/utils/makeSelectOptionsFromObj/makeSelectOptionsFromObj';
import { SelectProps } from '@/shared/ui/Select/Select';
import {
  makeListboxItemsFromObj,
} from '@/shared/utils/makeListboxItemsFromObj/makeListboxItemsFromObj';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import { COUNTRY } from '../../model/types/country';

export const countryOptions = makeSelectOptionsFromObj(COUNTRY);
export const countryListboxItems = makeListboxItemsFromObj(COUNTRY);

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
    <ListBox
      {...otherProps}
      value={value}
      onChange={onCountryChange}
      items={countryListboxItems}
      label={labeltoDisplay}
    />
  );

  // return (
  //   <Select
  //     {...otherProps}
  //     value={value}
  //     onChange={onCountryChange}
  //     options={countryOptions}
  //     label={labeltoDisplay}
  //   />
  // );
});
