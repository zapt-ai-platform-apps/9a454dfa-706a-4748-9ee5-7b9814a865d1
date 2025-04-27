import React from 'react';

const ImpressionCreation = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Creating Positive Impressions</h2>
      <p className="text-gray-600 mb-8">
        Learn effective techniques to create favorable impressions in both new relationships and ongoing interactions.
        These skills help you build trust, rapport, and a positive reputation with others.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-bold">First Impressions</h3>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              A first impression forms within seconds and can be difficult to change later. 
              Learn the critical elements that create a positive first impression.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Genuine smile and positive expression</li>
              <li>Confident but warm body language</li>
              <li>Focused attention on the other person</li>
              <li>Appropriate appearance and grooming</li>
              <li>Positive, engaging initial conversation</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              First Impression Techniques
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-bold">Lasting Impressions</h3>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              Beyond the first meeting, these ongoing behaviors help you maintain and strengthen positive impressions over time.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Consistency in behavior and reliability</li>
              <li>Following through on commitments</li>
              <li>Showing genuine interest in others</li>
              <li>Responding positively to challenges</li>
              <li>Displaying gratitude and appreciation</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Lasting Impression Techniques
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">The Impression Formula</h3>
          <p className="text-gray-600 mb-6">
            Creating a positive impression follows a formula that combines several key elements. 
            Master these components to consistently make a favorable impact on others.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Positive Facial Expression</h4>
                <p className="text-gray-600">Your face communicates more than words. A genuine smile creates an immediate positive connection.</p>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-gray-50 p-2 rounded text-sm">
                    <p className="font-medium text-gray-700 mb-1">Practice Tip:</p>
                    <p className="text-gray-600">Before entering a room or meeting someone, take a moment to relax your face and form a natural smile that reaches your eyes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Engaged Body Language</h4>
                <p className="text-gray-600">Your posture, gestures, and physical presence signal your level of interest and confidence.</p>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-gray-50 p-2 rounded text-sm">
                    <p className="font-medium text-gray-700 mb-1">Key Elements:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Stand or sit upright with shoulders back</li>
                      <li>Maintain comfortable eye contact</li>
                      <li>Lean slightly forward when listening</li>
                      <li>Avoid closed positions (crossed arms)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Attentive Communication</h4>
                <p className="text-gray-600">Both your words and how you listen create powerful impressions. Focused attention makes others feel valued.</p>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-gray-50 p-2 rounded text-sm">
                    <p className="font-medium text-gray-700 mb-1">Techniques:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Ask thoughtful questions about their interests</li>
                      <li>Listen without interrupting</li>
                      <li>Respond with relevant comments or questions</li>
                      <li>Use their name appropriately in conversation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Credibility and Authenticity</h4>
                <p className="text-gray-600">Trust is the foundation of positive impressions. Being genuine while demonstrating competence creates lasting impact.</p>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-gray-50 p-2 rounded text-sm">
                    <p className="font-medium text-gray-700 mb-1">Building Trust:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Be honest about your knowledge and limitations</li>
                      <li>Keep commitments, even small ones</li>
                      <li>Share relevant experience without dominating the conversation</li>
                      <li>Show consistency between words and actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Context-Specific Impression Strategies</h3>
          <p className="text-gray-600 mb-6">
            Different situations call for different impression strategies. Adapt your approach to create
            the most appropriate impression for each setting.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Professional Settings</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Emphasize competence and reliability</li>
                <li>Maintain appropriate professional boundaries</li>
                <li>Demonstrate knowledge while being open to learning</li>
                <li>Balance confidence with teamwork orientation</li>
                <li>Be punctual and prepared for all interactions</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Social Gatherings</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Focus on warmth and approachability</li>
                <li>Show genuine interest in meeting new people</li>
                <li>Ask open-ended questions to start conversations</li>
                <li>Remember names and use them naturally</li>
                <li>Offer authentic compliments when appropriate</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Leadership Positions</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Demonstrate both confidence and humility</li>
                <li>Listen attentively to others' input</li>
                <li>Communicate clearly and with appropriate authority</li>
                <li>Show appreciation for others' contributions</li>
                <li>Make decisions thoughtfully and explain reasoning</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Personal Relationships</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Be authentic and vulnerable when appropriate</li>
                <li>Show consistency between words and actions</li>
                <li>Demonstrate empathy and emotional support</li>
                <li>Respect boundaries while showing care</li>
                <li>Invest time and attention in the relationship</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Try the Interactive Impression Exercise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressionCreation;