
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function Threatintel() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: '20px', flex: 1 }}>
          <h2>Threatintel</h2>
          <p>Painel operacional para a equipe de Threatintel.</p>
        </div>
      </div>
    </div>
  );
}
