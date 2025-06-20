import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface FloatingOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
}

interface LabEntranceProps {
  onEnterLab: () => void;
}

const LabEntrance = ({ onEnterLab }: LabEntranceProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [floatingOrbs, setFloatingOrbs] = useState<FloatingOrb[]>([]);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Create floating orbs
  useEffect(() => {
    const createOrbs = () => {
      const orbs: FloatingOrb[] = [];
      for (let i = 0; i < 15; i++) {
        orbs.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.2,
          direction: Math.random() * Math.PI * 2,
        });
      }
      setFloatingOrbs(orbs);
    };

    createOrbs();
    window.addEventListener('resize', createOrbs);
    return () => window.removeEventListener('resize', createOrbs);
  }, []);

  // Animate floating orbs
  useEffect(() => {
    const animateOrbs = () => {
      setFloatingOrbs(prev => prev.map(orb => ({
        ...orb,
        x: orb.x + Math.cos(orb.direction) * orb.speed,
        y: orb.y + Math.sin(orb.direction) * orb.speed,
        direction: orb.x < 0 || orb.x > window.innerWidth || orb.y < 0 || orb.y > window.innerHeight 
          ? orb.direction + Math.PI 
          : orb.direction + (Math.random() - 0.5) * 0.1
      })));
    };

    const interval = setInterval(animateOrbs, 50);
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
    onEnterLab();
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(0, 0, 0, 0.04) 0%, transparent 50%),
          linear-gradient(0deg, #ffffff 0%, #f5f5f5 100%)
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

      {/* Floating orbs animation */}
      {floatingOrbs.map(orb => (
        <div
          key={orb.id}
          className="absolute animate-pulse"
          style={{
            left: `${orb.x}px`,
            top: `${orb.y}px`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
          }}
        >
          <div className="w-full h-full bg-black rounded-full opacity-20" />
        </div>
      ))}

      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{ left: ripple.x, top: ripple.y }}
        >
          <div className="w-4 h-4 border-2 border-black rounded-full animate-ripple" />
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
              filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.3))'
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
              bg-transparent border-2 border-black text-black
              hover:bg-black hover:text-white
              transition-all duration-300 ease-out
              glitch-text hover:animate-melt
              group overflow-hidden
            "
            style={{
              textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
              boxShadow: `
                0 0 20px rgba(0, 0, 0, 0.2),
                inset 0 0 20px rgba(0, 0, 0, 0.05)
              `
            }}
          >
            <span className="relative z-10">ENTER THE LAB</span>
            
            {/* Glitch overlay effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* Smoke/melt effect on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
          </Button>
          
          {/* Subtitle */}
          <p className="mt-6 text-sm text-black/60 font-mono tracking-widest animate-pulse">
            WE MAKE ARRY'S NFT
          </p>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
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

      {/* Sci-fi grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
        }}
      />
    </div>
  );
};

export default LabEntrance;
