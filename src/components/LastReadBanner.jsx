import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import { Link } from 'react-router-dom';

const LastReadBanner = () => {
  const { lastRead } = useContext(SettingsContext);

  if (!lastRead) return null;

  return (
    <Link to={`/surah/${lastRead.nomor_surah}`} className="block mb-8">
      <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-600/20 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between hover:border-emerald-400 transition-all group">
        <div className="flex items-center gap-4">
          <div className="text-emerald-400 animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-widest font-bold">Lanjutkan Membaca</p>
            <h4 className="text-white font-semibold italic">Surah {lastRead.nama_surah} (Ayat {lastRead.nomor_ayat})</h4>
          </div>
        </div>
        <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
};

export default LastReadBanner;