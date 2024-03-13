import React, { useState } from 'react';

const MainNavbar: React.FC<{ onSearch: () => void }> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navbarStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1C3144',
    height: '50px',
    width: '100%',
    borderBottom: '2px solid black', 
    zIndex: 1,
  };

  const headingStyles: React.CSSProperties = {
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    WebkitTextStroke: '1px black',
    WebkitTextStrokeColor: 'black',
    textDecoration: 'none',
    paddingLeft: '20px',
  };

  const linkContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    color: 'white',
    marginLeft: '20px',
    marginRight: '20px',
  };

  const handleSearch = () => {
    onSearch();
    // You can implement additional search functionality here if needed
  };

  return (
    <nav style={navbarStyles}>
      
      <div style={linkContainerStyles}>
      <h1 style={headingStyles}><a href="/mainpage" style={headingStyles}>CS2Esports</a></h1>
        <a href="/newscatalog" style={linkStyles}>News</a>
        <a href="/eventscatalog" style={linkStyles}>Events</a>
        <a href="/topteam" style={linkStyles}>Top teams</a>
        <a href="/topplayer" style={linkStyles}>Top players</a>
        <a href="/forumcatalog" style={linkStyles}>Forum</a>
      </div>
      <div style={searchContainerStyles}>
        <input 
          type="text" 
          placeholder="Search..." 
          style={searchInputStyles} 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          onClick={handleSearch} 
          style={searchButtonStyles}
        >
          Search
        </button>
      </div>
      <div style={linkContainerStyles}>
        <a href="/login" style={linkStyles}>Sign in</a>
        <a href="/settings" style={linkStyles}>
          <img src={'./settings.png'} alt="settings" style={imageStyles}>
          </img>
        </a>
      </div>
    </nav>
  );
};

export default MainNavbar;
