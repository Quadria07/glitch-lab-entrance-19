
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const TeamSection = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

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

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <section 
      ref={containerRef}
      id="ourteam" 
      className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 bg-white overflow-hidden"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        
        {/* Our Team Main Heading */}
        <motion.div
          id="ourteam-header"
          data-scroll-section
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible('ourteam-header') ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-2 sm:mb-4">
            OUR TEAM
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible('ourteam') ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-orbitron font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-6 sm:mb-8 md:mb-12"
        >
          MEET OUR TEAM OF ALCHEMISTS
        </motion.h3>

        {/* Horizontal Scrolling Team Grid */}
        <div className="relative overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-4 sm:gap-6 md:gap-8"
            id="team-grid"
            data-scroll-section
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible('team-grid') ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer flex-shrink-0"
                style={{ width: "250px", height: "250px" }}
              >
                <div className="relative overflow-hidden border-2 border-black hover:shadow-xl transition-shadow duration-500 w-full h-full">
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
                    className="absolute inset-0 bg-black/90 flex items-center justify-center p-4"
                  >
                    <div className="text-white text-center">
                      <h3 className="font-orbitron font-bold text-sm lg:text-base mb-2">{member.name}</h3>
                      <p className="font-space text-xs sm:text-sm">{member.role}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="font-mono text-xs sm:text-sm text-black/60">
            Scroll to see our team
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
