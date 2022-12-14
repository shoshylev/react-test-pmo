import React from 'react';
import TableRow from './tableRow';

function DisplayTable(props) {
    const header = [" Name", "Website", "Email"];

    return <div>
        <table key="table">
        <thead>
          <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
            {props.data.map((rowData, i) => <TableRow data={rowData} />)}
        </tbody>
      </table>
    </div> 
}

export default DisplayTable;