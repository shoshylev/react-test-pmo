import React, { useContext, useState } from 'react';
import { RowIndexContext, RowIndexContextProvider } from '../helpers/rowIndexContextHandler';
function TableCell1(props) {  
    const toggleOnCellClick=()=>{
        props.updateSelectedRow(props.rowIndex - 1);
    };

    return <td onClick={()=>{toggleOnCellClick();}}>{props.displayValue}</td>;
}

function TableCell(props) {
    const state = useContext(RowIndexContext);

    return <RowIndexContextProvider>
          <td onClick={() => state.setRowId(props.rowIndex-1)}>{props.displayValue}</td>
        </RowIndexContextProvider>
}

export default TableCell;