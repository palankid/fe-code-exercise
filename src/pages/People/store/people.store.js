import { createStore } from 'utils/store.utils';

import * as peopleActions from './people.actions';
import peopleReducer from './people.reducer';

export const initialState = {
  people: [],
  employeeTypeFilter: [],
  employeeNameFilter: '',
  loading: false,
  error: false,
};

const [PeopleContextProvider, usePeopleStore, usePeopleDispatch] = createStore(
  peopleReducer,
  initialState
);

export { PeopleContextProvider, usePeopleStore, usePeopleDispatch, peopleActions };
