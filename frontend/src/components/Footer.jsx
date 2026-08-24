import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, ArrowRight, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* CTA band */}
        <div className="py-14 sm:py-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="uppercase tracking-widest text-xs font-bold text-white/45">
              Ready when you are
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Let's build something that lasts.
            </h2>
          </div>
          <Link
            to="/connect"
            className="group inline-flex items-center gap-2.5 bg-white text-black px-7 py-4 rounded-md font-semibold text-sm shrink-0 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-150"
          >
            Start the conversation
            <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div className="sm:col-span-2 flex flex-col gap-4">
            <p className="text-2xl font-extrabold tracking-tight">Skandrix</p>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              Business comes first. Technology follows. We're your growth partner — connecting strategy, network, and technology to build systems that last.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p className="uppercase tracking-widest text-[11px] font-bold text-white/40">
              Navigation
            </p>
            <div className="flex flex-col gap-3.5">
              <Link to="/" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                Core
              </Link>
              <Link to="/technology" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                Technology
              </Link>
              <Link to="/startups" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                Startups
              </Link>
              <Link to="/connect" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                Connect
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="uppercase tracking-widest text-[11px] font-bold text-white/40">
              Connect
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:business@skandrix.com"
                aria-label="Email"
                className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white/85 hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+917046664299"
                aria-label="Phone"
                className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white/85 hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/skandrix/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white/85 hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 sm:py-8 flex items-center justify-start">
          <p className="text-sm text-white/40">
            © {currentYear} Skandrix. All rights reserved.
          </p>
          {/* Admin link hidden from public footer
          <Link to="/admin/login" className="text-xs text-white/38 hover:text-white/75 transition-colors">
            Admin
          </Link>
          */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
