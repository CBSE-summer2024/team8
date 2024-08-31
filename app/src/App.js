import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AppHeader from './components/Shared/AppHeader';
import AppFooter from './components/Shared/AppFooter';


const App = () => {
  return (
    <div id="app">
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
