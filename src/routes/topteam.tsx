import React from 'react';
import Navbar from '../components/mainNavbar';

interface TableColumn<T> {
  key: keyof T;
  label: string;
}

interface Team {
  name: string;
  points: number;
  rank: number;
}

const topteam: React.FC = () => {
  const teams: Team[] = [
    { name: 'Team A', points: 100, rank: 1 },
    { name: 'Team B', points: 80, rank: 2 },
    { name: 'Team C', points: 70, rank: 3 },
    // Add more teams as needed
  ];

  const columns: TableColumn<Team>[] = [
    { key: 'name', label: 'Team' },
    { key: 'points', label: 'Points' },
    { key: 'rank', label: 'Rank' }
  ];

  return (
    <div>
      <Navbar onSearch={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <div style={{ backgroundColor: '#1C3144', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, height: '800px', width: '1200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex', alignItems: 'center' }}>
          <h1 style={{ color: 'black', marginTop: '20px', marginLeft: '20px', fontSize: '40px', alignSelf: 'flex-start' }}>Top Teams:</h1>
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
                {teams.map((team, index) => (
                  <tr key={index}>
                    {columns.map((column, columnIndex) => (
                      <td key={columnIndex} style={{ border: '1px solid black', padding: '8px' }}>{String(team[column.key])}</td>
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

export default topteam;
