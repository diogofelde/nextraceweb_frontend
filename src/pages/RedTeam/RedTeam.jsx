
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function RedTeam() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: '20px', flex: 1 }}>
          <h2>RedTeam</h2>
          <p>Painel operacional para a equipe de RedTeam.</p>
        </div>
      </div>
    </div>
  );
}
