import ReactDOM from 'react-dom';
import React from 'react';
import LargeGrid from './largeGrid.jsx';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';

document.addEventListener('DOMContentLoaded', ()=> {
    var container = document.getElementById('myAppContainer');
    ReactDOM.render(
        React.createElement(LargeGrid),
        container
    );
});
