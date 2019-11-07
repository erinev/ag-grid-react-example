import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';

import SimpleCellRenderer from './simpleCellRenderer.jsx';

export default class LargeGrid extends Component {
    constructor() {
        super();

        this.handleGridReady = this.handleGridReady.bind(this);
    }

    handleGridReady({ api, columnApi }) {
        this.gridApi = api;
        this.gridColumnApi = columnApi;

        this.gridColumnApi.setColumnPinned('RowNumber', true)

        this.gridApi.sizeColumnsToFit();
    }

    render() {
        return (
            <div style={{height: '100%'}} className="ag-theme-fresh">
                <AgGridReact 
                    defaultColDef={{
                        minWidth: 250,
                        autoHeight: true,
                        cellStyle: { 'white-space': 'normal' },
                        // cellRendererFramework: SimpleCellRenderer
                    }}
                    columnDefs={this.props.columnDefs} 

                    rowData={this.props.rowData}

                    onGridReady={this.handleGridReady}
                />
            </div>
        );
    }
}