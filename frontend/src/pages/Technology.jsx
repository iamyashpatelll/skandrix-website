import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { techServices, whySkandirix } from '../data/mock';
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';

const Technology = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const handlePrevService = () => {
    setCurrentServiceIndex((prev) => (prev === 0 ? techServices.length - 1 : prev - 1));
  };

  const handleNextService = () => {
    setCurrentServiceIndex((prev) => (prev === techServices.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Gradient */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-60"></div>
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wide text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              Technology Excellence
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
            Technology That Drives Business Forward
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
            From concept to scale, we build technology solutions that align with your business objectives and growth trajectory.
          </p>
        </div>
      </section>

      {/* Visual Element with Hover Effect */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1758073519996-6d3c63b4922c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MDUzNzY4MHww&ixlib=rb-4.1.0&q=85"
              alt="Technology visualization"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Desktop View */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>

          {/* Desktop: Grid View */}
          <div className="hidden md:block space-y-6">
            {techServices.map((service) => {
              const IconComponent = Icons[service.icon] || Icons.Code2;
              return (
                <Card key={service.id} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-6 sm:p-8">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`service-${service.id}`} className="border-none">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="text-left flex items-start gap-4 w-full">
                            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-6 pl-16 space-y-6">
                            {/* Detailed Description */}
                            <div>
                              <p className="text-gray-700 leading-relaxed">{service.detailedDescription}</p>
                            </div>

                            {/* Key Benefits */}
                            <div>
                              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                                <CheckCircle2 size={16} />
                                Key Benefits
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {service.benefits.map((benefit, index) => (
                                  <div key={index} className="flex items-start gap-2">
                                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-2" />
                                    <span className="text-sm text-gray-700">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {service.techStack.map((tech, index) => (
                                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Process */}
                            <div>
                              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                                Our Process
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {service.process.map((step, index) => (
                                  <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                                      {index + 1}
                                    </div>
                                    <span className="text-sm font-medium">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mobile: Carousel View */}
          <div className="md:hidden">
            <div className="relative">
              <Card className="border-none shadow-2xl">
                <CardContent className="p-6">
                  {(() => {
                    const service = techServices[currentServiceIndex];
                    const IconComponent = Icons[service.icon] || Icons.Code2;
                    return (
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                            <IconComponent size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed">{service.detailedDescription}</p>

                        {/* Key Benefits */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                            Key Benefits
                          </h4>
                          <div className="space-y-2">
                            {service.benefits.slice(0, 4).map((benefit, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.techStack.map((tech, index) => (
                              <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={handlePrevService}
                  className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg active:scale-95"
                  aria-label="Previous service"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="flex items-center gap-2">
                  {techServices.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentServiceIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentServiceIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextService}
                  className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg active:scale-95"
                  aria-label="Next service"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                {currentServiceIndex + 1} of {techServices.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Skandrix Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Skandrix?</h2>
            <p className="text-lg text-gray-600">
              We're different from typical IT service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whySkandirix.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-base sm:text-lg flex-1">{item.point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Let's discuss how technology can accelerate your business goals.
          </p>
          <a href="/connect">
            <Button size="lg" className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 h-auto group">
              Start the Conversation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
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
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default Technology;
