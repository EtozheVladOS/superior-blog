import { getQueryParams } from './addQueryParams';

describe('getQueryParams/addQueryParams', () => {
  test('one param', () => {
    const params = getQueryParams({
      testKey: 'testValue',
    });
    expect(params).toBe('?testKey=testValue');
  });

  test('several params', () => {
    const params = getQueryParams({
      testKey1: 'testValue1',
      testKey2: 'testValue2',
    });
    expect(params).toBe('?testKey1=testValue1&testKey2=testValue2');
  });

  test('undefined param value', () => {
    const params = getQueryParams({
      testKey: undefined,
    });
    expect(params).toBe('?');
  });
});
