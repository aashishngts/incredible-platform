import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Rocket,
  Award,
  Users2,
  Code2,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  Play,
  Send,
  MapPin,
  Phone,
  Mail,
  BarChart3,
  Lightbulb,
  Target,
  Heart,
  Star,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Trophy,
} from "lucide-react";

export default function EduPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ==================== ANIMATED BACKGROUND ==================== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: "1s",
            transform: `translateY(${-scrollY * 0.5}px)`,
          }}
        ></div>
      </div>

      {/* ==================== NAVBAR ==================== */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                   Platform
                </p>
                <p className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                  Incredible
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 items-center">
              <a
                href="#home"
                className="text-gray-700 hover:text-indigo-600 transition relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-indigo-600 transition relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-indigo-600 transition relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#events"
                className="text-gray-700 hover:text-indigo-600 transition relative group"
              >
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 transition relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* CTA Button */}
            <button className="hidden lg:flex px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Join Now
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X size={24} className="text-gray-900" />
              ) : (
                <Menu size={24} className="text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-6 space-y-3 animate-in">
              <a
                href="#home"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-indigo-50 rounded-lg transition"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-indigo-50 rounded-lg transition"
              >
                About
              </a>
              <a
                href="#services"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-indigo-50 rounded-lg transition"
              >
                Services
              </a>
              <a
                href="#events"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-indigo-50 rounded-lg transition"
              >
                Events
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-indigo-50 rounded-lg transition"
              >
                Contact
              </a>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold">
                Join Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section
        id="home"
        className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/80 backdrop-blur text-indigo-700 rounded-full border border-indigo-200 w-fit">
                <Sparkles size={16} />
                <span className="text-sm font-semibold">
                  Welcome to Innovation Hub
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creative Potential
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Join a thriving community of creators, innovators, and
                changemakers. Compete in exciting events, showcase your talent,
                and turn your ideas into reality with our comprehensive digital
                platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Start Your Journey
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <p className="text-4xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-600 mt-1">Active Members</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600 mt-1">Events</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">25+</p>
                  <p className="text-sm text-gray-600 mt-1">Countries</p>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Card */}
            <div className="relative h-full z-10">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 text-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative space-y-6">
                  {[
                    {
                      icon: Globe,
                      title: "Global Network",
                      desc: "Connect with creators worldwide",
                    },
                    {
                      icon: Rocket,
                      title: "Fast Growth",
                      desc: "Scale your presence instantly",
                    },
                    {
                      icon: Award,
                      title: "Win Rewards",
                      desc: "Earn recognition & prizes",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-sm text-gray-400 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section
        id="about"
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
              About Us
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Empowering Digital Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a professionally managed platform dedicated to nurturing
              creativity, recognizing talent, and fostering innovation through
              digital transformation.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Lightbulb,
                title: "Our Mission",
                desc: "Empower individuals and organizations through digital innovation and competitive excellence.",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Target,
                title: "Our Vision",
                desc: "Create a global platform where talent is recognized and ideas flourish together.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Heart,
                title: "Our Values",
                desc: "Creativity, excellence, transparency, and community-first in everything we do.",
                color: "from-pink-500 to-rose-500",
              },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Professional Management",
              "Digital Ecosystem",
              "Talent Recognition",
              "Competitive Events",
              "Startup Support",
              "Community Building",
              "Brand Growth",
              "Global Network",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-indigo-50 transition group cursor-pointer"
              >
                <CheckCircle2
                  className="text-indigo-600 flex-shrink-0 transform group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Services
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in the digital world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Social Media Platform",
                desc: "Build your digital presence across integrated ecosystems designed for modern creators.",
                color: "from-blue-500 to-cyan-500",
                features: ["Analytics", "Monetization", "Growth Tools"],
              },
              {
                icon: Trophy,
                title: "Competitive Events",
                desc: "Participate in exciting competitions with real prizes and industry recognition.",
                color: "from-purple-500 to-pink-500",
                features: ["Live Contests", "Prizes", "Networking"],
              },
              {
                icon: Lightbulb,
                title: "Innovation Hub",
                desc: "Develop, pitch, and fund your ideas with mentorship and investor support.",
                color: "from-yellow-500 to-orange-500",
                features: ["Mentorship", "Funding", "Resources"],
              },
              {
                icon: Award,
                title: "Talent Recognition",
                desc: "Get recognized for your skills through our structured awards program.",
                color: "from-green-500 to-emerald-500",
                features: ["Badges", "Certificates", "Portfolio"],
              },
              {
                icon: TrendingUp,
                title: "Digital Branding",
                desc: "Professional services to boost your online presence and reach.",
                color: "from-indigo-500 to-purple-500",
                features: ["Strategy", "Design", "Marketing"],
              },
              {
                icon: Rocket,
                title: "Startup Support",
                desc: "Comprehensive support including mentoring and investor connections.",
                color: "from-pink-500 to-rose-500",
                features: ["Mentors", "Investors", "Resources"],
              },
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300`}
                ></div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 h-full hover:border-transparent transition-all duration-300">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-indigo-600 font-semibold group/link hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EVENTS SECTION ==================== */}
      <section
        id="events"
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Events
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Upcoming Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of our exciting community events and competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creator Championship",
                date: "Mar 15-25",
                category: "Competition",
                gradient: "from-blue-500 to-blue-600",
                attendees: 2500,
              },
              {
                title: "Startup Pitch",
                date: "Apr 10-20",
                category: "Startup",
                gradient: "from-purple-500 to-purple-600",
                attendees: 500,
              },
              {
                title: "Marketing Summit",
                date: "Apr 25-26",
                category: "Summit",
                gradient: "from-pink-500 to-pink-600",
                attendees: 1000,
              },
              {
                title: "Talent Hunt",
                date: "May 5-15",
                category: "Talent",
                gradient: "from-indigo-500 to-indigo-600",
                attendees: 5000,
              },
              {
                title: "Hackathon",
                date: "May 20-22",
                category: "Hackathon",
                gradient: "from-green-500 to-green-600",
                attendees: 300,
              },
              {
                title: "Awards Night",
                date: "Jun 1",
                category: "Awards",
                gradient: "from-yellow-500 to-yellow-600",
                attendees: 800,
              },
            ].map((event, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${event.gradient}`}
                ></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-black transition-opacity duration-300"></div>
                <div className="relative p-8 text-white h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-3 py-1 bg-white/30 backdrop-blur rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                      <Star
                        className="text-yellow-200 fill-yellow-200"
                        size={20}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white/80 mb-4">📅 {event.date}</p>
                    <p className="text-sm text-white/70">
                      👥 {event.attendees.toLocaleString()} expected
                    </p>
                  </div>
                  <button className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-105 mt-6">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Members" },
              { number: "500+", label: "Events Hosted" },
              { number: "₹50Cr+", label: "Prize Pool" },
              { number: "25+", label: "Countries" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-5xl lg:text-6xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-lg text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of creators and innovators who are already making
            their mark. Start your journey today!
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group">
            Get Started Today
            <ArrowUpRight
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={24}
            />
          </button>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section
        id="contact"
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Contact Us
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "contact@incredible.com",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91 9876543210",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: MapPin,
                title: "Address",
                value: "Indore, India",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <form className="relative bg-white rounded-2xl p-8 space-y-6 border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="text-indigo-500" size={20} />
                Incredible
              </h3>
              <p className="text-sm leading-relaxed">
                Building digital ecosystems for creators, innovators, and
                changemakers worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white transition">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition transform hover:scale-110 duration-300"
                  >
                    <Icon size={20} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2024 Incredible Platform Private Limited. All rights
              reserved. ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
