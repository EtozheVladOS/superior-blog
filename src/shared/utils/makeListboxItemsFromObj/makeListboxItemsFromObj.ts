import { ListBoxItem } from '@/shared/ui/ListBox/ListBox';

export const makeListboxItemsFromObj = (
  obj: Record<string, string>,
): ListBoxItem[] => Object.entries(obj)
  .map(([key, value]) => ({ value: key, content: value }));
