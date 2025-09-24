import { createContext, useReducer } from "react";

export const DataContext = createContext();

const DataProvider = ({ reducer, initialState, children }) => {
  const value = useReducer(reducer, initialState); // returns [state, dispatch]
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;

