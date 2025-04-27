import React, { useState } from 'react';

const GratitudeExpression = () => {
  const [activeTab, setActiveTab] = useState('principles');
  const [newGratitude, setNewGratitude] = useState('');
  const [gratitudeList, setGratitudeList] = useState([
    "Rekan kerja saya yang tinggal lebih lama untuk membantu saya menyelesaikan proyek penting",
    "Barista yang mengingat pesanan biasa saya dan telah menyiapkannya"
  ]);

  const tabs = [
    { id: 'principles', label: 'Prinsip' },
    { id: 'practice', label: 'Praktik' },
    { id: 'log', label: 'Catatan Syukur' }
  ];

  const handleAddGratitude = () => {
    if (newGratitude.trim()) {
      setGratitudeList([...gratitudeList, newGratitude]);
      setNewGratitude('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mengungkapkan Syukur</h2>
      <p className="text-gray-600 mb-8">
        Pelajari cara mengungkapkan penghargaan tulus secara efektif. Syukur memperkuat hubungan,
        meningkatkan kesejahteraan Anda sendiri, dan menciptakan lingkungan positif dalam pengaturan pribadi dan profesional.
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
          {activeTab === 'principles' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Kekuatan Syukur</h3>
              <p className="text-gray-600 mb-6">
                Mengungkapkan rasa syukur dengan benar lebih dari sekadar mengucapkan "terima kasih." Ketika dilakukan secara efektif, itu menciptakan koneksi yang berarti
                dan meninggalkan kesan positif yang bertahan lama.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Manfaat bagi Penerima:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Merasa dihargai dan diapresiasi</li>
                    <li>Mengalami peningkatan motivasi</li>
                    <li>Lebih cenderung melanjutkan perilaku yang membantu</li>
                    <li>Mengembangkan koneksi yang lebih kuat dengan Anda</li>
                    <li>Mengalami peningkatan suasana hati dan kesejahteraan</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Manfaat bagi Anda:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Meningkatkan kesehatan psikologis Anda sendiri</li>
                    <li>Memperkuat hubungan Anda</li>
                    <li>Meningkatkan reputasi dan keramahan Anda</li>
                    <li>Meningkatkan kebahagiaan dan kepuasan Anda sendiri</li>
                    <li>Membantu Anda memperhatikan aspek positif kehidupan</li>
                  </ul>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-800 mb-3">5 Elemen Syukur yang Efektif:</h4>
              
              <div className="space-y-5 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Jadilah Spesifik</h5>
                    <p className="text-gray-600">Jelaskan dengan tepat apa yang dilakukan seseorang yang Anda hargai daripada menggunakan frasa umum.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-red-600 block mb-1">Alih-alih: "Terima kasih atas bantuan Anda."</span>
                      <span className="text-green-600">Lebih baik: "Terima kasih telah tinggal lebih lama kemarin untuk membantu saya mengatasi masalah teknis. Keahlian Anda dengan database menghemat waktu saya berjam-jam."</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Akui Usahanya</h5>
                    <p className="text-gray-600">Kenali waktu, energi, pikiran, atau pengorbanan yang terlibat dalam tindakan mereka.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-green-600">"Saya tahu betapa sibuknya Anda dengan tenggat waktu Anda sendiri, yang membuat saya semakin berterima kasih karena Anda meluangkan waktu untuk meninjau presentasi saya dan memberikan umpan balik yang begitu teliti."</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Jelaskan Dampaknya</h5>
                    <p className="text-gray-600">Jelaskan bagaimana tindakan mereka secara positif memengaruhi Anda atau orang lain.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-green-600">"Dorongan Anda selama pertemuan mingguan telah membantu saya merasa lebih percaya diri tentang berbicara. Bahkan, saya bisa menyampaikan ide-ide saya kepada tim eksekutif minggu lalu karena kepercayaan diri yang telah saya bangun."</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Jadikan tentang Mereka</h5>
                    <p className="text-gray-600">Fokus pada kualitas atau sifat karakter mereka yang ditunjukkan oleh tindakan tersebut.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-green-600">"Cara Anda menangani situasi pelanggan yang sulit itu menunjukkan kesabaran dan empati yang luar biasa. Kemampuan Anda untuk tetap tenang di bawah tekanan dan menemukan solusi sangat mengesankan."</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Bersikaplah Tulus</h5>
                    <p className="text-gray-600">Ungkapkan rasa syukur Anda dengan emosi yang tulus daripada frasa formal.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-green-600">"Saya sangat tersentuh oleh perhatian Anda dalam mengingat ulang tahun saya. Catatan pribadi yang Anda sertakan dengan hadiah membuat saya merasa benar-benar dihargai sebagai teman Anda."</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'practice' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skenario Praktik Syukur</h3>
              <p className="text-gray-600 mb-6">
                Untuk setiap skenario, buatlah ungkapan syukur yang penuh perhatian menggunakan prinsip-prinsip yang telah Anda pelajari.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Skenario 1: Bantuan Profesional</h4>
                  <p className="text-gray-700 mb-4">
                    Seorang rekan kerja menghabiskan dua jam membantu Anda mempersiapkan presentasi penting, memberikan umpan balik dan saran yang berharga.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Tulis ungkapan syukur Anda di sini..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Skenario 2: Dukungan Pribadi</h4>
                  <p className="text-gray-700 mb-4">
                    Seorang teman mendengarkan dengan penuh dukungan selama lebih dari satu jam saat Anda membicarakan situasi pribadi yang sulit, menawarkan empati tanpa menghakimi.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Tulis ungkapan syukur Anda di sini..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Skenario 3: Kebaikan Sehari-hari</h4>
                  <p className="text-gray-700 mb-4">
                    Seorang tetangga memperhatikan Anda sedang pergi dan mengumpulkan paket Anda, menjaganya tetap aman sampai Anda kembali.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Tulis ungkapan syukur Anda di sini..."
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
          
          {activeTab === 'log' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Catatan Syukur Anda</h3>
              <p className="text-gray-600 mb-6">
                Secara teratur mencatat apa yang Anda syukuri membantu membangun otot syukur dan meningkatkan kesejahteraan.
                Tambahkan ke catatan Anda setiap kali Anda memperhatikan sesuatu yang Anda hargai.
              </p>
              
              <div className="mb-6">
                <div className="flex items-end gap-2 mb-4">
                  <div className="flex-1">
                    <label htmlFor="newGratitude" className="block text-sm font-medium text-gray-700 mb-1">
                      Saya bersyukur untuk:
                    </label>
                    <input 
                      type="text" 
                      id="newGratitude"
                      className="w-full p-2 border border-gray-300 rounded-md box-border" 
                      placeholder="Tambahkan rasa syukur baru di sini..."
                      value={newGratitude}
                      onChange={(e) => setNewGratitude(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={handleAddGratitude}
                    disabled={!newGratitude.trim()}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      newGratitude.trim() 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors`}
                  >
                    Tambah
                  </button>
                </div>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    {gratitudeList.length > 0 ? (
                      gratitudeList.map((item, index) => (
                        <li key={index} className="p-3 flex items-center">
                          <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))
                    ) : (
                      <li className="p-3 text-gray-500 text-center">
                        Catatan syukur Anda kosong. Tambahkan beberapa rasa syukur untuk memulai!
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Manfaat Catatan Syukur:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Melatih pikiran Anda untuk memperhatikan aspek positif kehidupan</li>
                  <li>Mengurangi stres dan meningkatkan kesejahteraan emosional</li>
                  <li>Menciptakan sumber pemikiran positif untuk hari-hari yang menantang</li>
                  <li>Membantu mengidentifikasi siapa yang layak mendapat ucapan terima kasih Anda</li>
                  <li>Membangun kebiasaan bersyukur dalam kehidupan sehari-hari Anda</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GratitudeExpression;