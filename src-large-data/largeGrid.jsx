import React from 'react';

import {AgGridReact} from 'ag-grid-react';

export default function LargeGrid(props) {
    return (
        <div style={{height: '100%'}} className="ag-theme-fresh">
            <AgGridReact columnDefs={props.columnDefs} rowData={props.rowData}/>
        </div>
    );
}

