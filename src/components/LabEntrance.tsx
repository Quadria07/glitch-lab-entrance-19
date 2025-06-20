
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface FallingHat {
  id: number;
  left: number;
  delay: number;
  image: string;
}

const LabEntrance = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [fallingHats, setFallingHats] = useState<FallingHat[]>([]);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample images for the falling hats (using placeholder images with different themes)
  const hatImages = [
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=100&h=100&fit=crop&crop=center',
  ];

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create falling hats at intervals
  useEffect(() => {
    const createHat = () => {
      const newHat: FallingHat = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        image: hatImages[Math.floor(Math.random() * hatImages.length)],
      };
      setFallingHats(prev => [...prev, newHat]);

      // Remove hat after animation completes
      setTimeout(() => {
        setFallingHats(prev => prev.filter(hat => hat.id !== newHat.id));
      }, 8000);
    };

    const interval = setInterval(createHat, 800);
    return () => clearInterval(interval);
  }, []);

  // Create ripple effect on click
  const createRipple = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples(prev => [...prev, ripple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 600);
  };

  const handleEnterLab = () => {
    console.log('Entering the lab...');
    // Here you would typically navigate to the main page
    // For now, we'll just log it
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
          linear-gradient(0deg, #000000 0%, #0a0a0a 100%)
        `,
        transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 5}px)`,
        transition: 'transform 0.1s ease-out'
      }}
      onClick={createRipple}
    >
      {/* Custom cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: mousePosition.x * window.innerWidth / 2 + window.innerWidth / 2,
          top: mousePosition.y * window.innerHeight / 2 + window.innerHeight / 2,
        }}
      />

      {/* Falling hats animation */}
      {fallingHats.map(hat => (
        <div
          key={hat.id}
          className="absolute animate-fall"
          style={{
            left: `${hat.left}%`,
            animationDelay: `${hat.delay}s`,
            top: '-100px',
          }}
        >
          <div className="relative w-16 h-16">
            {/* Bowler hat shape with image inside */}
            <div className="absolute inset-0 bg-white rounded-full opacity-10 animate-pulse" />
            <div 
              className="w-full h-full rounded-full border-2 border-white bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${hat.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50" />
              {/* Bowler hat top */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white rounded-t-full opacity-60" />
            </div>
          </div>
        </div>
      ))}

      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{ left: ripple.x, top: ripple.y }}
        >
          <div className="w-4 h-4 border-2 border-white rounded-full animate-ripple" />
        </div>
      ))}

      {/* Main content */}
      <div className="text-center z-10 relative">
        {/* Company Logo */}
        <div className="mb-12 animate-float">
          <img
            src="https://www.artheistlabs.com/wp-content/uploads/2025/04/ARTHEIST-LOGO-ANI2.gif"
            alt="Artheist Labs Logo"
            className="mx-auto max-w-xs md:max-w-md lg:max-w-lg animate-glow"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}
          />
        </div>

        {/* Enter the Lab button */}
        <div className="relative">
          <Button
            onClick={handleEnterLab}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="
              relative px-12 py-6 text-xl font-bold tracking-wider
              bg-transparent border-2 border-white text-white
              hover:bg-white hover:text-black
              transition-all duration-300 ease-out
              glitch-text hover:animate-melt
              group overflow-hidden
            "
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              boxShadow: `
                0 0 20px rgba(255, 255, 255, 0.2),
                inset 0 0 20px rgba(255, 255, 255, 0.05)
              `
            }}
          >
            <span className="relative z-10">ENTER THE LAB</span>
            
            {/* Glitch overlay effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* Smoke/melt effect on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
          </Button>
          
          {/* Subtitle */}
          <p className="mt-6 text-sm text-white/60 font-mono tracking-widest animate-pulse">
            WHERE DIGITAL ART IS BORN
          </p>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Sci-fi grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
        }}
      />
    </div>
  );
};

export default LabEntrance;
