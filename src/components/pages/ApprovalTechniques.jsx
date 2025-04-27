import React, { useState } from 'react';

const ApprovalTechniques = () => {
  const [activeTab, setActiveTab] = useState('yes-questions');

  const tabs = [
    { id: 'yes-questions', label: 'Yes Questions' },
    { id: 'beneficial-reasons', label: 'Beneficial Reasons' },
    { id: 'yes-choices', label: 'Yes Choices' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Getting Approval</h2>
      <p className="text-gray-600 mb-8">
        Learn techniques that increase your chances of getting people to agree with you. These methods help
        create a cooperative mindset and make it easier for others to say yes to your requests.
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
          {activeTab === 'yes-questions' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Power of Yes Questions</h3>
              <p className="text-gray-600 mb-6">
                When you want someone to say yes to a bigger request, start by asking smaller questions they can easily agree to. 
                This establishes a pattern of agreement that makes it more likely they'll continue agreeing.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">Example</h4>
                <p className="text-gray-700 mb-3">
                  Instead of directly asking "Would you help me with this project this weekend?" try this sequence:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>"Do you think this project is important for our team?" (First yes)</li>
                  <li>"Would you agree that finishing it soon would benefit everyone?" (Second yes)</li>
                  <li>"Would you be able to spare a few hours this weekend to help me complete it?" (Target yes)</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">Practice Exercise:</h4>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Scenario: You want to convince a colleague to join a new committee at work.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First "yes" question:
                      </label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Type your question here..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Second "yes" question:
                      </label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Type your question here..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Final request:
                      </label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Type your request here..." />
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                Check My Approach
              </button>
            </div>
          )}
          
          {activeTab === 'beneficial-reasons' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Providing Beneficial Reasons</h3>
              <p className="text-gray-600 mb-6">
                People are more likely to agree when they understand how it benefits them. Always frame your request
                in terms of what the other person gains, not just what you need.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">Example</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-red-500 mr-3">✗</div>
                    <div>
                      <p className="text-gray-700 font-medium">Ineffective approach:</p>
                      <p className="text-gray-600">"I need you to cover my shift on Saturday because I want to attend a concert."</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-3">✓</div>
                    <div>
                      <p className="text-gray-700 font-medium">Effective approach:</p>
                      <p className="text-gray-600">"Would you be willing to cover my shift on Saturday? I'd be happy to take your Sunday shift next weekend, which would give you a full day off for that family event you mentioned."</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">Practice Exercise:</h4>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Scenario: You want a teammate to help you prepare for an upcoming presentation.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rewrite this request to focus on their benefit:
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        "I need your help reviewing my presentation slides this afternoon because I'm nervous about presenting tomorrow."
                      </p>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md box-border" rows="3" placeholder="Rewrite the request here..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                Check My Approach
              </button>
            </div>
          )}
          
          {activeTab === 'yes-choices' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Offering Yes Choices</h3>
              <p className="text-gray-600 mb-6">
                Instead of asking for a single yes-or-no decision, offer choices where both options are acceptable to you.
                This gives the other person a sense of control while still achieving your goal.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">Example</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-red-500 mr-3">✗</div>
                    <div>
                      <p className="text-gray-700 font-medium">Less effective approach:</p>
                      <p className="text-gray-600">"Can we meet to discuss this project?"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-3">✓</div>
                    <div>
                      <p className="text-gray-700 font-medium">More effective approach:</p>
                      <p className="text-gray-600">"Would Tuesday at 2pm or Wednesday morning work better for you to discuss this project?"</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">Practice Exercise:</h4>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    For each scenario, rewrite the question to offer yes choices:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-700 mb-1">
                        "Do you want to go to dinner on Friday?"
                      </p>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Rewrite with yes choices..." />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 mb-1">
                        "Would you be willing to help with this report?"
                      </p>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md box-border" placeholder="Rewrite with yes choices..." />
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                Check My Approach
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovalTechniques;