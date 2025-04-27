import React, { useState } from 'react';

const ConversationSkills = () => {
  const [activeTab, setActiveTab] = useState('preparation');

  const tabs = [
    { id: 'preparation', label: 'Persiapan' },
    { id: 'delivery', label: 'Teknik Penyampaian' },
    { id: 'topics', label: 'Topik Percakapan' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Keterampilan Percakapan</h2>
      <p className="text-gray-600 mb-8">
        Pelajari cara terlibat dalam percakapan yang bermakna dan menyenangkan yang membangun koneksi dan meninggalkan 
        kesan positif. Teknik-teknik ini akan membantu Anda berkomunikasi dengan percaya diri dan keaslian.
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
          {activeTab === 'preparation' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mempersiapkan Percakapan Menarik</h3>
              <p className="text-gray-600 mb-6">
                Pembicara yang hebat tidak hanya mengandalkan spontanitas—mereka mempersiapkan diri. Strategi ini
                akan membantu Anda merasa lebih percaya diri dan memiliki percakapan yang lebih menarik.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Ketahui Apa yang Ingin Anda Bicarakan</h4>
                    <p className="text-gray-600 mb-3">Memiliki beberapa topik dan wawasan yang sudah disiapkan membantu mencegah keheningan canggung dan menciptakan pertukaran yang lebih bermakna.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md mb-3">
                      <h5 className="font-medium text-gray-700 mb-2">Teknik Persiapan:</h5>
                      <ol className="list-decimal list-inside space-y-1 text-gray-600">
                        <li>Tetap terinformasi tentang peristiwa terkini dan topik kepentingan umum</li>
                        <li>Renungkan pengalaman baru-baru ini yang mungkin membuat cerita bagus</li>
                        <li>Pertimbangkan pertanyaan yang dapat Anda ajukan berdasarkan konteks atau orang tersebut</li>
                        <li>Miliki 2-3 topik siap yang Anda tahu dan antusias tentangnya</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-md">
                      <h5 className="font-medium text-blue-800 mb-2">Latihan Praktik:</h5>
                      <p className="text-gray-700 mb-3">
                        Sebelum acara sosial berikutnya, siapkan tiga topik yang dapat Anda diskusikan: 
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Peristiwa terkini atau tren</li>
                        <li>Pengalaman pribadi yang mengajarkan Anda sesuatu</li>
                        <li>Pertanyaan tentang sesuatu yang benar-benar membuat Anda penasaran</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lakukan Riset Bila Sesuai</h4>
                    <p className="text-gray-600 mb-3">Untuk pertemuan atau acara yang direncanakan, melakukan sedikit riset latar belakang dapat sangat meningkatkan percakapan Anda.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium text-gray-700 mb-2">Kapan dan Apa yang Harus Diriset:</h5>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-gray-600">Untuk Pengaturan Profesional:</p>
                          <ul className="list-disc list-inside text-gray-600 ml-2">
                            <li>Berita perusahaan atau pencapaian terbaru</li>
                            <li>Latar belakang orang yang akan Anda temui</li>
                            <li>Tren atau perkembangan industri</li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-gray-600">Untuk Pertemuan Sosial:</p>
                          <ul className="list-disc list-inside text-gray-600 ml-2">
                            <li>Minat umum di antara peserta</li>
                            <li>Kesempatan atau tujuan dari pertemuan</li>
                            <li>Aktivitas terbaru teman dekat yang akan Anda temui</li>
                          </ul>
                        </div>
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
                    <h4 className="font-semibold text-gray-800 mb-1">Persiapan Mental</h4>
                    <p className="text-gray-600 mb-3">Pola pikir Anda secara signifikan memengaruhi kualitas percakapan. Meluangkan waktu untuk mempersiapkan mental membantu Anda lebih hadir dan percaya diri.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium text-gray-700 mb-2">Teknik Kesiapan Mental:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Tetapkan niat positif untuk interaksi Anda</li>
                        <li>Visualisasikan diri Anda terlibat dalam percakapan yang menyenangkan</li>
                        <li>Ingatkan diri sendiri bahwa tujuannya adalah koneksi, bukan penampilan</li>
                        <li>Praktikkan beberapa napas dalam sebelum memasuki situasi sosial</li>
                        <li>Adopsi pola pikir yang ingin tahu, siap belajar dari orang lain</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'delivery' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Teknik Penyampaian Percakapan</h3>
              <p className="text-gray-600 mb-6">
                Bagaimana Anda berkomunikasi sama pentingnya dengan apa yang Anda katakan. Teknik-teknik ini akan membantu Anda menyampaikan
                pikiran Anda dengan jelas dan melibatkan orang lain secara efektif.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Bicara dengan Ringkas</h4>
                    <p className="text-gray-600 mb-3">Jaga pikiran Anda tetap terfokus dan hindari berbicara berlebihan. Berbicara ringkas menunjukkan rasa hormat terhadap waktu dan perhatian orang lain.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md mb-3">
                      <h5 className="font-medium text-gray-700 mb-2">Praktik Utama:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Pikirkan tentang poin utama Anda sebelum berbicara</li>
                        <li>Gunakan pendekatan "judul dulu"—mulai dengan kesimpulan Anda, lalu berikan detail jika minat ditunjukkan</li>
                        <li>Berhenti sesekali untuk membiarkan orang lain merespons</li>
                        <li>Sadar akan berapa lama Anda telah berbicara</li>
                      </ul>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-1 mr-2">
                        <div className="bg-red-50 p-2 rounded text-sm">
                          <p className="font-medium text-red-700 mb-1">Terlalu Bertele-tele:</p>
                          <p className="text-gray-700">"Jadi kemarin saya pergi ke toko, Anda tahu yang di Jalan Oak, bukan yang lain yang tutup tahun lalu, dan saya bertemu dengan orang ini yang terlihat persis seperti seseorang yang saya kenal di perguruan tinggi, tapi ternyata bukan mereka, tapi kami mulai berbicara dan..."</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-green-50 p-2 rounded text-sm">
                          <p className="font-medium text-green-700 mb-1">Ringkas & Menarik:</p>
                          <p className="text-gray-700">"Saya mengalami percakapan paling menarik dengan orang asing kemarin yang saya kira teman lama dari perguruan tinggi. Kami akhirnya mendiskusikan..."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Pertahankan Kontak Mata</h4>
                    <p className="text-gray-600 mb-3">Kontak mata yang tepat menciptakan koneksi dan menunjukkan Anda terlibat dalam percakapan.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium text-gray-700 mb-2">Kontak Mata Efektif:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Upayakan sekitar 60-70% kontak mata saat berbicara (norma budaya mungkin berbeda)</li>
                        <li>Lihat ke arah lain sesekali, tapi kembalikan pandangan Anda secara alami</li>
                        <li>Dalam pengaturan kelompok, buat kontak mata singkat dengan setiap orang</li>
                        <li>Fokus pada satu mata atau area di antara mata jika kontak langsung terasa tidak nyaman</li>
                      </ul>
                    </div>
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
                    <p className="text-gray-600 mb-3">Bagaimana Anda menggunakan suara Anda secara signifikan memengaruhi seberapa terlibat dan tertarik orang lain akan berada dalam percakapan Anda.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium text-gray-700 mb-2">Teknik Suara:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Variasikan nada Anda untuk menekankan poin penting</li>
                        <li>Bicara dengan jelas dan dengan kecepatan sedang</li>
                        <li>Sesuaikan volume berdasarkan lingkungan (tidak terlalu keras atau terlalu lembut)</li>
                        <li>Gunakan jeda yang tepat untuk penekanan atau untuk memungkinkan refleksi</li>
                        <li>Sesuaikan tingkat energi Anda dengan konteks dan gaya orang lain</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'topics' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Topik Percakapan yang Menarik</h3>
              <p className="text-gray-600 mb-6">
                Subjek yang Anda pilih untuk dibahas dapat membuat atau menghancurkan percakapan. Strategi topik ini
                akan membantu Anda mempertahankan pertukaran yang menarik dan bermakna dalam berbagai situasi.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">Aturan Emas Topik:</h4>
                <p className="text-gray-700">
                  Utamakan fokus pada topik yang menarik bagi orang lain, bukan hanya yang menarik bagi Anda.
                  Pendekatan ini menciptakan keterlibatan dan membangun hubungan lebih efektif.
                </p>
              </div>
              
              <h4 className="font-semibold text-gray-800 mb-3">Kategori Topik untuk Skenario Berbeda:</h4>
              
              <div className="space-y-5 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                    <h5 className="font-medium text-gray-800">Pengaturan Profesional</h5>
                  </div>
                  <div className="p-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Tren dan perkembangan industri</li>
                      <li>Tantangan profesional dan cara mengatasinya</li>
                      <li>Jalur karir dan pertumbuhan profesional</li>
                      <li>Strategi keseimbangan kerja-kehidupan</li>
                      <li>Proyek menarik (milik mereka dulu, lalu milik Anda jika relevan)</li>
                    </ul>
                    <div className="mt-3 text-sm text-gray-600 italic">
                      Hindari: Politik kantor, pendapat kontroversial, topik terlalu pribadi
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                    <h5 className="font-medium text-gray-800">Pertemuan Sosial</h5>
                  </div>
                  <div className="p-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Pengalaman positif atau petualangan baru-baru ini</li>
                      <li>Buku, film, acara, atau podcast yang Anda nikmati</li>
                      <li>Hobi dan minat pribadi</li>
                      <li>Pengalaman atau rencana perjalanan</li>
                      <li>Acara lokal, restoran, atau aktivitas</li>
                    </ul>
                    <div className="mt-3 text-sm text-gray-600 italic">
                      Hindari: Masalah politik yang memecah belah, keluhan, masalah pribadi dalam interaksi awal
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                    <h5 className="font-medium text-gray-800">Percakapan Lebih Mendalam</h5>
                  </div>
                  <div className="p-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Nilai-nilai pribadi dan apa yang paling penting dalam hidup</li>
                      <li>Pengalaman formatif yang membentuk siapa Anda</li>
                      <li>Tujuan, impian, dan aspirasi</li>
                      <li>Pelajaran yang dipetik dari tantangan</li>
                      <li>Perspektif tentang subjek bermakna (didekati dengan hormat)</li>
                    </ul>
                    <div className="mt-3 text-sm text-gray-600 italic">
                      Catatan: Topik ini sesuai setelah membangun hubungan dan kepercayaan timbal balik
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Strategi Alur Percakapan:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><span className="font-medium">Mulai dengan topik ringan</span> untuk membangun kenyamanan</li>
                  <li><span className="font-medium">Ajukan pertanyaan terbuka</span> yang membutuhkan lebih dari jawaban ya/tidak</li>
                  <li><span className="font-medium">Perhatikan "kait"</span> - detail yang disebutkan orang yang dapat Anda tanyakan lebih lanjut</li>
                  <li><span className="font-medium">Perlahan beralih ke topik yang lebih bermakna</span> saat hubungan terbangun</li>
                  <li><span className="font-medium">Bersedia menyesuaikan topik</span> berdasarkan tingkat keterlibatan orang lain</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Latihan Praktik: Pembuat Percakapan</h3>
          <p className="text-gray-600 mb-6">
            Terapkan teknik yang telah Anda pelajari dalam latihan percakapan simulasi ini.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <h4 className="font-medium text-gray-800 mb-3">Skenario: Acara Jaringan</h4>
            <p className="text-gray-700 mb-4">
              Anda baru saja diperkenalkan kepada seseorang yang bekerja di industri Anda tetapi di perusahaan yang berbeda.
              Bagaimana Anda akan memulai dan mengembangkan percakapan?
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  1. Pembuka Anda (bagaimana Anda akan memulai percakapan):
                </label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md box-border" 
                  rows="2"
                  placeholder="Tulis pembuka percakapan Anda di sini..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  2. Dua pertanyaan lanjutan yang fokus pada minat mereka:
                </label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md box-border" 
                  rows="2"
                  placeholder="Tulis pertanyaan lanjutan Anda di sini..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  3. Pengalaman terkait yang mungkin Anda bagikan (tetap ringkas):
                </label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md box-border" 
                  rows="2"
                  placeholder="Tulis apa yang mungkin Anda bagikan di sini..."
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Kirim untuk Umpan Balik
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationSkills;