import { classNames } from '@/shared/lib/classNames/classNames';

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('mainCls')).toBe('mainCls');
  });

  test('additional classes', () => {
    const expected = 'mainCls addCls1 addCls2';
    expect(classNames('mainCls', {}, ['addCls1', 'addCls2']))
      .toBe(expected);
  });

  test('all args + modes', () => {
    const expected = 'mainCls addCls1 addCls2 hidden colored hover';
    expect(classNames(
      'mainCls',
      { hidden: true, colored: true, hover: true },
      ['addCls1', 'addCls2'],
    )).toBe(expected);
  });

  test('all args + modes and one mode value equal "false"', () => {
    const expected = 'mainCls addCls1 addCls2 hidden hover';
    expect(classNames(
      'mainCls',
      { hidden: true, colored: false, hover: true },
      ['addCls1', 'addCls2'],
    )).toBe(expected);
  });

  test(
    'all args + modes and one mode value equal "undefined"',
    () => {
      const expected = 'mainCls addCls1 addCls2 hidden hover';
      expect(classNames(
        'mainCls',
        { hidden: true, colored: undefined, hover: true },
        ['addCls1', 'addCls2'],
      )).toBe(expected);
    },
  );
});
