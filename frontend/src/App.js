import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import GenerateUrl from './components/GenerateUrl';
import './App.css';

function App() {

  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <div className="App-header">
        <h1>URL Hasher</h1>
        {!token ? (
          <div>
            <Register/>
            <p>OR</p>
            <Login setToken={setToken} />
          </div>
        ) : (
          <GenerateUrl token={token} />
        )}
      </div>
    </div>
  );
}

export default App;