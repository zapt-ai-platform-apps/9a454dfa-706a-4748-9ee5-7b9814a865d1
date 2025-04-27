import React, { useState } from 'react';

const DailyChallenge = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  
  // This would normally come from an API or state management
  const challenge = {
    title: "Tantangan Mendengarkan Aktif",
    description: "Hari ini, berlatihlah mendengarkan aktif dengan seseorang. Pertahankan kontak mata, anggukkan kepala sesekali, dan ringkas apa yang mereka katakan sebelum merespons.",
    points: 15
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md p-5 text-white">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">Tantangan Hari Ini</h3>
        <span className="px-2 py-1 bg-blue-800 bg-opacity-50 rounded-full text-xs font-semibold">
          +{challenge.points} poin
        </span>
      </div>
      
      <p className="font-semibold mb-2">{challenge.title}</p>
      <p className="text-sm text-blue-100 mb-4">{challenge.description}</p>
      
      <button
        onClick={() => setIsCompleted(!isCompleted)}
        className={`w-full py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors ${
          isCompleted 
            ? 'bg-green-500 hover:bg-green-600' 
            : 'bg-white text-blue-700 hover:bg-blue-50'
        }`}
      >
        {isCompleted ? '✓ Selesai' : 'Tandai Selesai'}
      </button>
    </section>
  );
};

export default DailyChallenge;