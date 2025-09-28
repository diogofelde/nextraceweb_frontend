import { useEffect, useState } from 'react';
import { getMe } from '../services/api';

export default function Dashboard() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    getMe()
      .then(setUsuario)
      .catch(() => {
        alert('❌ Sessão inválida ou expirada');
        window.location.href = '/login';
      });
  }, []);

  if (!usuario) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Bem-vindo, {usuario.username}</h2>
      <p>Email: {usuario.email}</p>
      <p>Equipe: {usuario.team}</p>
      <p>Permissões: {usuario.permissions}</p>
    </div>
  );
}
