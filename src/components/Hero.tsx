import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-medium">
            {'{H}'}
          </Link>
          <div className="space-x-8">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/projects" className="text-white hover:text-gray-300">
              Projects
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Dot Pattern Background */}
      <div className="absolute left-0 top-0 w-64 h-64 grid grid-cols-10 gap-2 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-500 rounded-full" />
        ))}
      </div>

      {/* Hero Content */}
      <div className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <h2 className="text-[#4ade80] text-2xl font-medium mb-4">
              Hey there!, I'm-
            </h2>
            <h1 className="text-7xl font-bold text-white mb-6">
              Hamza Parvez.
            </h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  Software Engineer.
                </h2>
                <p className="text-xl text-gray-500 mt-2">
                  A self-taught developer with an interest in Computer Science.
                </p>
              </div>
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-2 text-gray-500">
                  <span className="inline-block">🚀</span>
                  <p>Currently specializing in Frontend (React / Vite)</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span className="inline-block">⚡</span>
                  <p>
                    Frontend Engineer at{' '}
                    <span className="text-[#4ade80]">GGL</span>
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-[#1c1c1c] text-white px-4 py-2 rounded-md hover:bg-[#2c2c2c] transition-colors"
                >
                  <Github size={20} />
                  <span>Github</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-[#1c1c1c] text-white px-4 py-2 rounded-md hover:bg-[#2c2c2c] transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-[#1c1c1c] text-white px-4 py-2 rounded-md hover:bg-[#2c2c2c] transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
