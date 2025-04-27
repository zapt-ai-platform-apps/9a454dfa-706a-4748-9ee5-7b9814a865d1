import React, { useState } from 'react';

const ComplimentArt = () => {
  const [activeSection, setActiveSection] = useState('principles');

  const sections = [
    { id: 'principles', label: 'Principles' },
    { id: 'practice', label: 'Practice' },
    { id: 'examples', label: 'Examples' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">The Art of Complimenting</h2>
      <p className="text-gray-600 mb-8">
        Learn to give sincere, impactful compliments that strengthen relationships and make others feel valued.
        A well-delivered compliment can transform someone's day and your connection with them.
      </p>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="border-b">
          <div className="flex">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-3 text-sm font-medium ${
                  activeSection === section.id
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          {activeSection === 'principles' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Principles of Effective Compliments</h3>
              
              <div className="space-y-6 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Focus on Actions, Not Just Traits</h4>
                    <p className="text-gray-600">Compliment what people do rather than just who they are. This acknowledges their choices and efforts.</p>
                    <div className="mt-2 flex">
                      <div className="flex-1 mr-2">
                        <p className="text-xs text-gray-500 mb-1">Instead of:</p>
                        <p className="text-sm text-red-600">"You're so smart."</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Try:</p>
                        <p className="text-sm text-green-600">"The way you analyzed that problem was really impressive."</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Be Specific and Detailed</h4>
                    <p className="text-gray-600">Generic compliments feel less sincere. Specific observations show you're truly paying attention.</p>
                    <div className="mt-2 flex">
                      <div className="flex-1 mr-2">
                        <p className="text-xs text-gray-500 mb-1">Instead of:</p>
                        <p className="text-sm text-red-600">"Great presentation."</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Try:</p>
                        <p className="text-sm text-green-600">"I loved how you used that story to illustrate your main point—it really helped me understand the concept."</p>
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
                    <h4 className="font-semibold text-gray-800 mb-1">Ensure Complete Sincerity</h4>
                    <p className="text-gray-600">Only give compliments you genuinely mean. Insincerity is easily detected and undermines trust.</p>
                    <div className="mt-2 flex">
                      <div className="flex-1 mr-2">
                        <p className="text-xs text-gray-500 mb-1">Avoid:</p>
                        <p className="text-sm text-red-600">Complimenting just to fill silence or curry favor</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Instead:</p>
                        <p className="text-sm text-green-600">Wait for something you truly admire, then express genuine appreciation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Remember:</h4>
                <p className="text-gray-700">
                  The goal of a compliment is to make the other person feel genuinely appreciated and recognized,
                  not to gain something for yourself. When given with the right intentions, compliments strengthen
                  connections and create positive atmospheres.
                </p>
              </div>
            </div>
          )}
          
          {activeSection === 'practice' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Practice Scenarios</h3>
              <p className="text-gray-600 mb-6">
                For each scenario, craft a specific, sincere compliment following the principles you've learned.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Scenario 1: Work Colleague</h4>
                  <p className="text-gray-700 mb-4">
                    A colleague just gave a presentation that was clear, well-organized, and included helpful visual aids.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Write your compliment here..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Scenario 2: Friend or Family Member</h4>
                  <p className="text-gray-700 mb-4">
                    Someone close to you helped another person through a difficult situation with patience and empathy.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Write your compliment here..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Scenario 3: Service Provider</h4>
                  <p className="text-gray-700 mb-4">
                    A server at a restaurant was attentive, remembered special requests, and maintained a positive attitude during a busy rush.
                  </p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md box-border" 
                    rows="3"
                    placeholder="Write your compliment here..."
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
          
          {activeSection === 'examples' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Example Compliments Across Contexts</h3>
              <p className="text-gray-600 mb-6">
                Study these examples of effective compliments in different situations to understand 
                how to apply the principles in your daily interactions.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Professional Setting</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li><span className="font-medium">→</span> "The way you handled that client's concerns showed remarkable patience and problem-solving skills. You found a solution that worked for everyone."</li>
                      <li><span className="font-medium">→</span> "I noticed how you included everyone in the discussion during the meeting. Your inclusive approach helped us get input from people who don't usually speak up."</li>
                      <li><span className="font-medium">→</span> "Your attention to detail on this report saved us from a potentially significant error. That kind of thoroughness really matters."</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Personal Relationships</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li><span className="font-medium">→</span> "I really admire how you've stuck with your fitness routine consistently. Your dedication is inspiring—I've noticed how it's changed not just your energy levels but your confidence too."</li>
                      <li><span className="font-medium">→</span> "The way you listened to Sarah when she was upset yesterday, without jumping to solutions, was exactly what she needed. You have such a gift for being present with people."</li>
                      <li><span className="font-medium">→</span> "This meal you prepared has so many thoughtful touches—I love how you remembered I mentioned liking this spice. It makes me feel really valued."</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Parenting Context</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li><span className="font-medium">→</span> "I saw how you shared your toy with your sister even though you were still playing with it. That was a kind and generous choice."</li>
                      <li><span className="font-medium">→</span> "You kept trying even when that math problem was difficult. That persistence will help you succeed at many things in life."</li>
                      <li><span className="font-medium">→</span> "I noticed you cleaned up your room without being asked. Taking responsibility like that shows how much you're growing up."</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">What Makes These Examples Effective:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>They focus on specific actions and choices</li>
                  <li>They explain why the action was valuable or impactful</li>
                  <li>They acknowledge effort and character rather than just results</li>
                  <li>They avoid exaggeration or flattery</li>
                  <li>They demonstrate careful observation</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplimentArt;