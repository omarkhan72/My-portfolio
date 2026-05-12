import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section if we're currently navigating
      if (isNavigating) return;
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, isNavigating]);

  const scrollToSection = (sectionId: string) => {
    // Set navigating state to prevent scroll detection interference
    setIsNavigating(true);
    setActiveSection(sectionId);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          setIsOpen(false);
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const targetPosition = element.offsetTop - navbarHeight - 20;
          
          // Smooth scroll with shorter duration
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Reset navigating state after a short delay
          setTimeout(() => setIsNavigating(false), 500);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        setIsOpen(false);
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = element.offsetTop - navbarHeight - 20;
        
        // Smooth scroll with shorter duration
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Reset navigating state after a short delay
        setTimeout(() => setIsNavigating(false), 500);
      }
    }
  };



  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div 
        className="max-w-7xl mx-auto px-8 py-4"
        style={{
          backgroundColor: '#e0e5ec',
          borderRadius: '25px',
          boxShadow: '10px 10px 20px #bec8d2, -10px -10px 20px #ffffff'
        }}
      >
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-700"
          >
            Nouman Khan
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-3 rounded-2xl transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'text-gray-700'
                    : 'text-gray-600 hover:text-gray-700'
                }`}
                style={{
                  boxShadow: activeSection === item.id 
                    ? 'inset 6px 6px 12px #bec8d2, inset -6px -6px 12px #ffffff'
                    : 'none'
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-2xl"
            style={{
              boxShadow: '6px 6px 12px #bec8d2, -6px -6px 12px #ffffff'
            }}
          >
            {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-6 space-y-3"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? 'text-gray-700'
                      : 'text-gray-600 hover:text-gray-700'
                  }`}
                  style={{
                    boxShadow: activeSection === item.id 
                      ? 'inset 6px 6px 12px #bec8d2, inset -6px -6px 12px #ffffff'
                      : '4px 4px 8px #bec8d2, -4px -4px 8px #ffffff'
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;