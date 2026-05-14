import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone,  Send, Check, Github, Linkedin, Twitter, MessageCircle, Calendar, Coffee } from 'lucide-react';
import { SiWhatsapp, SiCalendly } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      subtitle: 'Drop me a line',
      content: 'Nouman.khan9589282@gmail.com',
      href: 'mailto:Nouman.khan9589282@gmail.com',
      color: '#667eea',
      description: 'Best for detailed discussions'
    },
    {
      icon: Phone,
      title: 'Call Me',
      subtitle: 'Let\'s talk directly',
      content: '+92 313 094271',
      href: 'tel:+92313094271',
      color: '#f093fb',
      description: 'Available Mon-Fri, 9AM-6PM PKT'
    },
    {
      icon: SiWhatsapp,
      title: 'WhatsApp',
      subtitle: 'Quick chat',
      content: '+92 349 9589282',
      href: 'https://wa.me/923499589282',
      color: '#25d366',
      description: 'Fast response guaranteed'
    },
    {
      icon: SiCalendly,
      title: 'Schedule',
      subtitle: 'Book a meeting',
      content: 'Calendly',
      href: '#',
      color: '#006bff',
      description: '30min slots available'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nouman9589', label: 'GitHub', color: '#333', username: '@nouman9589' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-nouman-139779226/', label: 'LinkedIn', color: '#0077b5', username: 'Nouman Khan' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1da1f2', username: '@nouman9589' },
  ];

  const quickMessages = [
    "👋 Let's discuss a project",
    "💼 I'm interested in hiring you",
    "🤝 Let's collaborate",
    "☕ Coffee chat?"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleQuickMessage = (message: string) => {
    setFormData({ ...formData, message });
  };

  return (
    <section id="contact" className="py-32 px-6">
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
            Get In Touch
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              className="block p-6 rounded-3xl text-center group"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${method.color}, ${method.color}99)`,
                  boxShadow: `0 10px 20px ${method.color}33`
                }}
              >
                <method.icon size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-700 text-lg mb-1">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{method.subtitle}</p>
              <p className="font-semibold text-gray-700 mb-2">{method.content}</p>
              <p className="text-gray-500 text-xs">{method.description}</p>
            </motion.a>
          ))}
          
          {/* CV Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            viewport={{ once: true }}
            className="block p-6 rounded-3xl text-center group cursor-pointer"
            style={{
              backgroundColor: 'var(--neu-bg)',
              boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
            }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Muhammad_Nouman_CV_Final_Clean.pdf';
              link.download = 'Muhammad_Nouman_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                boxShadow: '0 10px 20px #10b98133'
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-700 text-lg mb-1">Download CV</h3>
            <p className="text-gray-600 text-sm mb-2">Get my resume</p>
            <p className="font-semibold text-gray-700 mb-2">PDF Format</p>
            <p className="text-gray-500 text-xs">Professional experience & skills</p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
              }}
            >
              <div className="flex items-center mb-8">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-700">Send Message</h3>
                  <p className="text-gray-600">I'll get back to you within 24 hours</p>
                </div>
              </div>

              {/* Quick Message Buttons */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-3">Quick start:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickMessages.map((msg, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickMessage(msg)}
                      className="p-3 text-left text-sm text-gray-600 rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--neu-bg)',
                        boxShadow: '4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light)'
                      }}
                    >
                      {msg}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-3">
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl text-gray-700 bg-transparent border-none outline-none transition-all duration-300"
                      style={{
                        boxShadow: 'inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light)',
                        backgroundColor: 'var(--neu-bg)'
                      }}
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-3">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl text-gray-700 bg-transparent border-none outline-none transition-all duration-300"
                      style={{
                        boxShadow: 'inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light)',
                        backgroundColor: 'var(--neu-bg)'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-3">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl text-gray-700 bg-transparent border-none outline-none transition-all duration-300"
                    style={{
                      boxShadow: 'inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light)',
                      backgroundColor: 'var(--neu-bg)'
                    }}
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-3">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl text-gray-700 bg-transparent border-none outline-none resize-none transition-all duration-300"
                    style={{
                      boxShadow: 'inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light)',
                      backgroundColor: 'var(--neu-bg)'
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitted}
                  className={`w-full flex items-center justify-center space-x-3 px-8 py-5 font-bold rounded-2xl transition-all duration-300 text-lg ${
                    isSubmitted ? 'text-white' : 'text-white'
                  }`}
                  style={{
                    background: isSubmitted 
                      ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: isSubmitted
                      ? '0 10px 20px rgba(67, 233, 123, 0.3)'
                      : '0 10px 20px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  {isSubmitted ? (
                    <>
                      <Check size={24} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 rounded-full bg-green-400 mr-3 animate-pulse" />
                <span className="text-gray-700 font-semibold">Available for new projects</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Let's Create Something Amazing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm currently available for freelance work and exciting full-time opportunities. 
                Whether you need a React Native app, a modern web application, or technical consultation, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Coffee size={16} />
                  <span>Response time: ~2 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
              }}
            >
              <h3 className="text-xl font-bold text-gray-700 mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--neu-bg)',
                      boxShadow: '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}, ${social.color}99)`,
                        boxShadow: `0 6px 12px ${social.color}33`
                      }}
                    >
                      <social.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">{social.label}</div>
                      <div className="text-gray-600 text-sm">{social.username}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 rounded-3xl text-center"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
              }}
            >
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Fun Fact</h3>
              <p className="text-gray-600">
                I've consumed over 1,000 cups of coffee while coding. 
                Each cup fueled another feature! ☕→💻
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;