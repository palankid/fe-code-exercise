import createStore from 'utils/createStore';

import * as peopleActions from './people.actions';
import peopleReducer from './people.reducer';

const initialState = {
  people: [],
  employeeTypeFilter: [],
  employeeNameFilter: '',
  loading: false,
};

const [PeopleContextProvider, usePeopleStore, usePeopleDispatch] = createStore(
  peopleReducer,
  initialState
);

export { PeopleContextProvider, usePeopleStore, usePeopleDispatch, peopleActions };
