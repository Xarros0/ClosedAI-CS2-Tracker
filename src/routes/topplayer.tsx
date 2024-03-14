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

const TopPlayer: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const data = await doGraphQLFetch('/graphql', getPlayerRanking, {});
        const playerData = data.getPlayerRanking;
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

  return (
    <div>
      <Navbar onSearch={() => {}} />
      <div style={{ backgroundColor: '#1C3144', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, height: '800px', width: '1200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex', alignItems: 'center' }}>
          <h1 style={{ color: 'black', marginTop: '20px', marginLeft: '20px', fontSize: '40px', alignSelf: 'flex-start' }}>Top Players:</h1>
          <div style={{ width: '80%', height: '300px', padding: '20px', border: '2px solid white', borderRadius: '8px', overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} style={{ border: '1px solid #AFAFAF', padding: '8px', backgroundColor: '#AFAFAF', color: 'black' }}>{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index}>
                    {columns.map((column, columnIndex) => (
                      <td key={columnIndex} style={{ border: '1px solid black', padding: '8px' }}>{String(player[column.key])}</td>
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
