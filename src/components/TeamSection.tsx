import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TeamSection = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const teamMembers = [
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST13.png", name: "Uche Kaine", role: "FOUNDER" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST15.png", name: "Fakolade Elijah", role: "MANAGER" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST9.png", name: "Ajiboye Ohunayo", role: "ADS MANAGER" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST8.png", name: "Abioye Francis", role: "GRAPHICS DESIGNER" },
    { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST5.png", name: "Daniel Damilare", role: "GRAPHICS DESIGNER" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.23, 1, 0.320, 1] as const
      }
    })
  };

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <section id="ourteam" className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Our Team Main Heading */}
        <motion.div
          id="ourteam-header"
          data-scroll-section
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible('ourteam-header') ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-4 sm:mb-6">
            OUR TEAM
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible('ourteam') ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-orbitron font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-8 sm:mb-12 md:mb-16"
        >
          MEET OUR TEAM OF ALCHEMISTS
        </motion.h3>

        {/* Team Grid */}
        <div 
          id="team-grid"
          data-scroll-section
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible('team-grid') ? 'visible' : 'hidden'}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden border-2 border-black hover:shadow-xl transition-shadow duration-500 aspect-square">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/90 flex items-center justify-center p-2"
                >
                  <div className="text-white text-center">
                    <h3 className="font-orbitron font-bold text-xs sm:text-sm lg:text-base mb-1">{member.name}</h3>
                    <p className="font-space text-xs sm:text-sm">{member.role}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
