import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nouman9589', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-nouman-139779226/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Nouman.khan9589282@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
            }}
          >
            <ArrowUp size={24} />
          </motion.button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '3px 3px 6px var(--neu-shadow-dark), -3px -3px 6px var(--neu-shadow-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)';
                }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 text-lg flex items-center justify-center space-x-2 mb-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={18} className="text-red-400 fill-current" />
              </motion.span>
              <span>by Nouman Khan</span>
            </p>
            <p className="text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="flex space-x-3">
            {[1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: dot * 0.3
                }}
                className="w-3 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #667eea, #764ba2)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;