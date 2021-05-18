export const addUrlParams = (URL, params = {}) => {
  if (!Object.keys(params).length) return URL;

  const urlEncodedParams = Object.entries(params)
    .map((kv) => kv.map(encodeURIComponent).join('='))
    .join('&');

  return `${URL}?${urlEncodedParams}`;
};
