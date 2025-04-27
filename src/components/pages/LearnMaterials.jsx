import React, { useState } from 'react';

const LearnMaterials = () => {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    {
      id: 1,
      title: "Memahami Keterampilan Berkomunikasi",
      content: "Dasar dari semua interaksi yang efektif adalah mengenali bahwa kebanyakan orang terutama tertarik pada diri mereka sendiri. Bab ini mengeksplorasi psikologi di balik interaksi manusia dan mengapa mengembangkan keterampilan berkomunikasi sangat penting untuk keberhasilan dalam kehidupan pribadi dan profesional."
    },
    {
      id: 2,
      title: "Kekuatan Fokus",
      content: "Orang belajar lebih baik melalui citra dan isyarat visual, dan ingatan mereka terbatas. Bab ini menjelaskan cara berkomunikasi secara efektif dengan menggunakan citra yang jelas dan fokus pada poin-poin utama yang beresonansi dengan minat orang lain."
    },
    {
      id: 3,
      title: "Berbicara Efektif",
      content: "Berbicara secara efektif berarti berbicara tentang apa yang menarik bagi orang lain, membuat mereka merasa penting, dan menyetujui mereka bila memungkinkan. Bab ini membahas teknik-teknik untuk percakapan yang menarik yang membangun hubungan dan kepercayaan."
    },
    {
      id: 4,
      title: "Seni Mendengarkan",
      content: "Mendengarkan secara efektif melibatkan mempertahankan kontak mata, condong ke depan, mengajukan pertanyaan, dan menggunakan kata-kata pembicara sendiri. Bab ini menunjukkan cara menjadi pendengar yang lebih baik dan membangun koneksi yang lebih dalam dengan orang lain."
    },
    {
      id: 5,
      title: "Pengaruh dan Persuasi",
      content: "Memengaruhi orang lain membutuhkan pemahaman tentang apa yang mereka inginkan dan menggunakan testimonial pihak ketiga untuk meyakinkan mereka. Bab ini menunjukkan cara memengaruhi orang lain secara etis dengan menyelaraskan pesan Anda dengan keinginan mereka."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Materi Pembelajaran</h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {chapters.map(chapter => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(chapter.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeChapter === chapter.id
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Bab {chapter.id}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          {chapters.map(chapter => (
            activeChapter === chapter.id && (
              <div key={chapter.id}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{chapter.title}</h3>
                <p className="text-gray-600 mb-6">{chapter.content}</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-blue-800 mb-2">Poin-poin Utama</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Memahami prinsip ini membantu membangun hubungan yang lebih baik</li>
                    <li>Latihan sangat penting untuk menguasai keterampilan ini</li>
                    <li>Teknik ini bekerja dalam pengaturan pribadi dan profesional</li>
                  </ul>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    className={`px-4 py-2 rounded text-sm font-medium ${
                      chapter.id === 1 
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50 cursor-pointer'
                    }`}
                    disabled={chapter.id === 1}
                    onClick={() => setActiveChapter(chapter.id - 1)}
                  >
                    ← Bab Sebelumnya
                  </button>
                  
                  <button
                    className={`px-4 py-2 rounded text-sm font-medium ${
                      chapter.id === chapters.length
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50 cursor-pointer'
                    }`}
                    disabled={chapter.id === chapters.length}
                    onClick={() => setActiveChapter(chapter.id + 1)}
                  >
                    Bab Berikutnya →
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Kuis Bab</h3>
        <p className="text-gray-600 mb-6">
          Uji pemahaman Anda tentang konsep bab ini dengan kuis singkat.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
          Mulai Kuis
        </button>
      </div>
    </div>
  );
};

export default LearnMaterials;