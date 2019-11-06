import React from 'react';
import * as PropTypes from 'prop-types';

export default class SimpleCellRenderer extends React.Component {
    render() {
        return (
            <span className="simple-cell-renderer">{this.props.value}</span>
        );
    }
}

SimpleCellRenderer.propTypes = {
    params: PropTypes.object
};