import { createStore } from 'utils/store.utils';

const reducer = (state, action) => state;
const initialState = {};

const [AddEditContextProvider, useAddEditStore, useAddEditDispatch] = createStore(
  reducer,
  initialState
);

export { AddEditContextProvider, useAddEditStore, useAddEditDispatch };
