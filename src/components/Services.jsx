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
      darkColor: "from-blue-600 to-cyan-600",
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
      darkColor: "from-purple-600 to-pink-600",
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
      darkColor: "from-yellow-600 to-orange-600",
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
      darkColor: "from-green-600 to-emerald-600",
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
      darkColor: "from-indigo-600 to-purple-600",
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
      darkColor: "from-pink-600 to-red-600",
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6 border border-indigo-200">
            <Zap size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help you succeed in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Service Tabs */}
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
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-white/30 backdrop-blur"
                          : `bg-gradient-to-br ${service.color} group-hover:scale-110`
                      }`}
                    >
                      <ServiceIcon
                        className={`transition-colors duration-300 ${isActive ? "text-white" : "text-white"}`}
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-bold text-sm sm:text-base transition-colors duration-300 ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-1 line-clamp-2 transition-colors duration-300 ${
                          isActive ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {service.desc}
                      </p>
                    </div>
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 mt-2 animate-pulse"></div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side - Details Panel */}
          <div className="hidden lg:block">
            <div
              className={`relative bg-gradient-to-br ${current.color} rounded-2xl p-8 text-white h-full min-h-96 overflow-hidden transition-all duration-500`}
            >
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-24 -mb-24"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-6 animate-pulse">
                  <CurrentIcon size={32} className="text-white" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-3xl font-bold mb-3">{current.title}</h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  {current.desc}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wide">
                    Key Features
                  </p>
                  <div className="space-y-2">
                    {current.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <p className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wide">
                    Benefits
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {current.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="text-center p-3 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20"
                      >
                        <p className="text-xs font-semibold text-white">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="mt-8 w-full px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl">
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

        {/* Mobile - Details Below Tabs */}
        <div className="lg:hidden mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
          <div className="space-y-4">
            {/* Icon & Title */}
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${current.color} flex items-center justify-center flex-shrink-0`}
              >
                <CurrentIcon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {current.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{current.desc}</p>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-300 pt-4">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Features
              </p>
              <div className="space-y-2">
                {current.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle
                      size={16}
                      className={`text-indigo-600 flex-shrink-0`}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full px-6 py-3 bg-gradient-to-r ${current.color} text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group mt-4`}
            >
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Service Count */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 font-medium">
            Service{" "}
            <span className="text-indigo-600 font-bold">
              {activeService + 1}
            </span>{" "}
            of{" "}
            <span className="text-indigo-600 font-bold">{services.length}</span>
          </p>
          <div className="flex justify-center gap-2 mt-3">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeService
                    ? "bg-indigo-600 w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
