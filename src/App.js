import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayForm from './components/displayForm';
import DisplayTable from './components/displayTable';
import { getAllData } from './helpers/fetchDataHandler';
import { RowIndexContext, RowIndexContextProvider } from './helpers/rowIndexContextHandler';

function App() {

  const [data, setData] = useState({});
    
  useEffect(() => {
      async function getData(){
          const result = await getAllData();
          if (result)
          setData(result);
      }
      getData();
    }, []);

  return (
    <RowIndexContextProvider>
      <RowIndexContext.Consumer>{value => 
        <div className="App">
          {data && data.map && (<DisplayTable data={data}/>)}
          {value.rowId > -1 && (<DisplayForm rowIndex={value.rowId}/>)}
        </div>
      }
      </RowIndexContext.Consumer>
    </RowIndexContextProvider>
  );
}

export default App;
