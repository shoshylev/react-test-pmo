import React, { useContext, useState } from 'react';
import './App.css';
import DisplayForm from './components/displayForm';
import DisplayTable, { json } from './components/displayTable';
import { RowIndexContext, RowIndexContextProvider } from './helpers/rowIndexContextHandler';

function App() {
  const [rowIndex, setRowIndex] = useState(-1);

  const updateRowIndex = (rowId) => {
    setRowIndex(rowId);
  };

  const state = useContext(RowIndexContext);
  
  return (
    <RowIndexContextProvider>
      <div className="App">
        <DisplayTable updateSelectedRow={updateRowIndex}/>
      </div>
      {rowIndex > -1 &&(<DisplayForm rowIndex={rowIndex}/>)}
    </RowIndexContextProvider>
  );
}

export default App;
