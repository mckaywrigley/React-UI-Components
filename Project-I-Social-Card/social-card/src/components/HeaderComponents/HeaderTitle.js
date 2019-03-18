import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h2>Lambda School</h2>
            <p>@LambdaSchool</p>
            <p>{moment().format("MMM Do YY")}</p>
        </div>
    );
}

export default HeaderTitle;