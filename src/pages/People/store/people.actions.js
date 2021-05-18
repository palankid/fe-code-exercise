import { getPeople } from 'api/people';

export const FETCH_PEOPLE = 'PEOPLE:FETCH_PEOPLE';
export const FETCH_PEOPLE_PROGRESS = 'PEOPLE:FETCH_PEOPLE_PROGRESS';
export const FETCH_PEOPLE_SUCCESS = 'PEOPLE:FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILURE = 'PEOPLE:FETCH_PEOPLE_FAILURE';

export const FILTER_PEOPLE_BY_TYPE = 'PEOPLE:FILTER_PEOPLE_BY_TYPE';
export const FILTER_PEOPLE_BY_NAME = 'PEOPLE:FILTER_PEOPLE_BY_NAME';

export const fetchPeople = async (dispatch, filters = {}) => {
  dispatch({ type: FETCH_PEOPLE_PROGRESS });

  try {
    const result = await getPeople(filters);

    dispatch({
      type: FETCH_PEOPLE_SUCCESS,
      payload: result,
    });
  } catch (error) {
    error.name !== 'AbortError' && dispatch({ type: FETCH_PEOPLE_FAILURE });
  }
};

export const filterPeopleByType = (dispatch, filter) => {
  dispatch({
    type: FILTER_PEOPLE_BY_TYPE,
    payload: filter,
  });
};

export const filterPeopleByName = (dispatch, filter) => {
  dispatch({
    type: FILTER_PEOPLE_BY_NAME,
    payload: filter,
  });
};
