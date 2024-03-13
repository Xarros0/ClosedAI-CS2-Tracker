import React from 'react';
import MainNavbar from '../components/mainNavbar'; // Assuming you have this component
import FazeLogo from '/faze.png'; // Assuming you have the logo image file

const Team: React.FC = () => {
    // Information about the team
    const teamInfo = {
        continent: 'Europe',
        teamName: 'FaZe',
        logo: FazeLogo,
        ranking: 1,
        weeksInTop30: 253,
        coach: "Filip 'Neo' Kubski"
    };

    return (
        <div>
            <MainNavbar onSearch={() => {}} />
            <div style={foreground}>
                <h1 style={{ marginTop: '140px', marginLeft: '350px',fontSize: '50px'}}>Team</h1>
                <div style={teamBoxStyles}>
                    <div style={teamInfoStyles}>
                        <div><strong>Continent:</strong> {teamInfo.continent}</div>
                        <div><strong>Team:</strong> {teamInfo.teamName}</div>
                        <div><strong>Ranking:</strong> #{teamInfo.ranking}</div>
                        <div><strong>Weeks in Top 30:</strong> {teamInfo.weeksInTop30}</div>
                        <div><strong>Coach:</strong> {teamInfo.coach}</div>
                    </div>
                    <img src={teamInfo.logo} alt="Team Logo" style={logoStyles} />
                </div>
            </div>
        </div>
    );
};

// Styles
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

const teamBoxStyles: React.CSSProperties = {
    marginTop: '20px',
    marginLeft: '350px',
    padding: '60px',
    width: '500px',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
};

const teamInfoStyles: React.CSSProperties = {
    flex: '1',
    fontSize: '30px',
    fontFamily: 'Arial, sans-serif',
    color: '#000000',
    
    lineHeight: '40px',
    textAlign: 'left',
    


};

const logoStyles: React.CSSProperties = {
    width: '50px',
    height: '50px',
    marginRight: '260px',
    marginTop: '-100px',
};

export default Team;
