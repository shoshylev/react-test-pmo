import React, { useContext } from 'react';
import { RowIndexContext, RowIndexContextProvider } from '../helpers/rowIndexContextHandler';

function TableCell(props) {
    const state = useContext(RowIndexContext);

    return <RowIndexContextProvider>
          <td onClick={() => state.setRowId(props.rowIndex-1)}>{props.displayValue}</td>
        </RowIndexContextProvider>;
}

export default TableCell;