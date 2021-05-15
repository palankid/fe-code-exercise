import { get, post, patch } from './api';

describe('api', () => {
  const mockEndpoint = 'http://does.not.exist:4000';

  beforeAll(() => jest.spyOn(window, 'fetch'))
  
  describe('get', () => {
    it('happy path', async () => {
      const payload = { it: 'works' };
      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => payload,
      })
  
      const result = await get(mockEndpoint);
  
      expect(fetch).toHaveBeenCalledWith(mockEndpoint, {
        body: undefined,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'GET'
      });
      expect(result).toEqual(payload);
    });
  
    it('sad path', async () => {
      window.fetch.mockResolvedValueOnce({
        ok: false,
        status: '404',
        json: async () => ({ error: 'error' }),
      })
  
      await expect(async () => {
        return await get(mockEndpoint);
      }).rejects.toThrow('An error has occured: 404');
    });
  });

  describe('post', () => {
    it('happy path', async () => {
      const returnValue = { it: 'works' };
      const payload = { post: 'this' }
      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => returnValue,
      })
  
      const result = await post(mockEndpoint, payload);
  
      expect(fetch).toHaveBeenCalledWith(mockEndpoint, {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'POST'
      });
      expect(result).toEqual(returnValue);
    });

    it('sad path', async () => {
      const returnValue = { error: 'error' };
      const payload = { post: 'this' }
      window.fetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        json: async () => returnValue,
      })
  
      await expect(async () => {
        return await post(mockEndpoint, payload);
      }).rejects.toThrow('An error has occured: 404');
    });
  });

  describe('patch', () => {
    it('happy path', async () => {
      const returnValue = { it: 'works' };
      const payload = { patch: 'this' }
      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => returnValue,
      })
  
      const result = await patch(mockEndpoint, payload);
  
      expect(fetch).toHaveBeenCalledWith(mockEndpoint, {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'PATCH'
      });
      expect(result).toEqual(returnValue);
    });

    it('sad path', async () => {
      const returnValue = { error: 'error' };
      const payload = { patch: 'this' }
      window.fetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        json: async () => returnValue,
      })
  
      await expect(async () => {
        return await patch(mockEndpoint, payload);
      }).rejects.toThrow('An error has occured: 404');
    });
  });
});
