import React, { useState } from 'react';
import './App.css';
import DisplayForm from './components/displayForm';
import DisplayTable, { json } from './components/displayTable';


export const FormVisibility = React.createContext({
  rowIndex: -1,
  setRowIndex: () => {}
});

function App() {
  const [formVisibility, setFormVisibility] = useState(true);
  const [rowIndex, setRowIndex] = useState(-1);

  const updateRowIndex = (rowId) => {
    setRowIndex(rowId);
  };
  
  return (
    <FormVisibility.Provider value={rowIndex}>
      <div className="App">
        <DisplayTable updateSelectedRow={updateRowIndex}/>
      </div>
      {rowIndex > -1 &&(<DisplayForm rowIndex={rowIndex}/>)}
    
    </FormVisibility.Provider>
  );
}

export default App;
