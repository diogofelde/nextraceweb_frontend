
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function OSINT() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: '20px', flex: 1 }}>
          <h2>OSINT</h2>
          <p>Painel operacional para a equipe de OSINT.</p>
        </div>
      </div>
    </div>
  );
}
