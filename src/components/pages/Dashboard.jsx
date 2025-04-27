import React from 'react';
import ModuleCard from '../ui/ModuleCard';
import ProgressSummary from '../ui/ProgressSummary';
import DailyChallenge from '../ui/DailyChallenge';

const Dashboard = () => {
  const modules = [
    { id: 'learn-materials', title: 'Learning Materials', description: 'Study the principles of effective people skills', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'speaking-practice', title: 'Speaking Practice', description: 'Learn to talk with others effectively', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'listening-practice', title: 'Listening Practice', description: 'Develop effective listening skills', icon: 'M9 5l7 7-7 7' },
    { id: 'influence-practice', title: 'Influence & Persuasion', description: 'Master techniques to influence others', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Skill with people</h2>
        <p className="text-gray-600 mb-4">
          This interactive platform helps you master people skills through structured learning and practical exercises. 
          Explore the modules, track your progress, and complete daily challenges to improve your abilities.
        </p>
      </section>

      <DailyChallenge />
      
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h3>
        <ProgressSummary />
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map(module => (
            <ModuleCard 
              key={module.id}
              id={module.id}
              title={module.title}
              description={module.description}
              icon={module.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;