
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function BlueTeam() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: '20px', flex: 1 }}>
          <h2>BlueTeam</h2>
          <p>Painel operacional para a equipe de BlueTeam.</p>
        </div>
      </div>
    </div>
  );
}
