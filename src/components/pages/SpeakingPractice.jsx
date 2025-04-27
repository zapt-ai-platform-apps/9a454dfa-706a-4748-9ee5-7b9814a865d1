import React, { useState } from 'react';

const SpeakingPractice = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [userResponse, setUserResponse] = useState('');
  const [feedback, setFeedback] = useState(null);

  const exercises = [
    {
      id: 1,
      title: "Bicarakan Minat Mereka",
      description: "Latih berbicara tentang minat orang lain untuk melibatkan mereka dalam percakapan.",
      scenario: "Rekan kerja Anda menyebutkan bahwa mereka menikmati hiking di akhir pekan. Bagaimana Anda akan merespons untuk menunjukkan minat dan menjaga percakapan tetap fokus pada mereka?",
      tips: [
        "Ajukan pertanyaan terbuka tentang pengalaman hiking mereka",
        "Tunjukkan keingintahuan yang tulus tentang apa yang mereka sukai dari hiking",
        "Kaitkan dengan minat mereka tanpa mengalihkan fokus ke diri Anda sendiri"
      ]
    },
    {
      id: 2,
      title: "Buat Orang Lain Merasa Penting",
      description: "Latih bahasa yang membuat orang lain merasa dihargai dan penting.",
      scenario: "Seorang anggota tim baru saja mempresentasikan proyek mereka kepada kelompok. Bagaimana Anda akan mengakui pekerjaan mereka dengan cara yang membuat mereka merasa penting?",
      tips: [
        "Akui aspek spesifik dari pekerjaan mereka yang mengesankan Anda",
        "Gunakan nama mereka saat memberikan umpan balik",
        "Tunjukkan penghargaan atas usaha dan waktu mereka"
      ]
    },
    {
      id: 3,
      title: "Menemukan Poin Kesepakatan",
      description: "Latih menemukan kesamaan dengan orang lain, bahkan dalam ketidaksepakatan.",
      scenario: "Anda tidak setuju dengan saran yang dibuat oleh seorang teman, tetapi ingin menjaga harmoni. Bagaimana Anda akan merespons sambil menemukan poin kesepakatan?",
      tips: [
        "Mulailah dengan mengakui bagian-bagian yang valid dari saran mereka",
        "Gunakan frasa seperti 'Saya setuju bahwa...' sebelum mengungkapkan pandangan yang berbeda",
        "Sarankan alternatif yang menggabungkan elemen dari ide mereka"
      ]
    }
  ];

  const handleSubmitResponse = () => {
    if (!userResponse.trim()) return;
    
    // This would normally involve more sophisticated analysis
    // For now, we'll provide basic feedback based on response length
    if (userResponse.length < 20) {
      setFeedback({
        status: 'needs-improvement',
        message: 'Cobalah untuk memberikan respons yang lebih rinci yang menunjukkan prinsip-prinsip dari latihan ini.'
      });
    } else if (userResponse.toLowerCase().includes('kamu') || userResponse.toLowerCase().includes('anda')) {
      setFeedback({
        status: 'good',
        message: 'Penggunaan bahasa "kamu/Anda" yang baik yang berfokus pada orang lain. Lanjutkan berlatih pendekatan ini.'
      });
    } else {
      setFeedback({
        status: 'excellent',
        message: 'Luar biasa! Respons Anda menunjukkan bahwa Anda memahami cara berinteraksi dengan orang lain secara efektif.'
      });
    }
  };

  const resetExercise = () => {
    setUserResponse('');
    setFeedback(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Latihan Berbicara</h2>
      <p className="text-gray-600 mb-8">
        Latihan-latihan ini akan membantu Anda berlatih teknik berbicara yang efektif yang berfokus pada minat orang lain, 
        membuat mereka merasa penting, dan membangun hubungan melalui pencarian kesamaan.
      </p>
      
      {!activeExercise ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exercises.map(exercise => (
            <div 
              key={exercise.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveExercise(exercise)}
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{exercise.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{exercise.description}</p>
                <button className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                  Mulai Latihan →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{activeExercise.title}</h3>
              <button 
                onClick={() => {
                  setActiveExercise(null);
                  resetExercise();
                }}
                className="text-white hover:text-blue-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-blue-100 mt-2">{activeExercise.description}</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Skenario:</h4>
              <p className="text-gray-700">{activeExercise.scenario}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Tips:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {activeExercise.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Respons Anda:</h4>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md box-border"
                rows="4"
                placeholder="Ketik respons Anda di sini..."
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                disabled={feedback !== null}
              ></textarea>
            </div>
            
            {feedback && (
              <div className={`mb-6 p-4 rounded-md ${
                feedback.status === 'needs-improvement' 
                  ? 'bg-yellow-50 text-yellow-800'
                  : feedback.status === 'good'
                    ? 'bg-blue-50 text-blue-800'
                    : 'bg-green-50 text-green-800'
              }`}>
                <h4 className="font-semibold mb-1">Umpan Balik:</h4>
                <p>{feedback.message}</p>
              </div>
            )}
            
            <div className="flex justify-end space-x-4">
              {feedback ? (
                <button
                  onClick={resetExercise}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-300 transition-colors"
                >
                  Coba Lagi
                </button>
              ) : (
                <button
                  onClick={handleSubmitResponse}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                  disabled={!userResponse.trim()}
                >
                  Kirim Respons
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakingPractice;