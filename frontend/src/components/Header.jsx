import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Core' },
    { path: '/technology', label: 'Technology' },
    { path: '/startups', label: 'Startups' },
    { path: '/videos', label: 'Videos' },
    { path: '/connect', label: 'Connect' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
            Skandrix
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                  location.pathname === link.path ? 'opacity-100' : 'opacity-60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link to="/connect">
            <Button variant="default" size="sm">
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
