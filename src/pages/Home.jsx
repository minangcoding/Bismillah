import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import LastReadBanner from '../components/LastReadBanner';
import SurahCard from '../components/SurahCard';

const Home = () => {
  const [surahList, setSurahList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Memanggil API List Surah
    fetch('https://quran-api.santrikoding.com/api/surah')
      .then(res => res.json())
      .then(data => {
        setSurahList(data); // Simpan hasil response API ke state
        setLoading(false);
      })
      .catch(err => console.error("Gagal ambil data:", err));
  }, []);

  return (
    <div className="bg-dark min-h-screen pb-20">
      <Hero />
      <div className="max-w-7xl mx-auto px-6">
        <LastReadBanner />
        
        <h3 className="text-white text-2xl font-bold mb-6">Daftar Surah</h3>

        {loading ? (
          <div className="text-emerald-500 animate-pulse">Menjemput data suci...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Loop data dari API */}
            {surahList.map((item) => (
              <SurahCard 
                key={item.nomor} 
                surah={item} // Data tiap surah dikirim ke sini
                onClick={() => navigate(`/surah/${item.nomor}`)} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;