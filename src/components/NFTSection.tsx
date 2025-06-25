
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NFTSection = () => {
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
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <section id="nft" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible('nft') ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="font-orbitron font-black text-4xl md:text-5xl text-center mb-16"
        >
          WHAT ARE NFTs?
        </motion.h2>

        <div 
          id="nft-content"
          data-scroll-section
          className="space-y-12"
        >
          
          {/* NFT Education Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "2017-2019",
                subtitle: "The Beginning",
                content: "NFTs emerged with CryptoPunks and CryptoKitties, establishing digital ownership on blockchain."
              },
              {
                title: "2020-2021",
                subtitle: "The Boom",
                content: "Market exploded with Beeple's $69M sale, mainstream adoption, and celebrity endorsements."
              },
              {
                title: "2022-2024",
                subtitle: "Evolution",
                content: "Focus shifted to utility, gaming, metaverse integration, and real-world applications."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible('nft-content') ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-black border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
              >
                <h3 className="font-orbitron font-bold text-xl mb-2">{card.title}</h3>
                <h4 className="font-space font-semibold text-gray-300 mb-4">{card.subtitle}</h4>
                <p className="font-space text-sm leading-relaxed text-gray-400">{card.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Main NFT Description */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible('nft-content') ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="font-space text-lg leading-relaxed text-gray-300 mb-8">
              Non-Fungible Tokens (NFTs) have revolutionized digital ownership, growing from a niche experiment to a multi-billion dollar market. They represent unique digital assets verified on blockchain technology, enabling creators to monetize digital art, collectibles, and experiences like never before.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-white/10 backdrop-blur-sm"
            >
              <p className="font-mono text-sm text-white/80">
                "The NFT market has grown from $40 million in 2018 to over $25 billion in 2021, demonstrating the explosive potential of digital asset ownership and creative monetization."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NFTSection;
