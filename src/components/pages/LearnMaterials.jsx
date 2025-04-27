import React, { useState } from 'react';

const LearnMaterials = () => {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    {
      id: 1,
      title: "Understanding People Skills",
      content: "The foundation of all effective interaction is recognizing that most people are primarily interested in themselves. This chapter explores the psychology behind human interaction and why developing people skills is crucial for success in both personal and professional life."
    },
    {
      id: 2,
      title: "The Power of Focus",
      content: "People learn better through imagery and visual cues, and their memory is limited. This chapter explains how to communicate effectively by using clear imagery and focusing on key points that resonate with the other person's interests."
    },
    {
      id: 3,
      title: "Effective Speaking",
      content: "Speaking effectively means talking about what interests the other person, making them feel important, and agreeing with them whenever possible. This chapter covers techniques for engaging conversations that build rapport and trust."
    },
    {
      id: 4,
      title: "The Art of Listening",
      content: "Effective listening involves maintaining eye contact, leaning forward, asking questions, and using the speaker's own words. This chapter demonstrates how to become a better listener and build deeper connections with others."
    },
    {
      id: 5,
      title: "Influence and Persuasion",
      content: "Influencing others requires understanding what they want and using third-person testimonials to convince them. This chapter shows how to ethically influence others by aligning your message with their desires."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Materials</h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {chapters.map(chapter => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(chapter.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeChapter === chapter.id
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Chapter {chapter.id}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          {chapters.map(chapter => (
            activeChapter === chapter.id && (
              <div key={chapter.id}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{chapter.title}</h3>
                <p className="text-gray-600 mb-6">{chapter.content}</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-blue-800 mb-2">Key Takeaways</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Understanding this principle helps build better relationships</li>
                    <li>Practice is essential to master this skill</li>
                    <li>The technique works in both personal and professional settings</li>
                  </ul>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    className={`px-4 py-2 rounded text-sm font-medium ${
                      chapter.id === 1 
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50 cursor-pointer'
                    }`}
                    disabled={chapter.id === 1}
                    onClick={() => setActiveChapter(chapter.id - 1)}
                  >
                    ← Previous Chapter
                  </button>
                  
                  <button
                    className={`px-4 py-2 rounded text-sm font-medium ${
                      chapter.id === chapters.length
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50 cursor-pointer'
                    }`}
                    disabled={chapter.id === chapters.length}
                    onClick={() => setActiveChapter(chapter.id + 1)}
                  >
                    Next Chapter →
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Chapter Quiz</h3>
        <p className="text-gray-600 mb-6">
          Test your understanding of this chapter's concepts with a short quiz.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default LearnMaterials;