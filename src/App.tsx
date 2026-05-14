
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: 'var(--neu-bg)' }}>
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;