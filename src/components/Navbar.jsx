import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Fungsi untuk mengecek apakah menu sedang aktif
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Doa Harian', path: '/doa' },
    { name: 'Jadwal Sholat', path: '/jadwal-sholat' },
    { name: 'Tentang', path: '/about' },
  ];

  return (
    <nav className="bg-[#020617]/80 backdrop-blur-md border-b border-emerald-900/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
            <span className="text-white text-xl font-bold">ق</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
            Al-Qur'an <span className="text-emerald-500">Indonesia</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-all hover:text-emerald-400 ${
                isActive(item.path) ? 'text-emerald-500' : 'text-slate-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-emerald-900/20 p-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                isActive(item.path) ? 'text-emerald-500' : 'text-slate-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;