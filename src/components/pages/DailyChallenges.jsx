import React, { useState } from 'react';

const DailyChallenges = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [todayChallenge, setTodayChallenge] = useState({
    id: 1,
    title: "Active Listening Challenge",
    description: "Practice active listening in at least two conversations today. Maintain eye contact, lean slightly forward, and ask follow-up questions that show you're fully engaged.",
    tips: [
      "Put away your phone and other distractions",
      "Resist the urge to interrupt or plan your response while they're speaking",
      "Summarize what they said before responding"
    ],
    completed: false,
    points: 15
  });
  
  const [upcomingChallenges] = useState([
    {
      id: 2,
      title: "Genuine Compliment Challenge",
      description: "Give at least three sincere, specific compliments to different people. Focus on their actions or choices rather than just appearances.",
      scheduled: "Tomorrow"
    },
    {
      id: 3,
      title: "Yes Question Sequence",
      description: "Practice the 'yes question' technique by starting with questions that will get agreement before making a request.",
      scheduled: "In 2 days"
    },
    {
      id: 4,
      title: "First Impression Practice",
      description: "For every new person you meet today, practice making a positive first impression using the techniques you've learned.",
      scheduled: "In 3 days"
    }
  ]);
  
  const [completedChallenges] = useState([
    {
      id: 101,
      title: "Gratitude Expression",
      description: "Express specific, detailed gratitude to someone who has helped you recently.",
      completed: "Yesterday",
      points: 15
    },
    {
      id: 102,
      title: "Conversation Initiation",
      description: "Start conversations with three different people by focusing on their interests.",
      completed: "3 days ago",
      points: 10
    },
    {
      id: 103,
      title: "Non-verbal Communication",
      description: "Practice maintaining open body language in all your interactions today.",
      completed: "5 days ago",
      points: 10
    }
  ]);

  const tabs = [
    { id: 'today', label: 'Today\'s Challenge' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' }
  ];

  const handleCompleteChallenge = () => {
    setTodayChallenge({
      ...todayChallenge,
      completed: !todayChallenge.completed
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Challenges</h2>
      <p className="text-gray-600 mb-8">
        Regular practice is essential for mastering people skills. These daily challenges 
        provide focused activities to help you apply what you've learned in real-life situations.
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
          {activeTab === 'today' && (
            <div>
              <div className={`rounded-lg overflow-hidden ${
                todayChallenge.completed ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className={`p-5 ${
                  todayChallenge.completed ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <div className="flex justify-between items-start">
                    <h3 className={`text-xl font-bold ${
                      todayChallenge.completed ? 'text-green-800' : 'text-blue-800'
                    }`}>
                      {todayChallenge.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      todayChallenge.completed 
                        ? 'bg-green-200 text-green-800' 
                        : 'bg-blue-200 text-blue-800'
                    }`}>
                      +{todayChallenge.points} points
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className={`mb-6 ${
                    todayChallenge.completed ? 'text-green-700' : 'text-blue-700'
                  }`}>
                    {todayChallenge.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`font-medium mb-2 ${
                      todayChallenge.completed ? 'text-green-800' : 'text-blue-800'
                    }`}>
                      Tips for Success:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {todayChallenge.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={handleCompleteChallenge}
                    className={`w-full py-3 rounded-md text-sm font-semibold cursor-pointer transition-colors ${
                      todayChallenge.completed 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {todayChallenge.completed ? '✓ Completed! (Tap to Undo)' : 'Mark as Completed'}
                  </button>
                </div>
              </div>
              
              {todayChallenge.completed && (
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">Reflection (Optional)</h4>
                  <p className="text-gray-700 mb-3">
                    Taking a moment to reflect on your experience can help reinforce your learning:
                  </p>
                  <textarea 
                    className="w-full p-3 border border-green-300 rounded-md box-border mb-3" 
                    rows="4"
                    placeholder="How did the challenge go? What did you learn? What might you do differently next time?"
                  ></textarea>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-green-700 transition-colors">
                    Save Reflection
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'upcoming' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Challenges</h3>
              <p className="text-gray-600 mb-6">
                Preview what's coming up in your challenge schedule. Each day brings a new opportunity to practice and improve your people skills.
              </p>
              
              <div className="space-y-4">
                {upcomingChallenges.map(challenge => (
                  <div key={challenge.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">{challenge.title}</h4>
                      <span className="bg-gray-200 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                        {challenge.scheduled}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Personalize Your Challenges</h4>
                <p className="text-gray-700 mb-3">
                  Would you like to focus on specific people skills? We can customize your upcoming challenges.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                  Customize Challenge Focus
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'completed' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Challenge History</h3>
              <p className="text-gray-600 mb-6">
                Review challenges you've completed and the skills you've practiced. Your consistent effort is building lasting people skills.
              </p>
              
              <div className="space-y-4">
                {completedChallenges.map(challenge => (
                  <div key={challenge.id} className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">{challenge.title}</h4>
                      <div className="flex items-center">
                        <span className="bg-green-200 px-2 py-1 rounded-full text-xs font-medium text-green-800 mr-2">
                          +{challenge.points}
                        </span>
                        <span className="text-xs text-gray-500">
                          {challenge.completed}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Your Challenge Stats</h4>
                    <p className="text-gray-600 text-sm">You're building excellent habits!</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">3 challenges this week</p>
                    <p className="text-gray-700 font-medium">35 total points earned</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyChallenges;