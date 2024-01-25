import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-box">
        <h2>Register to Food Villa</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container-sign">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-container-sign">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-container-sign">
            <input
              type="number"
              placeholder="Phone no."
              value={number}
              onChange={(e)=>{setNumber(e.target.value)}}
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
