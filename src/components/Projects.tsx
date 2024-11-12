import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Opiniometer",
      description: "A web app to analyze whether an opinion on specific topic is positive or negative based on word tokens using Natural Language Processing concept called Sentiment Analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Node.js", "NLP"],
      github: "#",
      demo: "#"
    },
    {
      title: "creative@home",
      description: "A website that provides roadmap for various fields in Programming and help people learn to code for free.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      technologies: ["JavaScript", "SASS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Prayer Time API",
      description: "It's an easy to use API to get today's (and tomorrow's) prayer time in any city in few words, based on Muslim Pro.",
      image: "https://images.unsplash.com/photo-1594839755066-79e4c7a69a4a?auto=format&fit=crop&q=80&w=800",
      technologies: ["Python", "Flask", "Beautiful Soup"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-brand-green">🚀</span> All Creative Works
          </h2>
          <a href="#" className="text-brand-green hover:text-emerald-400 transition-colors text-sm">
            Explore more →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-brand-green transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}