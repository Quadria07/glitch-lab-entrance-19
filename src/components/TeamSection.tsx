
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TeamSection = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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
    <section id="ourteam" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible('ourteam') ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="font-orbitron font-black text-4xl md:text-5xl text-center mb-16"
        >
          MEET OUR TEAM OF ALCHEMISTS
        </motion.h2>

        {/* Follow Us GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible('ourteam') ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <img
            src="https://www.artheistlabs.com/wp-content/uploads/2025/04/Follow-Us-4.gif"
            alt="Follow Us"
            className="mx-auto max-w-md hover:scale-110 transition-transform duration-500"
          />
        </motion.div>

        {/* Team Grid */}
        <div 
          id="team-grid"
          data-scroll-section
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
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
              <div className="relative overflow-hidden border-2 border-black hover:shadow-2xl transition-shadow duration-500">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/90 flex items-center justify-center"
                >
                  <div className="text-white text-center p-2">
                    <h3 className="font-orbitron font-bold text-sm mb-1">{member.name}</h3>
                    <p className="font-space text-xs">{member.role}</p>
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
