import React, {Component} from 'react';

import SimpleCellRenderer from './simpleCellRenderer.jsx';
import LargeGrid from './largeGrid.jsx';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            columnDefs: [],
            rowData: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch(`http://localhost:3000/columnDefs`).then(data => data.json()),
            fetch(`http://localhost:3000/rowData`).then(data => data.json())
        ]).then(([columnDefs, rowData]) => {
            this.setState({
                columnDefs,
                rowData
            });
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        return <LargeGrid columnDefs={this.state.columnDefs} rowData={this.state.rowData} />;
    }
}