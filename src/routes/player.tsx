import React from 'react';
import Navbar from '../components/mainNavbar';

const Player: React.FC<{
    name: string;
    age: number;
    currentTeam: string;
    statistics: {
        rating: number;
        killsPerRound: number;
        headshots: number;
        mapsPlayed: number;
        deathsPerRound: number;
        roundsContributed: number;
    };
}> = ({ name, age, currentTeam, statistics }) => {
    return (
        <div style={{ backgroundColor: '#A2AEBB', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar onSearch={() => {}} />
            <div style={playerContainerStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/path/to/image.jpg" alt="Player" style={{ marginRight: '10px', width: '50px', height: '50px', borderRadius: '50%' }} />
                    <h2>{name}</h2>
                </div>
                <div><strong>Age:</strong> {age}</div>
                <div><strong>Current Team:</strong> {currentTeam}</div>
            </div>
            <div style={statsContainerStyles}>
                <h3>Statistics:</h3>
                <div><strong>Rating 2.0:</strong> {statistics.rating}</div>
                <div><strong>Kills Per Round:</strong> {statistics.killsPerRound}</div>
                <div><strong>Headshots:</strong> {statistics.headshots}</div>
                <div><strong>Maps Played:</strong> {statistics.mapsPlayed}</div>
                <div><strong>Deaths Per Round:</strong> {statistics.deathsPerRound}</div>
                <div><strong>Rounds Contributed (%):</strong> {statistics.roundsContributed}</div>
            </div>
        </div>
    );
};

// Styles
const playerContainerStyles: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    width: '1000px',
    margin: '20px auto',
        
    height: '200px',
    marginTop: '190px',
    fontSize: '20px',
};

const statsContainerStyles: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    width: '1000px',
    height: '300px',
    margin: '20px auto', // Center horizontally
    fontSize: '20px',
};

// Example player data
const playerData = {
    name: 'John Doe',
    age: 25,
    currentTeam: 'Team A',
    statistics: {
        rating: 1.5,
        killsPerRound: 0.8,
        headshots: 200,
        mapsPlayed: 50,
        deathsPerRound: 0.6,
        roundsContributed: 70,
    },
};

// Usage of Player component
const ExampleComponent: React.FC = () => {
    return <Player {...playerData} />;
};

export default ExampleComponent;
