import {
  fetchPeople,
  FETCH_PEOPLE_PROGRESS,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from './people.actions';

import { getPeople } from 'api/people';

jest.mock('api/people', () => ({
  getPeople: jest.fn(),
}));

describe('People Actions', () => {
  describe('fetchPeople', () => {
    it('happy path', async () => {
      const dispatch = jest.fn();
      getPeople.mockImplementation(() => Promise.resolve('It works'));
      await fetchPeople(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch.mock.calls).toEqual([
        [
          {
            type: FETCH_PEOPLE_PROGRESS,
          },
        ],
        [
          {
            type: FETCH_PEOPLE_SUCCESS,
            payload: 'It works',
          },
        ],
      ]);
    });

    it('unhappy path', async () => {
      const dispatch = jest.fn();
      getPeople.mockImplementation(() => Promise.reject('Houston, we have a problem!'));
      await fetchPeople(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch.mock.calls).toEqual([
        [
          {
            type: FETCH_PEOPLE_PROGRESS,
          },
        ],
        [
          {
            type: FETCH_PEOPLE_FAILURE,
          },
        ],
      ]);
    });
  });
});
