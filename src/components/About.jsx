import React, { useState } from "react";
import { Target, Heart, Zap } from "lucide-react";
import {
  Rocket,
  Globe,
  Star,
  Trophy,
  Lightbulb,
  Users,
  TrendingUp,
  Network,
} from "lucide-react";

export default function AboutTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Our Mission",
      desc: "Empower individuals and organizations through digital innovation, competitive excellence, and community-driven initiatives.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      id: 2,
      icon: Target,
      title: "Our Vision",
      desc: "Create a global digital platform where talent is recognized, ideas flourish, and communities thrive together.",
      color: "from-blue-400 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      id: 3,
      icon: Heart,
      title: "Our Values",
      desc: "Creativity, excellence, transparency, and community-first approach in everything we do.",
      color: "from-pink-400 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
    },
  ];

  const features = [
    { icon: Rocket, text: "Professional Management" },
    { icon: Globe, text: "Digital Ecosystem" },
    { icon: Star, text: "Talent Recognition" },
    { icon: Trophy, text: "Competitive Events" },
    { icon: Lightbulb, text: "Startup Support" },
    { icon: Users, text: "Community Building" },
    { icon: TrendingUp, text: "Brand Growth" },
    { icon: Network, text: "Global Network" },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6 border border-indigo-200">
            <Zap size={16} />
            <span className="text-xs font-semibold uppercase tracking-widest">
              About Us
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Empowering Digital{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Creators
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            A professionally managed platform dedicated to nurturing creativity,
            recognizing talent, and fostering innovation through digital
            transformation.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="hidden md:flex items-center justify-between gap-8 mb-12">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-1 relative group transition-all duration-300 ${
                    activeStep === step.id ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${
                      activeStep === step.id
                        ? "ring-4 ring-offset-4 ring-indigo-300 scale-125"
                        : "group-hover:scale-110"
                    }`}
                  >
                    <step.icon className="text-white" size={28} />
                  </div>

                  <p
                    className={`text-center font-semibold ${
                      activeStep === step.id
                        ? "text-indigo-600"
                        : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </p>
                </button>

                {idx < steps.length - 1 && (
                  <div className="flex-1 h-1 bg-gradient-to-r from-indigo-200 to-transparent rounded-full mt-10"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Step */}
          {steps.map(
            (step) =>
              activeStep === step.id && (
                <div
                  key={step.id}
                  className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 sm:p-12 border-2 border-gray-200 shadow-2xl`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3
                        className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
                        {step.desc}
                      </p>

                      <button
                        className={`px-8 py-3 bg-gradient-to-r ${step.color} text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                      >
                        Learn More
                      </button>
                    </div>

                    <div className="hidden md:flex justify-center">
                      <div
                        className={`w-36 h-36 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="text-white" size={60} />
                      </div>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>

        {/* Why Choose Section */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border-2 border-gray-200 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              Why Choose Incredible Platform?
            </h3>
            <p className="text-gray-600 font-medium">
              Everything you need to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition">
                  <feature.icon size={22} className="text-indigo-600" />
                </div>

                <p className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group">
              Start Your Journey
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
