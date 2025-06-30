import React from 'react';
import { FileText, Github, Twitter, Heart, ExternalLink, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">README2PDF</h3>
                <p className="text-sm text-gray-400">Powered by Snapstay</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Convert your README.md files to beautiful, professional PDFs instantly. 
              Perfect for documentation, portfolios, and sharing your projects.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/imankii01/readme2pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub - README2PDF Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/imankii01" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn - Ankit"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/imankii01" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter - imankii01"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/imankii01/readme2pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Documentation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/imankii01/readme2pdf/issues" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://guides.github.com/features/mastering-markdown/" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Markdown Guide
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/imankii01/readme2pdf/tree/main/examples" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 README2PDF. Made with <Heart className="w-4 h-4 inline text-red-500" /> by 
              <a 
                href="https://linkedin.com/in/imankii01" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 ml-1 font-medium"
              >
                Ankit (imankii01)
              </a> • Powered by Snapstay
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>✨ 100% Free & Open Source</span>
              <span>🔒 Secure & Private</span>
              <span>⚡ No Registration Required</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;