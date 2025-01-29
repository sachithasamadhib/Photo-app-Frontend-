import React, { useState } from 'react';
import './Login.css';

const SocialLogin = () => {
    return (
      <div className="social-login">
        <button className="social-button">
          <img src="google.svg" alt="Google" className="social-icon" />
          Google
        </button>
        <button className="social-button">
          <img src="Apple.jpeg" alt="Apple" className="social-icon" />
          Apple
        </button>
      </div>
    )
  }
  export default SocialLogin;