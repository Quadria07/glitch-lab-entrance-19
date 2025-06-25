
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import TeamSection from './TeamSection';
import NFTSection from './NFTSection';
import Footer from './Footer';
import AnimatedSection from './AnimatedSection';

const MainHomepage = () => {
  return (
    <div className="relative bg-white text-black overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AnimatedSection id="aboutus">
        <AboutSection />
      </AnimatedSection>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* NFT Section */}
      <AnimatedSection>
        <NFTSection />
      </AnimatedSection>
      
      {/* Footer */}
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default MainHomepage;
