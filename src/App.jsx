import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext'; // Pastikan sudah .jsx
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DetailSurah from './pages/DetailSurah';
import JadwalSholat from './pages/JadwalSholat';
import About from './pages/About';
import DoaHarian from './pages/DoaHarian';

function App() {
  return (
    <SettingsProvider>
      <Router>
        <div className="min-h-screen bg-[#020617] text-slate-100 font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surah/:id" element={<DetailSurah />} />
            {/* Placeholder untuk halaman baru */}
            <Route path='/jadwal-sholat' element={< JadwalSholat />}/>
            <Route path="/about" element={<About />} />
            <Route path="/doa" element={<DoaHarian />} />
          </Routes>
        </div>
      </Router>
    </SettingsProvider>
  );
}

export default App;