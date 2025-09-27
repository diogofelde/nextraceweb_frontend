import { useState } from 'react';
import { login } from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const token = await login(email, senha);
      localStorage.setItem('token', token);
      alert('✅ Login realizado com sucesso!');
      window.location.href = '/dashboard';
    } catch (err) {
      alert('❌ Erro ao logar. Verifique suas credenciais.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
