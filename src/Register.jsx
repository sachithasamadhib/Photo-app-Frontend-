import React, { useState } from 'react';
import './component/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import SocialLogin from './component/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async  (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:8080/api/register', { email, password });
        alert(response.data); // Show success message
        if (response.data === "Registration successful") {
          navigate('/login'); // Redirect to login page
      }
    } catch (error) {
        if (error.response && error.response.data) {
            alert('Registration failed: ' + JSON.stringify(error.response.data));
        } else {
            alert('Registration failed: ' + error.message);
        }
    }
    
      };
    return (
        <div className="login-container">
           <h2 className="form-title">Sign up with</h2>
           <p className="separator"><span>or</span></p>
<form onSubmit={handleSubmit} className="login-form">

<div className="input-wrapper">
<input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="input-field"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="input-field"
                    onChange={(e) => setPassword(e.target.value)}
                />
  </div>
  <br /> <br />
  <button type="submit" className="login-button">Registor</button>
</form>
<p className="signup-prompt">
  Already have an account? <a href="/Login" className="signup-link">Log in</a>
</p>
        </div>
    );
    
};

export default Register;
