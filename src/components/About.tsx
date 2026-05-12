import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone,  Users,  Award, Star, 
  Atom, Type, Triangle, Lightbulb, Target, 
  Rocket, Brain, Heart, Sparkles, CheckCircle,  Flame, Github
} from 'lucide-react';
import { SiNodedotjs, SiMongodb, SiFirebase, SiRedux, SiTailwindcss, SiNextdotjs, SiJavascript } from 'react-icons/si';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const skills = [
    { name: 'React', level: 85, icon: Atom, color: '#667eea', description: 'Building interactive UIs with modern React patterns' },
    { name: 'React Native', level: 82, icon: Smartphone, color: '#f093fb', description: 'Cross-platform mobile development' },
    { name: 'TypeScript', level: 80, icon: Type, color: '#4facfe', description: 'Type-safe JavaScript development' },
    { name: 'Firebase', level: 78, icon: SiFirebase, color: '#ffca28', description: 'Backend services and real-time database' },
    { name: 'CLI', level: 75, icon: Code2, color: '#667eea', description: 'Command-line interface development' },
    { name: 'Tailwind', level: 82, icon: SiTailwindcss, color: '#06b6d4', description: 'Utility-first CSS framework' },
    { name: 'GitHub', level: 70, icon: Github, color: '#333333', description: 'Version control and collaboration' },
    { name: 'Node.js', level: 60, icon: SiNodedotjs, color: '#339933', description: 'Server-side JavaScript and APIs' },
  ];

  const stats = [
    { value: '20+', label: 'Projects', icon: Code2, color: '#667eea' },
    { value: '1+', label: 'Years Exp', icon: Award, color: '#f093fb' },
    { value: '10+', label: 'Happy Clients', icon: Users, color: '#4facfe' },
    { value: '50+', label: 'Commits', icon: Star, color: '#43e97b' },
  ];

  // const passions = [
  //   { icon: Brain, title: 'Problem Solving', description: 'Love tackling complex challenges with elegant solutions' },
  //   { icon: Heart, title: 'User Experience', description: 'Creating intuitive and delightful user interfaces' },
  //   { icon: Rocket, title: 'Innovation', description: 'Always exploring new technologies and approaches' },
  //   { icon: Sparkles, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
  // ];

  const achievements = [
    'Built production-ready mobile apps with in-app purchases',
    'Developed responsive dashboards, blogs, and AI-powered tools',
    'Integrated Firebase Auth, Firestore, and Cloud Functions',
    'Implemented RevenueCat for subscription management',
    'Integrated AI APIs including OpenAI, Gemini, and Replicate',
    'Designed seamless UIs and payment systems'
  ];

  const technologies = [
    { name: 'React', icon: Atom, color: '#667eea' },
    { name: 'React Native', icon: Smartphone, color: '#f093fb' },
    { name: 'TypeScript', icon: Type, color: '#4facfe' },
    { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
    { name: 'CLI', icon: Code2, color: '#667eea' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'GitHub', icon: Github, color: '#333333' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-gray-600 mb-6"
            style={{
              backgroundColor: '#e0e5ec',
              boxShadow: 'inset 4px 4px 8px #bec8d2, inset -4px -4px 8px #ffffff'
            }}
          >
            About Me
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-6">
            Passionate Developer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creating digital experiences that blend beautiful design with powerful functionality
          </p>
        </motion.div>

        {/* Interactive Tabs */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'story', label: 'My Story', icon: Rocket },
              { id: 'technologies', label: 'Technologies', icon: Target },
              { id: 'achievements', label: 'Achievements', icon: Award }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-700'
                }`}
                style={{
                  background: activeTab === tab.id 
                    ? 'linear-gradient(135deg, #667eea, #764ba2)'
                    : '#e0e5ec',
                  boxShadow: activeTab === tab.id 
                    ? '0 10px 20px rgba(102, 126, 234, 0.3)'
                    : '6px 6px 12px #bec8d2, -6px -6px 12px #ffffff'
                }}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[400px]"
            >
              {activeTab === 'story' && (
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Main Story */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
            className="space-y-8"
          >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: '#e0e5ec',
                  boxShadow: '15px 15px 30px #bec8d2, -15px -15px 30px #ffffff'
                }}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4"
                    style={{
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
                    }}
                  >
                          <Rocket size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-700">My Journey</h3>
                          <p className="text-gray-600">From passion to profession</p>
                  </div>
                </div>
                      
                      <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p className="text-lg">
                          I'm Nouman Khan — a developer passionate about building clean, scalable, and user-focused applications.
                        </p>
                        <p>
                          I specialize in both web and mobile development using React, React Native, TypeScript, Firebase, and modern tools like CLI, Tailwind, GitHub, and Node.js.
                        </p>
                        <p>
                          From production-ready mobile apps with in-app purchases to responsive dashboards, blogs, and AI-powered tools — I've built real-world solutions that drive impact.
                        </p>
                        <p>
                          Whether it's building smart features, integrating payment systems, or designing seamless UIs, I focus on shipping products that solve real problems and deliver value.
                        </p>
                      </div>
                    </motion.div>

                    {/* Philosophy */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-6 rounded-3xl"
                      style={{
                        backgroundColor: '#e0e5ec',
                        boxShadow: '10px 10px 20px #bec8d2, -10px -10px 20px #ffffff'
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <Lightbulb size={24} className="text-gray-600 mr-3" />
                        <h4 className="font-bold text-gray-700">My Philosophy</h4>
                      </div>
                      <p className="text-gray-600 italic">
                        "I believe in building fast, learning faster, and improving with every iteration."
                </p>
              </motion.div>
                  </motion.div>

                  {/* Technologies Grid */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-700 mb-6">Core Technologies</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 30, scale: 0.8 }}
                          animate={{ 
                            opacity: 1, 
                            y: [0, -8, 0],
                            scale: [1, 1.02, 1],
                            rotate: [0, 2, -2, 0],
                            transition: { 
                              opacity: { duration: 0.8, delay: index * 0.15, type: "spring" as const, stiffness: 100 },
                              y: { duration: 4, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" as const },
                              scale: { duration: 5, repeat: Infinity, delay: index * 0.7, ease: "easeInOut" as const },
                              rotate: { duration: 6, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" as const }
                            }
                          }}
                          whileHover={{ 
                            scale: 1.08, 
                            y: -8,
                            transition: { 
                              duration: 0.3, 
                              type: "spring" as const,
                              stiffness: 300
                            }
                          }}
                          className="p-6 rounded-3xl text-center relative overflow-hidden group"
                          style={{
                            backgroundColor: '#e0e5ec',
                            boxShadow: '12px 12px 24px #bec8d2, -12px -12px 24px #ffffff'
                          }}
                        >
                          {/* Floating background gradient */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-20"
                            style={{
                              background: `radial-gradient(circle at 50% 50%, ${tech.color}20, transparent 70%)`
                            }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0, 0.1, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.4,
                              ease: "easeInOut" as const
                            }}
                          />
                          
                          {/* Glowing border effect */}
                          <motion.div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30"
                            style={{
                              background: `linear-gradient(45deg, ${tech.color}40, transparent, ${tech.color}40)`,
                              boxShadow: `0 0 20px ${tech.color}40`
                            }}
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                              delay: index * 0.2
                            }}
                          />

                          {/* Icon container with enhanced styling */}
                          <motion.div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                            style={{
                              background: `linear-gradient(135deg, ${tech.color}, ${tech.color}99)`,
                              boxShadow: `0 8px 16px ${tech.color}40, inset 0 1px 0 ${tech.color}20`
                            }}
                            whileHover={{
                              scale: 1.15,
                              rotate: [0, 10, -10, 0],
                              transition: { duration: 0.6, type: "spring" as const, stiffness: 200 }
                            }}
                            animate={{
                              y: [0, -3, 0],
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              y: {
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.6,
                                ease: "easeInOut" as const
                              },
                              scale: {
                                duration: 4,
                                repeat: Infinity,
                                delay: index * 0.8,
                                ease: "easeInOut" as const
                              }
                            }}
                          >
              <motion.div
                animate={{ 
                                rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                                delay: index * 0.4,
                                ease: "easeInOut" as const
                              }}
                            >
                              <tech.icon size={28} className="text-white drop-shadow-sm" />
                            </motion.div>
                          </motion.div>

                          {/* Technology name with enhanced typography */}
                          <motion.h4 
                            className="font-bold text-gray-700 text-lg relative z-10"
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                            animate={{
                              y: [0, -2, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.9,
                              ease: "easeInOut" as const
                            }}
                          >
                            {tech.name}
                          </motion.h4>

                          {/* Subtle pulse effect */}
                          <motion.div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10"
                            style={{
                              background: `linear-gradient(45deg, ${tech.color}30, transparent)`
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0, 0.1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                              ease: "easeInOut" as const
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
              </motion.div>
            </div>
              )}

              {activeTab === 'technologies' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-6 rounded-3xl relative overflow-hidden group"
                  style={{
                    backgroundColor: '#e0e5ec',
                        boxShadow: '10px 10px 20px #bec8d2, -10px -10px 20px #ffffff'
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`
                        }}
                      />
                      
                      <div className="flex items-center mb-4 relative z-10">
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                          style={{
                            background: `linear-gradient(135deg, ${skill.color}, ${skill.color}99)`,
                            boxShadow: `0 8px 16px ${skill.color}33`
                          }}
                        >
                          <skill.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-700">{skill.name}</h4>
                          <p className="text-sm text-gray-600">{skill.description}</p>
                        </div>
                      </div>

                      <div className="mb-3 relative z-10">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div 
                          className="w-full bg-gray-300 rounded-full h-3"
                          style={{
                            boxShadow: 'inset 3px 3px 6px #bec8d2, inset -3px -3px 6px #ffffff'
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className="h-full rounded-full relative overflow-hidden"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                              boxShadow: `0 2px 4px ${skill.color}33`
                            }}
                          >
                            <motion.div
                              animate={{ x: ['0%', '100%'] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "linear",
                                delay: index * 0.1 + 1.5
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                              style={{ transform: 'skewX(-15deg)' }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 rounded-3xl"
                    style={{
                      backgroundColor: '#e0e5ec',
                      boxShadow: '15px 15px 30px #bec8d2, -15px -15px 30px #ffffff'
                    }}
                  >
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4"
                      style={{
                          background: 'linear-gradient(135deg, #667eea, #764ba2)',
                          boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
                        }}
                      >
                        <Award size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-700">Key Achievements</h3>
                        <p className="text-gray-600">Milestones in my career</p>
                      </div>
                  </div>
                    
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 rounded-2xl text-center relative overflow-hidden group"
                  style={{
                    backgroundColor: '#e0e5ec',
                    boxShadow: '10px 10px 20px #bec8d2, -10px -10px 20px #ffffff'
                  }}
                >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-0 group-hover:opacity-20"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`,
                      boxShadow: `0 8px 16px ${stat.color}33`
                    }}
                  >
                    <stat.icon size={20} className="text-white" />
                  </div>
                        <div className="text-2xl font-bold text-gray-700 mb-1 relative z-10">{stat.value}</div>
                        <div className="text-gray-600 text-sm relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="inline-block p-8 rounded-3xl"
            style={{
              backgroundColor: '#e0e5ec',
              boxShadow: '15px 15px 30px #bec8d2, -15px -15px 30px #ffffff'
            }}
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Ready to work together?</h3>
            <p className="text-gray-600 mb-6">Let's create something amazing</p>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-white font-semibold rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
              }}
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;