import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { techServices } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Core' },
    { path: '/technology', label: 'Technology' },
    { path: '/startups', label: 'Startups' },
    { path: '/connect', label: 'Connect' }
  ];

  const getServiceSlug = (title) => {
    return title.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity relative z-50"
            >
              Skandrix
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                if (link.label === 'Technology') {
                  return (
                    <div 
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`text-sm font-medium transition-opacity hover:opacity-70 flex items-center gap-1 ${
                          location.pathname === link.path ? 'opacity-100' : 'opacity-60'
                        }`}
                      >
                        {link.label}
                        <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </Link>

                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200 py-4 z-50 animate-dropdown">
                          <div className="max-h-96 overflow-y-auto px-2">
                            {techServices.map((service) => {
                              const IconComponent = Icons[service.icon] || Icons.Code2;
                              return (
                                <Link
                                  key={service.id}
                                  to={`/services/${getServiceSlug(service.title)}`}
                                  className="flex items-start gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center mt-0.5">
                                    <IconComponent size={16} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm text-black">{service.title}</p>
                                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{service.description}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                      location.pathname === link.path ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link to="/connect">
                <Button variant="default" size="sm">
                  Let's Talk
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 relative z-50 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Navigation */}
          <nav className="fixed top-20 left-0 right-0 bottom-0 bg-white z-40 md:hidden overflow-y-auto animate-slide-down">
            <div className="flex flex-col p-6 space-y-4 max-w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-semibold py-4 transition-colors border-b border-gray-100 ${
                    location.pathname === link.path 
                      ? 'text-black' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Services List */}
              <div className="border-b border-gray-100 pb-4">
                <p className="text-lg font-semibold text-gray-400 uppercase tracking-wide mb-3">Services</p>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {techServices.map((service) => {
                    const IconComponent = Icons[service.icon] || Icons.Code2;
                    return (
                      <Link
                        key={service.id}
                        to={`/services/${getServiceSlug(service.title)}`}
                        className="flex items-center gap-3 text-base text-gray-700 hover:text-black py-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded flex items-center justify-center">
                          <IconComponent size={14} />
                        </div>
                        <span className="truncate">{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/connect" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="default" size="lg" className="w-full text-lg py-6">
                    Let's Talk
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-dropdown {
          animation: dropdown 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
