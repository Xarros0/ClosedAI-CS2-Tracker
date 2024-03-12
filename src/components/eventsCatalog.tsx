import React from 'react';
import MainNavbar from './mainNavbar';

const eventsCatalog: React.FC = () => {
    const foreground: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '94%',
        height: '2759px',
        background: '#A2AEBB',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
    };
  
    return (
        <div style={foreground}>
            <MainNavbar />
            <h1>Events Catalog</h1>
            <p>This is the events catalog page</p>
        </div>
    );
};

export default eventsCatalog;