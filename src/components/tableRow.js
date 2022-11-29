import React from 'react';
import TableCell from './tableCell';
function TableRow(props) {
    return <tr key={props.data.id}>
        <TableCell displayValue={props.data.name} rowIndex={props.data.id} updateSelectedRow={props.updateSelectedRow}/>
        <TableCell displayValue={props.data.website} rowIndex={props.data.id} updateSelectedRow={props.updateSelectedRow}/>
        <TableCell displayValue={props.data.email} rowIndex={props.data.id} updateSelectedRow={props.updateSelectedRow}/>
    </tr>;
}

export default TableRow;