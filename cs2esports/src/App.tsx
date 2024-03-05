import React from 'react';
import './App.css';
import Login from './routes/login'; // Import the login component (assuming it's exported as Login)
import Navbar from './components/navbar'; // Import the navbar component (assuming it's exported as navbar)
import Signup from './routes/signup'; // Import the signup component (assuming it's exported as Signup)
function App() {
  return (
    <div className="App">
      
        <Login/> {/* Render the login component */}
       
    </div>
  );
}

export default App;
