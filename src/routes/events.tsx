import React from 'react';
import MainNavbar from '../components/mainNavbar';

const Events: React.FC = () => {
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

    const eventWinners: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 330px)',
        gap: '10px',
        height: '600px',
        width: '80%',
        background: '#FFBA08',
        border: '1px solid #000000',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        padding: '10px',
        gridAutoRows: '1fr',
        overflow: 'hidden',
    };

    const teamBox: React.CSSProperties = {
        background: '#A07400',
        color: 'white',
        border: '1px solid #000000',
        width: '310px',
        height: '200px',
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column', // Set flex direction to column
        justifyContent: 'space-between', // Space between the elements
    };

    const teamTextStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '40px',
    };

    const placementTextStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '40px',
    };

    return (
        <div style={foreground}>
            <MainNavbar />
            <div>
                <h1 style={titleStyling}>Asia RMR 2024</h1>
                <div style={eventBox}>
                    <h2 style={eventTitleStyling}>Prize distribution</h2>
                    <div style={eventWinners}>
                        <div style={teamBox}>
                            <span style={teamTextStyle}>TheMongolz</span>
                            <span style={placementTextStyle}>1st</span>     
                        </div>
                        <div style={teamBox}>
                            <span style={teamTextStyle}>Lynn Vision</span>
                            <span style={placementTextStyle}>2nd</span>
                        </div>
                        <div style={teamBox}>
                            <span style={teamTextStyle}>Grayhound</span>
                            <span style={placementTextStyle}>3rd</span>
                        </div>
                        <div style={teamBox}>
                            <span style={teamTextStyle}>Atox</span>
                            <span style={placementTextStyle}>4th</span>
                        </div>
                        <div style={teamBox}>
                            <span style={teamTextStyle}>JiJieHao</span>
                            <span style={placementTextStyle}>5-6th</span>
                        </div>
                        <div style={teamBox}>
                            <span style={teamTextStyle}>Tyloo</span>
                            <span style={placementTextStyle}>5-6th</span>
                        </div>
                        <div style={teamBox}>
                            <span style={teamTextStyle}>Twisted Minds</span>
                            <span style={placementTextStyle}>7-8th</span>
                        </div>
                        <div style={teamBox}>
                            <span style={teamTextStyle}>Mag</span>
                            <span style={placementTextStyle}>7-8th</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
