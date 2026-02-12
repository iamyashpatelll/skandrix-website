import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Rocket, 
  TrendingUp, 
  Building2, 
  Crown, 
  Lightbulb, 
  Target,
  Users,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Startups = () => {
  const journeyStages = [
    {
      stage: 'Pre-Seed',
      title: 'From Idea to Validation',
      description: 'You have a vision that keeps you up at night. We help you validate it, build your first prototype, and prepare for your fundraising journey.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1568658176307-bfbd2873abda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzdGFydHVwJTIwZm91bmRlcnMlMjB3b3JraW5nJTIwdG9nZXRoZXIlMjBvZmZpY2V8ZW58MHx8fHwxNzcwOTE3MTkwfDA&ixlib=rb-4.1.0&q=85',
      services: [
        'Market research & competitive analysis',
        'MVP strategy & rapid prototyping',
        'User testing & feedback loops',
        'Pitch deck crafting & investor storytelling',
        'Strategic introductions to early-stage investors'
      ]
    },
    {
      stage: 'Seed',
      title: 'Building Momentum',
      description: 'Your idea is validated. Now it\'s time to build a product people love and find the elusive product-market fit.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3MlMjBzdHJhdGVneXxlbnwwfHx8fDE3NzA5MTcxOTd8MA&ixlib=rb-4.1.0&q=85',
      services: [
        'Product-market fit optimization',
        'Growth infrastructure & analytics setup',
        'Technical team building & leadership',
        'Metrics dashboard & KPI tracking',
        'Series A preparation & positioning'
      ]
    },
    {
      stage: 'Series A',
      title: 'Scaling Excellence',
      description: 'You\'ve proven the model. Now it\'s about building systems that scale without breaking — and a team that can take you further.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1758519289022-5f9dea0d8cdc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3MlMjBzdHJhdGVneXxlbnwwfHx8fDE3NzA5MTcxOTd8MA&ixlib=rb-4.1.0&q=85',
      services: [
        'Architecture redesign for scale',
        'Operations & process automation',
        'Advanced analytics & business intelligence',
        'Security & compliance frameworks',
        'Strategic partnership development'
      ]
    },
    {
      stage: 'Growth & Beyond',
      title: 'Sustaining Leadership',
      description: 'Market leadership isn\'t a destination — it\'s a continuous journey. We help you stay ahead while others catch up.',
      icon: Crown,
      image: 'https://images.unsplash.com/photo-1762164509589-441e2bae95a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjBjb3Jwb3JhdGUlMjBzdWNjZXNzfGVufDB8fHx8MTc3MDkxNzU0Mnww&ixlib=rb-4.1.0&q=85',
      services: [
        'Innovation lab & R&D initiatives',
        'M&A technical due diligence',
        'Global expansion infrastructure',
        'AI & ML integration strategy',
        'Enterprise transformation consulting'
      ]
    }
  ];

  const whyFoundersChooseUs = [
    {
      icon: Users,
      title: 'We Speak Founder',
      description: 'No corporate jargon. No endless meetings. We understand the urgency of startup life because we\'ve lived it.'
    },
    {
      icon: Zap,
      title: 'Speed is Everything',
      description: 'While others are still drafting proposals, we\'re shipping. Our agile teams move at startup speed.'
    },
    {
      icon: Target,
      title: 'Outcome-Obsessed',
      description: 'We don\'t measure success in hours billed. We measure it in milestones hit and funding raised.'
    },
    {
      icon: Shield,
      title: 'Your Success is Ours',
      description: 'We grow when you grow. That\'s why we often take equity positions — we\'re invested in your journey.'
    }
  ];

  const founderPromises = [
    'We\'ll tell you what you need to hear, not what you want to hear',
    'We\'ll protect your runway like it\'s our own money',
    'We\'ll introduce you to investors who actually write checks',
    'We\'ll build technology that scales, not just works',
    'We\'ll be there at 2 AM when production breaks',
    'We\'ll celebrate your wins like they\'re our own'
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="startups-page">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            <Rocket size={16} />
            <span>For Visionary Founders</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Your first call when building something{' '}
            <span className="relative">
              extraordinary
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 4 298 10" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build products — we build companies. From your first line of code to your Series A and beyond, we're the technical co-founder you wish you had.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/connect">
              <Button size="lg" className="text-lg px-8 py-6 h-auto group">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1630673195489-1237053bab5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZm91bmRlcnMlMjB3b3JraW5nJTIwdG9nZXRoZXIlMjBvZmZpY2V8ZW58MHx8fHwxNzcwOTE3MTkwfDA&ixlib=rb-4.1.0&q=85"
              alt="Founders collaborating"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl">
                "The best founders don't just need developers. They need partners who understand the game."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Founders Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Why founders choose Skandrix
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not another dev shop. We're the team that treats your startup like our own.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyFoundersChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Stages */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Your Startup Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              With you at every stage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the spark of an idea to market dominance, we adapt to what you need, when you need it.
            </p>
          </div>

          <div className="space-y-24">
            {journeyStages.map((stage, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={stage.stage}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full">
                      <stage.icon size={18} />
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        {stage.stage}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold">{stage.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{stage.description}</p>

                    <div className="space-y-3 pt-4">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-500">
                        How We Help
                      </h4>
                      <ul className="space-y-3">
                        {stage.services.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="flex-shrink-0 text-black mt-0.5" />
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img 
                        src={stage.image}
                        alt={stage.title}
                        className="w-full h-[350px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our promise to founders
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These aren't marketing promises. This is how we operate, every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {founderPromises.map((promise, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 size={24} className="flex-shrink-0 text-white mt-0.5" />
                <p className="text-lg">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Testimonial/Quote Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="text-8xl text-gray-200 absolute -top-8 left-0">"</div>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed relative z-10 px-8">
              The best investment you can make as a founder is surrounding yourself with people who care about your success as much as you do.
            </blockquote>
            <div className="text-8xl text-gray-200 absolute -bottom-16 right-0 rotate-180">"</div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to build something that matters?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're scribbling your idea on a napkin or preparing for your next funding round — let's talk. No pitch required, just an honest conversation about where you want to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/connect">
              <Button size="lg" className="text-lg px-10 py-6 h-auto group">
                Let's Build Together
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 pt-4">
            No commitment. No sales pitch. Just founders talking to founders.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Startups;
