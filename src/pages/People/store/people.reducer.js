import {
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_PROGRESS,
  FETCH_PEOPLE_SUCCESS,
  FILTER_PEOPLE_BY_ROLE,
  FILTER_PEOPLE_BY_NAME,
} from './people.actions';

const peopleReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_PEOPLE_PROGRESS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FILTER_PEOPLE_BY_ROLE:
      return {
        ...state,
        employeeTypeFilter: action.payload,
      };
    case FILTER_PEOPLE_BY_NAME:
      return {
        ...state,
        employeeNameFilter: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
