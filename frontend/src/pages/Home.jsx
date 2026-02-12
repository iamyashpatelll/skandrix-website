import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, CheckCircle2, Rocket, TrendingUp, Users, Zap } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services, processSteps, impactStories, comparison } from '../data/mock';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`,
    transition: 'transform 0.3s ease-out'
  };

  const reverseParallaxStyle = {
    transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
    transition: 'transform 0.3s ease-out'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Mouse Tracking Animation */}
      <section 
        ref={heroRef}
        className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden min-h-[90vh] flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0,0,0,0.1) 0%, transparent 50%)`
            }}
          />
        </div>

        {/* Floating Animated Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="floating-shape absolute top-20 left-10 w-32 h-32 bg-black/5 rounded-full blur-xl"
            style={parallaxStyle}
          />
          <div 
            className="floating-shape-delay absolute top-40 right-20 w-48 h-48 bg-black/5 rounded-full blur-2xl"
            style={reverseParallaxStyle}
          />
          <div 
            className="floating-shape absolute bottom-32 left-1/4 w-24 h-24 bg-black/5 rounded-full blur-lg"
            style={{
              transform: `translate(${(mousePosition.x - 0.5) * 15}px, ${(mousePosition.y - 0.5) * 15}px)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-slide-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Business comes first. Technology follows.
                </h1>
              </div>
              
              <div className="animate-slide-up-delay">
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                  We're not just another IT firm. We are your growth partner — connecting strategy, network, and technology to build systems that last.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
                <Link to="/connect">
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-8 h-auto group">
                    Let's Build Together
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/technology">
                  <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-8 h-auto">
                    Explore Our Offerings
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                style={parallaxStyle}
              />
              <div 
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                style={parallaxStyle}
              >
                <img
                  src="https://images.unsplash.com/photo-1631727498532-b27e7f9796ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtaW5pbWFsJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MDUzNzY4MHww&ixlib=rb-4.1.0&q=85"
                  alt="Abstract technology"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Focus Section - NEW */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-600 bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                <Rocket size={16} />
                For Startups & Founders
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              We Turn Startup Dreams Into Reality
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From pre-seed validation to Series A scaling, we've been in your shoes. We understand the unique challenges startups face and provide the strategic technology partnership you need to win.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Rocket,
                title: "Pre-Seed to Series A+",
                description: "Strategic tech partnership at every funding stage"
              },
              {
                icon: Zap,
                title: "MVP in 90 Days",
                description: "Rapid validation with production-ready code"
              },
              {
                icon: TrendingUp,
                title: "Built to Scale",
                description: "Architecture designed for 10x growth from day one"
              },
              {
                icon: Users,
                title: "Founder-First",
                description: "We speak your language - business before tech"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Startup Stats */}
          <div className="bg-black text-white rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "90+", label: "Startups Funded" },
                { number: "$50M+", label: "Capital Raised" },
                { number: "85%", label: "Success Rate" },
                { number: "12", label: "Active Portfolio" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stat.number}</p>
                  <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Skandrix Exists */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1643236694409-1107518b435a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzA1Mzc2ODV8MA&ixlib=rb-4.1.0&q=85"
                  alt="Modern architecture"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Why Skandrix Exists
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Skandrix exists to turn ambitious ideas into scalable realities by combining business strategy, technology, and network.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Too many companies treat technology as a commodity. We believe it's a strategic asset — one that should be shaped by business vision, not the other way around. Our approach integrates deep technical expertise with strategic thinking and access to networks that matter.
              </p>
              <div className="pt-4">
                <Link to="/startups">
                  <Button size="lg" variant="outline" className="group">
                    Learn About Our Startup Journey
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - 3 Pillars */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Three interconnected pillars that drive meaningful growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon];
              return (
                <Card
                  key={service.id}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Skandrix Way */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Skandrix Way</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Our approach to creating lasting value
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Impact That Matters</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Real transformations, measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card
                key={story.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{story.title}</h3>
                  <p className="text-gray-600">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Different by Design */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Different by Design</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We challenge the status quo of IT services
            </p>
          </div>

          <div className="space-y-4">
            {comparison.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Common Approach
                  </p>
                  <p className="text-base sm:text-lg text-gray-600">{item.common}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    Skandrix Approach
                  </p>
                  <p className="text-base sm:text-lg font-semibold">{item.skandrix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Before you invest time, money, or energy, let's make sure your direction is right.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Start with a conversation. No commitment, no sales pitch — just strategic thinking.
          </p>
          <Link to="/connect">
            <Button size="lg" className="text-lg px-12 py-8 h-auto group">
              Schedule Your First Skandrix Session
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .floating-shape {
          animation: floating 6s ease-in-out infinite;
        }

        .floating-shape-delay {
          animation: floating 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }

        .animate-slide-up {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-delay {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-slide-up-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default Home;
