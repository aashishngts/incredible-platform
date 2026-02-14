import React, { useState } from "react";
import {
  Globe,
  Trophy,
  Lightbulb,
  Award,
  TrendingUp,
  Rocket,
  ArrowRight,
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
    },
  ];

  const current = services[activeService];
  const CurrentIcon = current.icon;

  return (
    <section
      id="services"
      className="py-12 sm:py-12 lg:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-4 border border-indigo-200">
            <Zap size={14} />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
              Services
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What We Offer
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-medium">
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
                <div key={i}>
                  <button
                    onClick={() => setActiveService(i)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                        : "bg-white border border-gray-200 text-gray-900 hover:border-indigo-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
                          isActive
                            ? "bg-white/30"
                            : `bg-gradient-to-br ${service.color}`
                        }`}
                      >
                        <ServiceIcon size={20} className="text-white" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm mt-1 opacity-90">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Mobile Expand Panel */}
                  {isActive && (
                    <div className="lg:hidden mt-3 p-5 rounded-xl bg-gray-50 border border-gray-200">
                      <p className="font-semibold mb-3 text-sm">
                        Key Features
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {service.features.map((f, idx) => (
                          <li key={idx}>• {f}</li>
                        ))}
                      </ul>

                      <button className="mt-4 w-full px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold">
                        Get Started
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Panel */}
          <div className="hidden lg:block">
            <div
              className={`bg-gradient-to-br ${current.color} rounded-2xl p-8 text-white h-full`}
            >
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <CurrentIcon size={30} />
              </div>

              <h3 className="font-heading text-2xl xl:text-3xl font-extrabold mb-4">
                {current.title}
              </h3>

              <p className="text-white/90 mb-6">
                {current.desc}
              </p>

              <div className="space-y-2 text-sm">
                {current.features.map((feature, i) => (
                  <div key={i}>• {feature}</div>
                ))}
              </div>

              <button className="mt-8 w-full px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Count */}
        <div className="text-center mt-10">
          <p className="text-xs sm:text-sm text-gray-600">
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
