import React, { useState } from 'react';

export const RowIndexContext = React.createContext({
  rowId: -1,
  setRowId: () => {}
})

export const RowIndexContextProvider = (props) => {

  const setRowId = (rowIndex) => {
    setState({...state1, rowId: rowIndex})
  };

  const initState = {
    rowId: -1,
    setRowId: setRowId
  } ;

  const [state1, setState] = useState(initState);

  return (
    <RowIndexContext.Provider value={state1}>
      {props.children}
    </RowIndexContext.Provider>
  );
}