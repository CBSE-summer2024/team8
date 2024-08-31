import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputField from '../Shared/InputField';
import StandardButton from '../Shared/StandardButton';
import { registerUser } from '../../store/authSlice';
import logo from '../../assets/logo.png'; 
import './UserRegistration.css';

const UserRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // تحقق من صحة النموذج
  const isFormValid = firstName && lastName && email && password;

  // دالة التعامل مع التسجيل
  const handleRegister = async (e) => {
    e.preventDefault(); // منع الإرسال التلقائي للنموذج
    try {
      await dispatch(registerUser({ firstName, lastName, email, password })).unwrap();
      navigate('/HomePage'); // التوجيه إلى الصفحة الرئيسية بعد التسجيل الناجح
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="registration-container">
      <img src={logo} alt="Logo" className="logo" />
      <h4>Register new account</h4>
      <form onSubmit={handleRegister}>
        <InputField
          value={firstName}
          onChange={(value) => setFirstName(value)}
          type="text"
          placeholder="Enter First Name"
          errorMessage={firstName ? '' : 'First name is required'}
        />
        <InputField
          value={lastName}
          onChange={(value) => setLastName(value)}
          type="text"
          placeholder="Enter Last Name"
          errorMessage={lastName ? '' : 'Last name is required'}
        />
        <InputField
          value={email}
          onChange={(value) => setEmail(value)}
          type="email"
          placeholder="Enter Email"
          errorMessage={email.includes('@') ? '' : 'Invalid email address'}
        />
        <InputField
          value={password}
          onChange={(value) => setPassword(value)}
          type="password"
          placeholder="Enter Password"
          errorMessage={password ? '' : 'Password is required'}
        />
        <StandardButton type="submit" disabled={!isFormValid}>Register</StandardButton>
      </form>
      <p>
        Already have an account?{' '}
        <a href="/" className="link">Log In</a>
      </p>
    </div>
  );
};

export default UserRegistration;
