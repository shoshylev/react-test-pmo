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
    <RowIndexContext.Consumer>{value => 
      <div className="App">
        <DisplayTable updateSelectedRow={updateRowIndex}/>
      {value.rowId > -1 && (<DisplayForm rowIndex={value.rowId}/>)}
      </div>
    }
    </RowIndexContext.Consumer>
    </RowIndexContextProvider>
  );
}

export default App;
