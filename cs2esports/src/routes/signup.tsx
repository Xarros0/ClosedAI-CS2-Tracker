import React, { useState } from 'react';

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
    <div style={{ backgroundColor: '#1C3144', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, height: '1000px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ color: '#FFBA08', marginBottom: '20px' }}>SIGN UP</h1>
        {signedUp ? (
          <p>You are signed up!</p>
        ) : (
          <form>
            <div>
              <label htmlFor="nickname">Nickname:</label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleSignup}
              style={{ backgroundColor: '#3F88C5', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '10px' }}
            >
              Sign up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
