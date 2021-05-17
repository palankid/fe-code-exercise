import combineContexts from 'utils/combineContexts';

import { PeopleContextProvider } from 'pages/People/store';
import { AddEditContextProvider } from 'pages/AddEditPeople/store';

const AppContextProvider = combineContexts(
  PeopleContextProvider,
  AddEditContextProvider
);

export default AppContextProvider;
