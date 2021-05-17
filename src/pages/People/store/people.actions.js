import { getAllPeople } from 'api/people';

export const FETCH_PEOPLE = 'PEOPLE:FETCH_PEOPLE';
export const FETCH_PEOPLE_PROGRESS = 'PEOPLE:FETCH_PEOPLE_PROGRESS';
export const FETCH_PEOPLE_SUCCESS = 'PEOPLE:FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILURE = 'PEOPLE:FETCH_PEOPLE_FAILURE';

export const FILTER_PEOPLE_BY_ROLE = 'PEOPLE:FILTER_PEOPLE_BY_ROLE';
export const FILTER_PEOPLE_BY_NAME = 'PEOPLE:FILTER_PEOPLE_BY_NAME';

export const fetchPeople = async (dispatch) => {
  dispatch({
    type: FETCH_PEOPLE_PROGRESS,
  });

  const result = await getAllPeople();

  dispatch({
    type: FETCH_PEOPLE_SUCCESS,
    payload: result,
  });
};

export const filterPeopleByRole = (dispatch, filter) => {
  dispatch({
    type: FILTER_PEOPLE_BY_ROLE,
    payload: filter,
  });
};

export const filterPeopleByName = (dispatch, filter) => {
  dispatch({
    type: FILTER_PEOPLE_BY_NAME,
    payload: filter,
  });
};
