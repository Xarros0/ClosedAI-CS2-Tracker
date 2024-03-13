import React, { useState } from 'react';
import Navbar from '../components/mainNavbar';

const Signup: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleSignup = () => {
    // Here you can implement your signup logic
    // For simplicity, I'll just check if all fields are filled and passwords match
    if (nickname && email && password && confirmPassword && password === confirmPassword) {
      setSignedUp(true);
      alert('Signed up successfully!');
    } else {
      alert('Please fill all fields correctly');
    }
  };

  return (
    <div> <Navbar/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, padding: '200px',height: '900px', width: '400px' }}>
        <h1 style={{ textAlign: 'center', color: '#FFBA08', marginBottom: '20px', fontSize: '32px' }}>SIGN UP</h1>
        {signedUp ? (
          <p style={{ textAlign: 'center' }}>You are signed up!</p>
        ) : (
          <form>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="nickname" style={{ display: 'block', marginBottom: '5px' }}>Nickname:</label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <button
              type="button"
              onClick={handleSignup}
              style={{ backgroundColor: '#3F88C5', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', width: '100%', borderRadius: '4px' }}
            >
              Sign up
            </button>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default Signup;
