import React from 'react';
import MainNavbar from './mainNavbar';

const playerRanking: React.FC = () => {
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
  
    return (
        <div style={foreground}>
            <MainNavbar />
            <h1>Player Ranking</h1>
            <p>This is the player ranking page</p>
        </div>
    );
};

export default playerRanking;