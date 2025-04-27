import React from 'react';

const CriticismUnderstanding = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Memahami Kritik</h2>
      <p className="text-gray-600 mb-8">
        Pelajari tentang dampak kritik, kapan harus menghindarinya, dan bagaimana memberikan umpan balik konstruktif
        bila diperlukan. Menguasai keterampilan ini membantu mempertahankan hubungan positif bahkan selama percakapan yang sulit.
      </p>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Bahaya Kritik</h3>
          <p className="text-gray-600 mb-6">
            Kritik, bahkan ketika berniat baik, sering kali menciptakan sikap defensif dan resistensi daripada perubahan positif.
            Memahami dampak psikologisnya membantu kita berkomunikasi lebih efektif.
          </p>
          
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-red-800 mb-2">Mengapa Kritik Gagal:</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-medium">Memicu sikap defensif:</span> Orang secara naluriah melindungi citra diri mereka ketika dikritik.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-medium">Merusak hubungan:</span> Kritik berulang mengikis kepercayaan dan niat baik antara orang-orang.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-medium">Jarang mencapai tujuan yang dimaksudkan:</span> Sebagian besar kritik tidak mengarah pada perubahan perilaku yang diinginkan.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              <h4 className="font-medium text-gray-800 mb-2">Siklus Kritik:</h4>
              <p className="text-gray-600 text-sm">
                Kritik sering kali menciptakan siklus umpan balik negatif yang merusak hubungan dan mencegah perbaikan:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm mt-2">
                <li>Orang A mengkritik Orang B</li>
                <li>Orang B merasa diserang dan menjadi defensif</li>
                <li>Orang B menarik diri atau menyerang balik</li>
                <li>Komunikasi terputus</li>
                <li>Masalah asli tetap tidak terselesaikan</li>
                <li>Frustrasi meningkat, menyebabkan lebih banyak kritik</li>
              </ol>
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-2">Kesalahan Paling Umum:</h4>
              <p className="text-gray-600 text-sm">
                Banyak orang percaya bahwa menunjukkan kekurangan orang lain akan memotivasi mereka untuk berubah. Pada kenyataannya, kritik
                sering kali memiliki efek sebaliknya, menciptakan resistensi dan kebencian daripada menginspirasi perbaikan.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Penelitian menunjukkan bahwa hubungan dengan tingkat kritik tinggi memiliki hasil yang lebih buruk dalam semua konteks—mulai dari
                pernikahan hingga tempat kerja hingga hubungan orang tua-anak.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Alternatif Kritik</h3>
          <p className="text-gray-600 mb-6">
            Alih-alih mengkritik, coba pendekatan yang lebih efektif ini untuk mendorong perubahan positif.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Memulai dengan Penghargaan</h4>
                <p className="text-gray-600 mb-2">Mulai percakapan dengan mengakui apa yang berjalan baik sebelum membahas masalah.</p>
                <div className="bg-gray-50 p-3 rounded-md text-sm">
                  <p className="text-red-600 mb-1">Alih-alih: "Kamu tidak pernah membantu dengan pekerjaan rumah tangga."</p>
                  <p className="text-green-600">Coba: "Saya sangat menghargai bagaimana kamu mengurus makan malam tadi malam. Saya ingin mencari cara agar kita bisa berbagi tanggung jawab rumah tangga secara lebih merata."</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Gunakan Pernyataan "Saya"</h4>
                <p className="text-gray-600 mb-2">Ungkapkan perasaan dan kebutuhan Anda tanpa tuduhan atau menyalahkan.</p>
                <div className="bg-gray-50 p-3 rounded-md text-sm">
                  <p className="text-red-600 mb-1">Alih-alih: "Kamu selalu terlambat dan itu tidak sopan."</p>
                  <p className="text-green-600">Coba: "Saya merasa frustrasi ketika harus menunggu, karena memengaruhi jadwal saya. Saya akan sangat menghargai jika kita berdua bisa berusaha tepat waktu."</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Fokus pada Solusi</h4>
                <p className="text-gray-600 mb-2">Berkolaborasi tentang cara memperbaiki situasi daripada berfokus pada masalah.</p>
                <div className="bg-gray-50 p-3 rounded-md text-sm">
                  <p className="text-red-600 mb-1">Alih-alih: "Laporan ini penuh dengan kesalahan. Kamu perlu lebih berhati-hati."</p>
                  <p className="text-green-600">Coba: "Saya melihat beberapa inkonsistensi dalam laporan. Apakah akan membantu jika kita membuat daftar periksa untuk laporan masa depan untuk memastikan akurasi?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Ketika Umpan Balik Diperlukan</h3>
          <p className="text-gray-600 mb-6">
            Ada kalanya membahas masalah tidak dapat dihindari. Dalam kasus ini, inilah cara memberikan 
            umpan balik konstruktif yang meminimalkan sikap defensif dan memaksimalkan perubahan positif.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-blue-800 mb-3">Metode Umpan Balik Konstruktif 5 Langkah:</h4>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">1</span>
                <div>
                  <p className="font-medium text-gray-800">Pilih waktu dan tempat yang tepat</p>
                  <p className="text-gray-600 text-sm">Tempat pribadi, ketika tidak ada pihak yang stres atau terburu-buru, dan masalahnya masih relevan</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">2</span>
                <div>
                  <p className="font-medium text-gray-800">Mulai dengan penghargaan</p>
                  <p className="text-gray-600 text-sm">Mulai dengan pengakuan tulus tentang sesuatu yang positif tentang orang tersebut atau pekerjaannya</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">3</span>
                <div>
                  <p className="font-medium text-gray-800">Jelaskan masalah secara spesifik</p>
                  <p className="text-gray-600 text-sm">Fokus pada perilaku atau hasil, bukan orangnya; gunakan contoh konkret</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">4</span>
                <div>
                  <p className="font-medium text-gray-800">Jelaskan dampaknya</p>
                  <p className="text-gray-600 text-sm">Bantu mereka memahami mengapa masalah itu penting dengan menjelaskan efeknya</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">5</span>
                <div>
                  <p className="font-medium text-gray-800">Berkolaborasi untuk solusi</p>
                  <p className="text-gray-600 text-sm">Minta masukan mereka dan bekerja sama untuk mengatasi masalah; tawarkan dukungan</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Coba Latihan Umpan Balik Interaktif
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriticismUnderstanding;