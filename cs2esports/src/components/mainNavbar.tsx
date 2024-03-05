import React from 'react';

const MainNavbar: React.FC = () => {
  const navbarStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust as needed
    backgroundColor: '#1C3144',
    height: '100px',
    width: '98%',
    padding: '0 20px',
    borderBottom: '2px solid black', 
  };

  const headingStyles: React.CSSProperties = {
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif'
  };

  const linkContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center'
  };

  const linkStyles: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '22px',
    marginLeft: '20px'
  };

  const searchContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center', // Align search bar to the center
    alignItems: 'center', // Vertically center the content
  };

  const searchInputStyles: React.CSSProperties = {
    marginRight: '20px',
    padding: '5px'
  };

  const searchButtonStyles: React.CSSProperties = {
    padding: '5px 10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none'
  };

  const imageStyles: React.CSSProperties = {
    width: '30px',
    height: 'auto',
    marginLeft: '10px'
  };

  return (
    <nav style={navbarStyles}>
      <h1 style={headingStyles}>CS2Esports</h1>
      <div style={linkContainerStyles}>
        <a href="/" style={linkStyles}>News</a>
        <a href="/events" style={linkStyles}>Events</a>
        <a href="/topteams" style={linkStyles}>Top teams</a>
        <a href="/topplayers" style={linkStyles}>Top players</a>
        <a href="/forum" style={linkStyles}>Forum</a>
      </div>
      <div style={searchContainerStyles}>
        <input type="text" placeholder="Search..." style={searchInputStyles} />
        <button style={searchButtonStyles}>Search</button>
      </div>
      <div style={linkContainerStyles}>
        <a href="#" style={linkStyles}>Sign up</a> {/* Adjust href accordingly */}
        <img
            src={'../settings.png'}
            alt="Profile"
            style={imageStyles}
          />      </div>
    </nav>
  );
};

export default MainNavbar;
