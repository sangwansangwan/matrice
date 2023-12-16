import React, { useState } from 'react';
import './Signup.css';
import { useAppDispatch } from '../../common/hooks';
import { login } from './auth.slice';

const Login = () => {

  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    // console.log('Username:', username);
    // console.log('Password:', password);

    dispatch(login({userId:username,password:password})).unwrap().then().catch((e)=>{
      console.log('error',e)
      alert(e)
    })
    
    // Reset the form after submission
    // setUsername('');
    // setPassword('');


  };

  return (
    <div className="signup-container">
    <h2 className="signup-title">Login</h2>
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="name"
          value={username} onChange={handleUsernameChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-input"
          required
        />
      </div>
 
      <div className="form-group">
        <button type="submit" className="form-button">
          Submit
        </button>
      </div>
    </form>
  </div>
  );
};

export default Login;
