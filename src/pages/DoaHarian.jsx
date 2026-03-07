import React, { useState, useEffect } from 'react';

const DoaHarian = () => {
  const [doaList, setDoaList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Memanggil API List Doa yang stabil
    fetch('https://open-api.my.id/api/doa')
      .then(res => res.json())
      .then(data => {
        setDoaList(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal ambil doa:", err);
        setLoading(false);
      });
  }, []);

  // Filter doa berdasarkan input pencarian
  const filteredDoa = doaList.filter(item => 
    item.judul.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020617] pb-20 pt-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Kumpulan Doa</h1>
          <p className="text-emerald-500 italic text-sm mb-8">"Senjata Paling Ampuh Seorang Mukmin"</p>
          
          {/* Kolom Pencarian */}
          <div className="relative max-w-md mx-auto">
            <input 
              type="text"
              placeholder="Cari doa (misal: belajar, tidur)..."
              className="w-full bg-[#0f172a] border border-emerald-900/30 p-4 rounded-2xl text-white focus:outline-none focus:border-emerald-500 transition-all pl-12 shadow-xl"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute left-4 top-4 opacity-30 text-xl">🔍</span>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
            <p className="text-emerald-500 animate-pulse font-medium">Memuat doa-doa...</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredDoa.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#0f172a] border border-emerald-900/20 p-8 rounded-[2.5rem] hover:border-emerald-500/40 transition-all shadow-lg group"
              >
                {/* Judul Doa */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {item.judul}
                  </h3>
                  <span className="text-[10px] bg-slate-800 text-slate-500 px-3 py-1 rounded-full border border-slate-700">
                    ID: {item.id}
                  </span>
                </div>
                
                {/* Teks Arab */}
                <p className="text-white text-right font-arabic text-3xl leading-[4.5rem] mb-8">
                  {item.arab}
                </p>
                
                {/* Latin & Terjemah */}
                <div className="space-y-4 border-l-2 border-emerald-500/20 pl-6">
                  <p className="text-emerald-500/80 italic text-sm leading-relaxed">
                    {item.latin}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {item.terjemah}
                  </p>
                </div>
              </div>
            ))}

            {filteredDoa.length === 0 && (
              <div className="text-center py-20 text-slate-500 italic">
                Doa "{search}" tidak ditemukan.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoaHarian;