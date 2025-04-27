import React, { useState } from 'react';

const DailyChallenge = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  
  // This would normally come from an API or state management
  const challenge = {
    title: "Active Listening Challenge",
    description: "Today, practice active listening with someone. Maintain eye contact, nod occasionally, and summarize what they said before responding.",
    points: 15
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md p-5 text-white">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">Today's Challenge</h3>
        <span className="px-2 py-1 bg-blue-800 bg-opacity-50 rounded-full text-xs font-semibold">
          +{challenge.points} points
        </span>
      </div>
      
      <p className="font-semibold mb-2">{challenge.title}</p>
      <p className="text-sm text-blue-100 mb-4">{challenge.description}</p>
      
      <button
        onClick={() => setIsCompleted(!isCompleted)}
        className={`w-full py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors ${
          isCompleted 
            ? 'bg-green-500 hover:bg-green-600' 
            : 'bg-white text-blue-700 hover:bg-blue-50'
        }`}
      >
        {isCompleted ? '✓ Completed' : 'Mark as Completed'}
      </button>
    </section>
  );
};

export default DailyChallenge;