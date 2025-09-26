import { useEffect, useState } from 'react';
import { getMe, getAdminDashboard } from '../services/api';

export default function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    getMe().then(setUsuario);
    getAdminDashboard().then(setAdminData);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {usuario && <p>Bem-vindo, {usuario.username}</p>}
      {adminData && <p>{adminData.message}</p>}
    </div>
  );
}
