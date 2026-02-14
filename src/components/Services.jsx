import React, { useState } from "react";
import {
  Globe,
  Trophy,
  Lightbulb,
  Award,
  TrendingUp,
  Rocket,
  ArrowRight,
  CheckCircle,
  Zap,
} from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Globe,
      title: "Social Media Platform",
      desc: "Build digital presence across integrated ecosystems designed for modern creators.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Analytics Dashboard",
        "Monetization Tools",
        "Growth Strategies",
        "Community Building",
      ],
      benefits: ["Real-time insights", "24/7 support", "Global reach"],
    },
    {
      icon: Trophy,
      title: "Competitive Events",
      desc: "Participate in exciting competitions with real prizes and recognition.",
      color: "from-purple-500 to-pink-500",
      features: [
        "Live Contests",
        "Prize Pools",
        "Networking Events",
        "Mentorship",
      ],
      benefits: ["Win rewards", "Build portfolio", "Industry recognition"],
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      desc: "Develop and pitch ideas with investor support and expert mentorship.",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Idea Incubation",
        "Investor Network",
        "Expert Mentors",
        "Funding Support",
      ],
      benefits: ["Turn ideas real", "Secure funding", "Expert guidance"],
    },
    {
      icon: Award,
      title: "Talent Recognition",
      desc: "Get recognized for your skills through structured awards programs.",
      color: "from-green-500 to-emerald-500",
      features: [
        "Skill Badges",
        "Certificates",
        "Portfolio Showcase",
        "Public Recognition",
      ],
      benefits: ["Boost credibility", "Career growth", "Visibility"],
    },
    {
      icon: TrendingUp,
      title: "Digital Branding",
      desc: "Professional services to boost your online presence and reach.",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Brand Strategy",
        "Content Design",
        "Social Marketing",
        "SEO Optimization",
      ],
      benefits: ["Professional image", "Increased reach", "Better engagement"],
    },
    {
      icon: Rocket,
      title: "Startup Support",
      desc: "Comprehensive mentoring and investor connections for your startup.",
      color: "from-pink-500 to-red-500",
      features: [
        "Business Mentoring",
        "Investor Connections",
        "Resource Access",
        "Legal Support",
      ],
      benefits: ["Accelerate growth", "Strategic partners", "Expert advice"],
    },
  ];

  const current = services[activeService];
  const CurrentIcon = current.icon;

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6 border border-indigo-200">
            <Zap size={16} />
            <span className="text-xs font-semibold uppercase tracking-widest">
              Services
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            What We Offer
          </h2>

          <p className="text-base text-gray-600 max-w-2xl mx-auto font-medium">
            Comprehensive solutions to help you succeed in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Tabs */}
          <div className="space-y-3">
            {services.map((service, i) => {
              const ServiceIcon = service.icon;
              const isActive = i === activeService;

              return (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : "bg-white border border-gray-200 text-gray-900 hover:border-indigo-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive
                          ? "bg-white/30 backdrop-blur"
                          : `bg-gradient-to-br ${service.color}`
                      }`}
                    >
                      <ServiceIcon size={24} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`font-heading font-semibold text-sm sm:text-base ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm mt-1 font-medium ${
                          isActive ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel */}
          <div className="hidden lg:block">
            <div
              className={`relative bg-gradient-to-br ${current.color} rounded-2xl p-8 text-white h-full min-h-96 overflow-hidden`}
            >
              <div className="relative z-10">

                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-6">
                  <CurrentIcon size={32} className="text-white" />
                </div>

                <h3 className="font-heading text-3xl font-extrabold mb-3">
                  {current.title}
                </h3>

                <p className="text-white/90 mb-8 leading-relaxed font-medium">
                  {current.desc}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-wide mb-4 text-white/80">
                    Key Features
                  </p>

                  <div className="space-y-2">
                    {current.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-8 w-full px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl">
                  Get Started
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Service Count */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 font-medium">
            Service{" "}
            <span className="text-indigo-600 font-semibold">
              {activeService + 1}
            </span>{" "}
            of{" "}
            <span className="text-indigo-600 font-semibold">
              {services.length}
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
