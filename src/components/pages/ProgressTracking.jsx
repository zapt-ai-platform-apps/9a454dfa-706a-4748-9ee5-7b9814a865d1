import React, { useState } from 'react';

const ProgressTracking = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'skills', label: 'Skills Breakdown' },
    { id: 'achievements', label: 'Achievements' }
  ];

  // This would normally be fetched from a database or state management
  const progressData = {
    overallProgress: 42,
    streak: 5,
    modulesCompleted: 6,
    totalModules: 14,
    challengesCompleted: 12
  };

  const skillsData = [
    { name: 'Speaking Skills', progress: 65, lessons: 4, exercises: 8 },
    { name: 'Listening Skills', progress: 50, lessons: 3, exercises: 6 },
    { name: 'Influence & Persuasion', progress: 35, lessons: 2, exercises: 4 },
    { name: 'Getting Approval', progress: 40, lessons: 2, exercises: 5 },
    { name: 'Mood Management', progress: 70, lessons: 4, exercises: 9 },
    { name: 'Complimenting', progress: 25, lessons: 1, exercises: 3 },
    { name: 'Criticism Understanding', progress: 20, lessons: 1, exercises: 2 },
    { name: 'Gratitude Expression', progress: 45, lessons: 2, exercises: 5 },
    { name: 'Impression Creation', progress: 55, lessons: 3, exercises: 7 },
    { name: 'Conversation Skills', progress: 30, lessons: 2, exercises: 4 }
  ];

  const achievements = [
    { title: 'First Steps', description: 'Complete your first module', completed: true, date: '2023-06-15' },
    { title: 'Consistent Learner', description: 'Maintain a 5-day streak', completed: true, date: '2023-06-20' },
    { title: 'Practice Makes Perfect', description: 'Complete 10 practical exercises', completed: true, date: '2023-06-25' },
    { title: 'Halfway There', description: 'Reach 50% overall progress', completed: false },
    { title: 'Conversation Master', description: 'Complete all conversation modules', completed: false },
    { title: 'People Skill Expert', description: 'Complete all modules and exercises', completed: false }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Progress Tracking</h2>
      <p className="text-gray-600 mb-8">
        Track your journey in mastering people skills. See how far you've come, identify areas for growth,
        and celebrate your achievements.
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
          {activeTab === 'overview' && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center mb-8">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Overall Progress</h3>
                  <p className="text-gray-600">You're making steady progress on your people skills journey.</p>
                </div>
                <div className="flex-shrink-0 relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeDasharray={`${progressData.overallProgress}, 100`}
                    />
                    <text x="18" y="20.5" textAnchor="middle" fontSize="8" fill="#1F2937" fontWeight="bold">
                      {progressData.overallProgress}%
                    </text>
                  </svg>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Daily Streak</p>
                      <p className="text-2xl font-semibold text-gray-800">{progressData.streak} days</p>
                    </div>
                    <div className="text-blue-500">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Modules Completed</p>
                      <p className="text-2xl font-semibold text-gray-800">{progressData.modulesCompleted}/{progressData.totalModules}</p>
                    </div>
                    <div className="text-blue-500">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Challenges Completed</p>
                      <p className="text-2xl font-semibold text-gray-800">{progressData.challengesCompleted}</p>
                    </div>
                    <div className="text-blue-500">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                <div className="bg-gray-50 rounded-lg border border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    <li className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-3">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Completed "Active Listening Challenge"</p>
                          <p className="text-gray-500 text-sm">2 hours ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-1 mr-3">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Started "The Art of Complimenting" module</p>
                          <p className="text-gray-500 text-sm">Yesterday</p>
                        </div>
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-purple-100 rounded-full p-1 mr-3">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Earned "Consistent Learner" achievement</p>
                          <p className="text-gray-500 text-sm">3 days ago</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'skills' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills Breakdown</h3>
              <p className="text-gray-600 mb-6">
                See your progress across different people skills areas. Focus on improving 
                skills with lower percentages to become well-rounded.
              </p>
              
              <div className="space-y-5">
                {skillsData.map(skill => (
                  <div key={skill.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-gray-800">{skill.name}</h4>
                      <span className="text-sm font-medium text-gray-600">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex text-sm text-gray-500 justify-between">
                      <span>{skill.lessons} lessons completed</span>
                      <span>{skill.exercises} exercises completed</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Recommended Focus Areas:</h4>
                <p className="text-gray-700 mb-4">
                  Based on your current progress, we recommend focusing on these skills:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Criticism Understanding (20%)</li>
                  <li>Complimenting (25%)</li>
                  <li>Conversation Skills (30%)</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'achievements' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Achievements</h3>
              <p className="text-gray-600 mb-6">
                Track your milestones and accomplishments as you develop your people skills.
                Complete more modules and exercises to unlock additional achievements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg p-4 border ${
                      achievement.completed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 rounded-full p-2 mr-3 ${
                        achievement.completed ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'
                      }`}>
                        {achievement.completed ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className={`font-medium ${
                          achievement.completed ? 'text-gray-800' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${
                          achievement.completed ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                        {achievement.completed && achievement.date && (
                          <p className="text-xs text-green-600 mt-1">
                            Completed on {new Date(achievement.date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="font-medium text-blue-800 mb-2">Keep Going!</h4>
                <p className="text-gray-700">
                  You've unlocked 3 out of 6 achievements. Continue practicing your people skills to earn them all!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;