import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl text-center rounded-3xl p-10 md:p-12"
        style={{
          backgroundColor: 'var(--neu-bg)',
          boxShadow: '15px 15px 30px var(--neu-shadow-dark), -15px -15px 30px var(--neu-shadow-light)'
        }}
      >
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6" 
          style={{
            backgroundColor: 'var(--neu-bg)',
            boxShadow: 'inset 8px 8px 16px var(--neu-shadow-dark), inset -8px -8px 16px var(--neu-shadow-light)'
          }}
        >
          <span className="text-4xl font-extrabold text-gray-600">404</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          The page you’re looking for doesn’t exist or has been moved. Check the URL or return to the homepage.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-2xl font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
            }}
          >
            Go Home
          </Link>

          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl font-semibold text-gray-700"
            style={{
              backgroundColor: 'var(--neu-bg)',
              boxShadow: '6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)'
            }}
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;


