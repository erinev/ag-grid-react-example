import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';

import SimpleCellRenderer from './simpleCellRenderer.jsx';

export default class LargeGrid extends Component {
    constructor() {
        super();

        this.handleGridReady = this.handleGridReady.bind(this);
        this.handleColumnResized = this.handleColumnResized.bind(this);
    }

    handleGridReady({ api, columnApi }) {
        this.gridApi = api;
        this.gridColumnApi = columnApi;

        this.gridColumnApi.setColumnPinned('RowNumber', true)

        setTimeout(this.gridApi.sizeColumnsToFit(), 150);
    }

    handleColumnResized({ finished }) {
        if (finished) {
            console.log('handleColumnResized triggered!');
            this.gridApi.resetRowHeights();
        }
    }

    render() {
        return (
            <div style={{height: '100%'}} className="ag-theme-fresh">
                <AgGridReact 
                    defaultColDef={{
                        autoHeight: true,
                        cellStyle: { 'white-space': 'normal' },
                        // TODO: uncomment line below and scroll the list &| resize column in order to see what performance degradation is caused by React cell renderer
                        // cellRendererFramework: SimpleCellRenderer 
                    }}
                    columnDefs={this.props.columnDefs} 

                    rowData={this.props.rowData}

                    onGridReady={this.handleGridReady}
                    onColumnResized={this.handleColumnResized}
                />
            </div>
        );
    }
}