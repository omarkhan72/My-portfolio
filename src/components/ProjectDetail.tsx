import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  ArrowLeft, ExternalLink, Github, Calendar, Users, 
  Star, Eye, Smartphone, Globe, X
} from 'lucide-react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { projects as projectData } from '../projects';


// Custom styles for Swiper components
const customStyles = `
  .swiper-pagination-bullet-custom {
    width: 14px !important;
    height: 14px !important;
    background-color: var(--neu-bg) !important;
    opacity: 1 !important;
    border-radius: 50% !important;
    margin: 0 6px !important;
    transition: all 0.4s ease !important;
    box-shadow: inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light) !important;
    border: 2px solid var(--neu-bg) !important;
  }
  
  .swiper-pagination-bullet-active-custom {
    background: linear-gradient(135deg, #667eea, #764ba2) !important;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4) !important;
    transform: scale(1.3) !important;
    border: 2px solid #667eea !important;
  }
  
  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    transition: all 0.3s ease !important;
  }
  
  .swiper-button-prev-custom:hover,
  .swiper-button-next-custom:hover {
    box-shadow: 12px 12px 24px var(--neu-shadow-dark), -12px -12px 24px var(--neu-shadow-light) !important;
    transform: scale(1.05) !important;
  }
  
  .swiper-button-prev-custom:active,
  .swiper-button-next-custom:active {
    box-shadow: inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light) !important;
    transform: scale(0.95) !important;
  }
  
  .swiper-slide {
    transition: all 0.3s ease !important;
  }
  
  .swiper-slide-active {
    transform: scale(1.02) !important;
  }
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);

  // Inject custom styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data from centralized source
  const projects = projectData;

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id || '0'));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/#projects')}
          className="flex items-center space-x-2 px-4 py-2 rounded-2xl text-gray-600 hover:text-gray-700 mb-8 transition-all duration-300"
          style={{
            backgroundColor: 'var(--neu-bg)',
            boxShadow: '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)'
          }}
          whileHover={{ scale: 1.02, x: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Projects</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                boxShadow: `0 8px 16px ${project.color}33`
              }}
            >
              {project.category === 'mobile' ? (
                <Smartphone size={28} className="text-white" />
              ) : (
                <Globe size={28} className="text-white" />
              )}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-2">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600">{project.description}</p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Eye, label: 'Views', value: project.stats.views },
              { icon: Star, label: 'Stars', value: project.stats.stars },
              { icon: Users, label: 'Forks', value: project.stats.forks },
              { icon: Calendar, label: 'Category', value: project.category }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-2xl text-center"
                style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light)'
                }}
              >
                <stat.icon size={24} className="text-gray-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-700">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              className="flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold text-white"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                boxShadow: `0 8px 16px ${project.color}33`
              }}
            >
              <Github size={20} />
              <span>View Code</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              className="flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Unique Modern Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Custom Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 md:-left-16 z-10 transform -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="swiper-button-prev-custom w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300"
                  style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light)'
                }}
              >
                <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -right-4 md:-right-16 z-10 transform -translate-y-1/2">
                    <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="swiper-button-next-custom w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300"
                      style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light)'
                      }}
                    >
                <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                    </motion.button>
            </div>

            {/* Main Showcase Container */}
            <div 
              className="relative p-8 rounded-3xl mx-auto"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)',
                maxWidth: '1200px'
              }}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={2}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 3,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 4,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                  }
                }}
                loop={true}
                speed={600}
                effect="slide"
                grabCursor={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination-custom',
                  bulletClass: 'swiper-pagination-bullet-custom',
                  bulletActiveClass: 'swiper-pagination-bullet-active-custom'
                }}
                autoplay={{ 
                  delay: 4000, 
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  waitForTransition: true
                }}
                className="py-6"
              >
                {project.images.map((image: string, index: number) => (
                  <SwiperSlide key={index}>
                    {/* Floating Image Card */}
                    <div 
                      className="relative overflow-hidden rounded-2xl"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        maxWidth: '350px'
                      }}
                    >
                      {/* Image Container - Mobile Optimized */}
                      <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-96 md:h-[500px] object-contain rounded-lg"
                    />
                  </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
                </div>
                
            {/* Project Title Below Showcase */}
            <div className="text-center mt-8">
              <h3 
                className="text-2xl font-bold"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">Mobile App Screenshots Gallery</p>
            </div>
          </div>

          {/* Enhanced Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center space-x-3 mt-8">
            {/* Custom pagination will be injected here by Swiper */}
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
              }}
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-4">About This Project</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{project.fullDescription}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
              }}
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {(project.features || []).map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div 
                className="p-6 rounded-3xl"
                style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '10px 10px 20px var(--neu-shadow-dark), -10px -10px 20px var(--neu-shadow-light)'
                }}
              >
                <h3 className="text-xl font-bold text-gray-700 mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {(project.challenges || []).map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <X size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div 
                className="p-6 rounded-3xl"
                style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '10px 10px 20px var(--neu-shadow-dark), -10px -10px 20px var(--neu-shadow-light)'
                }}
              >
                <h3 className="text-xl font-bold text-gray-700 mb-4">Solutions</h3>
                <ul className="space-y-2">
                  {(project.solutions || []).map((solution: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-gray-600 text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '10px 10px 20px var(--neu-shadow-dark), -10px -10px 20px var(--neu-shadow-light)'
              }}
            >
              <h3 className="text-xl font-bold text-gray-700 mb-4">Technologies</h3>
              <div className="space-y-3">
                {project.technologies.map((tech: string, index: number) => (
                  <div 
                    key={index}
                    className="px-4 py-2 rounded-xl text-sm font-medium"
                    style={{
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--neu-bg)',
                boxShadow: '10px 10px 20px var(--neu-shadow-dark), -10px -10px 20px var(--neu-shadow-light)'
              }}
            >
              <h3 className="text-xl font-bold text-gray-700 mb-4">Highlights</h3>
              <div className="space-y-3">
                {project.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-gray-600 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 