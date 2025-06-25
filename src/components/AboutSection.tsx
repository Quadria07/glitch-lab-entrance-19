
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9] }
    );

    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 100, 
        duration: 1.2 
      }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -200, rotateY: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 80, 
        duration: 1.5 
      }
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateZ: -45 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateZ: 0,
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 120, 
        duration: 1.3 
      }
    }
  };

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* About Artheist Labs */}
        <motion.div
          id="about-intro"
          data-scroll-section
          variants={sectionVariants}
          initial="hidden"
          animate={isVisible('about-intro') ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-8">
              ABOUT ARTHEIST LABS
            </h2>
            <p className="font-space text-lg leading-relaxed text-gray-800">
              Creative powerhouse behind Arry's NFT, pioneering innovation at the intersection of art, technology, and blockchain. As the dedicated research and development hub, we focus on pushing the boundaries of digital art, NFT utilities, and immersive Web3 experiences. Our mission is to redefine the NFT space by blending surrealism, creativity, and cutting-edge technology, delivering high-value digital assets that inspire and empower a new generation of collectors and creators.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://www.artheistlabs.com/wp-content/uploads/2025/04/WEBSITE-ANIMATIONS-5-1.gif"
              alt="Vision Animation"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          id="vision"
          data-scroll-section
          variants={slideVariants}
          initial="hidden"
          animate={isVisible('vision') ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: -10 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <img
              src="https://www.artheistlabs.com/wp-content/uploads/2025/04/WEBSITE-ANIMATIONS-3-1.gif"
              alt="Commitment Animation"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-8">
              OUR VISION
            </h2>
            <p className="font-space text-lg leading-relaxed text-gray-800">
              At Artheist Labs, we envision Arry's NFT as a brand that seamlessly blends digital art with immersive Web3 experiences and real-world utility. Our goal is to redefine the NFT landscape by fostering a community-driven ecosystem where art, technology, and innovation converge.
            </p>
          </div>
        </motion.div>

        {/* Our Commitment */}
        <motion.div
          id="commitment"
          data-scroll-section
          variants={scaleVariants}
          initial="hidden"
          animate={isVisible('commitment') ? 'visible' : 'hidden'}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-8">
            OUR COMMITMENT
          </h2>
          <p className="font-space text-lg leading-relaxed text-gray-800 mb-8">
            We believe NFTs are more than digital assets, they are a gateway to creativity, ownership, and digital transformation. At Artheist Labs, we are committed to pushing the boundaries of NFT utilities, ensuring our creations offer value beyond aesthetics. Through artistic expression and blockchain technology, we are bringing back the modern gentleman.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block p-6 border border-black bg-white/80 backdrop-blur-sm"
          >
            <p className="font-mono text-sm text-black/70">
              They are a gateway to creativity, innovation, and real-world utility, unlocking exclusive experiences and opportunities while bridging the gap between art and technology.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          id="mission"
          data-scroll-section
          variants={sectionVariants}
          initial="hidden"
          animate={isVisible('mission') ? 'visible' : 'hidden'}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-8">
            OUR MISSION
          </h2>
          <p className="font-space text-lg leading-relaxed text-gray-800">
            At Artheist Labs, our mission is to revolutionize the NFT space while driving real-world impact. Arry's NFT Collection serves as a funding backbone for TFCo, a movement dedicated to reviving the modern gentleman. By merging art, utility, and purpose, we empower a community of visionaries who embrace creativity, individuality, and the values that define true excellence.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
