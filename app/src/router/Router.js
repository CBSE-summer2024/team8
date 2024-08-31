import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/RegistrationPage" element={<RegistrationPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
