import React from 'react';
import MainNavbar from '../components/mainNavbar';

const EventsCatalog: React.FC = () => {
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
        width: '95%',
        height: '350px',
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
                <h1 style={titleStyling}>Ongoing events:</h1>
                <div style={eventBox}>
                    <a href="/events">
                        <h2 style={eventTitleStyling}>Event 1</h2>
                    </a>
                </div>
            </div>
            <div style={{ marginTop: '0px' }}>
                <h1 style={titleStyling}>Upcoming events:</h1>
                <div style={eventBox}>
                    <a href="/events">
                        <h2 style={eventTitleStyling}>Event 2</h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventsCatalog;
