import React, { useState, useEffect } from 'react';
import Navbar from '../components/mainNavbar';
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { getPlayerRanking } from '../utils/graphql/queries';

interface TableColumn<T> {
  key: keyof T;
  label: string;
}

interface Player {
  id: string;
  name: string;
  team: string;
  maps: number;
  rounds: number;
  kdDiff: number;
  kd: number;
  rating: number;
}

interface PlayerRankingResponse {
  getPlayerRanking: {
    player: {
      id: string;
      name: string;
    };
    teams: {
      id: string;
      name: string;
    }[];
    maps: number;
    rounds: number;
    kdDiff: number;
    kd: number;
    rating1: number;
  }[];
}

const TopPlayer: React.FC = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const data: PlayerRankingResponse = await doGraphQLFetch(apiURL, getPlayerRanking, {});
        console.log('Player data:', data);
        const playerData: Player[] = data.getPlayerRanking.map(playerRanking => ({
          id: playerRanking.player.id,
          name: playerRanking.player.name,
          team: playerRanking.teams.map(team => team.name).join(', '), // Assuming a player can belong to multiple teams
          maps: playerRanking.maps,
          rounds: playerRanking.rounds,
          kdDiff: playerRanking.kdDiff,
          kd: playerRanking.kd,
          rating: playerRanking.rating1 // Adjust this if the response field name is different
        }));
        setPlayers(playerData);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, []);

  const columns: TableColumn<Player>[] = [
    { key: 'name', label: 'Player' },
    { key: 'team', label: 'Team' },
    { key: 'maps', label: 'Maps' },
    { key: 'rounds', label: 'Rounds' },
    { key: 'kdDiff', label: 'K/D diff' },
    { key: 'kd', label: 'K/D' },
    { key: 'rating', label: 'Rating' }
  ];

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

  const titleStyle: React.CSSProperties = {
    color: 'black', 
    marginTop: '50px', 
    marginLeft: '20px', 
    fontSize: '32px',
  }

  const headerCellStyle: React.CSSProperties = {
    border: '1px solid #AFAFAF',
    padding: '8px',
    backgroundColor: '#AFAFAF',
    color: 'black',
  };

  const tableCellStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '8px',
  };

  const tableBoxStyle: React.CSSProperties = {
    width: '80%', 
    height: '300px', 
    padding: '20px', 
    border: '1px solid black',
    overflowY: 'auto',
    background: '#D9D9D9',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const tableTitleStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  }

  return (
    <div>
      <Navbar />
      <div>
        <div style={foreground}>
          <h1 style={titleStyle}>Top Players:</h1>
          <div style={tableBoxStyle}>
            <table style={tableTitleStyle}>
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} style={headerCellStyle}>{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index}>
                    {columns.map((column, columnIndex) => (
                      <td key={columnIndex} style={tableCellStyle}>{String(player[column.key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlayer;
