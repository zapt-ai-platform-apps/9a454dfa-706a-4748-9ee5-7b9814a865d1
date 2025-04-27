import React from 'react';

const MoodManagement = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manajemen Suasana Hati</h2>
      <p className="text-gray-600 mb-8">
        Pelajari teknik untuk menciptakan suasana positif dalam interaksi Anda, mengelola keadaan emosional,
        dan membuat kesan pertama yang kuat melalui suasana hati dan ekspresi Anda.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5">
            <h3 className="text-xl font-bold mb-2">Kesan Pertama</h3>
            <p className="text-sm text-blue-100">
              Beberapa detik pertama dari setiap interaksi menentukan nada untuk semua yang mengikuti.
            </p>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              Penelitian menunjukkan bahwa orang membentuk kesan dalam 7 detik pertama bertemu seseorang.
              Ekspresi wajah, postur, dan salam awal Anda semuanya berkontribusi pada momen penting ini.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-blue-800 mb-2">Poin-poin Praktik Utama:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Tersenyum dengan tulus sebelum interaksi dimulai</li>
                <li>Lakukan kontak mata yang percaya diri namun ramah</li>
                <li>Gunakan postur tegak, terbuka</li>
                <li>Bicaralah dengan kehangatan dan energi yang sesuai</li>
              </ul>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Latihan Praktik
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5">
            <h3 className="text-xl font-bold mb-2">Kekuatan Senyuman</h3>
            <p className="text-sm text-blue-100">
              Senyuman tulus adalah alat paling efektif Anda untuk menciptakan koneksi positif.
            </p>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              Tersenyum tidak hanya memengaruhi bagaimana orang lain memandang Anda—ini sebenarnya mengubah kimia otak Anda sendiri,
              menciptakan siklus umpan balik positif yang meningkatkan suasana hati Anda dan
              kualitas interaksi Anda.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-blue-800 mb-2">Jenis Senyuman:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><span className="font-medium">Senyum Duchenne</span>: Senyum tulus yang melibatkan mulut dan mata</li>
                <li><span className="font-medium">Senyum sosial</span>: Senyum sopan yang terutama menggunakan otot mulut</li>
                <li><span className="font-medium">Senyum empatik</span>: Senyum hangat, penuh pengertian selama percakapan sensitif</li>
              </ul>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Teknik Senyum
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Teknik Pemulihan Suasana Hati</h3>
          <p className="text-gray-600 mb-6">
            Bahkan ketika Anda tidak merasa terbaik, teknik-teknik ini dapat membantu Anda mengelola suasana hati Anda
            untuk mempertahankan interaksi positif dengan orang lain.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Perubahan Keadaan Fisik</h4>
                <p className="text-gray-600 mb-2">Ubah fisiologi Anda untuk mengubah psikologi Anda. Berdiri, bergerak, dan sesuaikan postur Anda.</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">Coba sekarang →</button>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Loop Umpan Balik Wajah</h4>
                <p className="text-gray-600 mb-2">Ekspresi wajah Anda memengaruhi emosi Anda. Sengaja tersenyum, bahkan ketika dipaksakan pada awalnya, dapat benar-benar meningkatkan suasana hati Anda.</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">Pelajari teknik →</button>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Modulasi Suara</h4>
                <p className="text-gray-600 mb-2">Nada, kecepatan, dan volume suara Anda memengaruhi baik suasana hati Anda dan bagaimana orang lain melihat Anda. Praktikkan kontrol suara yang sadar.</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">Latihan suara →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Praktik Interaktif: Simulator Kesan Pertama</h3>
          <p className="text-gray-600 mb-6">
            Latihan ini mensimulasikan berbagai skenario pertemuan pertama untuk membantu Anda berlatih membuat kesan pertama yang positif.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <h4 className="font-semibold text-gray-800 mb-4">Skenario: Pertemuan Pertama Wawancara Kerja</h4>
            <p className="text-gray-700 mb-4">
              Anda tiba untuk wawancara kerja penting. Saat Anda memasuki ruangan, pewawancara berdiri untuk menyambut Anda.
              Elemen apa yang harus Anda fokuskan dalam beberapa detik penting pertama itu?
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input type="checkbox" id="element1" className="mr-2" />
                <label htmlFor="element1" className="text-gray-700">Lakukan kontak mata dan tawarkan senyuman tulus</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="element2" className="mr-2" />
                <label htmlFor="element2" className="text-gray-700">Jabatan tangan yang mantap tapi tidak agresif</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="element3" className="mr-2" />
                <label htmlFor="element3" className="text-gray-700">Langsung menyebutkan kualifikasi Anda</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="element4" className="mr-2" />
                <label htmlFor="element4" className="text-gray-700">Postur tegak, percaya diri</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="element5" className="mr-2" />
                <label htmlFor="element5" className="text-gray-700">Salam yang hangat, jelas menggunakan nama pewawancara</label>
              </div>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
            Periksa Pendekatan Saya
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodManagement;