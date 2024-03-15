import React from 'react';

const MainNavbar: React.FC = () => {
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

  return (
    <nav style={navbarStyles}>
      
      <div style={linkContainerStyles}>
      <h1 style={headingStyles}><a href="/" style={headingStyles}>CS2Esports</a></h1>
        <a href="/newscatalog" style={linkStyles}>News</a>
        <a href="/eventscatalog" style={linkStyles}>Events</a>
        <a href="/forumcatalog" style={linkStyles}>Forum</a>
      </div>
    </nav>
  );
};

export default MainNavbar;
