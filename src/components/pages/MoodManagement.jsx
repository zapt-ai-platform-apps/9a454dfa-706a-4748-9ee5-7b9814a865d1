import React from 'react';

const MoodManagement = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mood Management</h2>
      <p className="text-gray-600 mb-8">
        Learn techniques to create positive atmospheres in your interactions, manage emotional states,
        and make strong first impressions through your mood and expressions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5">
            <h3 className="text-xl font-bold mb-2">The First Impression</h3>
            <p className="text-sm text-blue-100">
              The first few seconds of any interaction set the tone for everything that follows.
            </p>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              Research shows that people form impressions within the first 7 seconds of meeting someone.
              Your facial expression, posture, and initial greeting all contribute to this crucial moment.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-blue-800 mb-2">Key Practice Points:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Smile genuinely before the interaction begins</li>
                <li>Make confident but friendly eye contact</li>
                <li>Use an upright, open posture</li>
                <li>Speak with warmth and appropriate energy</li>
              </ul>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Practice Exercises
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5">
            <h3 className="text-xl font-bold mb-2">The Power of a Smile</h3>
            <p className="text-sm text-blue-100">
              A genuine smile is your most effective tool for creating positive connections.
            </p>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              Smiling doesn't just affect how others perceive you—it actually changes your own
              brain chemistry, creating a positive feedback loop that improves your mood and the
              quality of your interactions.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-blue-800 mb-2">Types of Smiles:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><span className="font-medium">Duchenne smile</span>: A genuine smile that involves both the mouth and eyes</li>
                <li><span className="font-medium">Social smile</span>: A polite smile that primarily uses mouth muscles</li>
                <li><span className="font-medium">Empathetic smile</span>: A warm, understanding smile during sensitive conversations</li>
              </ul>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Smile Techniques
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Mood Recovery Techniques</h3>
          <p className="text-gray-600 mb-6">
            Even when you're not feeling your best, these techniques can help you manage your mood
            to maintain positive interactions with others.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Physical State Change</h4>
                <p className="text-gray-600 mb-2">Change your physiology to change your psychology. Stand up, move around, and adjust your posture.</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">Try it now →</button>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">The Facial Feedback Loop</h4>
                <p className="text-gray-600 mb-2">Your facial expressions affect your emotions. Intentionally smiling, even when forced at first, can genuinely improve your mood.</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">Learn technique →</button>
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
                <p className="text-gray-600 mb-2">The tone, pace, and volume of your voice affects both your mood and how others perceive you. Practice conscious voice control.</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">Voice exercises →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Practice: First Impression Simulator</h3>
          <p className="text-gray-600 mb-6">
            This exercise simulates various first meeting scenarios to help you practice making positive first impressions.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <h4 className="font-semibold text-gray-800 mb-4">Scenario: Job Interview First Meeting</h4>
            <p className="text-gray-700 mb-4">
              You're arriving for an important job interview. As you enter the room, the interviewer stands to greet you.
              What elements should you focus on in those critical first few seconds?
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input type="checkbox" id="element1" className="mr-2" />
                <label htmlFor="element1" className="text-gray-700">Make eye contact and offer a genuine smile</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="element2" className="mr-2" />
                <label htmlFor="element2" className="text-gray-700">Firm but not aggressive handshake</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="element3" className="mr-2" />
                <label htmlFor="element3" className="text-gray-700">Immediately list your qualifications</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="element4" className="mr-2" />
                <label htmlFor="element4" className="text-gray-700">Upright, confident posture</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="element5" className="mr-2" />
                <label htmlFor="element5" className="text-gray-700">Warm, clear greeting using the interviewer's name</label>
              </div>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
            Check My Approach
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodManagement;