
const api = async (url, method, payload = null) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: payload ? JSON.stringify(payload) : undefined,
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}

export const get = async (url) => {
  return await api(url, 'GET');
}

export const post = async (url, payload) => {
  return await api(url, 'POST', payload);
}

export const patch = async (url, payload) => {
  return await api(url, 'PATCH', payload);
}
