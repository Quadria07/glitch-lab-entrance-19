
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-black bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="font-mono text-sm text-black/60">
            © 2025 artheistlabs all rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {[
              { name: "X", url: "https://x.com/artheistlabs" },
              { name: "Discord", url: "https://discord.gg/7rauUTmSYq" },
              { name: "Instagram", url: "https://www.instagram.com/artheistlabs" }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="font-space text-sm hover:text-black/80 transition-all duration-300"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
