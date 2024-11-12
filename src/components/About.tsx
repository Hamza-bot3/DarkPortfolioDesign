import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-brand-green">⚡</span> About Me
          </h2>

          <div className="space-y-4 text-gray-400">
            <p>
              Hey! I'm Hamza Parvez, I've been close to a computer since an
              early age, and been passionate about it ever since.
            </p>
            <p>
              I really liked to build stuff using{' '}
              <span className="text-brand-green">no-code tools</span> back in
              2010, and from that, I explored how to code myself, fast-forward
              to today, I do programming in various languages and technologies,
              and had the privilege to worked in a{' '}
              <span className="text-brand-green">Recruitment Company</span> and
              a <span className="text-brand-green">SaaS Company</span>. I'm
              interested in building something awesome with code and automate
              tasks with code, currently focused on{' '}
              <span className="text-brand-green">Web & Mobile Development</span>
              , <span className="text-brand-green">Open Source</span> and{' '}
              <span className="text-brand-green">Competitive Programming</span>.
            </p>
            <p>
              When I'm not coding I play games with my friends, watch some show
              on Netflix, or if the weather's good, play basketball! 🏀
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-full overflow-hidden relative z-10">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600 p-10px">
              <img src="https://ibb.co/V9Wq5B3" alt="" />
            </div>
          </div>
          <div className="absolute top-0 right-0 -z-10">
            <div className="w-64 h-64 bg-gradient-to-r from-brand-green/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-transparent rounded-full grid grid-cols-6 gap-1">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-800 rounded-full"></div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
