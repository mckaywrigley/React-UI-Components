import React from 'react';
import './Header.css';
import './ImageThumbnail.js';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail/>
            <div className="text-content">
                <HeaderTitle/>
                <HeaderContent/>
            </div>
        </div>
    );
}

export default HeaderContainer;