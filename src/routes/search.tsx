import React, { useState } from 'react';
import MainNavbar from '../components/mainNavbar';

const Search: React.FC = () => {
    const [playerResults, setPlayerResults] = useState<string[]>([]);
    const [teamResults, setTeamResults] = useState<string[]>([]);
    const [articleResults, setArticleResults] = useState<string[]>([]);

    const handleSearch = () => {
        // Here you can implement your search logic
        // For demonstration, I'll just set some sample results
        const samplePlayerResults: string[] = ['Player 1', 'Player 2', 'Player 3'];
        const sampleTeamResults: string[] = ['Team A', 'Team B', 'Team C'];
        const sampleArticleResults: string[] = ['Article 1', 'Article 2', 'Article 3'];

        setPlayerResults(samplePlayerResults);
        setTeamResults(sampleTeamResults);
        setArticleResults(sampleArticleResults);
    };

    return (
        <div style={foreground}>
            <MainNavbar onSearch={handleSearch} />
            <h1 style={{ marginTop: '50px' }}>Searched for:</h1>
            
            <div style={tableContainerStyles}>
                <h2></h2>
                <div style={tableStyles}>
                    <div style={headerRowStyles}>
                        <div style={headerCellStyles}>Players</div>
                    </div>
                    {playerResults.map((player, index) => (
                        <div key={index} style={rowStyles}>
                            <div style={cellStyles}>{player}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={tableContainerStyles}>
                <h2></h2>
                <div style={tableStyles}>
                    <div style={headerRowStyles}>
                        <div style={headerCellStyles}>Teams</div>
                    </div>
                    {teamResults.map((team, index) => (
                        <div key={index} style={rowStyles}>
                            <div style={cellStyles}>{team}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={tableContainerStyles}>
                <h2></h2>
                <div style={tableStyles}>
                    <div style={headerRowStyles}>
                        <div style={headerCellStyles}>Articles</div>
                    </div>
                    {articleResults.map((article, index) => (
                        <div key={index} style={rowStyles}>
                            <div style={cellStyles}>{article}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

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

const tableContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
};

const tableStyles: React.CSSProperties = {
    width: '1275px',
    height: '300px',
    background: '#D9D9D9',
};

const headerRowStyles: React.CSSProperties = {
    width: '100%',
    height: '96px',
    background: '#AFAFAF',
    display: 'flex',
    alignItems: 'center',
};

const headerCellStyles: React.CSSProperties = {
    flex: 1,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '47px',
    color: '#000000',
};

const rowStyles: React.CSSProperties = {
    width: '100%',
    height: '47px',
    display: 'flex',
    alignItems: 'center',
};

const cellStyles: React.CSSProperties = {
    flex: 1,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '47px',
    color: '#000000',
};

export default Search;
