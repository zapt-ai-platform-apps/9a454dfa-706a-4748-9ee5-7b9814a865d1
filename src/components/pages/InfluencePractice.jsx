import React from 'react';

const InfluencePractice = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Influence & Persuasion</h2>
      <p className="text-gray-600 mb-8">
        Learn to ethically influence others by understanding their desires and using effective persuasion techniques.
        These exercises will help you master the art of influence through practice scenarios.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-bold">Understanding Desires</h3>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              The first step to influencing others is understanding what they truly want. This exercise helps
              you practice identifying underlying desires in different scenarios.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Start Exercise
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-bold">Third-Person Technique</h3>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">
              Using third-person examples is a powerful way to persuade without creating resistance. Practice
              creating compelling testimonials and stories that influence effectively.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              Start Exercise
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Principles of Ethical Influence</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Focus on Genuine Value</h4>
                <p className="text-gray-600">Ethical influence always begins with providing real value to the other person. Never manipulate or deceive.</p>
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
                <h4 className="font-semibold text-gray-800 mb-1">Understand Their Perspective</h4>
                <p className="text-gray-600">See the situation from their point of view to identify what matters most to them.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Tell Stories, Not Arguments</h4>
                <p className="text-gray-600">People respond better to stories than direct arguments. Use examples and testimonials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Influence Scenario Practice</h3>
          <p className="text-gray-600 mb-4">
            Select a scenario below to practice applying influence principles in different situations.
            You'll receive feedback on your approach and suggestions for improvement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-md border border-gray-200 text-left transition-colors">
              <h4 className="font-medium text-gray-800 mb-2">Workplace Scenario</h4>
              <p className="text-gray-600 text-sm">Convince your team to adopt a new approach to project management.</p>
            </button>
            
            <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-md border border-gray-200 text-left transition-colors">
              <h4 className="font-medium text-gray-800 mb-2">Personal Relationship</h4>
              <p className="text-gray-600 text-sm">Persuade a friend to join you for a fitness activity they're hesitant about.</p>
            </button>
            
            <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-md border border-gray-200 text-left transition-colors">
              <h4 className="font-medium text-gray-800 mb-2">Sales Conversation</h4>
              <p className="text-gray-600 text-sm">Ethically influence a potential customer to choose your product.</p>
            </button>
            
            <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-md border border-gray-200 text-left transition-colors">
              <h4 className="font-medium text-gray-800 mb-2">Community Initiative</h4>
              <p className="text-gray-600 text-sm">Convince neighbors to participate in a local improvement project.</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencePractice;