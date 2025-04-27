import React, { useState } from 'react';

const ListeningPractice = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [userResponse, setUserResponse] = useState('');
  const [showEvaluation, setShowEvaluation] = useState(false);

  const exercises = [
    {
      id: 1,
      title: "Menjaga Kontak Mata",
      description: "Berlatihlah fokus pada menjaga kontak mata yang tepat selama percakapan.",
      scenario: "Teman Anda menceritakan pengalaman liburan mereka baru-baru ini.",
      conversation: [
        "Saya baru saja kembali dari perjalanan yang luar biasa ke Thailand. Pantainya sangat menakjubkan, dan makanannya luar biasa!",
        "Kami mengunjungi Bangkok terlebih dahulu, yang sangat hidup dan ramai dalam cara yang terbaik. Kuilnya luar biasa, terutama Budha berbaring di Wat Pho.",
        "Kemudian kami menuju selatan ke Krabi dan naik perahu ke beberapa pulau kecil. Tebing kapur yang menjulang dari air berwarna pirus itu benar-benar memukau.",
        "Bagian terbaiknya mungkin adalah makanan jalanan. Saya mencoba semuanya mulai dari pad thai dari gerobak kecil hingga makanan penutup mangga dengan nasi ketan yang lezat.",
        "Saya sudah merencanakan perjalanan saya berikutnya. Mungkin lain kali saya akan pergi ke utara ke Chiang Mai. Apakah Anda pernah ke Thailand?"
      ],
      questions: [
        {
          question: "Kota mana yang pertama kali mereka kunjungi?",
          options: ["Phuket", "Bangkok", "Chiang Mai", "Krabi"],
          correctAnswer: "Bangkok"
        },
        {
          question: "Makanan penutup apa yang mereka sebutkan telah dicoba?",
          options: ["Pisang goreng", "Es krim kelapa", "Mangga dengan nasi ketan", "Puding teh Thai"],
          correctAnswer: "Mangga dengan nasi ketan"
        },
        {
          question: "Kuil mana yang secara khusus mereka sebutkan telah dikunjungi?",
          options: ["Kuil Buddha Emerald", "Wat Arun", "Wat Pho", "Kuil Putih"],
          correctAnswer: "Wat Pho"
        }
      ],
      tips: [
        "Fokus pada menjaga kontak mata yang alami sepanjang percakapan",
        "Hindari melihat ponsel Anda atau terganggu oleh lingkungan sekitar",
        "Tidak apa-apa sesekali melihat ke arah lain, tetapi kembalikan pandangan Anda untuk menunjukkan perhatian"
      ]
    },
    {
      id: 2,
      title: "Mencondongkan Badan ke Depan",
      description: "Berlatihlah menunjukkan keterlibatan dengan sedikit mencondongkan badan ke depan selama percakapan penting.",
      scenario: "Seorang rekan kerja berbagi pembaruan pekerjaan penting dengan Anda.",
      conversation: [
        "Saya ingin memberi tahu Anda tentang beberapa perubahan yang akan datang pada jadwal proyek kita. Klien telah meminta fitur tambahan yang akan berdampak pada tanggal pengiriman kita.",
        "Kita perlu menunda peluncuran sekitar dua minggu, yang berarti semua tonggak pencapaian kita akan bergeser sesuai dengan itu.",
        "Kabar baiknya adalah mereka telah menyetujui anggaran tambahan untuk pekerjaan ini, jadi kita tidak perlu mengorbankan kualitas.",
        "Fitur baru ini sebenarnya cukup menarik - ini adalah dasbor interaktif yang akan membantu pengguna memvisualisasikan data mereka dengan lebih efektif.",
        "Saya akan mengirimkan jadwal yang diperbarui hari ini, tetapi saya ingin memberi tahu Anda terlebih dahulu. Apakah Anda memiliki kekhawatiran tentang perubahan jadwal?"
      ],
      questions: [
        {
          question: "Berapa lama peluncuran proyek akan ditunda?",
          options: ["Satu minggu", "Dua minggu", "Satu bulan", "Tanggal peluncuran tidak akan berubah"],
          correctAnswer: "Dua minggu"
        },
        {
          question: "Apa fitur baru yang akan ditambahkan?",
          options: ["Integrasi aplikasi seluler", "Dasbor interaktif", "Pemrosesan pembayaran", "Otentikasi pengguna"],
          correctAnswer: "Dasbor interaktif"
        },
        {
          question: "Aspek positif apa yang mereka sebutkan tentang perubahan tersebut?",
          options: ["Persetujuan anggaran tambahan", "Jadwal yang lebih singkat", "Fitur yang lebih sedikit diperlukan", "Anggota tim baru"],
          correctAnswer: "Persetujuan anggaran tambahan"
        }
      ],
      tips: [
        "Condongkan sedikit badan ke depan untuk menunjukkan minat pada apa yang dikatakan",
        "Jaga postur Anda tetap terbuka dan santai, tidak kaku atau tidak wajar terlalu dekat",
        "Kombinasikan ini dengan isyarat mendengarkan lain seperti sesekali mengangguk"
      ]
    }
  ];

  const handleNextStep = () => {
    if (currentStep < activeExercise.conversation.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowEvaluation(true);
    }
  };

  const handleAnswerSubmit = () => {
    // Logic would be more complex in a real application
    setUserResponse('');
  };

  const resetExercise = () => {
    setCurrentStep(1);
    setUserResponse('');
    setShowEvaluation(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Latihan Mendengarkan</h2>
      <p className="text-gray-600 mb-8">
        Latihan-latihan ini akan membantu Anda mengembangkan keterampilan mendengarkan yang efektif melalui praktik teknik-teknik kunci seperti
        menjaga kontak mata, mencondongkan badan ke depan, mengajukan pertanyaan, dan memproses dengan penuh perhatian apa yang Anda dengar.
      </p>
      
      {!activeExercise ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            {!showEvaluation ? (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Percakapan ({currentStep}/{activeExercise.conversation.length}):
                </h4>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                  <p className="text-gray-700">"{activeExercise.conversation[currentStep - 1]}"</p>
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    {currentStep < activeExercise.conversation.length ? "Lanjut" : "Selesai Mendengarkan"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-4">Pemeriksaan Pemahaman Mendengarkan:</h4>
                
                {activeExercise.questions.map((q, index) => (
                  <div key={index} className="mb-6 bg-gray-50 p-4 rounded-md border border-gray-200">
                    <p className="font-medium text-gray-800 mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`q${index}-opt${optIndex}`}
                            name={`question-${index}`}
                            className="mr-2"
                          />
                          <label htmlFor={`q${index}-opt${optIndex}`} className="text-gray-700">{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={resetExercise}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-300 transition-colors"
                  >
                    Mulai Ulang Latihan
                  </button>
                  <button
                    onClick={handleAnswerSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    Kirim Jawaban
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListeningPractice;