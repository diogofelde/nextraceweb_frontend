import { useState } from 'react';
import { login } from '../services/api';

export default function Login() {
  const [identificador, setIdentificador] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const t = await login(identificador, password);
      setToken(t);
      localStorage.setItem('token', t);
      alert('✅ Login realizado com sucesso!');
    } catch (err) {
      alert('❌ Erro ao logar');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email ou Matrícula" value={identificador} onChange={e => setIdentificador(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      {token && <p>Token: {token}</p>}
    </div>
  );
}
