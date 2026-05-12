import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Smartphone, Type, Triangle, Link, 
  Database, Zap, GitBranch, Layers, Monitor, Smartphone as Mobile
} from 'lucide-react';
import { SiNodedotjs, SiMongodb, SiFirebase, SiRedux, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: Atom, color: '#667eea' },
        { name: 'React Native', level: 90, icon: Smartphone, color: '#f093fb' },
        { name: 'TypeScript', level: 88, icon: Type, color: '#4facfe' },
        { name: 'JavaScript', level: 95, icon: Type, color: '#f7df1e' },
        { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06b6d4' },
        { name: 'Next.js', level: 82, icon: SiNextdotjs, color: '#000000' },
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 80, icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', level: 75, icon: Zap, color: '#000000' },
        { name: 'MongoDB', level: 70, icon: SiMongodb, color: '#47a248' },
        { name: 'Firebase', level: 85, icon: SiFirebase, color: '#ffca28' },
        { name: 'Git', level: 90, icon: GitBranch, color: '#f05032' },
        { name: 'Redux', level: 88, icon: SiRedux, color: '#764abc' },
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 90, icon: Smartphone, color: '#61dafb' },
        { name: 'Expo', level: 85, icon: Mobile, color: '#000000' },
        { name: 'iOS Development', level: 75, icon: Monitor, color: '#000000' },
        { name: 'Android Development', level: 78, icon: Monitor, color: '#3ddc84' },
        { name: 'React Navigation', level: 92, icon: Link, color: '#6c63ff' },
        { name: 'Native Modules', level: 70, icon: Layers, color: '#ff6b6b' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4" style={{ backgroundColor: '#d9dee7' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Skills & Expertise
          </h2>
          <div 
            className="w-20 h-1 mx-auto rounded-full"
            style={{
              background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
              boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)'
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: '#e0e5ec',
                boxShadow: '8px 8px 16px #bec8d2, -8px -8px 16px #ffffff'
              }}
            >
              <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon size={16} className="text-gray-600" />
                        <span className="text-gray-600 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div 
                      className="h-3 rounded-full overflow-hidden"
                      style={{
                        boxShadow: 'inset 3px 3px 6px #bec8d2, inset -3px -3px 6px #ffffff',
                        backgroundColor: '#d9dee7'
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut'
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, #3B82F6, #8B5CF6)`,
                          boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                        }}
                      >
                        <motion.div
                          animate={{ x: ['0%', '100%'] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: 'linear',
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.5
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                          style={{ transform: 'skewX(-15deg)' }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;