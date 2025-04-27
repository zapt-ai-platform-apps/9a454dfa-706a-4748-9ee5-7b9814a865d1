import React, { useState } from 'react';

const GratitudeExpression = () => {
  const [activeTab, setActiveTab] = useState('principles');
  const [newGratitude, setNewGratitude] = useState('');
  const [gratitudeList, setGratitudeList] = useState([
    "My colleague who stayed late to help me finish an important project",
    "The barista who remembered my usual order and had it ready"
  ]);

  const tabs = [
    { id: 'principles', label: 'Principles' },
    { id: 'practice', label: 'Practice' },
    { id: 'log', label: 'Gratitude Log' }
  ];

  const handleAddGratitude = () => {
    if (newGratitude.trim()) {
      setGratitudeList([...gratitudeList, newGratitude]);
      setNewGratitude('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Expressing Gratitude</h2>
      <p className="text-gray-600 mb-8">
        Learn how to express sincere appreciation effectively. Gratitude strengthens relationships,
        improves your own wellbeing, and creates positive environments in both personal and professional settings.
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
          {activeTab === 'principles' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Power of Gratitude</h3>
              <p className="text-gray-600 mb-6">
                Expressing gratitude properly goes beyond saying "thanks." When done effectively, it creates a meaningful
                connection and leaves a lasting positive impression.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Benefits for the Recipient:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Feels valued and appreciated</li>
                    <li>Experiences increased motivation</li>
                    <li>More likely to continue helpful behaviors</li>
                    <li>Develops stronger connection with you</li>
                    <li>Experiences improved mood and well-being</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Benefits for You:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Improves your own psychological health</li>
                    <li>Strengthens your relationships</li>
                    <li>Enhances your reputation and likability</li>
                    <li>Increases your own happiness and satisfaction</li>
                    <li>Helps you notice positive aspects of life</li>
                  </ul>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-800 mb-3">The 5 Elements of Effective Gratitude:</h4>
              
              <div className="space-y-5 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Be Specific</h5>
                    <p className="text-gray-600">Describe exactly what the person did that you appreciate rather than using generic phrases.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-red-600 block mb-1">Instead of: "Thanks for your help."</span>
                      <span className="text-green-600">Better: "Thank you for staying late yesterday to help me troubleshoot those technical issues. Your expertise with the database saved me hours of work."</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Acknowledge the Effort</h5>
                    <p className="text-gray-600">Recognize the time, energy, thought, or sacrifice that went into their action.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-green-600">"I know how busy you are with your own deadlines, which makes me even more grateful that you took the time to review my presentation and give such thoughtful feedback."</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Explain the Impact</h5>
                    <p className="text-gray-600">Describe how their action positively affected you or others.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-green-600">"Your encouragement during our weekly meetings has helped me feel more confident about speaking up. In fact, I was able to present my ideas to the executive team last week because of the confidence I've built."</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Make It About Them</h5>
                    <p className="text-gray-600">Focus on their qualities or character traits that the action demonstrated.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-green-600">"The way you handled that difficult customer situation showed incredible patience and empathy. Your ability to stay calm under pressure and find solutions is impressive."</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Be Authentic</h5>
                    <p className="text-gray-600">Express your gratitude with genuine emotion rather than formulaic phrases.</p>
                    <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
                      <span className="text-green-600">"I was really touched by your thoughtfulness in remembering my birthday. The personal note you included with the gift made me feel truly valued as your friend."</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'practice' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Gratitude Practice Scenarios</h3>
              <p className="text-gray-600 mb-6">
                For each scenario, craft a thoughtful expression of gratitude using the principles you've learned.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Scenario 1: Professional Help</h4>
                  <p className="text-gray-700 mb-4">
                    A colleague spent two hours helping you prepare for an important presentation, giving you valuable feedback and suggestions.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Write your gratitude expression here..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Scenario 2: Personal Support</h4>
                  <p className="text-gray-700 mb-4">
                    A friend listened supportively for over an hour as you talked through a difficult personal situation, offering empathy without judgment.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Write your gratitude expression here..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Scenario 3: Everyday Kindness</h4>
                  <p className="text-gray-700 mb-4">
                    A neighbor noticed you were away and collected your packages, keeping them safe until you returned.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Write your gratitude expression here..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                  Submit for Feedback
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'log' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Gratitude Log</h3>
              <p className="text-gray-600 mb-6">
                Regularly recording what you're grateful for helps build your gratitude muscle and enhances wellbeing.
                Add to your log whenever you notice something you appreciate.
              </p>
              
              <div className="mb-6">
                <div className="flex items-end gap-2 mb-4">
                  <div className="flex-1">
                    <label htmlFor="newGratitude" className="block text-sm font-medium text-gray-700 mb-1">
                      I'm grateful for:
                    </label>
                    <input 
                      type="text" 
                      id="newGratitude"
                      className="w-full p-2 border border-gray-300 rounded-md box-border" 
                      placeholder="Add new gratitude here..."
                      value={newGratitude}
                      onChange={(e) => setNewGratitude(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={handleAddGratitude}
                    disabled={!newGratitude.trim()}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      newGratitude.trim() 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors`}
                  >
                    Add
                  </button>
                </div>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    {gratitudeList.length > 0 ? (
                      gratitudeList.map((item, index) => (
                        <li key={index} className="p-3 flex items-center">
                          <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))
                    ) : (
                      <li className="p-3 text-gray-500 text-center">
                        Your gratitude log is empty. Add some gratitude to get started!
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Gratitude Log Benefits:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Trains your mind to notice positive aspects of life</li>
                  <li>Reduces stress and improves emotional wellbeing</li>
                  <li>Creates a resource of positive thoughts for challenging days</li>
                  <li>Helps identify who deserves your expressed thanks</li>
                  <li>Builds the habit of gratitude in your daily life</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GratitudeExpression;