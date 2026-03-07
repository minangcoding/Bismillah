import React from 'react';

const SurahCard = ({ surah, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-[#0f172a] border border-emerald-900/30 p-5 rounded-2xl cursor-pointer hover:border-emerald-500 transition-all group shadow-lg"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Nomor Surah */}
          <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-lg text-emerald-500 font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            {surah.nomor}
          </div>
          
          <div>
            {/* Nama Latin & Arti */}
            <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">
              {surah.nama_latin}
            </h3>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">
              {surah.arti} • {surah.jumlah_ayat} Ayat
            </p>
          </div>
        </div>

        <div className="text-right">
          {/* Nama Arab */}
          <h2 className="text-emerald-400 font-arabic text-2xl mb-1">
            {surah.nama}
          </h2>
          <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full border border-slate-700">
            {surah.tempat_turun.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SurahCard;