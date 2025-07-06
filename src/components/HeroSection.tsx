
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.artheistlabs.com/wp-content/uploads/2025/02/Artheist-video.mp4" type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0 bg-white/85 transition-all duration-300"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${0.75 + mousePosition.x * 0.1})`
          }}
        />
      </div>

      {/* Floating Shapes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-4 md:h-4 border border-black/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Title */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="font-orbitron font-black text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider leading-tight">
            {"ARTHEIST LABS".split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.23, 1, 0.320, 1]
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotateY: 180,
                  color: "#666666"
                }}
                className="inline-block cursor-pointer"
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="font-space font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
            {"We Make Arry's NFT".split(" ").map((word, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: [0.445, 0.05, 0.55, 0.95]
                }}
                className="inline-block mr-2 sm:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="font-mono text-xs sm:text-sm md:text-base mb-4 sm:mb-6 text-black/70 px-4"
        >
          "No Wahala, just NFTs & vibes | Naija sauce"
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="inline-block p-3 sm:p-4 md:p-5 border-2 border-black bg-black text-white font-mono text-xs sm:text-sm md:text-base hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 mx-4 text-center"
        >
          The heist has begun | 2025 Flex | #Creative Heist
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-black rounded-full flex justify-center"
        >
          <div className="w-1 h-2 sm:h-3 bg-black rounded-full mt-1 sm:mt-2" />
        </motion.div>
      </motion.div>

      {/* Interactive Glow */}
      <div
        className="absolute pointer-events-none w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)`,
          left: `${(mousePosition.x + 1) * 50}%`,
          top: `${(mousePosition.y + 1) * 50}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      />
    </motion.section>
  );
};

export default HeroSection;
