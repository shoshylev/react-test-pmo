import React, { useState } from 'react';
import { FormVisibility } from '../App';
function TableCell(props) {  
    const toggleOnCellClick=()=>{
        console.log("click" + props.rowIndex);
    };

    return <FormVisibility.Provider>
        <td onClick={()=>{toggleOnCellClick();}}>{props.displayValue}</td>
    </FormVisibility.Provider>;
}


function TableCell3(props) {
    return <FormVisibility.Consumer>
        {({ formVisibility, setFormVisibility, setIndex }) => (
          <td onClick={()=>{setFormVisibility(!formVisibility);setIndex(props.rowIndex)}}>{props.displayValue}</td>
        )}
    </FormVisibility.Consumer>;
}

export default TableCell;