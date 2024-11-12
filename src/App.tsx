import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white"
            >
              {'{A}'}
            </motion.span>
            <div className="hidden sm:flex space-x-8">
              <a href="#" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#articles" className="nav-link">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="space-y-32">
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;