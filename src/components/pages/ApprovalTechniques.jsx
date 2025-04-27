import React, { useState } from 'react';

const ApprovalTechniques = () => {
  const [activeTab, setActiveTab] = useState('yes-questions');

  const tabs = [
    { id: 'yes-questions', label: 'Pertanyaan Ya' },
    { id: 'beneficial-reasons', label: 'Alasan Bermanfaat' },
    { id: 'yes-choices', label: 'Pilihan Ya' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mendapatkan Persetujuan</h2>
      <p className="text-gray-600 mb-8">
        Pelajari teknik yang meningkatkan peluang Anda untuk membuat orang setuju dengan Anda. Metode ini membantu
        menciptakan pola pikir kooperatif dan memudahkan orang lain untuk mengatakan ya pada permintaan Anda.
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
          {activeTab === 'yes-questions' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Kekuatan Pertanyaan Ya</h3>
              <p className="text-gray-600 mb-6">
                Ketika Anda ingin seseorang mengatakan ya pada permintaan yang lebih besar, mulailah dengan mengajukan pertanyaan yang lebih kecil yang dapat dengan mudah mereka setujui. 
                Ini membangun pola persetujuan yang membuat mereka lebih mungkin untuk terus setuju.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">Contoh</h4>
                <p className="text-gray-700 mb-3">
                  Alih-alih langsung bertanya "Maukah Anda membantu saya dengan proyek ini akhir pekan ini?" coba urutan ini:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>"Menurut Anda apakah proyek ini penting untuk tim kita?" (Ya pertama)</li>
                  <li>"Apakah Anda setuju bahwa menyelesaikannya segera akan menguntungkan semua orang?" (Ya kedua)</li>
                  <li>"Maukah Anda meluangkan beberapa jam di akhir pekan ini untuk membantu saya menyelesaikannya?" (Ya target)</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">Latihan Praktik:</h4>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Skenario: Anda ingin meyakinkan rekan kerja untuk bergabung dengan komite baru di tempat kerja.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pertanyaan "ya" pertama:
                      </label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Ketik pertanyaan Anda di sini..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pertanyaan "ya" kedua:
                      </label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Ketik pertanyaan Anda di sini..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Permintaan akhir:
                      </label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Ketik permintaan Anda di sini..." />
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                Periksa Pendekatan Saya
              </button>
            </div>
          )}
          
          {activeTab === 'beneficial-reasons' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Memberikan Alasan Bermanfaat</h3>
              <p className="text-gray-600 mb-6">
                Orang lebih cenderung setuju ketika mereka memahami bagaimana hal itu menguntungkan mereka. Selalu sampaikan permintaan Anda
                dari segi apa yang diperoleh orang lain, bukan hanya apa yang Anda butuhkan.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">Contoh</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-red-500 mr-3">✗</div>
                    <div>
                      <p className="text-gray-700 font-medium">Pendekatan tidak efektif:</p>
                      <p className="text-gray-600">"Saya butuh Anda untuk menggantikan shift saya pada hari Sabtu karena saya ingin menghadiri konser."</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-3">✓</div>
                    <div>
                      <p className="text-gray-700 font-medium">Pendekatan efektif:</p>
                      <p className="text-gray-600">"Maukah Anda bersedia menggantikan shift saya pada hari Sabtu? Saya akan dengan senang hati mengambil shift Minggu Anda minggu depan, yang akan memberi Anda hari libur penuh untuk acara keluarga yang Anda sebutkan."</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">Latihan Praktik:</h4>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Skenario: Anda ingin rekan satu tim membantu Anda mempersiapkan presentasi yang akan datang.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tulis ulang permintaan ini untuk fokus pada manfaat mereka:
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        "Saya butuh bantuan Anda untuk meninjau slide presentasi saya sore ini karena saya gugup tentang presentasi besok."
                      </p>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md box-border" rows="3" placeholder="Tulis ulang permintaan di sini..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                Periksa Pendekatan Saya
              </button>
            </div>
          )}
          
          {activeTab === 'yes-choices' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Menawarkan Pilihan Ya</h3>
              <p className="text-gray-600 mb-6">
                Alih-alih meminta keputusan ya-atau-tidak tunggal, tawarkan pilihan di mana kedua opsi dapat diterima oleh Anda.
                Ini memberi orang lain rasa kendali sambil tetap mencapai tujuan Anda.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">Contoh</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-red-500 mr-3">✗</div>
                    <div>
                      <p className="text-gray-700 font-medium">Pendekatan kurang efektif:</p>
                      <p className="text-gray-600">"Bisakah kita bertemu untuk membahas proyek ini?"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-3">✓</div>
                    <div>
                      <p className="text-gray-700 font-medium">Pendekatan lebih efektif:</p>
                      <p className="text-gray-600">"Apakah Selasa jam 2 sore atau Rabu pagi lebih baik bagi Anda untuk membahas proyek ini?"</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">Latihan Praktik:</h4>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Untuk setiap skenario, tulis ulang pertanyaan untuk menawarkan pilihan ya:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-700 mb-1">
                        "Apakah Anda ingin makan malam pada hari Jumat?"
                      </p>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Tulis ulang dengan pilihan ya..." />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 mb-1">
                        "Apakah Anda bersedia membantu dengan laporan ini?"
                      </p>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Tulis ulang dengan pilihan ya..." />
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                Periksa Pendekatan Saya
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovalTechniques;