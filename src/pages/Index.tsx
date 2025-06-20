
import { useState } from 'react';
import LabEntrance from '@/components/LabEntrance';
import LoadingAnimation from '@/components/LoadingAnimation';
import MainHomepage from '@/components/MainHomepage';

const Index = () => {
  const [currentView, setCurrentView] = useState<'loading' | 'entrance' | 'homepage'>('loading');

  const handleLoadingComplete = () => {
    setCurrentView('entrance');
  };

  const handleEnterLab = () => {
    setCurrentView('homepage');
  };

  if (currentView === 'loading') {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  if (currentView === 'entrance') {
    return <LabEntrance onEnterLab={handleEnterLab} />;
  }

  return <MainHomepage />;
};

export default Index;
