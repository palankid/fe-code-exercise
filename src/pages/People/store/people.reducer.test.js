import peopleReducer from './people.reducer';
import { initialState } from './people.store';
import {
  FETCH_PEOPLE_PROGRESS,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
  FILTER_PEOPLE_BY_ROLE,
  FILTER_PEOPLE_BY_NAME
} from './people.actions';

describe('People Reducer', () => {
  it('should handle FETCH_PEOPLE_SUCCESS action', async () => {
    const payload = [{ id: 1 }, { id: 2 }];
    const expected = {
      ...initialState,
      people: payload
    };

    const result = peopleReducer(initialState, {
      type: FETCH_PEOPLE_SUCCESS,
      payload
    });

    expect(result).toEqual(expected);
  });

  it('should handle FETCH_PEOPLE_PROGRESS action', async () => {
    const expected = {
      ...initialState,
      loading: true,
      error: false,
    };

    const result = peopleReducer(initialState, {
      type: FETCH_PEOPLE_PROGRESS,
    });

    expect(result).toEqual(expected);
  });

  it('should handle FETCH_PEOPLE_FAILURE action', async () => {
    const expected = {
      ...initialState,
      loading: false,
      error: true,
    };

    const result = peopleReducer(initialState, {
      type: FETCH_PEOPLE_FAILURE,
    });

    expect(result).toEqual(expected);
  });

  it('should handle FILTER_PEOPLE_BY_ROLE action', async () => {
    const employeeTypeFilter = ['employee', 'contractor'];
    const expected = {
      ...initialState,
      employeeTypeFilter,
    };

    const result = peopleReducer(initialState, {
      type: FILTER_PEOPLE_BY_ROLE,
      payload: employeeTypeFilter,
    });

    expect(result).toEqual(expected);
  });

  it('should handle FILTER_PEOPLE_BY_NAME action', async () => {
    const employeeNameFilter = 'John';
    const expected = {
      ...initialState,
      employeeNameFilter,
    };

    const result = peopleReducer(initialState, {
      type: FILTER_PEOPLE_BY_NAME,
      payload: employeeNameFilter,
    });

    expect(result).toEqual(expected);
  });
});
