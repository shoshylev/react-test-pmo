import React from 'react';
import TableCell from './tableCell';
function TableRow(props) {
    return <tr key={props.data.index}>
        <TableCell displayValue={props.data.name} rowIndex={props.data.id}/>
        <TableCell displayValue={props.data.website} rowIndex={props.data.id}/>
        <TableCell displayValue={props.data.email} rowIndex={props.data.id}/>
    </tr>;
}

export default TableRow;