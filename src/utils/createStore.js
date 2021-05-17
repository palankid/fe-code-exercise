import { createContext, useContext, useReducer } from 'react';

const createStore = (reducer, initialState) => {
  const StoreContext = createContext(initialState);
  const DispatchContext = createContext();
  
  const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={state}>
          {children}
        </StoreContext.Provider>
      </DispatchContext.Provider>
    );
  };
  
  const useStore = () => useContext(StoreContext);
  const useDispatch = () => useContext(DispatchContext);

  return [StoreProvider, useStore, useDispatch];
}

export default createStore;
