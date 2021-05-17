import createStore from 'utils/createStore';

const reducer = (state, action) => state;
const initialState = {};

const [AddEditContextProvider, useAddEditStore, useAddEditDispatch] = createStore(
  reducer,
  initialState
);

export { AddEditContextProvider, useAddEditStore, useAddEditDispatch };
