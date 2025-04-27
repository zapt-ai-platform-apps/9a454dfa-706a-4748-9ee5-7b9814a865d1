import React, { useState } from 'react';

const ConversationSkills = () => {
  const [activeTab, setActiveTab] = useState('preparation');

  const tabs = [
    { id: 'preparation', label: 'Preparation' },
    { id: 'delivery', label: 'Delivery Techniques' },
    { id: 'topics', label: 'Conversation Topics' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Conversation Skills</h2>
      <p className="text-gray-600 mb-8">
        Learn how to engage in meaningful, enjoyable conversations that build connections and leave 
        positive impressions. These techniques will help you communicate with confidence and authenticity.
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
          {activeTab === 'preparation' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparing for Engaging Conversations</h3>
              <p className="text-gray-600 mb-6">
                Great conversationalists don't just rely on spontaneity—they prepare. These strategies
                will help you feel more confident and have more interesting conversations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Know What You Want to Discuss</h4>
                    <p className="text-gray-600 mb-3">Having some prepared topics and insights helps prevent awkward silences and creates more meaningful exchanges.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md mb-3">
                      <h5 className="font-medium text-gray-700 mb-2">Preparation Techniques:</h5>
                      <ol className="list-decimal list-inside space-y-1 text-gray-600">
                        <li>Stay informed about current events and topics of general interest</li>
                        <li>Reflect on recent experiences that might make good stories</li>
                        <li>Consider questions you could ask based on the context or person</li>
                        <li>Have 2-3 topics ready that you're knowledgeable and enthusiastic about</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-md">
                      <h5 className="font-medium text-blue-800 mb-2">Practice Exercise:</h5>
                      <p className="text-gray-700 mb-3">
                        Before your next social event, prepare three topics you could discuss: 
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>A current event or trend</li>
                        <li>A personal experience that taught you something</li>
                        <li>A question about something you're genuinely curious about</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Research When Appropriate</h4>
                    <p className="text-gray-600 mb-3">For planned meetings or events, doing a little background research can greatly enhance your conversations.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium text-gray-700 mb-2">When and What to Research:</h5>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-gray-600">For Professional Settings:</p>
                          <ul className="list-disc list-inside text-gray-600 ml-2">
                            <li>Recent company news or achievements</li>
                            <li>Background of people you'll be meeting</li>
                            <li>Industry trends or developments</li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-gray-600">For Social Gatherings:</p>
                          <ul className="list-disc list-inside text-gray-600 ml-2">
                            <li>Common interests among attendees</li>
                            <li>The occasion or purpose of the gathering</li>
                            <li>Recent activities of close friends you'll see</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mental Preparation</h4>
                    <p className="text-gray-600 mb-3">Your mindset significantly affects conversation quality. Taking time to prepare mentally helps you be more present and confident.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium text-gray-700 mb-2">Mental Readiness Techniques:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Set a positive intention for your interactions</li>
                        <li>Visualize yourself engaged in enjoyable conversations</li>
                        <li>Remind yourself that the goal is connection, not performance</li>
                        <li>Practice a few deep breaths before entering social situations</li>
                        <li>Adopt a curious mindset, ready to learn from others</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'delivery' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Conversation Delivery Techniques</h3>
              <p className="text-gray-600 mb-6">
                How you communicate is just as important as what you say. These techniques will help you deliver
                your thoughts clearly and engage others effectively.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Speak Concisely</h4>
                    <p className="text-gray-600 mb-3">Keep your thoughts focused and avoid rambling. Being concise shows respect for others' time and attention.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md mb-3">
                      <h5 className="font-medium text-gray-700 mb-2">Key Practices:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Think about your main point before speaking</li>
                        <li>Use the "headline first" approach—start with your conclusion, then provide details if interest is shown</li>
                        <li>Pause occasionally to let others respond</li>
                        <li>Be mindful of how long you've been speaking</li>
                      </ul>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-1 mr-2">
                        <div className="bg-red-50 p-2 rounded text-sm">
                          <p className="font-medium text-red-700 mb-1">Too Verbose:</p>
                          <p className="text-gray-700">"So yesterday I was going to the store, you know the one on Oak Street, not the other one that closed last year, and I ran into this person who looked exactly like someone I knew in college, but it turned out it wasn't them, but we started talking anyway and..."</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-green-50 p-2 rounded text-sm">
                          <p className="font-medium text-green-700 mb-1">Concise & Engaging:</p>
                          <p className="text-gray-700">"I had the most interesting conversation with a stranger yesterday who I mistook for an old college friend. We ended up discussing..."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Maintain Eye Contact</h4>
                    <p className="text-gray-600 mb-3">Appropriate eye contact creates connection and shows you're engaged in the conversation.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium text-gray-700 mb-2">Effective Eye Contact:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Aim for about 60-70% eye contact while speaking (cultural norms may vary)</li>
                        <li>Look away occasionally, but return your gaze naturally</li>
                        <li>In group settings, make brief eye contact with each person</li>
                        <li>Focus on one eye or the area between the eyes if direct contact feels uncomfortable</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Voice Modulation</h4>
                    <p className="text-gray-600 mb-3">How you use your voice significantly impacts how engaged and interested others will be in your conversation.</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium text-gray-700 mb-2">Voice Techniques:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Vary your tone to emphasize important points</li>
                        <li>Speak clearly and at a moderate pace</li>
                        <li>Adjust volume based on environment (not too loud or too soft)</li>
                        <li>Use appropriate pauses for emphasis or to allow reflection</li>
                        <li>Match energy level somewhat to the context and others' styles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'topics' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Engaging Conversation Topics</h3>
              <p className="text-gray-600 mb-6">
                The subjects you choose to discuss can make or break a conversation. These topic strategies
                will help you maintain interesting, meaningful exchanges in various situations.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">The Golden Rule of Topics:</h4>
                <p className="text-gray-700">
                  Focus primarily on topics that interest the other person, not just what interests you.
                  This approach creates engagement and builds rapport much more effectively.
                </p>
              </div>
              
              <h4 className="font-semibold text-gray-800 mb-3">Topic Categories for Different Scenarios:</h4>
              
              <div className="space-y-5 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                    <h5 className="font-medium text-gray-800">Professional Settings</h5>
                  </div>
                  <div className="p-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Industry trends and developments</li>
                      <li>Professional challenges and how to overcome them</li>
                      <li>Career paths and professional growth</li>
                      <li>Work-life balance strategies</li>
                      <li>Interesting projects (theirs first, then yours if relevant)</li>
                    </ul>
                    <div className="mt-3 text-sm text-gray-600 italic">
                      Avoid: Office politics, controversial opinions, overly personal topics
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                    <h5 className="font-medium text-gray-800">Social Gatherings</h5>
                  </div>
                  <div className="p-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Recent positive experiences or adventures</li>
                      <li>Books, movies, shows, or podcasts you've enjoyed</li>
                      <li>Hobbies and personal interests</li>
                      <li>Travel experiences or plans</li>
                      <li>Local events, restaurants, or activities</li>
                    </ul>
                    <div className="mt-3 text-sm text-gray-600 italic">
                      Avoid: Divisive political issues, complaints, personal problems in early interactions
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                    <h5 className="font-medium text-gray-800">Deeper Conversations</h5>
                  </div>
                  <div className="p-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Personal values and what matters most in life</li>
                      <li>Formative experiences that shaped who you are</li>
                      <li>Goals, dreams, and aspirations</li>
                      <li>Lessons learned from challenges</li>
                      <li>Perspectives on meaningful subjects (approached with respect)</li>
                    </ul>
                    <div className="mt-3 text-sm text-gray-600 italic">
                      Note: These topics are appropriate after establishing rapport and mutual trust
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Conversation Flow Strategy:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><span className="font-medium">Start with lighter topics</span> to establish comfort</li>
                  <li><span className="font-medium">Ask open-ended questions</span> that require more than yes/no answers</li>
                  <li><span className="font-medium">Listen for "hooks"</span> - details the person mentions that you can ask more about</li>
                  <li><span className="font-medium">Gradually move to more meaningful topics</span> as rapport builds</li>
                  <li><span className="font-medium">Be willing to adjust topics</span> based on the other person's level of engagement</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Practice Exercise: Conversation Builder</h3>
          <p className="text-gray-600 mb-6">
            Apply the techniques you've learned in this simulated conversation exercise.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <h4 className="font-medium text-gray-800 mb-3">Scenario: Networking Event</h4>
            <p className="text-gray-700 mb-4">
              You've just been introduced to someone who works in your industry but at a different company.
              How would you start and develop the conversation?
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  1. Your opener (how would you begin the conversation):
                </label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md box-border" 
                  rows="2"
                  placeholder="Write your conversation opener here..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  2. Two follow-up questions that focus on their interests:
                </label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md box-border" 
                  rows="2"
                  placeholder="Write your follow-up questions here..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  3. A related experience you might share (keeping it concise):
                </label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md box-border" 
                  rows="2"
                  placeholder="Write what you might share here..."
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Submit for Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationSkills;