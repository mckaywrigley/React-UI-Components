import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className="action-button">
            <p>{props.text}</p>
        </div>
    );
}

export default ActionButton;