import React from 'react';

// Pastikan kamu sudah menginstal heroicons: npm install @heroicons/react
// Jika belum, kamu bisa pakai Unicode/Emoji sementara (sudah saya siapkan fallbacknya)

const About = () => {
  // Gunakan nama file sesuai yang ada di folder public
  const namaFileFoto = "foto untuk wisuda pakai background.png";
  const fotoPath = `/${namaFileFoto}`; 

  const handleSocial = (url) => {
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:arjunal.refido.akmal@gmail.com";
  };

  // Komponen Icon Sederhana (Menggunakan Unicode agar tidak perlu install library tambahan)
  const IconGit = () => <span className="text-lg">💻</span>;
  const IconLinkedIn = () => <span className="text-lg">🔗</span>;
  const IconEmail = () => <span className="text-lg">✉️</span>;

  return (
    <div className="min-h-screen bg-[#020617] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#0f172a] border border-emerald-900/30 rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Header Banner */}
          <div className="h-32 bg-gradient-to-r from-emerald-600 to-teal-900"></div>
          
          <div className="px-8 pb-10">
            {/* Bagian Foto Profil */}
            <div className="relative -mt-20 mb-6 flex justify-start">
              <div className="w-40 h-40 rounded-3xl border-8 border-[#020617] overflow-hidden bg-slate-800 shadow-2xl transition-transform hover:scale-105 duration-300">
                <img 
                  src={fotoPath} 
                  alt="Profil Refido Arjunal Akmal" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback jika file tidak ditemukan di folder public
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-5xl bg-slate-800 text-white font-bold">RAA</div>';
                  }}
                />
              </div>
            </div>
            
            {/* Info Profil */}
            <div className="mb-8">
              <h1 className="text-4xl font-black text-white mb-2 tracking-tight italic">Refido Arjunal Akmal</h1>
              <p className="text-emerald-500 font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                Software Engineer
              </p>
            </div>
            
            {/* Deskripsi */}
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
              <p className="italic">
                "Semoga bisa membantu."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                <div className="p-5 bg-[#020617]/50 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors flex items-center gap-4">
                  <div className="text-3xl">🛠️</div>
                  <div>
                    <h4 className="text-emerald-500 font-bold mb-1 text-xs uppercase tracking-widest">Keahlian</h4>
                    <p className="text-white text-sm">React.js, Tailwind CSS, API Integration</p>
                  </div>
                </div>
                <div className="p-5 bg-[#020617]/50 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors flex items-center gap-4">
                  <div className="text-3xl text-white">🐙</div>
                  <div>
                    <h4 className="text-emerald-500 font-bold mb-1 text-xs uppercase tracking-widest">GitHub</h4>
                    <p className="text-white text-sm">@minangcoding</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hubungi Saya Section with Icons */}
            <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap gap-4">
              <button 
                onClick={() => handleSocial("https://github.com/minangcoding/")}
                className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition-all text-sm flex items-center gap-2 shadow-lg group"
              >
                <IconGit />
                <span className="group-hover:translate-x-0.5 transition-transform">GitHub</span>
              </button>
              <button 
                onClick={() => handleSocial("https://www.linkedin.com/in/refido-arjunal-akmal/")}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all text-sm flex items-center gap-2 shadow-lg group"
              >
                <IconLinkedIn />
                <span className="group-hover:translate-x-0.5 transition-transform">LinkedIn</span>
              </button>
              <button 
                onClick={handleEmail}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all text-sm flex items-center gap-2 shadow-lg group"
              >
                <IconEmail />
                <span className="group-hover:translate-x-0.5 transition-transform">Email Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;