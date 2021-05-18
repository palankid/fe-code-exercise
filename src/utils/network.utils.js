export const addUrlParams = (URL, params = {}) => {
  if (!Object.keys(params).length) return URL;

  const urlEncodedParams = Object.entries(params)
    .reduce(
      (acc, kv) =>
        Array.isArray(kv[1]) ? [...acc, ...kv[1].map((value) => [kv[0], value])] : [...acc, kv],
      []
    )
    .map((kv) => kv.map(encodeURIComponent).join('='))
    .join('&');

  return `${URL}?${urlEncodedParams}`;
};
