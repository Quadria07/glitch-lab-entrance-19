
import { useEffect, useState, useRef } from 'react';

const MainHomepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach(section => observerRef.current?.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-20 h-10">
            <img
              src="https://www.artheistlabs.com/wp-content/uploads/2025/04/ARTHEIST-LOGO-ANI2.gif"
              alt="Artheist Labs"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex space-x-8 font-mono text-sm">
            {['About', 'Team', 'NFT', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group hover:text-black transition-colors duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        data-scroll-section
        className="min-h-screen flex flex-col justify-center items-center relative pt-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="text-center relative">
          <h1 className={`text-6xl md:text-8xl font-black mb-8 transition-all duration-1000 ${
            isVisible('hero') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            <span className="inline-block animate-glitch">ENTER THE LAB</span>
            <br />
            <span className="inline-block animate-glitch" style={{ animationDelay: '0.2s' }}>
              OF BOUNDLESS
            </span>
            <br />
            <span className="inline-block animate-glitch" style={{ animationDelay: '0.4s' }}>
              CREATION
            </span>
          </h1>
          
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible('hero') 
              ? 'opacity-100 transform scale-100' 
              : 'opacity-0 transform scale-95'
          }`}>
            <img
              src="https://www.artheistlabs.com/wp-content/uploads/2025/04/Your-paragraph-text.gif"
              alt="Lab Animation"
              className="mx-auto max-w-md animate-float"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Artheist Lab Section */}
      <section 
        id="about" 
        data-scroll-section
        className="py-20 px-6"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-black text-center mb-12 transition-all duration-1000 ${
            isVisible('about') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            WE MAKE ARRY'S NFT
            <div className={`h-1 bg-black mx-auto mt-4 transition-all duration-1000 delay-300 ${
              isVisible('about') ? 'w-32' : 'w-0'
            }`} />
          </h2>
          
          <p className={`text-xl text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible('about') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            Creative powerhouse behind Arry's NFT, pioneering innovation at the intersection of art, technology, and blockchain.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              'NFT Design',
              'Experimental Art & Motion', 
              'Web3 Product Launches',
              'Digital Installations'
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center group cursor-pointer transition-all duration-700 ${
                  isVisible('about') 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="w-16 h-16 border-2 border-black mx-auto mb-4 group-hover:animate-spin transition-all duration-300" />
                <h3 className="font-bold text-lg group-hover:animate-pulse">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What are NFTs Section */}
      <section 
        id="nft" 
        data-scroll-section
        className="py-20 px-6 bg-gray-50"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-black text-center mb-16 transition-all duration-1000 ${
            isVisible('nft') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            WHAT ARE NFTs?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "DIGITAL OWNERSHIP", desc: "Unique digital assets verified on blockchain" },
              { title: "CREATIVE REVOLUTION", desc: "Empowering artists in the digital realm" },
              { title: "FUTURE OF ART", desc: "Bridging traditional and digital art worlds" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible('nft') 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-24 h-24 border border-black mx-auto mb-6 animate-pulse" />
                <h3 className="font-black text-xl mb-4">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Content Showcase */}
      <section 
        id="showcase" 
        data-scroll-section
        className="py-20 px-6"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-6xl mx-auto space-y-32">
          <div className={`text-center transition-all duration-1000 ${
            isVisible('showcase') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            <img
              src="https://www.artheistlabs.com/wp-content/uploads/2025/04/Your-paragraph-text.gif"
              alt="Creative Process"
              className="mx-auto max-w-lg animate-float"
            />
            <h3 className="text-2xl font-bold mt-8 animate-fade-in">CREATIVE PROCESS IN MOTION</h3>
          </div>
          
          <div className={`text-center transition-all duration-1000 delay-500 ${
            isVisible('showcase') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            <img
              src="https://www.artheistlabs.com/wp-content/uploads/2025/04/Follow-Us-4.gif"
              alt="Follow Us"
              className="mx-auto max-w-lg animate-float"
              style={{ animationDelay: '1s' }}
            />
            <h3 className="text-2xl font-bold mt-8 animate-fade-in">JOIN THE REVOLUTION</h3>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section 
        id="team" 
        data-scroll-section
        className="py-20 px-6 bg-gray-50"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-black text-center mb-16 transition-all duration-1000 ${
            isVisible('team') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            MEET OUR TEAM OF ALCHEMISTS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {[
              { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST13.png", name: "Lead Alchemist", role: "Creative Director" },
              { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST15.png", name: "Digital Architect", role: "Tech Lead" }
            ].map((member, index) => (
              <div 
                key={index}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible('team') 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-square object-cover border-2 border-black group-hover:animate-glitch transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        id="contact" 
        data-scroll-section
        className="py-32 px-6"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-6xl font-black mb-12 transition-all duration-1000 ${
            isVisible('contact') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            READY TO DISTORT REALITY?
          </h2>
          
          <button className={`group bg-black text-white px-12 py-4 text-xl font-bold border-2 border-black hover:bg-white hover:text-black transition-all duration-300 ${
            isVisible('contact') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            <span className="relative">
              CONTACT THE LAB
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-sm text-black/60">
            © 2024 Artheist Labs - Where Digital Art Is Born
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainHomepage;
