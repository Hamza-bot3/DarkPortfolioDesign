import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, FileText } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Keep In Touch.</h2>
        <p className="text-gray-400 mb-8">
          I'm currently specializing in Front-end Development.
          Feel free to get in touch and talk more about your projects.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="social-button"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
          <a
            href="#"
            className="social-button"
          >
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}