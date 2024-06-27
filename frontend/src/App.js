import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [url, setUrl] = useState('');
  const [hashedUrl, setHashedUrl] = useState('');
  const [usageLimit, setUsageLimit] = useState(Infinity);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5001/generate', { 
      originalUrl: url,
      usageLimit: usageLimit === '' ? Infinity : usageLimit
    });
    setHashedUrl(response.data.hashedUrl);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>URL Hasher</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
            <input type="number" placeholder="Usage Limit" value={usageLimit} onChange={(e) => setUsageLimit(e.target.value || Infinity)} min="1" />
            <button type="submit">Generate</button>
          </form>
          {hashedUrl && (
            <div>
              <p>Hashed URL: <a href={`http://localhost:5001/a/${hashedUrl}`} target="_blank" rel="noopener noreferrer" className="hashed-link">{`http://localhost:5001/a/${hashedUrl}`}</a></p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
