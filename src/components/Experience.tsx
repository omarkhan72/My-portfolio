import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Calendar, MapPin, TrendingUp, Users, Code, Award, 
  Rocket, Monitor, Palette, Sprout, ChevronDown, ChevronUp,
  ExternalLink, Star, Zap, Target, CheckCircle
} from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb, SiAmazon, SiSass, SiFigma, SiGit } from 'react-icons/si';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      title: 'React Native Developer Intern',
      company: 'Ford 9 Solution',
      location: 'Swat, Pakistan',
      period: 'Dec 2024 – Aug 2025',
      type: 'Internship',
      description: 'Developed cross-platform mobile apps using React Native CLI with focus on modern mobile development practices and monetization.',
      achievements: [
        'Developed cross-platform mobile apps using React Native CLI',
        'Integrated Firebase Authentication, Firestore, and Cloud Functions',
        'Implemented AdMob ads (Banner, Interstitial, Rewarded) for monetization',
        'Built custom Cloud Functions for backend logic and API integrations',
        'Implemented smooth animations and transitions using Reanimated 3',
        'Handled subscriptions and payments with RevenueCat integration',
        'Optimized app performance with lazy loading and image caching',
        'Implemented push notifications using Firebase Cloud Messaging'
      ],
      skills: ['React Native', 'Firebase', 'Cloud Functions', 'AdMob', 'Reanimated', 'RevenueCat', 'Push Notifications', 'Performance Optimization'],
      color: '#667eea',
      icon: Rocket
    },
    {
      title: 'React Developer Intern',
      company: 'Ford 9 Solution',
      location: 'Swat, Pakistan',
      period: 'Sep – Nov 2024',
      type: 'Internship',
      description: 'Built interactive UIs using React.js, Tailwind CSS, and TypeScript with modern development practices.',
      achievements: [
        'Built interactive UIs using React.js, Tailwind CSS, and TypeScript',
        'Used Context API for global state management',
        'Deployed applications on Firebase Hosting',
        'Collaborated with development team on various projects'
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Firebase Hosting'],
      color: '#f093fb',
      icon: Monitor
    },
    {
      title: 'Junior Developer (Projects & Freelance)',
      company: 'Self-Driven',
      location: 'Remote',
      period: '2023 – 2024',
      type: 'Freelance / Projects',
      description: 'Built and deployed multiple real-world web applications and e-commerce solutions, gaining strong expertise in React ecosystem, Firebase backend, and Node.js.',
      achievements: [
        'Portfolio Website (React + Admin Dashboard + Contact Form with SMTP/NodeMailer backend)',
        'AI Poem Generator (Gemini API, multi-language poems + images, PDF download)',
        'Mendezz E-Commerce (Firebase store with PayPal integration)',
        'Weather App (React + OpenWeather API)',
        'Task Management App (React + Local Storage + CRUD operations)'
      ],
      skills: ['React', 'Node.js', 'Firebase', 'Tailwind', 'Framer Motion', 'GitHub', 'SMTP'],
      color: '#43e97b',
      icon: Sprout
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Ford 9 Solution',
      location: 'Swat, Pakistan',
      period: 'Jun – Aug 2024',
      type: 'Internship',
      description: 'Started with basic web development, building responsive static websites to learn fundamentals.',
      achievements: [
        'Built responsive static websites with HTML5, CSS3, and JavaScript',
        'Practiced mobile-first design with semantic HTML and accessibility',
        'Learned modern CSS techniques and responsive design principles',
        'Collaborated with design team to implement UI/UX requirements'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      color: '#4facfe',
      icon: Palette
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '1+', icon: Calendar, color: '#667eea' },
    { label: 'Projects Completed', value: '20+', icon: Code, color: '#f093fb' },
    { label: 'Internships', value: '3+', icon: Users, color: '#4facfe' },
    { label: 'Technologies', value: '15+', icon: TrendingUp, color: '#43e97b' },
  ];

  return (
    <section id="experience" className="py-32 px-6" style={{ backgroundColor: 'var(--neu-bg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              backgroundColor: 'var(--neu-bg)',
              boxShadow: 'inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light)'
            }}
          >
            Professional Journey
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From internships to freelance projects, each experience has built my expertise in React, React Native, and modern web development
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl relative overflow-hidden group"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '10px 10px 20px var(--neu-shadow-dark), -10px -10px 20px var(--neu-shadow-light)'
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
        </motion.div>

        {/* Experience Timeline with Cards */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 rounded-full hidden lg:block"
            style={{
              background: 'linear-gradient(to bottom, #667eea, #764ba2)',
              boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)'
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
             
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center hidden lg:flex z-10"
                  style={{
                    backgroundColor: exp.color,
                    boxShadow: `0 0 20px ${exp.color}66, 0 0 40px ${exp.color}33`
                  }}
                >
                  <exp.icon size={24} className="text-white" />
                </motion.div>

                                {/* Experience Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="h-full p-8 rounded-3xl cursor-pointer relative overflow-hidden group"
                    style={{
                      backgroundColor: 'var(--neu-bg)',
                      boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
                    }}
                    onClick={() => setSelectedExperience(selectedExperience === index ? null : index)}
                  >
                {/* Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}10)`
                  }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${exp.color}, ${exp.color}99)`,
                          boxShadow: `0 8px 16px ${exp.color}33`
                        }}
                      >
                        <exp.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-700">{exp.title}</h3>
                        <p className="text-lg text-gray-600 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <span 
                      className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${exp.color}, ${exp.color}99)`
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600"
                    style={{
                      backgroundColor: 'var(--neu-bg)',
                      boxShadow: '4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light)'
                    }}
                  >
                    {selectedExperience === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </motion.button>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 relative z-10">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 relative z-10">
                  <h4 className="font-bold text-gray-700 mb-3 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-xs font-medium text-gray-600 rounded-xl"
                        style={{
                          backgroundColor: 'var(--neu-bg)',
                          boxShadow: 'inset 2px 2px 4px var(--neu-shadow-dark), inset -2px -2px 4px var(--neu-shadow-light)'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Expandable Achievements */}
                <AnimatePresence>
                  {selectedExperience === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="border-t border-gray-300 pt-6">
                        <h4 className="font-bold text-gray-700 mb-4 text-sm flex items-center">
                          <Target size={16} className="mr-2" />
                          Key Achievements:
                        </h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: achievementIndex * 0.1 }}
                              className="flex items-start space-x-3 text-gray-600"
                            >
                              <CheckCircle 
                                size={16} 
                                className="text-green-500 mt-0.5 flex-shrink-0" 
                              />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="inline-block p-10 rounded-3xl relative overflow-hidden group"
            style={{
              backgroundColor: 'var(--neu-bg)',
              boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
            }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />

            <div className="flex flex-col lg:flex-row items-center justify-center mb-6 relative z-10">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-0 lg:mr-6"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Award className="text-white" size={32} />
                </motion.div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-700 mb-2">Ready for New Challenges</h3>
                <p className="text-gray-600 text-lg">Let's build something amazing together</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-white font-semibold rounded-2xl flex items-center justify-center space-x-2"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
                }}
              >
                <span>Get In Touch</span>
                <ExternalLink size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-gray-700 font-semibold rounded-2xl flex items-center justify-center space-x-2"
                style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)'
                }}
              >
                <span>View Projects</span>
                <Star size={18} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;