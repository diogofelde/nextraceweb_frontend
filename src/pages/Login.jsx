import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://nextraceweb-backend.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password: senha })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Erro desconhecido');

      localStorage.setItem('token', data.token);
      alert('✅ Login realizado com sucesso!');
      window.location.href = '/dashboard';
    } catch (err) {
      console.error('❌ Erro ao logar:', err);
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