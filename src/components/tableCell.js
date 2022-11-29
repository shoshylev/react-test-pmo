import React, { useState } from 'react';
import { FormVisibility } from '../App';
function TableCell(props) {  
    const toggleOnCellClick=()=>{
        props.updateSelectedRow(props.rowIndex - 1);
    };

    return <FormVisibility.Provider>
        <td onClick={()=>{toggleOnCellClick();}}>{props.displayValue}</td>
    </FormVisibility.Provider>;
}


function TableCell1(props) {
    return <FormVisibility.Consumer>
        {({ rowIndex, setRowIndex }) => (
          <td onClick={()=>{setRowIndex(props.rowIndex);}}>{props.displayValue}</td>
        )}
    </FormVisibility.Consumer>;
}

export default TableCell;