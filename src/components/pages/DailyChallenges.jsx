import React, { useState } from 'react';

const DailyChallenges = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [todayChallenge, setTodayChallenge] = useState({
    id: 1,
    title: "Tantangan Mendengarkan Aktif",
    description: "Berlatihlah mendengarkan aktif dalam setidaknya dua percakapan hari ini. Pertahankan kontak mata, condongkan badan sedikit ke depan, dan ajukan pertanyaan lanjutan yang menunjukkan Anda benar-benar terlibat.",
    tips: [
      "Singkirkan ponsel dan gangguan lainnya",
      "Tahan keinginan untuk menyela atau merencanakan respons Anda saat mereka berbicara",
      "Ringkas apa yang mereka katakan sebelum menanggapi"
    ],
    completed: false,
    points: 15
  });
  
  const [upcomingChallenges] = useState([
    {
      id: 2,
      title: "Tantangan Pujian Tulus",
      description: "Berikan setidaknya tiga pujian tulus dan spesifik kepada orang yang berbeda. Fokus pada tindakan atau pilihan mereka daripada hanya penampilan.",
      scheduled: "Besok"
    },
    {
      id: 3,
      title: "Urutan Pertanyaan Ya",
      description: "Praktikkan teknik 'pertanyaan ya' dengan memulai dengan pertanyaan yang akan mendapatkan persetujuan sebelum membuat permintaan.",
      scheduled: "Dalam 2 hari"
    },
    {
      id: 4,
      title: "Praktik Kesan Pertama",
      description: "Untuk setiap orang baru yang Anda temui hari ini, praktikkan membuat kesan pertama yang positif menggunakan teknik yang telah Anda pelajari.",
      scheduled: "Dalam 3 hari"
    }
  ]);
  
  const [completedChallenges] = useState([
    {
      id: 101,
      title: "Ungkapan Syukur",
      description: "Ungkapkan rasa syukur yang spesifik dan detail kepada seseorang yang telah membantu Anda baru-baru ini.",
      completed: "Kemarin",
      points: 15
    },
    {
      id: 102,
      title: "Memulai Percakapan",
      description: "Mulai percakapan dengan tiga orang berbeda dengan fokus pada minat mereka.",
      completed: "3 hari yang lalu",
      points: 10
    },
    {
      id: 103,
      title: "Komunikasi Non-verbal",
      description: "Praktikkan mempertahankan bahasa tubuh terbuka dalam semua interaksi Anda hari ini.",
      completed: "5 hari yang lalu",
      points: 10
    }
  ]);

  const tabs = [
    { id: 'today', label: 'Tantangan Hari Ini' },
    { id: 'upcoming', label: 'Mendatang' },
    { id: 'completed', label: 'Selesai' }
  ];

  const handleCompleteChallenge = () => {
    setTodayChallenge({
      ...todayChallenge,
      completed: !todayChallenge.completed
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tantangan Harian</h2>
      <p className="text-gray-600 mb-8">
        Latihan rutin sangat penting untuk menguasai keterampilan berkomunikasi. Tantangan harian ini 
        menyediakan aktivitas terfokus untuk membantu Anda menerapkan apa yang telah Anda pelajari dalam situasi kehidupan nyata.
      </p>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="border-b">
          <div className="flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'today' && (
            <div>
              <div className={`rounded-lg overflow-hidden ${
                todayChallenge.completed ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className={`p-5 ${
                  todayChallenge.completed ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <div className="flex justify-between items-start">
                    <h3 className={`text-xl font-bold ${
                      todayChallenge.completed ? 'text-green-800' : 'text-blue-800'
                    }`}>
                      {todayChallenge.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      todayChallenge.completed 
                        ? 'bg-green-200 text-green-800' 
                        : 'bg-blue-200 text-blue-800'
                    }`}>
                      +{todayChallenge.points} poin
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className={`mb-6 ${
                    todayChallenge.completed ? 'text-green-700' : 'text-blue-700'
                  }`}>
                    {todayChallenge.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`font-medium mb-2 ${
                      todayChallenge.completed ? 'text-green-800' : 'text-blue-800'
                    }`}>
                      Tips untuk Sukses:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {todayChallenge.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={handleCompleteChallenge}
                    className={`w-full py-3 rounded-md text-sm font-semibold cursor-pointer transition-colors ${
                      todayChallenge.completed 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {todayChallenge.completed ? '✓ Selesai! (Ketuk untuk Batalkan)' : 'Tandai Selesai'}
                  </button>
                </div>
              </div>
              
              {todayChallenge.completed && (
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">Refleksi (Opsional)</h4>
                  <p className="text-gray-700 mb-3">
                    Luangkan waktu sejenak untuk merefleksikan pengalaman Anda dapat membantu memperkuat pembelajaran Anda:
                  </p>
                  <textarea 
                    className="w-full p-3 border border-green-300 rounded-md box-border mb-3" 
                    rows="4"
                    placeholder="Bagaimana tantangan itu berjalan? Apa yang Anda pelajari? Apa yang mungkin Anda lakukan secara berbeda lain kali?"
                  ></textarea>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-green-700 transition-colors">
                    Simpan Refleksi
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'upcoming' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tantangan Mendatang</h3>
              <p className="text-gray-600 mb-6">
                Lihat pratinjau apa yang akan datang dalam jadwal tantangan Anda. Setiap hari membawa kesempatan baru untuk berlatih dan meningkatkan keterampilan berkomunikasi Anda.
              </p>
              
              <div className="space-y-4">
                {upcomingChallenges.map(challenge => (
                  <div key={challenge.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">{challenge.title}</h4>
                      <span className="bg-gray-200 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                        {challenge.scheduled}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Personalisasi Tantangan Anda</h4>
                <p className="text-gray-700 mb-3">
                  Apakah Anda ingin fokus pada keterampilan berkomunikasi tertentu? Kami dapat menyesuaikan tantangan mendatang Anda.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                  Sesuaikan Fokus Tantangan
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'completed' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Riwayat Tantangan</h3>
              <p className="text-gray-600 mb-6">
                Tinjau tantangan yang telah Anda selesaikan dan keterampilan yang telah Anda latih. Usaha konsisten Anda membangun keterampilan berkomunikasi yang bertahan lama.
              </p>
              
              <div className="space-y-4">
                {completedChallenges.map(challenge => (
                  <div key={challenge.id} className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">{challenge.title}</h4>
                      <div className="flex items-center">
                        <span className="bg-green-200 px-2 py-1 rounded-full text-xs font-medium text-green-800 mr-2">
                          +{challenge.points}
                        </span>
                        <span className="text-xs text-gray-500">
                          {challenge.completed}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Statistik Tantangan Anda</h4>
                    <p className="text-gray-600 text-sm">Anda membangun kebiasaan yang sangat baik!</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">3 tantangan minggu ini</p>
                    <p className="text-gray-700 font-medium">35 total poin diperoleh</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyChallenges;