import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import GenerateUrl from './components/GenerateUrl';
import './App.css';

function App() {

  const [token, setToken] = useState(null);

  const handleLogout = () => {
    setToken(null);
    alert('You have been logged out.');
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>URL Hasher</h1>
        {!token ? (
          <>
            <Register/>
            <p>OR</p>
            <Login setToken={setToken} />
          </>
        ) : (
          <>
            <GenerateUrl token={token} />
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;