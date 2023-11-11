export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, value);
    }
  });

  return `?${String(searchParams)}`;
};

/**
 * Функция добавления параметров строки запроса в URL
 * @param params параметры строки запроса
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
