import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';

const SignIn = () => {
  const firebaseCtx = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Handle login logic here
    firebaseCtx.signInUser(email, password)
      .then(async (res) => {
        setEmail('')
        setPassword('')
        navigate('/')
      })
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-box">
        <h2>Login to Food Villa</h2>
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
        <h5>New user? <i className='italic' onClick={() => {
          navigate('/signup')
        }}>Sign up</i></h5>
        <button onClick={handleSubmit} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
