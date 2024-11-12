import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

export default function Articles() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const articles = [
    {
      title: "Unleash Your Dev Blog: Write More with GitHub Issues as Your CMS",
      date: "April 3 2024",
      readTime: "3 min read",
      link: "#"
    },
    {
      title: "Code Faster with Vim Shortcuts!",
      date: "July 18 2022",
      readTime: "2 min read",
      link: "#"
    },
    {
      title: "Easily Boost Your Productivity With Code Snippets",
      date: "September 22 2021",
      readTime: "4 min read",
      link: "#"
    },
    {
      title: "How I Make My First (real) Open Source Contribution",
      date: "June 23 2021",
      readTime: "5 min read",
      link: "#"
    }
  ];

  return (
    <section id="articles" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-brand-green">📝</span> Latest Articles
          </h2>
          <a href="#" className="text-brand-green hover:text-emerald-400 transition-colors text-sm">
            View all articles →
          </a>
        </div>

        <div className="grid gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              className="group card hover:cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-brand-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {article.date} • {article.readTime}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-brand-green transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}