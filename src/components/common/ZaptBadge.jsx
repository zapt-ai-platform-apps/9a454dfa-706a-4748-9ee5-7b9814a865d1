import React from 'react';

const ZaptBadge = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-1 bg-white rounded-full py-1 px-3 shadow-md text-xs font-medium text-gray-800 hover:bg-gray-50 transition-colors"
      >
        <span>Made on</span>
        <span className="text-blue-600 font-semibold">ZAPT</span>
      </a>
    </div>
  );
};

export default ZaptBadge;