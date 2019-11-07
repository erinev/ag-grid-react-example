import ReactDOM from 'react-dom';
import React from 'react';
import App from './app.jsx';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';

document.addEventListener('DOMContentLoaded', ()=> {
    var container = document.getElementById('app-container');
    ReactDOM.render(
        React.createElement(App),
        container
    );
});
