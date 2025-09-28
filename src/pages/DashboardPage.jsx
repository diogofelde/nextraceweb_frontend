import React, { useEffect, useState } from 'react';
import { getAdminDashboard } from '../services/api';

const DashboardPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAdminDashboard()
      .then(setData)
      .catch(() => alert('Erro ao carregar dashboard'));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Carregando...</p>}
    </div>
  );
};

export default DashboardPage;