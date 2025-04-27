import React from 'react';

const ModuleCard = ({ id, title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button 
          className="text-blue-600 font-medium text-sm cursor-pointer hover:text-blue-800 transition-colors"
          onClick={() => {
            // This will be handled by the App component through props
            const event = new CustomEvent('navigate', { detail: { page: id } });
            window.dispatchEvent(event);
          }}
        >
          Open Module →
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;