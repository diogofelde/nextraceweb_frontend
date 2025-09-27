import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona para /dashboard se estiver autenticado, senão para /login */}
        <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} />

        {/* Página de login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Página protegida */}
        <Route
          path="/dashboard"
          element={token ? <DashboardPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;