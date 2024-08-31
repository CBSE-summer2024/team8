import React from 'react';
import UserLogin from '../components/Auth/UserLogin';
import './LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="login-page">
      <UserLogin />
    </div>
  );
};

export default LoginPage;
