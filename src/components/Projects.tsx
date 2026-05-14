import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ExternalLink, Github, Smartphone, Globe, Star, Eye, 
  Code2, Award, Users, TrendingUp,
  ArrowRight
} from 'lucide-react';
// Note: remove unused tech icon imports to keep bundle lean
import { projects as projectData } from '../projects';

const Projects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const projects = projectData;

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-32 px-6">
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
            My Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in web and mobile development
          </p>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Code2, label: 'Total Projects', value: '15+', color: '#667eea' },
              { icon: TrendingUp, label: 'Success Rate', value: '98%', color: '#f093fb' },
              { icon: Users, label: 'Happy Clients', value: '35+', color: '#4facfe' },
              { icon: Award, label: 'Awards Won', value: '5', color: '#43e97b' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl text-center relative overflow-hidden group"
                style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '10px 10px 20px var(--neu-shadow-dark), -10px -10px 20px var(--neu-shadow-light)'
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${stat.color}20, transparent 70%)`
                  }}
                />
                
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`,
                    boxShadow: `0 8px 16px ${stat.color}33`
                  }}
                >
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-700 mb-2 relative z-10">{stat.value}</div>
                <div className="text-gray-600 relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterItem) => (
              <motion.button
                key={filterItem.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  filter === filterItem.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-700'
                }`}
                style={{
                  background: filter === filterItem.id 
                    ? 'linear-gradient(135deg, #667eea, #764ba2)'
                    : 'var(--neu-bg)',
                  boxShadow: filter === filterItem.id 
                    ? '0 10px 20px rgba(102, 126, 234, 0.3)'
                    : '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)'
                }}
              >
                <span>{filterItem.label}</span>
                <span className="px-2 py-1 rounded-full text-xs bg-white/20">
                  {filterItem.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div 
                className="p-6 rounded-3xl relative overflow-hidden h-[500px] flex flex-col"
                style={{
                  backgroundColor: 'var(--neu-bg)',
                  boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
                }}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.color}20, transparent 70%)`
                  }}
                />

                {/* Project image */}
                <div className="relative overflow-hidden rounded-2xl mb-6 flex-shrink-0">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover ${
                      project.category === 'mobile' 
                        ? 'h-40 object-contain' 
                        : 'h-40 object-cover'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center space-x-1"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                        boxShadow: `0 4px 8px ${project.color}33`
                      }}
                    >
                      {project.category === 'mobile' ? (
                        <Smartphone size={12} />
                      ) : (
                        <Globe size={12} />
                      )}
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <div className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs text-white flex items-center space-x-1">
                        <Eye size={12} />
                        <span>{project.stats.views}</span>
                      </div>
                      <div className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs text-white flex items-center space-x-1">
                        <Star size={12} />
                        <span>{project.stats.stars}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4 flex-shrink-0">
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                            border: `1px solid ${project.color}30`
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 flex-shrink-0">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action buttons - pushed to bottom */}
                  <div className="flex items-center justify-between mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-sm font-semibold text-gray-600 hover:text-gray-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </motion.button>

                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:text-gray-700 transition-colors"
                        style={{
                          backgroundColor: 'var(--neu-bg)',
                          boxShadow: '4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                          boxShadow: `0 4px 8px ${project.color}33`
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;