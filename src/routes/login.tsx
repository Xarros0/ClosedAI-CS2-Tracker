import React, { useState } from 'react';
import Navbar from '../components/navbar';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
      alert('Logged in successfully!');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#1C3144', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, padding: '130px', height: '900px', width: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: '#FFBA08', marginTop: '-90px', fontSize: '70px' }}>LOG IN</h1>
          {loggedIn ? (
            <p>You are logged in!</p>
          ) : (
            <form style={{ width: '100%' }}>
              <div style={{ marginBottom: '15px', width: '100%' }}>
                <label htmlFor="username" style={{ marginBottom: '5px' }}>Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '15px', width: '100%' }}>
                <label htmlFor="password" style={{ marginBottom: '5px' }}>Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <button
                type="button"
                onClick={handleLogin}
                style={{ backgroundColor: '#3F88C5', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '10px', width: '100%', borderRadius: '5px' }}
              >
                Login
              </button>
              <p style={{ color: 'white', marginTop: '10px', textAlign: 'center' }}>
                Don't have an account? <a href="/signup" style={{ color: '#FFBA08', textDecoration: 'underline' }}>Sign up</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
