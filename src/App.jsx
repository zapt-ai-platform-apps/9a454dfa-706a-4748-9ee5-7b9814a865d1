import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/pages/Dashboard';
import LearnMaterials from './components/pages/LearnMaterials';
import SpeakingPractice from './components/pages/SpeakingPractice';
import ListeningPractice from './components/pages/ListeningPractice';
import InfluencePractice from './components/pages/InfluencePractice';
import ApprovalTechniques from './components/pages/ApprovalTechniques';
import MoodManagement from './components/pages/MoodManagement';
import ComplimentArt from './components/pages/ComplimentArt';
import CriticismUnderstanding from './components/pages/CriticismUnderstanding';
import GratitudeExpression from './components/pages/GratitudeExpression';
import ImpressionCreation from './components/pages/ImpressionCreation';
import ConversationSkills from './components/pages/ConversationSkills';
import ProgressTracking from './components/pages/ProgressTracking';
import DailyChallenges from './components/pages/DailyChallenges';
import ZaptBadge from './components/common/ZaptBadge';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'learn-materials': return <LearnMaterials />;
      case 'speaking-practice': return <SpeakingPractice />;
      case 'listening-practice': return <ListeningPractice />;
      case 'influence-practice': return <InfluencePractice />;
      case 'approval-techniques': return <ApprovalTechniques />;
      case 'mood-management': return <MoodManagement />;
      case 'compliment-art': return <ComplimentArt />;
      case 'criticism-understanding': return <CriticismUnderstanding />;
      case 'gratitude-expression': return <GratitudeExpression />;
      case 'impression-creation': return <ImpressionCreation />;
      case 'conversation-skills': return <ConversationSkills />;
      case 'progress-tracking': return <ProgressTracking />;
      case 'daily-challenges': return <DailyChallenges />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={sidebarOpen} 
          closeSidebar={() => setSidebarOpen(false)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
      <ZaptBadge />
    </div>
  );
}