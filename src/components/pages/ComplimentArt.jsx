import React, { useState } from 'react';

const ComplimentArt = () => {
  const [activeSection, setActiveSection] = useState('principles');

  const sections = [
    { id: 'principles', label: 'Prinsip' },
    { id: 'practice', label: 'Praktik' },
    { id: 'examples', label: 'Contoh' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Seni Memuji</h2>
      <p className="text-gray-600 mb-8">
        Pelajari cara memberikan pujian yang tulus dan berdampak yang memperkuat hubungan dan membuat orang lain merasa dihargai.
        Pujian yang disampaikan dengan baik dapat mengubah hari seseorang dan hubungan Anda dengan mereka.
      </p>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="border-b">
          <div className="flex">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-3 text-sm font-medium ${
                  activeSection === section.id
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          {activeSection === 'principles' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Prinsip Inti Pujian Efektif</h3>
              
              <div className="space-y-6 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fokus pada Tindakan, Bukan Hanya Sifat</h4>
                    <p className="text-gray-600">Puji apa yang orang lakukan daripada hanya siapa mereka. Ini mengakui pilihan dan usaha mereka.</p>
                    <div className="mt-2 flex">
                      <div className="flex-1 mr-2">
                        <p className="text-xs text-gray-500 mb-1">Alih-alih:</p>
                        <p className="text-sm text-red-600">"Kamu sangat pintar."</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Coba:</p>
                        <p className="text-sm text-green-600">"Cara kamu menganalisis masalah itu benar-benar mengesankan."</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Buat Spesifik dan Terperinci</h4>
                    <p className="text-gray-600">Pujian umum terasa kurang tulus. Pengamatan spesifik menunjukkan Anda benar-benar memperhatikan.</p>
                    <div className="mt-2 flex">
                      <div className="flex-1 mr-2">
                        <p className="text-xs text-gray-500 mb-1">Alih-alih:</p>
                        <p className="text-sm text-red-600">"Presentasi yang hebat."</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Coba:</p>
                        <p className="text-sm text-green-600">"Saya suka bagaimana kamu menggunakan cerita itu untuk mengilustrasikan poin utama—itu benar-benar membantu saya memahami konsepnya."</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Pastikan Ketulusan Penuh</h4>
                    <p className="text-gray-600">Hanya berikan pujian yang benar-benar Anda maksudkan. Ketidaktulusan mudah terdeteksi dan merusak kepercayaan.</p>
                    <div className="mt-2 flex">
                      <div className="flex-1 mr-2">
                        <p className="text-xs text-gray-500 mb-1">Hindari:</p>
                        <p className="text-sm text-red-600">Memuji hanya untuk mengisi keheningan atau mendapatkan bantuan</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Sebagai gantinya:</p>
                        <p className="text-sm text-green-600">Tunggu sesuatu yang benar-benar Anda kagumi, lalu ungkapkan penghargaan yang tulus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Ingat:</h4>
                <p className="text-gray-700">
                  Tujuan dari pujian adalah untuk membuat orang lain merasa benar-benar dihargai dan diakui,
                  bukan untuk mendapatkan sesuatu untuk diri sendiri. Ketika diberikan dengan niat yang tepat, pujian memperkuat
                  koneksi dan menciptakan suasana positif.
                </p>
              </div>
            </div>
          )}
          
          {activeSection === 'practice' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skenario Praktik</h3>
              <p className="text-gray-600 mb-6">
                Untuk setiap skenario, buatlah pujian yang spesifik dan tulus mengikuti prinsip-prinsip yang telah Anda pelajari.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Skenario 1: Rekan Kerja</h4>
                  <p className="text-gray-700 mb-4">
                    Seorang rekan kerja baru saja memberikan presentasi yang jelas, terorganisir dengan baik, dan mencakup alat bantu visual yang membantu.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Tulis pujian Anda di sini..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Skenario 2: Teman atau Anggota Keluarga</h4>
                  <p className="text-gray-700 mb-4">
                    Seseorang yang dekat dengan Anda membantu orang lain melalui situasi sulit dengan kesabaran dan empati.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Tulis pujian Anda di sini..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Skenario 3: Penyedia Layanan</h4>
                  <p className="text-gray-700 mb-4">
                    Seorang pelayan di restoran sangat perhatian, mengingat permintaan khusus, dan mempertahankan sikap positif selama kesibukan.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Tulis pujian Anda di sini..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                  Kirim untuk Umpan Balik
                </button>
              </div>
            </div>
          )}
          
          {activeSection === 'examples' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contoh Pujian di Berbagai Konteks</h3>
              <p className="text-gray-600 mb-6">
                Pelajari contoh-contoh pujian efektif dalam situasi berbeda untuk memahami 
                cara menerapkan prinsip-prinsip dalam interaksi sehari-hari Anda.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Lingkungan Profesional</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li><span className="font-medium">→</span> "Cara Anda menangani kekhawatiran klien itu menunjukkan kesabaran dan keterampilan pemecahan masalah yang luar biasa. Anda menemukan solusi yang berhasil untuk semua orang."</li>
                      <li><span className="font-medium">→</span> "Saya memperhatikan bagaimana Anda melibatkan semua orang dalam diskusi selama rapat. Pendekatan inklusif Anda membantu kita mendapatkan masukan dari orang-orang yang biasanya tidak berbicara."</li>
                      <li><span className="font-medium">→</span> "Perhatian Anda terhadap detail pada laporan ini menyelamatkan kita dari kesalahan yang berpotensi signifikan. Ketelitian semacam itu benar-benar penting."</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hubungan Pribadi</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li><span className="font-medium">→</span> "Saya benar-benar mengagumi bagaimana kamu telah konsisten dengan rutinitas kebugaranmu. Dedikasimu menginspirasi—saya telah memperhatikan bagaimana hal itu mengubah bukan hanya tingkat energimu tetapi juga kepercayaan dirimu."</li>
                      <li><span className="font-medium">→</span> "Cara kamu mendengarkan Sarah ketika dia sedang kesal kemarin, tanpa langsung memberikan solusi, adalah tepat apa yang dia butuhkan. Kamu memiliki kemampuan untuk hadir bersama orang lain."</li>
                      <li><span className="font-medium">→</span> "Makanan yang kamu siapkan ini memiliki begitu banyak sentuhan perhatian—saya suka bagaimana kamu mengingat saya menyebutkan suka rempah ini. Itu membuat saya merasa benar-benar dihargai."</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Konteks Pengasuhan</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li><span className="font-medium">→</span> "Saya melihat bagaimana kamu berbagi mainanmu dengan adikmu meskipun kamu masih bermain dengannya. Itu adalah pilihan yang baik hati dan murah hati."</li>
                      <li><span className="font-medium">→</span> "Kamu terus mencoba meskipun soal matematika itu sulit. Ketekunan seperti itu akan membantumu berhasil dalam banyak hal dalam hidup."</li>
                      <li><span className="font-medium">→</span> "Saya memperhatikan kamu membersihkan kamarmu tanpa diminta. Mengambil tanggung jawab seperti itu menunjukkan betapa kamu semakin dewasa."</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Apa yang Membuat Contoh-contoh Ini Efektif:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Mereka fokus pada tindakan dan pilihan spesifik</li>
                  <li>Mereka menjelaskan mengapa tindakan tersebut berharga atau berdampak</li>
                  <li>Mereka mengakui usaha dan karakter daripada hanya hasil</li>
                  <li>Mereka menghindari berlebihan atau sanjungan</li>
                  <li>Mereka menunjukkan pengamatan yang cermat</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplimentArt;