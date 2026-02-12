import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, CheckCircle2, Code2, TestTube, Workflow } from 'lucide-react';
import { techServices } from '../data/mock';

const ServiceDetail = () => {
  const { slug } = useParams();
  
  const getServiceBySlug = (slug) => {
    return techServices.find(service => 
      service.title.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-') === slug
    );
  };

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const techStackLogos = {
    // Mobile Development
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    
    // Web Development
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    
    // Cloud & DevOps
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    
    // AI & Machine Learning
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'OpenAI': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    'LangChain': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg',
    'Hugging Face': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg',
    
    // E-Commerce
    'Shopify': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg',
    'WooCommerce': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg',
    'Magento': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg',
    'Stripe': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg',
    'PayPal': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg',
    
    // UI/UX Design
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
    'Sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
    'InVision': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/invision.svg',
    'Framer': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/framer.svg',
    
    // API Development
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'REST': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openapiinitiative.svg',
    'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'Swagger': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
    
    // Testing & QA
    'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
    'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'Cypress': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cypress.svg',
    'Playwright': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/playwright.svg',
    'JMeter': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apachejmeter.svg',
    
    // Cybersecurity
    'OWASP': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/owasp.svg',
    'Burp Suite': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/burpsuite.svg',
    'Metasploit': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/metasploit.svg',
    'Wireshark': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wireshark.svg',
    'AWS Security': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    
    // Data Analytics & BI
    'Tableau': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tableau.svg',
    'Power BI': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Apache Spark': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
    'Snowflake': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/snowflake.svg',
    
    // ERP & CRM
    'SAP': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sap.svg',
    'Salesforce': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
    'Odoo': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/odoo.svg',
    'Microsoft Dynamics': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dynamics365.svg',
    'Custom Solutions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    
    // Blockchain
    'Ethereum': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
    'Solidity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
    'Web3.js': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/web3dotjs.svg',
    'Hardhat': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hardhat.svg',
    'IPFS': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ipfs.svg',
    
    // Additional common techs
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold uppercase tracking-wide text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              IT Service
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {service.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
          <div className="pt-4">
            <Link to="/connect">
              <Button size="lg" className="text-lg px-8 py-6 h-auto group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.detailedDescription}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600">
              What you get with our {service.title.toLowerCase()} service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
              <Workflow size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Our Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-lg text-gray-600">
              A proven 5-step approach to delivering excellence
            </p>
          </div>

          <div className="space-y-6">
            {service.process.map((step, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-6 sm:p-8 flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step}</h3>
                    <p className="text-gray-600">
                      {index === 0 && "We start by understanding your business goals, target audience, and technical requirements."}
                      {index === 1 && "Our team creates detailed specifications and design mockups for your approval."}
                      {index === 2 && "Using agile methodology, we build your solution with regular check-ins and updates."}
                      {index === 3 && "Rigorous testing ensures your solution works flawlessly across all scenarios."}
                      {index === 4 && "We deploy to production and provide ongoing support and maintenance."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
              <Code2 size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Technologies We Use</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-lg text-gray-600">
              Industry-leading technologies proven at scale
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {service.techStack.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {techStackLogos[tech] ? (
                      <img 
                        src={techStackLogos[tech]} 
                        alt={tech} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold text-xs" style={{display: 'none'}}>
                      {tech.substring(0, 2)}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-center">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Use Cases */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
              <TestTube size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Real-World Applications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-lg text-gray-600">
              How businesses leverage our {service.title.toLowerCase()} expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise Solution",
                description: `Large organizations use our ${service.title.toLowerCase()} to streamline operations, improve efficiency, and scale their business infrastructure.`,
                example: "Fortune 500 company automated workflows"
              },
              {
                title: "Startup MVP",
                description: `Early-stage startups leverage our expertise to build rapid prototypes and validate their business ideas with real users.`,
                example: "Y Combinator startup launched in 90 days"
              },
              {
                title: "Digital Transformation",
                description: `Traditional businesses modernize their tech stack and migrate to cloud-native architectures for better performance.`,
                example: "Retail chain migrated to modern platform"
              },
              {
                title: "Scale-Up Growth",
                description: `Growing companies rebuild their infrastructure to handle 10x traffic and prepare for their next funding round.`,
                example: "Series B company scaled to 1M users"
              }
            ].map((useCase, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 italic">Example: {useCase.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <Link to="/connect">
            <Button size="lg" className="text-lg px-12 py-8 h-auto group">
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
