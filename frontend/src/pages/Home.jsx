import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services, processSteps, impactStories, comparison } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Business comes first. Technology follows.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                We're not just another IT firm. We are your growth partner — connecting strategy, network, and technology to build systems that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/connect">
                  <Button size="lg" className="text-base px-8">
                    Let's Build Together
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link to="/technology">
                  <Button size="lg" variant="outline" className="text-base px-8">
                    Explore Our Offerings
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631727498532-b27e7f9796ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtaW5pbWFsJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MDUzNzY4MHww&ixlib=rb-4.1.0&q=85"
                alt="Abstract technology"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Skandrix Exists */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1643236694409-1107518b435a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzA1Mzc2ODV8MA&ixlib=rb-4.1.0&q=85"
                alt="Modern architecture"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Why Skandrix Exists
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Skandrix exists to turn ambitious ideas into scalable realities by combining business strategy, technology, and network.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Too many companies treat technology as a commodity. We believe it's a strategic asset — one that should be shaped by business vision, not the other way around. Our approach integrates deep technical expertise with strategic thinking and access to networks that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - 3 Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three interconnected pillars that drive meaningful growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <Card
                  key={service.id}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Skandrix Way */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Skandrix Way</h2>
            <p className="text-lg text-gray-600">
              Our approach to creating lasting value
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact That Matters</h2>
            <p className="text-lg text-gray-600">
              Real transformations, measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story) => (
              <Card
                key={story.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Different by Design</h2>
            <p className="text-lg text-gray-600">
              We challenge the status quo of IT services
            </p>
          </div>

          <div className="space-y-4">
            {comparison.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Common Approach
                  </p>
                  <p className="text-lg text-gray-600">{item.common}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    Skandrix Approach
                  </p>
                  <p className="text-lg font-semibold">{item.skandrix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Before you invest time, money, or energy, let's make sure your direction is right.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with a conversation. No commitment, no sales pitch — just strategic thinking.
          </p>
          <Link to="/connect">
            <Button size="lg" className="text-lg px-12 py-6 h-auto">
              Schedule Your First Skandrix Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
