import React, { Component } from 'react';

import LargeGrid from './largeGrid.jsx';

const gridSize = '100x2000';
const columnDefs = require(`../grid-data/${gridSize}_columnDefs.json`);

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            columnDefs: columnDefs,
            rowData: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/rowData`)
            .then(data => data.json())
            .then(rowData => {
                this.setState({
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