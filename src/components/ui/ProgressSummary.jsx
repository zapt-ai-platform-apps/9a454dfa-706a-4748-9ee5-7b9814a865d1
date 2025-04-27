import React from 'react';

const ProgressSummary = () => {
  // This would normally be fetched from a state management solution or API
  const progressData = {
    modulesCompleted: 4,
    totalModules: 14,
    challengesCompleted: 12,
    streak: 5,
    lastActivity: '2 hours ago'
  };

  const calculatePercentage = () => {
    return Math.round((progressData.modulesCompleted / progressData.totalModules) * 100);
  };

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h4 className="text-lg font-medium text-gray-800 mb-2 md:mb-0">Overall Progress</h4>
        <div className="text-sm font-medium">
          <span className="text-blue-600">{progressData.modulesCompleted}</span>
          <span className="text-gray-500">/{progressData.totalModules} modules completed</span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${calculatePercentage()}%` }}
        ></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-500 mb-1">Daily Streak</p>
          <p className="text-xl font-semibold text-gray-800">{progressData.streak} days</p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-500 mb-1">Challenges Completed</p>
          <p className="text-xl font-semibold text-gray-800">{progressData.challengesCompleted}</p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-500 mb-1">Last Activity</p>
          <p className="text-xl font-semibold text-gray-800">{progressData.lastActivity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;