
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Copy, Download } from 'lucide-react';
import profileImg from '../assets/images/Gemini_Generated_Image_kha3phkha3phkha3 (1).png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring" as const,
        bounce: 0.3,
        damping: 15
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        type: "spring" as const,
        bounce: 0.2,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        bounce: 0.4,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -4, 0],
      rotate: [0, 1.2, -1.2, 0],
      scale: [1, 1.01, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/omar-khan-0b45b52a1/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/OmarKhan2002', label: 'GitHub' },
  ];

  // Auto-changing inner text for code snippet
  const texts = ['Hello Web', 'Hello App'];
  const [textIndex, setTextIndex] = useState(0);
  const currentText = texts[textIndex];
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCopied(false);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const buildSnippetString = (label: string) => `import React from 'react';\n\nexport function Card() {\n  return (\n    <button className=\"px-4 py-2 rounded-xl text-white\">\n      ${label}\n    </button>\n  );\n}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildSnippetString(currentText));
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch { }
  };

  const codeLines = [
    <div key="l1"><span className="text-purple-600">import</span> <span className="text-gray-700">React</span> <span className="text-purple-600">from</span> <span className="text-emerald-600">'react'</span>;</div>,
    <div key="l2"> </div>,
    <div key="l3"><span className="text-purple-600">export</span> <span className="text-purple-600">function</span> <span className="text-blue-600">Card</span>() {'{'}</div>,
    <div key="l4" className="pl-4"><span className="text-purple-600">return</span> (</div>,
    <div key="l5" className="pl-8">&lt;<span className="text-blue-600">button</span> <span className="text-pink-600">className</span>=<span className="text-emerald-600">"px-4 py-2 rounded-xl text-white"</span>&gt;</div>,
    <div key="l6" className="pl-12">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="inline-block"
        >
          <span className="text-gray-700">{currentText}</span>
        </motion.span>
      </AnimatePresence>
    </div>,
    <div key="l7" className="pl-8">&lt;/<span className="text-blue-600">button</span>&gt;</div>,
    <div key="l8" className="pl-4">)</div>,
    <div key="l9">{'}'}</div>,
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-4 font-medium"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={nameVariants}
              className="text-5xl md:text-7xl font-bold text-gray-700 mb-6 leading-tight"
            >
              Omar Khan
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium"
            >
              Web & Mobile App Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              React, React Native, TypeScript & Firebase Professional
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-600 mb-12 leading-relaxed max-w-2xl"
            >
              I build intelligent, user-centric digital experiences with React, React Native, TypeScript, and Firebase. Specializing in modern web and mobile apps that prioritize performance and scalability. From seamless UI design to AI integration, I transform ideas into reality through clean code and innovative solutions.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, type: "spring" as const, stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Muhammad_Nouman_CV_Final_Clean.pdf';
                  link.download = 'Muhammad_Nouman_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-8 py-4 text-gray-700 font-semibold rounded-2xl transition-all duration-300 border border-gray-300 relative overflow-hidden group"
                style={{
                  backgroundColor: 'var(--neu-bg)'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
                }}
              >
                Contact Info
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    rotate: 5,
                    transition: { duration: 0.3, type: "spring" as const, stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    backgroundColor: 'var(--neu-bg)',
                    boxShadow: '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '3px 3px 6px var(--neu-shadow-dark), -3px -3px 6px var(--neu-shadow-light)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)';
                  }}
                  aria-label={social.label}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-0 group-hover:opacity-30"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.6, ease: "easeInOut" as const }
                    }}
                  >
                    <social.icon size={20} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Code Editor Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center lg:items-center relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.02, y: -2 }}
              className="w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem] rounded-full overflow-hidden p-3 md:-translate-y-4"
              style={{ boxShadow: '20px 20px 40px var(--neu-shadow-dark), -20px -20px 40px var(--neu-shadow-light)', backgroundColor: 'var(--neu-bg)' }}
            >
              <img
                src={profileImg}
                alt="Omar Khan"
                className="w-full h-full rounded-full object-cover"
                style={{ boxShadow: 'inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light)' }}
              />
            </motion.div>

            {/* CTA under editor */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 text-white font-semibold rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
                }}
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Hero;