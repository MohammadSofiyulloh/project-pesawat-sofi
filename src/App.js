import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dropdown1 from './components/Button/Dropdown1';
import Dropdown2 from './components/Button/Dropdown2';
import Dashboard from './components/Home/Dashboard';
import TabelTeknisBerkala from './components/Home/TabelTeknisBerkala/TabelTeknisBerkala';

function App() {
  return (
    <div className="h-max max-w-full bg-white p-1">
      <>
        <BrowserRouter>
          {/* <Home /> */}
          <Routes>
            <Route path="/dropdown1" element={<Dropdown1 />} />
            <Route path="/dropdown2" element={<Dropdown2 />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tabel-teknis-berkala" element={<TabelTeknisBerkala />} />
            {/* <Route path="/gocar" element={<GoCar />} /> */}
            {/* <Route path="/goride" element={<GoRide />} /> */}
            <Route path="*" element={<div>505</div>} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;