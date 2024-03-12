import React from 'react';
import MainNavbar from './mainNavbar';

const events: React.FC = () => {
    const foreground: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '94%',
        height: '100%',
        background: '#A2AEBB',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
    };

    const eventBox: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '95%',
        height: '85%',
        background: '#D9D9D9',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
    };

    const titleStyling: React.CSSProperties = {
        marginTop: '50px',
        fontWeight: 'bold',
        marginLeft: '10px',
        color: '#000000',
    };

    const eventTitleStyling: React.CSSProperties = {
        fontWeight: 'bold',
        marginLeft: '10px',
        color: '#000000',
        fontSize: '30px',
        textDecoration: 'none',
    };

    return (
        <div style={foreground}>
            <MainNavbar />
            <div>
                <h1 style={titleStyling}>Asia RMR 2024</h1>
                <div style={eventBox}>
                    <h2 style={eventTitleStyling}>Prize distribution</h2>
                </div>
            </div>
        </div>
    );
};

export default events;
