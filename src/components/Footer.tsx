import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Designed and Developed by Hamza Parvez
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}