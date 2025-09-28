
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function Incidentes() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: '20px', flex: 1 }}>
          <h2>Incidentes</h2>
          <p>Painel operacional para a equipe de Incidentes.</p>
        </div>
      </div>
    </div>
  );
}
