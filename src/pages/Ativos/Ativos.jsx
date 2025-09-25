
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function Ativos() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: '20px', flex: 1 }}>
          <h2>Ativos</h2>
          <p>Painel operacional para a equipe de Ativos.</p>
        </div>
      </div>
    </div>
  );
}
