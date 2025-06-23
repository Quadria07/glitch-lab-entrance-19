
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

  const teamMembers = [
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST13.png", name: "Creative Director", role: "Lead Visionary" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST15.png", name: "Tech Architect", role: "Blockchain Engineer" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST9.png", name: "Art Director", role: "Digital Artist" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST8.png", name: "Strategy Lead", role: "Business Development" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST5.png", name: "Community Manager", role: "Engagement Specialist" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST14.png", name: "UX Designer", role: "Experience Curator" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST7.png", name: "Developer", role: "Full Stack Engineer" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST39.png", name: "Product Manager", role: "Innovation Lead" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/06/ChatGPT-Image-Jun-10-2025-09_37_29-AM-1.png", name: "Marketing Head", role: "Brand Strategist" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/06/ChatGPT-Image-Jun-10-2025-10_06_14-AM.png", name: "Research Lead", role: "Innovation Analyst" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/06/ChatGPT-Image-Jun-10-2025-09_44_52-AM-1-4.png", name: "Operations Manager", role: "Process Optimizer" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/06/ChatGPT-Image-Jun-16-2025-04_07_45-PM.png", name: "Quality Assurance", role: "Testing Specialist" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/06/file_0000000071e06243a65eb343855d2435-1.png", name: "Data Scientist", role: "Analytics Expert" }
  ];

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black">
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
        <div className="text-center relative max-w-6xl mx-auto px-6">
          <h1 className={`text-4xl md:text-6xl font-black mb-4 transition-all duration-1000 ${
            isVisible('hero') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            <span className="inline-block glitch-text">ARTHEIST LABS</span>
          </h1>
          
          <h2 className={`text-2xl md:text-4xl font-bold mb-8 transition-all duration-1000 delay-300 ${
            isVisible('hero') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            We Make Arry's NFT
          </h2>

          <p className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible('hero') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            Creative powerhouse behind Arry's NFT, pioneering innovation at the intersection of art, technology, and blockchain. As the dedicated research and development hub, we focus on pushing the boundaries of digital art, NFT utilities, and immersive Web3 experiences.
          </p>

          <div className={`transition-all duration-1000 delay-700 ${
            isVisible('hero') 
              ? 'opacity-100 transform scale-100' 
              : 'opacity-0 transform scale-95'
          }`}>
            <img
              src="https://www.artheistlabs.com/wp-content/uploads/2025/04/BALL-ROTATE.gif"
              alt="Rotating Ball Animation"
              className="mx-auto max-w-xs animate-float"
            />
          </div>
        </div>

        {/* Floating Banner */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 rotate-90 origin-left">
          <p className="text-xs font-mono opacity-60">No Wahala, just NFTs & vibes | Naija sauce</p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section 
        id="video" 
        data-scroll-section
        className="py-20 px-6"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            isVisible('video') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            <video 
              className="w-full max-w-3xl mx-auto border-2 border-black"
              controls
              poster="/placeholder.svg"
            >
              <source src="https://www.artheistlabs.com/wp-content/uploads/2025/02/Artheist-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        id="vision" 
        data-scroll-section
        className="py-20 px-6 bg-gray-50"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-16 transition-all duration-1000 ${
            isVisible('vision') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            OUR VISION
            <div className={`h-1 bg-black mx-auto mt-4 transition-all duration-1000 delay-300 ${
              isVisible('vision') ? 'w-32' : 'w-0'
            }`} />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible('vision') 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-10'
            }`}>
              <p className="text-lg leading-relaxed">
                At Artheist Labs, we envision Arry's NFT as a brand that seamlessly blends digital art with immersive Web3 experiences and real-world utility. Our goal is to redefine the NFT landscape by fostering a community-driven ecosystem where art, technology, and innovation converge.
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible('vision') 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-10'
            }`}>
              <img
                src="https://www.artheistlabs.com/wp-content/uploads/2025/04/WEBSITE-ANIMATIONS-5-1.gif"
                alt="Vision Animation"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section 
        id="commitment" 
        data-scroll-section
        className="py-20 px-6"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-16 transition-all duration-1000 ${
            isVisible('commitment') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            OUR COMMITMENT
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${
              isVisible('commitment') 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-10'
            }`}>
              <img
                src="https://www.artheistlabs.com/wp-content/uploads/2025/04/WEBSITE-ANIMATIONS-3-1.gif"
                alt="Commitment Animation"
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            <div className={`order-1 md:order-2 transition-all duration-1000 delay-700 ${
              isVisible('commitment') 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-10'
            }`}>
              <p className="text-lg leading-relaxed">
                We believe NFTs are more than digital assets; they are a gateway to creativity, ownership, and digital transformation. At Artheist Labs, we are committed to pushing the boundaries of NFT utilities, ensuring our creations offer value beyond aesthetics. Through artistic expression and blockchain technology, we are bringing back the modern gentleman.
              </p>
              
              {/* Floating text overlay */}
              <div className="mt-8 p-4 border border-black bg-white/80">
                <p className="text-sm font-mono">They are a gateway to creativity, innovation, and real-world utility, unlocking exclusive experiences and opportunities while bridging the gap between art and technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        id="mission" 
        data-scroll-section
        className="py-20 px-6 bg-gray-50"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-black mb-16 transition-all duration-1000 ${
            isVisible('mission') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            OUR MISSION
          </h2>
          
          <p className={`text-lg leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible('mission') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            Our mission is to revolutionize the NFT space while driving real-world impact. Arry's NFT Collection serves as a funding backbone for TFCo, a movement dedicated to reviving the modern gentleman. By merging art, utility, and purpose, we empower a community of visionaries who embrace creativity, individuality, and the values that define true excellence.
          </p>

          {/* Floating Banner */}
          <div className={`mt-12 transition-all duration-1000 delay-700 ${
            isVisible('mission') 
              ? 'opacity-100 transform scale-100' 
              : 'opacity-0 transform scale-95'
          }`}>
            <div className="inline-block p-4 border-2 border-black bg-black text-white font-mono text-sm">
              The heist has begun | 2025 Flex | #Creative Heist
            </div>
          </div>
        </div>
      </section>

      {/* NFT Education Section */}
      <section 
        id="nft" 
        data-scroll-section
        className="py-20 px-6"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-16 transition-all duration-1000 ${
            isVisible('nft') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            WHAT ARE NFTs?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "DIGITAL OWNERSHIP", desc: "Non-Fungible Tokens represent unique digital assets verified on blockchain technology, establishing true ownership of digital content." },
              { title: "CREATIVE REVOLUTION", desc: "NFTs have revolutionized how artists monetize digital art, creating new markets and opportunities for creators worldwide." },
              { title: "FUTURE OF ART", desc: "The NFT market has grown exponentially, bridging traditional and digital art worlds with utility-driven experiences." }
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
                <div className="w-24 h-24 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black animate-pulse" />
                </div>
                <h3 className="font-black text-xl mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        id="team" 
        data-scroll-section
        className="py-20 px-6 bg-gray-50"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-16 transition-all duration-1000 ${
            isVisible('team') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            MEET OUR TEAM OF ALCHEMISTS
          </h2>
          
          {/* Follow Us GIF */}
          <div className="text-center mb-16">
            <img
              src="https://www.artheistlabs.com/wp-content/uploads/2025/04/Follow-Us-4.gif"
              alt="Follow Us"
              className="mx-auto max-w-md"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible('team') 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-square object-cover border-2 border-black group-hover:scale-110 group-hover:animate-glitch transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-2">
                      <h3 className="font-bold text-sm mb-1">{member.name}</h3>
                      <p className="text-xs">{member.role}</p>
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
          <h2 className={`text-5xl md:text-6xl font-black mb-12 transition-all duration-1000 ${
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
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-mono text-sm text-black/60">
              © 2025 artheistlabs all rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://x.com/artheistlabs" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-black/80 transition-colors">X</a>
              <a href="https://discord.gg/7rauUTmSYq" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-black/80 transition-colors">Discord</a>
              <a href="https://www.instagram.com/artheistlabs" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-black/80 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainHomepage;
