import React from 'react';

const CriticismUnderstanding = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Criticism</h2>
      <p className="text-gray-600 mb-8">
        Learn about the impact of criticism, when to avoid it, and how to provide constructive feedback
        when necessary. Mastering this skill helps maintain positive relationships even during difficult conversations.
      </p>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">The Danger of Criticism</h3>
          <p className="text-gray-600 mb-6">
            Criticism, even when well-intentioned, often creates defensiveness and resistance rather than positive change.
            Understanding its psychological impact helps us communicate more effectively.
          </p>
          
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-red-800 mb-2">Why Criticism Fails:</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-medium">It triggers defensiveness:</span> People instinctively protect their self-image when criticized.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-medium">It damages relationships:</span> Repeated criticism erodes trust and goodwill between people.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-medium">It rarely achieves its intended purpose:</span> Most criticism doesn't lead to the desired change in behavior.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              <h4 className="font-medium text-gray-800 mb-2">The Criticism Cycle:</h4>
              <p className="text-gray-600 text-sm">
                Criticism often creates a negative feedback loop that damages relationships and prevents improvement:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm mt-2">
                <li>Person A criticizes Person B</li>
                <li>Person B feels attacked and becomes defensive</li>
                <li>Person B either withdraws or counterattacks</li>
                <li>Communication breaks down</li>
                <li>The original issue remains unsolved</li>
                <li>Frustration builds, leading to more criticism</li>
              </ol>
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-2">The Most Common Mistake:</h4>
              <p className="text-gray-600 text-sm">
                Many people believe that pointing out others' flaws will motivate them to change. In reality, criticism
                often has the opposite effect, creating resistance and resentment rather than inspiring improvement.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Research shows that relationships with high criticism levels have poorer outcomes in all contexts—from
                marriages to workplaces to parent-child relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Alternatives to Criticism</h3>
          <p className="text-gray-600 mb-6">
            Instead of criticizing, try these more effective approaches to encourage positive change.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Lead with Appreciation</h4>
                <p className="text-gray-600 mb-2">Begin conversations by acknowledging what's going well before addressing issues.</p>
                <div className="bg-gray-50 p-3 rounded-md text-sm">
                  <p className="text-red-600 mb-1">Instead of: "You never help with household chores."</p>
                  <p className="text-green-600">Try: "I really appreciate how you took care of dinner last night. I'd like to figure out a way we can share the household responsibilities more evenly."</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Use "I" Statements</h4>
                <p className="text-gray-600 mb-2">Express your feelings and needs without accusation or blame.</p>
                <div className="bg-gray-50 p-3 rounded-md text-sm">
                  <p className="text-red-600 mb-1">Instead of: "You're always late and it's disrespectful."</p>
                  <p className="text-green-600">Try: "I feel frustrated when I have to wait, as it affects my schedule. I'd appreciate it if we could both aim to be on time."</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Focus on Solutions</h4>
                <p className="text-gray-600 mb-2">Collaborate on how to improve the situation rather than dwelling on problems.</p>
                <div className="bg-gray-50 p-3 rounded-md text-sm">
                  <p className="text-red-600 mb-1">Instead of: "This report is full of errors. You need to be more careful."</p>
                  <p className="text-green-600">Try: "I noticed a few inconsistencies in the report. Would it help if we created a checklist for future reports to ensure accuracy?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">When Feedback Is Necessary</h3>
          <p className="text-gray-600 mb-6">
            There are times when addressing problems is unavoidable. In these cases, here's how to provide 
            constructive feedback that minimizes defensiveness and maximizes positive change.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-blue-800 mb-3">The 5-Step Constructive Feedback Method:</h4>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">1</span>
                <div>
                  <p className="font-medium text-gray-800">Choose the right time and place</p>
                  <p className="text-gray-600 text-sm">Private setting, when neither party is stressed or rushed, and the issue is still relevant</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">2</span>
                <div>
                  <p className="font-medium text-gray-800">Start with appreciation</p>
                  <p className="text-gray-600 text-sm">Begin with a sincere recognition of something positive about the person or their work</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">3</span>
                <div>
                  <p className="font-medium text-gray-800">Describe the issue specifically</p>
                  <p className="text-gray-600 text-sm">Focus on the behavior or outcome, not the person; use concrete examples</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">4</span>
                <div>
                  <p className="font-medium text-gray-800">Explain the impact</p>
                  <p className="text-gray-600 text-sm">Help them understand why the issue matters by explaining its effects</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-blue-800 font-medium">5</span>
                <div>
                  <p className="font-medium text-gray-800">Collaborate on a solution</p>
                  <p className="text-gray-600 text-sm">Ask for their input and work together to address the issue; offer support</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Try the Interactive Feedback Exercise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriticismUnderstanding;