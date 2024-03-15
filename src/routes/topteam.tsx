import React, { useState, useEffect } from 'react';
import Navbar from '../components/mainNavbar';
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { getTeamRanking } from '../utils/graphql/queries';

interface TableColumn<T> {
  key: keyof T;
  label: string;
}

interface Team {
  id: string;
  name: string;
  points: number;
  place: number;
}

const TopTeam: React.FC = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await doGraphQLFetch(apiURL, getTeamRanking, {});
        const teamData: Team[] = response.getTeamRanking.map((item: {
          team: { id: string; name: string };
          points: number;
          place: number;
        }) => ({
          id: item.team.id,
          name: item.team.name,
          points: item.points,
          place: item.place
        }));
        setTeams(teamData);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  const columns: TableColumn<Team>[] = [
    { key: 'name', label: 'Team' },
    { key: 'points', label: 'Points' },
    { key: 'place', label: 'Place' }
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
    fontSize: '40px',
  };

  const headerCellStyle: React.CSSProperties = {
    width: '80%',
    height: '300px',
    padding: '20px',
    border: '1px solid black',
    overflowY: 'auto',
    background: '#D9D9D9',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const tableTitleStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse'
  };

  return (
    <div>
      <Navbar />
      <div>
        <div style={foreground}>
          <h1 style={titleStyle}>Top Teams:</h1>
          <div style={headerCellStyle}>
            <table style={tableTitleStyle}>
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

export default TopTeam;
