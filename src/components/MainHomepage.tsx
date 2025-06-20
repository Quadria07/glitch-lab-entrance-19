
import { useEffect, useState } from 'react';

const MainHomepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setShowTypewriter(true), 1000);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        {/* Parallax background effect */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
          }}
        />

        {/* Company Logo */}
        <div className="mb-12 animate-float">
          <img
            src="https://www.artheistlabs.com/wp-content/uploads/2025/04/ARTHEIST-LOGO-ANI2.gif"
            alt="Artheist Labs Logo"
            className="mx-auto max-w-xs md:max-w-md lg:max-w-lg animate-pulse"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.2))'
            }}
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black text-center mb-6 tracking-tight">
          ARTHEIST LAB
        </h1>

        {/* Typewriter Subheadline */}
        {showTypewriter && (
          <div className="text-xl md:text-2xl text-center mb-12 font-mono">
            <span className="animate-fade-in">Digital Art Laboratory</span>
          </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* We Make Arry's NFT Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-8 h-8 border-2 border-black mx-auto mb-4 animate-spin" />
            <h2 className="text-4xl font-bold mb-4">WE MAKE ARRY'S NFT</h2>
            <p className="text-lg text-black/80 animate-fade-in">
              The creative force behind it lives here.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About the Lab</h2>
              <p className="text-lg leading-relaxed animate-fade-in">
                An experimental digital lab blending blockchain, art, and code to shape the next era of NFTs. 
                We push boundaries, challenge conventions, and create digital experiences that redefine artistic expression.
              </p>
            </div>
            <div className="space-y-4">
              {['Blockchain Integration', 'Digital Art Creation', 'Code Experimentation'].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Lab Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Dr. A. Smith', role: 'Lead Scientist' },
              { name: 'M. Johnson', role: 'Blockchain Dev' },
              { name: 'S. Chen', role: 'Digital Artist' },
              { name: 'R. Williams', role: 'Code Architect' }
            ].map((member, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-full aspect-square bg-gray-100 border-2 border-black mb-4 group-hover:bg-black transition-colors duration-300" />
                <h3 className="font-bold group-hover:underline transition-all duration-300">{member.name}</h3>
                <p className="text-sm text-black/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Lab Drops */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Latest Lab Experiments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Neural Art Genesis', type: 'AI Collection' },
              { title: 'Blockchain Portraits', type: 'Digital Series' },
              { title: 'Code Sculptures', type: 'Interactive NFT' }
            ].map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-full aspect-square bg-white border-2 border-black mb-4 group-hover:border-gray-400 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 border border-black animate-pulse group-hover:animate-spin" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:underline transition-all duration-300">{project.title}</h3>
                <p className="text-sm text-black/60">{project.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-sm text-black/60">
            © 2024 Artheist Lab - Where Digital Art Is Born
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainHomepage;
