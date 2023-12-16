import React, { useState } from 'react';
import './Signup.css'; // Create this file for styling
import { signup } from './auth.slice';
import { useAppDispatch } from '../../common/hooks';


const Signup = () => {

  const dispatch = useAppDispatch()
  const [name, setName] = useState('');
  const [username, setUserame] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserameChange = (e) =>{
    setUserame(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Reset the form after submission
    if(password!==confirmPassword){
      alert("Passwords are not matching")
    }

   

    dispatch(signup({userName:username,password:password,email:email,name:name})).unwrap().then(()=>{
      setName('');
      setEmail('');
      setUserame('');
      setPassword('');
      setConfirmPassword('');
      alert('Registered successfully, Please Login')

    }).catch((e)=>{
      console.log('error',e)
      alert(e)
    })


  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUserameChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
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
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
