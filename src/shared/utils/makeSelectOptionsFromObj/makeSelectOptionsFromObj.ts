import { SelectOption } from '@/shared/ui/Select/Select';

export const makeSelectOptionsFromObj = (
  obj: Record<string, string>,
): SelectOption<string>[] => Object.entries(obj)
  .map(([key, value]) => ({ value: key, name: value }));
