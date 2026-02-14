import React, { useState } from "react";
import {
  Target,
  Heart,
  Zap,
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
      className="py-12 sm:py-12 lg:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-4 border border-indigo-200">
            <Zap size={14} />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
              About Us
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-snug">
            Empowering Digital{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Creators
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            A professionally managed platform dedicated to nurturing creativity,
            recognizing talent, and fostering innovation through digital
            transformation.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16 sm:mb-20">
          {/* Mobile Timeline (Vertical) */}
          <div className="md:hidden space-y-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full p-5 rounded-2xl border transition-all duration-300 text-left ${
                  activeStep === step.id
                    ? "border-indigo-400 shadow-lg"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                  >
                    <step.icon className="text-white" size={22} />
                  </div>
                  <p className="font-semibold text-gray-800">{step.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:flex items-center justify-between gap-8 mb-12">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-1 relative transition-all duration-300 ${
                    activeStep === step.id ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${
                      activeStep === step.id
                        ? "ring-4 ring-offset-4 ring-indigo-300"
                        : ""
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

          {/* Active Step Card */}
          {steps.map(
            (step) =>
              activeStep === step.id && (
                <div
                  key={step.id}
                  className={`bg-gradient-to-br ${step.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200 shadow-xl`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div>
                      <h3
                        className={`font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                        {step.desc}
                      </p>

                      <button
                        className={`px-6 sm:px-8 py-3 bg-gradient-to-r ${step.color} text-white rounded-full font-semibold shadow-md hover:scale-105 transition`}
                      >
                        Learn More
                      </button>
                    </div>

                    <div className="hidden md:flex justify-center">
                      <div
                        className={`w-28 sm:w-32 h-28 sm:h-32 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                      >
                        <step.icon className="text-white" size={50} />
                      </div>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-gray-200 shadow-lg">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose Incredible Platform?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Everything you need to succeed
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-5 sm:p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center min-h-[140px]"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition">
                  <feature.icon size={22} className="text-indigo-600" />
                </div>

                <p className="font-semibold text-sm sm:text-base text-gray-900 leading-snug group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
