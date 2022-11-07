import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashBoard from './pages/DashBoard';
import Admanagement from './pages/AdManagement/index';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <GlobalStyle />
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/management" element={<Admanagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
