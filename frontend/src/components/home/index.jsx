
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import './Landing.css';
import Modal from '../modal/Modal';
import { useState } from 'react';

const LandingPage = () => {

  const [login,openLogin] = useState(false);
  const [signup,openSignup] = useState(false)

  const loginOpenModal = () =>{
    openLogin(true)
  }
  const loginCloseModal = () =>{
    openLogin(false)
  }

  const signupOpenModal = () =>{
    openSignup(true)
  }
  const signupCloseModal = () =>{
    openSignup(false)
  }

  return (
    <div className="landing-page">
      <header className="header">
        <img src="https://matrice.ai/assets/logo-329fd5a4.svg?w=300" width="300" height="60"/>
        <div className="company-name">Matrice.ai</div>
        <div className="header-buttons">

          <button className="login-button" onClick={loginOpenModal}>Login</button>
          <button className="signup-button" onClick={signupOpenModal}>Sign Up</button>

        </div>
      </header>
      <div className="content">
        <h1>Welcome</h1>
      </div>
      <Modal isOpen={login} onClose={loginCloseModal}>
        <Login />
      </Modal>
      <Modal isOpen={signup} onClose={signupCloseModal}>
        <Signup />
      </Modal>

    </div>
  );
};

export default LandingPage;
