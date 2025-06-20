
import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    setTimeout(() => setShowText(true), 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      {/* Loading progress bar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-1 bg-gray-200 mb-8">
          <div 
            className="h-full bg-black transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Animated text */}
        {showText && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black animate-pulse mb-2">
              INITIALIZING LAB
            </h2>
            <div className="text-sm font-mono text-black/60 animate-fade-in">
              {progress < 30 && "Loading neural networks..."}
              {progress >= 30 && progress < 60 && "Activating blockchain protocols..."}
              {progress >= 60 && progress < 90 && "Synchronizing art algorithms..."}
              {progress >= 90 && "Lab ready. Welcome."}
            </div>
          </div>
        )}
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
