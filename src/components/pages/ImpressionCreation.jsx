import React from 'react';

const ImpressionCreation = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Membuat Kesan Positif</h2>
      <p className="text-gray-600 mb-8">
        Pelajari teknik efektif untuk menciptakan kesan yang baik dalam hubungan baru maupun yang sedang berlangsung.
        Keterampilan ini membantu Anda membangun kepercayaan, hubungan, dan reputasi positif dengan orang lain.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-bold">Kesan Pertama</h3>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              Kesan pertama terbentuk dalam hitungan detik dan bisa sulit diubah nanti. 
              Pelajari elemen penting yang menciptakan kesan pertama yang positif.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Senyum tulus dan ekspresi positif</li>
              <li>Bahasa tubuh yang percaya diri namun hangat</li>
              <li>Perhatian yang terfokus pada orang lain</li>
              <li>Penampilan dan perawatan yang tepat</li>
              <li>Percakapan awal yang positif dan menarik</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Teknik Kesan Pertama
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-bold">Kesan yang Bertahan</h3>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              Di luar pertemuan pertama, perilaku berkelanjutan ini membantu Anda mempertahankan dan memperkuat kesan positif dari waktu ke waktu.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Konsistensi dalam perilaku dan keandalan</li>
              <li>Menepati komitmen</li>
              <li>Menunjukkan minat tulus pada orang lain</li>
              <li>Merespons secara positif terhadap tantangan</li>
              <li>Menunjukkan rasa syukur dan penghargaan</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Teknik Kesan yang Bertahan
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Formula Kesan</h3>
          <p className="text-gray-600 mb-6">
            Menciptakan kesan positif mengikuti formula yang menggabungkan beberapa elemen kunci. 
            Kuasai komponen-komponen ini untuk secara konsisten membuat dampak yang baik pada orang lain.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Ekspresi Wajah Positif</h4>
                <p className="text-gray-600">Wajah Anda mengkomunikasikan lebih dari kata-kata. Senyum tulus menciptakan koneksi positif langsung.</p>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-gray-50 p-2 rounded text-sm">
                    <p className="font-medium text-gray-700 mb-1">Tip Praktik:</p>
                    <p className="text-gray-600">Sebelum memasuki ruangan atau bertemu seseorang, luangkan waktu sejenak untuk mengendurkan wajah Anda dan membentuk senyum alami yang mencapai mata Anda.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Bahasa Tubuh yang Terlibat</h4>
                <p className="text-gray-600">Postur, gerakan, dan kehadiran fisik Anda menandakan tingkat minat dan kepercayaan diri Anda.</p>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-gray-50 p-2 rounded text-sm">
                    <p className="font-medium text-gray-700 mb-1">Elemen Kunci:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Berdiri atau duduk tegak dengan bahu ke belakang</li>
                      <li>Pertahankan kontak mata yang nyaman</li>
                      <li>Condongkan sedikit ke depan saat mendengarkan</li>
                      <li>Hindari posisi tertutup (lengan disilangkan)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Komunikasi yang Penuh Perhatian</h4>
                <p className="text-gray-600">Baik kata-kata Anda dan bagaimana Anda mendengarkan menciptakan kesan yang kuat. Perhatian yang terfokus membuat orang lain merasa dihargai.</p>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-gray-50 p-2 rounded text-sm">
                    <p className="font-medium text-gray-700 mb-1">Teknik:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Ajukan pertanyaan yang bijaksana tentang minat mereka</li>
                      <li>Dengarkan tanpa menyela</li>
                      <li>Tanggapi dengan komentar atau pertanyaan yang relevan</li>
                      <li>Gunakan nama mereka secara tepat dalam percakapan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Kredibilitas dan Keaslian</h4>
                <p className="text-gray-600">Kepercayaan adalah dasar dari kesan positif. Menjadi asli sambil menunjukkan kompetensi menciptakan dampak yang bertahan lama.</p>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-gray-50 p-2 rounded text-sm">
                    <p className="font-medium text-gray-700 mb-1">Membangun Kepercayaan:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Jujur tentang pengetahuan dan keterbatasan Anda</li>
                      <li>Tepati komitmen, bahkan yang kecil</li>
                      <li>Bagikan pengalaman yang relevan tanpa mendominasi percakapan</li>
                      <li>Tunjukkan konsistensi antara kata-kata dan tindakan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Strategi Kesan Khusus Konteks</h3>
          <p className="text-gray-600 mb-6">
            Situasi yang berbeda memerlukan strategi kesan yang berbeda. Sesuaikan pendekatan Anda untuk menciptakan
            kesan yang paling tepat untuk setiap pengaturan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Pengaturan Profesional</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Tekankan kompetensi dan keandalan</li>
                <li>Pertahankan batasan profesional yang tepat</li>
                <li>Tunjukkan pengetahuan sambil terbuka untuk belajar</li>
                <li>Seimbangkan kepercayaan diri dengan orientasi kerja tim</li>
                <li>Tepat waktu dan siap untuk semua interaksi</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Pertemuan Sosial</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Fokus pada kehangatan dan keterbukaan</li>
                <li>Tunjukkan minat tulus dalam bertemu orang baru</li>
                <li>Ajukan pertanyaan terbuka untuk memulai percakapan</li>
                <li>Ingat nama dan gunakan secara natural</li>
                <li>Tawarkan pujian tulus bila sesuai</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Posisi Kepemimpinan</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Tunjukkan kepercayaan diri dan kerendahan hati</li>
                <li>Dengarkan dengan penuh perhatian masukan orang lain</li>
                <li>Komunikasikan dengan jelas dan dengan otoritas yang sesuai</li>
                <li>Tunjukkan penghargaan atas kontribusi orang lain</li>
                <li>Buat keputusan dengan bijaksana dan jelaskan alasannya</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Hubungan Pribadi</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Bersikap otentik dan rentan bila sesuai</li>
                <li>Tunjukkan konsistensi antara kata-kata dan tindakan</li>
                <li>Tunjukkan empati dan dukungan emosional</li>
                <li>Hormati batasan sambil menunjukkan kepedulian</li>
                <li>Investasikan waktu dan perhatian dalam hubungan</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Coba Latihan Kesan Interaktif
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressionCreation;