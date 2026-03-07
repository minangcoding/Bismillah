import React from 'react';

const Hero = () => {
  return (
    <div className="relative py-16 px-6 overflow-hidden">
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500">
          <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Baca Al-Qur'an Lebih <span className="text-emerald-custom italic">Khusyuk</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
          Temukan kedamaian dalam setiap ayat. Dilengkapi dengan terjemahan Bahasa Indonesia.
        </p>
      </div>
    </div>
  );
};

export default Hero;