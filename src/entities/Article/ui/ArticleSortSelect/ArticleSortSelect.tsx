import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import cl from './ArticleSortSelect.module.scss';
import { ArticleSortField } from '../../model/types/article';

interface ArticleSortSelectProps {
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (sort: ArticleSortField) => void;
  onChangeOrder: (order: SortOrder) => void;
  className?: string;
}

export const ArticleSortSelect = memo(({
  sort,
  order,
  onChangeSort,
  onChangeOrder,
  className,
}: ArticleSortSelectProps) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      name: t('ascending'),
    },
    {
      value: 'desc',
      name: t('descending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED_AT,
      name: t('sort-created-at'),
    },
    {
      value: ArticleSortField.TITLE,
      name: t('sort-title'),
    },
    {
      value: ArticleSortField.VIEWS,
      name: t('sort-views'),
    },
  ], [t]);

  return (
    <div className={classNames(cl.articlesortselect, {}, [className])}>
      <Select
        label={`${t('sort-by')}:`}
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
      />
      <Select
        label={`${t('by')}:`}
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
      />
    </div>
  );
});
