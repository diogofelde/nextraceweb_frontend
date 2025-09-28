import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const token = localStorage.getItem('token');

  return (
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

      {/* Fallback para rotas inexistentes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;