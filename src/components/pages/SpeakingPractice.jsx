import React, { useState } from 'react';

const SpeakingPractice = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [userResponse, setUserResponse] = useState('');
  const [feedback, setFeedback] = useState(null);

  const exercises = [
    {
      id: 1,
      title: "Talk About Their Interests",
      description: "Practice talking about someone else's interests to engage them in conversation.",
      scenario: "Your colleague mentions they enjoy hiking on weekends. How would you respond to show interest and keep the conversation focused on them?",
      tips: [
        "Ask open-ended questions about their hiking experiences",
        "Show genuine curiosity about what they enjoy about hiking",
        "Relate to their interest without shifting focus to yourself"
      ]
    },
    {
      id: 2,
      title: "Make Others Feel Important",
      description: "Practice language that makes the other person feel valued and important.",
      scenario: "A team member has just presented their project to the group. How would you acknowledge their work in a way that makes them feel important?",
      tips: [
        "Acknowledge specific aspects of their work that impressed you",
        "Use their name when giving feedback",
        "Show appreciation for their effort and time"
      ]
    },
    {
      id: 3,
      title: "Finding Points of Agreement",
      description: "Practice finding common ground with others, even in disagreement.",
      scenario: "You disagree with a suggestion made by a friend, but want to maintain harmony. How would you respond while finding points of agreement?",
      tips: [
        "Start by acknowledging the valid parts of their suggestion",
        "Use phrases like 'I agree that...' before expressing your different view",
        "Suggest alternatives that incorporate elements of their idea"
      ]
    }
  ];

  const handleSubmitResponse = () => {
    if (!userResponse.trim()) return;
    
    // This would normally involve more sophisticated analysis
    // For now, we'll provide basic feedback based on response length
    if (userResponse.length < 20) {
      setFeedback({
        status: 'needs-improvement',
        message: 'Try to provide a more detailed response that demonstrates the principles from this exercise.'
      });
    } else if (userResponse.toLowerCase().includes('you') || userResponse.toLowerCase().includes('your')) {
      setFeedback({
        status: 'good',
        message: 'Good use of "you" language that focuses on the other person. Continue practicing this approach.'
      });
    } else {
      setFeedback({
        status: 'excellent',
        message: 'Excellent! Your response shows you understand how to engage with others effectively.'
      });
    }
  };

  const resetExercise = () => {
    setUserResponse('');
    setFeedback(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Speaking Practice</h2>
      <p className="text-gray-600 mb-8">
        These exercises will help you practice effective speaking techniques that focus on the other person's interests, 
        make them feel important, and build rapport through finding common ground.
      </p>
      
      {!activeExercise ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exercises.map(exercise => (
            <div 
              key={exercise.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveExercise(exercise)}
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{exercise.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{exercise.description}</p>
                <button className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                  Start Exercise →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{activeExercise.title}</h3>
              <button 
                onClick={() => {
                  setActiveExercise(null);
                  resetExercise();
                }}
                className="text-white hover:text-blue-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-blue-100 mt-2">{activeExercise.description}</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Scenario:</h4>
              <p className="text-gray-700">{activeExercise.scenario}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Tips:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {activeExercise.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Your Response:</h4>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md box-border"
                rows="4"
                placeholder="Type your response here..."
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                disabled={feedback !== null}
              ></textarea>
            </div>
            
            {feedback && (
              <div className={`mb-6 p-4 rounded-md ${
                feedback.status === 'needs-improvement' 
                  ? 'bg-yellow-50 text-yellow-800'
                  : feedback.status === 'good'
                    ? 'bg-blue-50 text-blue-800'
                    : 'bg-green-50 text-green-800'
              }`}>
                <h4 className="font-semibold mb-1">Feedback:</h4>
                <p>{feedback.message}</p>
              </div>
            )}
            
            <div className="flex justify-end space-x-4">
              {feedback ? (
                <button
                  onClick={resetExercise}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-300 transition-colors"
                >
                  Try Again
                </button>
              ) : (
                <button
                  onClick={handleSubmitResponse}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                  disabled={!userResponse.trim()}
                >
                  Submit Response
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakingPractice;