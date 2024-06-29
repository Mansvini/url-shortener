import React, { useState } from 'react';
import axios from 'axios';

const GenerateUrl = ({ token }) => {
  const [url, setUrl] = useState('');
  const [usageLimit, setUsageLimit] = useState(Infinity);
  const [hashedUrl, setHashedUrl] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        (process.env.API_URL+'generate'), 
        { 
            originalUrl: url, 
            usageLimit: usageLimit === '' ? Infinity : usageLimit 
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
      setHashedUrl(response.data.hashedUrl);
    } catch (error) {
      alert('Failed to generate URL');
    }
  };

  return (
    <>
        <form onSubmit={handleGenerate}>
            <h2>Generate Hashed URL</h2>
            <input type="text" placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
            <input type="number" placeholder="Usage Limit" value={usageLimit} onChange={(e) => setUsageLimit(e.target.value)} min="1"/>
            <button type="submit">Generate</button>
        </form>
        {hashedUrl && (
            <div>
                <p>Hashed URL: <a href={`${process.env.API_URL}tiny/${hashedUrl}`} target="_blank" rel="noopener noreferrer" className="hashed-link">{`${process.env.API_URL}tiny/${hashedUrl}`}</a></p>
            </div>
        )}
    </>
  );
};

export default GenerateUrl;