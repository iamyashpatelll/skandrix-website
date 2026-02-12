import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Skandrix</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Business comes first. Technology follows. We're your growth partner — connecting strategy, network, and technology to build systems that last.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Core
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/startups" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Startups
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:hello@skandrix.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Skandrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
