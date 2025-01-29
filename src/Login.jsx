import React, { useState } from 'react';
import './component/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();

      
      try {
        const response = await axios.post('http://localhost:8080/api/login', { email, password });
        alert(response.data); 
        if (response.data === "Login successful") {
            navigate('/dashboard');
        }
    } catch (error) {
        if (error.response && error.response.data) {
            alert('Login failed: ' + JSON.stringify(error.response.data));
        } else {
            alert('Login failed: ' + error.message);
        }
    }
    };

    return (

<div className="login-container">
<h2 className="form-title">Log in with</h2>
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
  <br /><br />
  <button type="submit" className="login-button">Log In</button>
 
</form>

<p className="signup-prompt">
  Don&apos;t have an account? <a href="/register" className="signup-link">Sign up</a>
</p>
</div>
    );
};

export default Login;
