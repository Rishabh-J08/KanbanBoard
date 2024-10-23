
import './App.css'
import { Dashboard } from './features/dashboard/Dashboard';
import MainLayout from './features/layout/MainLayout';

function App() {
 

  return (
    <div>
      <MainLayout children={undefined} />
      {/* Other components */}
      <Dashboard/>
    </div>
  );
}

export default App
