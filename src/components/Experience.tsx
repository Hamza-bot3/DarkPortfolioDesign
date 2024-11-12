import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Tech Company",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Led development of multiple high-impact projects, mentored junior developers, and implemented best practices.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"]
    },
    {
      company: "Digital Agency",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained client websites, implemented responsive designs, and optimized performance.",
      technologies: ["Next.js", "Express", "PostgreSQL", "Tailwind CSS"]
    },
    {
      company: "Startup",
      position: "Frontend Developer",
      period: "2018 - 2020",
      description: "Built interactive user interfaces and implemented responsive designs for web applications.",
      technologies: ["React", "JavaScript", "CSS", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">Experience</h2>
      <div className="mt-8 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-gray-400" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-gray-600">{exp.company} • {exp.period}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{exp.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}