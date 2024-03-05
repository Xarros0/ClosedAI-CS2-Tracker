import React, { useState } from 'react';

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
    <div style={{ backgroundColor: '#1C3144', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      <div>
        <h1 style={{ color: '#FFBA08' }}>LOG IN</h1>
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
              style={{ backgroundColor: '#3F88C5', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '10px' }}
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
  );
};

export default Login;
