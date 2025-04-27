import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="md:hidden mr-3 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="flex items-center">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/9a454dfa-706a-4748-9ee5-7b9814a865d1/e7d57c4b-b879-4780-aa21-ec4c757ad182.png?width=64&height=64" 
              alt="Logo Keahlian Berkomunikasi" 
              className="h-8 w-8 mr-2"
            />
            <h1 className="text-xl font-bold">Keahlian Berkomunikasi</h1>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-3 py-1.5 bg-white text-blue-600 rounded-md font-medium cursor-pointer hover:bg-blue-50 transition">
            Tantangan Hari Ini
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;