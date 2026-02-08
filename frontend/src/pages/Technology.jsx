import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { techServices, whySkandirix } from '../data/mock';
import { CheckCircle2 } from 'lucide-react';

const Technology = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Technology That Drives Business Forward
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to scale, we build technology solutions that align with your business objectives and growth trajectory.
          </p>
        </div>
      </section>

      {/* Visual Element */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1758073519996-6d3c63b4922c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MDUzNzY4MHww&ixlib=rb-4.1.0&q=85"
            alt="Technology visualization"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>

          <div className="space-y-6">
            {techServices.map((service) => (
              <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`service-${service.id}`} className="border-none">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="text-left">
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-6 space-y-6">
                          {/* Tech Stack */}
                          <div>
                            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.techStack.map((tech, index) => (
                                <Badge key={index} variant="secondary" className="text-sm">
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
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                              {service.process.map((step, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                    {index + 1}
                                  </div>
                                  <p className="text-sm text-gray-700">{step}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Skandrix Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Skandrix?</h2>
            <p className="text-lg text-gray-600">
              We're different from typical IT service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whySkandirix.map((item, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">{item.point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-lg text-gray-600">
            Let's discuss how technology can accelerate your business goals.
          </p>
          <a
            href="/connect"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-black text-white hover:bg-black/90 h-11 px-8 transition-colors"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Technology;
