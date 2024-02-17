//import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { app } from '../firebase';
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';


const SignUp = () => {
  const navigate=useNavigate();
  const firebaseCtx=useContext(FirebaseContext)
  console.log(firebaseCtx)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [username,setUsername]=useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email===''||password===''||number===''||username===''){
      alert('Please fill all the fields')
      return;
    }
    firebaseCtx.signupUserWithEmailAndPassword(email,password,number,username).then((res)=>{
      setEmail('')
      setNumber('')
      setPassword('')
      setUsername('')
      navigate('/')
    })
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
          <div className="input-container-sign">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </div>
          <h5>Already a user? <i className='italic' onClick={()=>{
            navigate('/signin')
          }}>Sign in</i></h5>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
