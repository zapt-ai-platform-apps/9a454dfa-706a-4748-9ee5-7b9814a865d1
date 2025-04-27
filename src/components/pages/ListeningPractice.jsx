import React, { useState } from 'react';

const ListeningPractice = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [userResponse, setUserResponse] = useState('');
  const [showEvaluation, setShowEvaluation] = useState(false);

  const exercises = [
    {
      id: 1,
      title: "Maintaining Eye Contact",
      description: "Practice focusing on maintaining proper eye contact during a conversation.",
      scenario: "Your friend is telling you about their recent vacation experience.",
      conversation: [
        "I just got back from the most amazing trip to Thailand. The beaches were absolutely stunning, and the food was out of this world!",
        "We visited Bangkok first, which was so vibrant and chaotic in the best way. The temples were incredible, especially the reclining Buddha at Wat Pho.",
        "Then we headed south to Krabi and took a boat to some of the small islands. The limestone cliffs rising out of the turquoise water were just breathtaking.",
        "The best part might have been the street food. I tried everything from pad thai from little carts to these amazing mango sticky rice desserts.",
        "I'm already planning my next trip back. Maybe next time I'll head north to Chiang Mai. Have you ever been to Thailand?"
      ],
      questions: [
        {
          question: "Which city did they visit first?",
          options: ["Phuket", "Bangkok", "Chiang Mai", "Krabi"],
          correctAnswer: "Bangkok"
        },
        {
          question: "What kind of dessert did they mention trying?",
          options: ["Fried bananas", "Coconut ice cream", "Mango sticky rice", "Thai tea pudding"],
          correctAnswer: "Mango sticky rice"
        },
        {
          question: "Which temple did they specifically mention visiting?",
          options: ["Temple of the Emerald Buddha", "Wat Arun", "Wat Pho", "White Temple"],
          correctAnswer: "Wat Pho"
        }
      ],
      tips: [
        "Focus on maintaining natural eye contact throughout the conversation",
        "Avoid looking at your phone or being distracted by your surroundings",
        "It's okay to occasionally look away, but return your gaze to show attention"
      ]
    },
    {
      id: 2,
      title: "Leaning Forward",
      description: "Practice showing engagement by leaning slightly forward during important conversations.",
      scenario: "A colleague is sharing an important work update with you.",
      conversation: [
        "I wanted to let you know about some changes coming to our project timeline. The client has asked for an additional feature that will impact our delivery date.",
        "We'll need to push back the launch by about two weeks, which means all our milestones will shift accordingly.",
        "The good news is they've approved additional budget for this work, so we won't have to cut corners on quality.",
        "The new feature is actually pretty exciting - it's an interactive dashboard that will help users visualize their data much more effectively.",
        "I'm going to send around an updated schedule later today, but I wanted to give you a heads up first. Do you have any concerns about the timeline change?"
      ],
      questions: [
        {
          question: "How long will the project launch be delayed?",
          options: ["One week", "Two weeks", "One month", "The launch date won't change"],
          correctAnswer: "Two weeks"
        },
        {
          question: "What is the new feature that's being added?",
          options: ["Mobile app integration", "Interactive dashboard", "Payment processing", "User authentication"],
          correctAnswer: "Interactive dashboard"
        },
        {
          question: "What positive aspect did they mention about the change?",
          options: ["Additional budget approval", "Shorter timeline", "Fewer features required", "New team members"],
          correctAnswer: "Additional budget approval"
        }
      ],
      tips: [
        "Lean slightly forward to demonstrate interest in what's being said",
        "Keep your posture open and relaxed, not stiff or unnaturally close",
        "Combine this with other listening cues like nodding occasionally"
      ]
    }
  ];

  const handleNextStep = () => {
    if (currentStep < activeExercise.conversation.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowEvaluation(true);
    }
  };

  const handleAnswerSubmit = () => {
    // Logic would be more complex in a real application
    setUserResponse('');
  };

  const resetExercise = () => {
    setCurrentStep(1);
    setUserResponse('');
    setShowEvaluation(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Listening Practice</h2>
      <p className="text-gray-600 mb-8">
        These exercises will help you develop effective listening skills through practicing key techniques like
        maintaining eye contact, leaning forward, asking questions, and attentively processing what you hear.
      </p>
      
      {!activeExercise ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            {!showEvaluation ? (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  The Conversation ({currentStep}/{activeExercise.conversation.length}):
                </h4>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                  <p className="text-gray-700">"{activeExercise.conversation[currentStep - 1]}"</p>
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    {currentStep < activeExercise.conversation.length ? "Next" : "Complete Listening"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-4">Listening Comprehension Check:</h4>
                
                {activeExercise.questions.map((q, index) => (
                  <div key={index} className="mb-6 bg-gray-50 p-4 rounded-md border border-gray-200">
                    <p className="font-medium text-gray-800 mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`q${index}-opt${optIndex}`}
                            name={`question-${index}`}
                            className="mr-2"
                          />
                          <label htmlFor={`q${index}-opt${optIndex}`} className="text-gray-700">{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={resetExercise}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-300 transition-colors"
                  >
                    Restart Exercise
                  </button>
                  <button
                    onClick={handleAnswerSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    Submit Answers
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListeningPractice;