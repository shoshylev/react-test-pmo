import React from 'react';
import { json } from '../helpers/mockData';
import TableRow from './tableRow';
function DisplayTable(props) {
    const header = [" Name", "Website", "Email"];

    return <div>
        <table>
        <thead>
          <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
            {json.map((rowData, i) => <TableRow data={rowData} updateSelectedRow={props.updateSelectedRow}/>)}
        </tbody>
      </table>
    </div> 
}

export default DisplayTable;