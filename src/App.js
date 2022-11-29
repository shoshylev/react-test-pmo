import React, { useState } from 'react';
import './App.css';
import DisplayForm from './components/displayForm';
import DisplayTable, { json } from './components/displayTable';


export const FormVisibility = React.createContext({
  formVisibility: true,
  index:0,
  setFormVisibility: () => {},
  setIndex:()=>{}
});

function App() {
  const [formVisibility, setFormVisibility] = useState(true);
  const [rowIndex, setRowIndex] = useState(-1);

  const updateRowIndex = (rowId) => {
    setRowIndex(rowId);
    console.log(rowIndex);
  };

  return (
    <FormVisibility.Provider>
      <div className="App">
        <DisplayTable updateSelectedRow={updateRowIndex}/>
      </div>
      {rowIndex > -1 &&(<DisplayForm index={rowIndex}/>)}
    
    </FormVisibility.Provider>
  );
}

export default App;
