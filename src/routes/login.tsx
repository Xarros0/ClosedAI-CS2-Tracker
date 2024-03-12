import React, { useState } from 'react';
import Navbar from '../components/navbar';
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can implement your login logic, for simplicity, I'll just check if username and password are not empty
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
      <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, height: '1000px', width: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ color: '#FFBA08', marginBottom: '20px' }}>LOG IN</h1>
        {loggedIn ? (
          <p>You are logged in!</p>
        ) : (
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              style={{ backgroundColor: '#3F88C5', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '10px', width: '60%'}}
            >
              Login
            </button>
            <p style={{ color: 'white', marginTop: '10px' }}>
              Don't have an account? <a href="#" style={{ color: '#FFBA08', textDecoration: 'underline' }}>Sign up</a>
            </p>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default Login;