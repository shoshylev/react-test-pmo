import React, { useState } from 'react';
import './App.css';
import DisplayForm from './components/displayForm';
import DisplayTable, { json } from './components/displayTable';
import TableRow from './components/tableRow';


export const FormVisibility = React.createContext({
  formVisibility: true,
  index:0,
  setFormVisibility: () => {},
  setIndex:()=>{}
});

function App() {
  const [formVisibility, setFormVisibility] = useState(true);
  const [index, setIndex] = useState(0);

  return (
    <FormVisibility.Provider>
      <div className="App">
        {formVisibility}
        <DisplayTable />
      </div>
      {formVisibility &&(<DisplayForm index={index}/>)}
    
    </FormVisibility.Provider>
  );
}

export default App;
