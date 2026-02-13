import React, { useState } from 'react';
import { Lightbulb, Target, Heart, CheckCircle2, Zap } from 'lucide-react';

export default function AboutTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Our Mission',
      desc: 'Empower individuals and organizations through digital innovation, competitive excellence, and community-driven initiatives.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      id: 2,
      icon: Target,
      title: 'Our Vision',
      desc: 'Create a global digital platform where talent is recognized, ideas flourish, and communities thrive together.',
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      id: 3,
      icon: Heart,
      title: 'Our Values',
      desc: 'Creativity, excellence, transparency, and community-first approach in everything we do.',
      color: 'from-pink-400 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50'
    }
  ];

  const features = [
    { icon: '🚀', text: 'Professional Management' },
    { icon: '🌐', text: 'Digital Ecosystem' },
    { icon: '⭐', text: 'Talent Recognition' },
    { icon: '🏆', text: 'Competitive Events' },
    { icon: '💡', text: 'Startup Support' },
    { icon: '👥', text: 'Community Building' },
    { icon: '📈', text: 'Brand Growth' },
    { icon: '🌍', text: 'Global Network' }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6 border border-indigo-200">
            <Zap size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">About Us</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Empowering Digital <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Creators</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
            A professionally managed platform dedicated to nurturing creativity, recognizing talent, and fostering innovation through digital transformation.
          </p>
        </div>

        {/* Mission, Vision, Values - Timeline Style */}
        <div className="mb-24">
          {/* Timeline Connector */}
          <div className="hidden md:flex items-center justify-between gap-8 mb-12">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-1 relative group cursor-pointer transform transition-all duration-300 ${
                    activeStep === step.id ? 'scale-110' : 'scale-100 hover:scale-105'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-all duration-300 ${
                    activeStep === step.id
                      ? 'ring-4 ring-offset-4 ring-indigo-300 scale-125'
                      : 'group-hover:scale-110'
                  }`}>
                    <step.icon className="text-white" size={32} />
                  </div>
                  <p className={`text-center font-bold transition-colors duration-300 ${
                    activeStep === step.id ? 'text-indigo-600' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </p>
                </button>
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-1 bg-gradient-to-r from-indigo-200 to-transparent rounded-full mt-10"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="relative">
            {steps.map((step) => (
              activeStep === step.id && (
                <div
                  key={step.id}
                  className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 sm:p-12 border-2 border-gray-200 shadow-2xl animate-in`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left */}
                    <div>
                      <h3 className={`text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed font-semibold mb-6">
                        {step.desc}
                      </p>
                      <button className={`px-8 py-3 bg-gradient-to-r ${step.color} text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                        Learn More
                      </button>
                    </div>

                    {/* Right - Icon Display */}
                    <div className="hidden md:flex justify-center">
                      <div className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="text-white" size={96} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Mobile Tabs */}
          <div className="md:hidden flex gap-3 mt-8 overflow-x-auto pb-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeStep === step.id
                    ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border-2 border-gray-200 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">Why Choose Incredible Platform?</h3>
              <p className="text-gray-600 font-semibold">Everything you need to succeed</p>
            </div>

            {/* Features Grid - Bento Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <p className="font-bold text-gray-900 text-sm leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group">
                Start Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}