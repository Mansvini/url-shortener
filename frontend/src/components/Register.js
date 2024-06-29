import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}api/auth/register`, { username, password });
      alert('Registration successful, please log in.');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h3>Register</h3>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br/>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;