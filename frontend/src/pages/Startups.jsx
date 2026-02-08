import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { startupStages } from '../data/mock';
import { Rocket, TrendingUp, Building2, Crown } from 'lucide-react';

const Startups = () => {
  const stageIcons = {
    'Pre-Seed': Rocket,
    'Seed': TrendingUp,
    'Series A': Building2,
    'Beyond Growth': Crown
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Every great empire starts with an idea. Let's build yours, together.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From pre-seed validation to Series A scaling and beyond — we partner with founders at every stage of the journey.
          </p>
        </div>
      </section>

      {/* Startup Stages */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {startupStages.map((stage, index) => {
            const IconComponent = stageIcons[stage.stage];
            const isEven = index % 2 === 0;

            return (
              <div
                key={stage.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                    {IconComponent && <IconComponent size={20} />}
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {stage.stage}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold">{stage.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{stage.description}</p>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm uppercase tracking-wide">
                      What We Provide
                    </h3>
                    <ul className="space-y-3">
                      {stage.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-2" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Card */}
                <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                  <Card className="border-none shadow-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-16 flex items-center justify-center min-h-[400px]">
                        {IconComponent && <IconComponent size={120} strokeWidth={1} className="text-gray-300" />}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Founder-Friendly Message */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built by founders, for founders
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We understand the startup journey because we've lived it. The sleepless nights, the pivots, the breakthroughs. We're not just service providers — we're fellow travelers on the entrepreneurial path.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <p className="text-4xl font-bold">90+</p>
              <p className="text-gray-600">Startups Supported</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">$50M+</p>
              <p className="text-gray-600">Funding Raised</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-gray-600">Active Portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to turn your vision into reality?
          </h2>
          <p className="text-lg text-gray-600">
            Let's start with an honest conversation about where you are and where you want to go.
          </p>
          <Link to="/connect">
            <Button size="lg" className="text-lg px-12 py-6 h-auto">
              Connect With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Startups;
