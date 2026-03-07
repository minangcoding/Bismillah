import React, { useState, useEffect } from 'react';

const JadwalSholat = () => {
  const [jadwal, setJadwal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [kota, setKota] = useState("1301"); // Default: Jakarta (ID: 1301)
  
  const tanggal = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD

  useEffect(() => {
    setLoading(true);
    // Menggunakan API MyQuran untuk jadwal harian
    fetch(`https://api.myquran.com/v2/sholat/jadwal/${kota}/${tanggal.replace(/-/g, '/')}`)
      .then(res => res.json())
      .then(data => {
        setJadwal(data.data.jadwal);
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal ambil jadwal:", err);
        setLoading(false);
      });
  }, [kota, tanggal]);

  const SholatCard = ({ nama, waktu, ikon }) => (
    <div className="bg-[#0f172a] border border-emerald-900/30 p-6 rounded-2xl flex flex-col items-center gap-2 hover:border-emerald-500 transition-all shadow-lg">
      <span className="text-2xl">{ikon}</span>
      <span className="text-slate-400 text-xs uppercase tracking-widest">{nama}</span>
      <span className="text-white text-xl font-bold">{waktu}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] pb-20 pt-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Jadwal Sholat</h1>
          <p className="text-emerald-500 italic">Waktu Ibadah Hari Ini</p>
          <p className="text-slate-500 text-sm mt-2">{jadwal?.tanggal}</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <SholatCard nama="Imsak" waktu={jadwal.imsak} ikon="🌙" />
            <SholatCard nama="Subuh" waktu={jadwal.subuh} ikon="✨" />
            <SholatCard nama="Dzuhur" waktu={jadwal.dzuhur} ikon="☀️" />
            <SholatCard nama="Ashar" waktu={jadwal.ashar} ikon="🌤️" />
            <SholatCard nama="Maghrib" waktu={jadwal.maghrib} ikon="🌇" />
            <SholatCard nama="Isya" waktu={jadwal.isya} ikon="🌌" />
          </div>
        )}
        
        <div className="mt-10 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-center">
          <p className="text-slate-400 text-sm">
            Lokasi saat ini: <span className="text-emerald-400 font-bold">DKI Jakarta</span>
          </p>
          <p className="text-[10px] text-slate-600 mt-2 uppercase tracking-tighter">Data otomatis diperbarui setiap hari</p>
        </div>
      </div>
    </div>
  );
};

export default JadwalSholat;