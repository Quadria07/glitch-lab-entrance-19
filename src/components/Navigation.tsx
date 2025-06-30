
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <img
            src="https://www.artheistlabs.com/wp-content/uploads/2025/04/ARTHEIST-LOGO-ANI2.gif"
            alt="Artheist Labs"
            className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 object-contain"
          />
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 font-orbitron font-bold text-sm tracking-wider">
          {[
            { name: 'ABOUT US', id: 'aboutus' },
            { name: 'OUR TEAM', id: 'ourteam' }
          ].map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="relative group hover:text-black transition-all duration-300"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-black"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-black/10"
      >
        <div className="px-4 py-4 space-y-4 font-orbitron font-bold text-sm tracking-wider">
          {[
            { name: 'ABOUT US', id: 'aboutus' },
            { name: 'OUR TEAM', id: 'ourteam' }
          ].map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="block py-2 text-black hover:text-gray-600 transition-colors duration-300 w-full text-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
