// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { SettingsContext } from '../context/SettingsContext';

// const DetailSurah = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { fontSize, updateLastRead } = useContext(SettingsContext);
  
//   const [surahData, setSurahData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Mengambil data detail surah berdasarkan nomor ID dari URL
//     fetch(`https://quran-api.santrikoding.com/api/surah/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setSurahData(data);
//         setLoading(false);
//       })
//       .catch((err) => console.error("Error fetch detail:", err));
//   }, [id]);

//   if (loading) return <div className="p-20 text-center text-emerald-500 animate-pulse text-xl">Membuka lembaran suci...</div>;

//   return (
//     <div className="min-h-screen bg-[#020617] pb-20">
//       {/* Header Detail */}
//       <div className="bg-[#0f172a] border-b border-emerald-900/30 p-6 sticky top-0 z-20 shadow-xl">
//         <div className="max-w-5xl mx-auto flex items-center justify-between">
//           <button onClick={() => navigate('/')} className="text-emerald-500 hover:text-emerald-400 font-medium flex items-center gap-2">
//             <span>←</span> Kembali
//           </button>
//           <div className="text-center">
//             <h1 className="text-2xl font-bold text-white uppercase tracking-widest">{surahData.nama_latin}</h1>
//             <p className="text-emerald-500 text-xs italic">{surahData.arti}</p>
//           </div>
//           <div className="text-emerald-400 font-arabic text-2xl">{surahData.nama}</div>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-6 mt-10 space-y-8">
//         {/* Loop Ayat dari API */}
//         {surahData.ayat.map((ayat) => (
//           <div 
//             key={ayat.id}
//             onClick={() => updateLastRead({ 
//                 nomor_surah: id, 
//                 nama_surah: surahData.nama_latin, 
//                 nomor_ayat: ayat.nomor 
//             })}
//             className="group bg-[#0f172a]/50 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all cursor-pointer"
//           >
//             <div className="flex justify-between items-start gap-8 mb-6">
//               <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-full text-emerald-500 text-sm font-bold border border-emerald-500/20">
//                 {ayat.nomor}
//               </div>
//               <p 
//                 className="text-white text-right font-arabic leading-[3.5rem]" 
//                 style={{ fontSize: `${fontSize}px` }}
//               >
//                 {ayat.ar}
//               </p>
//             </div>
            
//             <div className="space-y-4 border-l-2 border-emerald-500/20 pl-6">
//               {/* Transliterasi & Terjemahan */}
//               <p className="text-emerald-400/80 italic text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: ayat.tr }} />
//               <p className="text-slate-400 text-sm leading-relaxed">{ayat.idn}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DetailSurah;


import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SettingsContext } from '../context/SettingsContext';

const DetailSurah = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fontSize, updateLastRead } = useContext(SettingsContext);
  
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mengambil data detail surah (termasuk daftar ayat dan audio)
    fetch(`https://quran-api.santrikoding.com/api/surah/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSurahData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat detail surah:", err);
        setLoading(false);
      });
    
    // Scroll ke atas otomatis saat pindah surah
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-500 font-medium">Memuat Ayat Suci...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] pb-20">
      {/* 1. Sticky Header Detail */}
      <div className="bg-[#0f172a]/90 backdrop-blur-md border-b border-emerald-900/30 p-4 md:p-6 sticky top-0 z-30 shadow-2xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="hidden md:inline font-medium">Beranda</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest leading-none">
              {surahData.nama_latin}
            </h1>
            <p className="text-emerald-500 text-[10px] md:text-xs italic mt-1">
              {surahData.arti} • {surahData.jumlah_ayat} Ayat
            </p>
          </div>

          <div className="text-emerald-400 font-arabic text-2xl md:text-3xl">
            {surahData.nama}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* 2. Audio Player Section */}
        <div className="mt-8 mb-12">
          <div className="bg-gradient-to-r from-emerald-900/20 to-slate-900/40 border border-emerald-500/20 p-5 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-white text-2xl">🎧</span>
              </div>
              <div>
                <p className="text-white font-bold">Murottal Surah</p>
                <p className="text-emerald-500 text-xs">Putar audio penuh surah {surahData.nama_latin}</p>
              </div>
            </div>

            {/* Audio Source dari API */}
            <audio 
              controls 
              className="w-full md:w-1/2 h-10"
              src={surahData.audio}
            >
              Browser kamu tidak mendukung pemutar audio.
            </audio>
          </div>
        </div>

        {/* 3. Daftar Ayat */}
        <div className="space-y-10">
          {surahData.ayat.map((ayat) => (
            <div 
              key={ayat.id}
              onClick={() => updateLastRead({ 
                  nomor_surah: id, 
                  nama_surah: surahData.nama_latin, 
                  nomor_ayat: ayat.nomor 
              })}
              className="group relative bg-[#0f172a]/30 border border-slate-800/50 p-6 md:p-10 rounded-[2.5rem] hover:border-emerald-500/40 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-emerald-500/5"
            >
              {/* Nomor Ayat */}
              <div className="absolute -top-4 left-8 bg-[#020617] px-4 py-1 border border-slate-800 rounded-full">
                <span className="text-emerald-500 font-bold text-sm tracking-tighter">AYAT {ayat.nomor}</span>
              </div>

              {/* Teks Arab */}
              <div className="mb-8">
                <p 
                  className="text-white text-right font-arabic leading-[4rem] md:leading-[5rem] transition-all" 
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {ayat.ar}
                </p>
              </div>
              
              {/* Transliterasi & Terjemahan */}
              <div className="space-y-4 border-l-2 border-emerald-500/30 pl-6 md:pl-8">
                <p 
                  className="text-emerald-400/90 italic text-sm md:text-base leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: ayat.tr }} 
                />
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                  {ayat.idn}
                </p>
              </div>

              {/* Dekorasi Hover */}
              <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-emerald-500 font-mono">
                KLIK UNTUK PINDAH LAST READ
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSurah;