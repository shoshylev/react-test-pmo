import React, { useContext, useState } from 'react';
import { RowIndexContext, RowIndexContextProvider } from '../helpers/rowIndexContextHandler';
function TableCell(props) {  
    const toggleOnCellClick=()=>{
        props.updateSelectedRow(props.rowIndex - 1);
    };

    return <td onClick={()=>{toggleOnCellClick();}}>{props.displayValue}</td>;
}

function TableCell33(props) {
    const st = useContext(RowIndexContext);

    return <RowIndexContextProvider>
        {({ rowIndex, setRowIndex }) => (
          <td onClick={()=>{setRowIndex(props.rowIndex);}}>{props.displayValue}</td>
        )}
        </RowIndexContextProvider>
}

function TableCell1(props) {
    const state = useContext(RowIndexContext);

    return <RowIndexContextProvider>
          <td onClick={() => state.setRowId(props.rowIndex)}>{props.displayValue}</td>
        </RowIndexContextProvider>
}

export default TableCell;