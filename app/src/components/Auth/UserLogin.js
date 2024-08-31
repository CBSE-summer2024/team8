import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputField from '../Shared/InputField'; 
import StandardButton from '../Shared/StandardButton'; 
import { loginUser } from '../../store/authSlice'; 
import logo from '../../assets/logo.png';
import './UserLogin.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFormValid = email && password;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate('/HomePage');  // Ensure that '/HomePage' matches your route configuration
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <h4>Log in to your account</h4>
      <form onSubmit={handleLogin}>
        <InputField
          value={email}
          onChange={(value) => setEmail(value)} 
          type="email"
          placeholder="Enter your Email"
          errorMessage="Invalid email"
        />
        <InputField
          value={password}
          onChange={(value) => setPassword(value)} 
          type="password"
          placeholder="Enter your Password"
          errorMessage="Password is required"
        />
        <StandardButton disabled={!isFormValid}>Log in</StandardButton>
      </form>
      <p>
        Don't have an account?
        <a href="/RegistrationPage" className="link">Register new account</a>
      </p>
    </div>
  );
};

export default UserLogin;
