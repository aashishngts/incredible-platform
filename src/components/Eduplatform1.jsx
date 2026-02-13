import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Users, Sparkles, Rocket, Target, Heart, Share2, TrendingUp, PlayCircle, Check, ArrowRight, MessageCircle, Instagram, Twitter, Linkedin, Youtube, Send,Mail  } from 'lucide-react';

export default function IncrediblePlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Events', 'Contact'];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* ==================== ANIMATED CURSOR GLOW ==================== */}
      <div 
        className="pointer-events-none fixed w-64 h-64 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 z-0"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: 'linear-gradient(135deg, #ff006e, #8338ec, #3a86ff)'
        }}
      ></div>

      {/* ==================== NAVBAR ==================== */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-pulse">
                <Sparkles className="text-white" size={28} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Digital</p>
                <p className="text-2xl font-black text-white">INCREDIBLE</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 items-center">
              {navLinks.map((link, i) => (
                <a key={i} href={`#${link.toLowerCase()}`} className="group relative font-bold text-white hover:text-pink-400 transition">
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="hidden lg:block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-pink-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-6 space-y-4 border-t border-white/10 animate-in">
              {navLinks.map((link, i) => (
                <a key={i} href={`#${link.toLowerCase()}`} className="block px-4 py-2 hover:text-pink-500 transition font-bold">
                  {link}
                </a>
              ))}
              <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold">
                Join Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-pink-500/50 rounded-full backdrop-blur-xl hover:bg-white/20 transition duration-300 group cursor-pointer">
                <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                  Incredible Platform - Digital Revolution
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="block text-white mb-2">Unleash Your</span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">CREATIVE POWER</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl font-semibold">
                Join our ecosystem of creators, innovators, and changemakers. Compete in exciting events, showcase your talent, and turn ideas into reality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group text-lg">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Creating
                    <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  </span>
                </button>
                <button className="px-10 py-4 border-2 border-cyan-500 text-cyan-400 font-black rounded-2xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 text-lg group">
                  <PlayCircle size={20} className="group-hover:scale-125 transition-transform" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '10K+', label: 'Creators' },
                  { number: '500+', label: 'Events' },
                  { number: '25+', label: 'Countries' }
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <p className="text-4xl font-black bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-400 font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Animated 3D Card */}
            <div className="relative h-full">
              <div className="absolute -inset-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/20 overflow-hidden group hover:border-pink-500/50 transition-all duration-300">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative space-y-6">
                  {/* Feature Cards */}
                  {[
                    { icon: Share2, title: 'Social Media', desc: 'Build your digital presence' },
                    { icon: Target, title: 'Competitions', desc: 'Win prizes & recognition' },
                    { icon: Rocket, title: 'Innovation', desc: 'Turn ideas into reality' }
                  ].map((feature, i) => (
                    <div key={i} className="relative group/item cursor-pointer">
                      <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-gray-800/50 backdrop-blur p-4 rounded-2xl border border-white/10 group-hover/item:border-pink-500/50 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300">
                            <feature.icon className="text-white" size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-white">{feature.title}</p>
                            <p className="text-sm text-gray-400 mt-1">{feature.desc}</p>
                          </div>
                        </div>
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
      <section id="about" className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-pink-500 font-black text-sm uppercase tracking-widest mb-4">About Us</p>
            <h2 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Building Digital <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Ecosystems</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Incredible Platform is a professionally managed organization dedicated to nurturing creativity, recognizing talent, and fostering innovation through digital engagement.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Our Mission',
                desc: 'Empower individuals and organizations through digital innovation, competitive excellence, and community-driven initiatives. We provide structured campaigns and promotional programs for talent recognition.',
                icon: Zap,
                gradient: 'from-pink-500 to-purple-500'
              },
              {
                title: 'Our Vision',
                desc: 'Create a global digital platform where talent is recognized, unique ideas flourish, and communities thrive. We support startups and innovative projects through digital engagement and branding.',
                icon: Sparkles,
                gradient: 'from-purple-500 to-cyan-500'
              },
              {
                title: 'What We Do',
                desc: 'Develop and promote social media platforms, competitive events, and idea-based initiatives. Through our ecosystem, we encourage creativity and provide visibility opportunities for skilled individuals.',
                icon: Rocket,
                gradient: 'from-cyan-500 to-pink-500'
              },
              {
                title: 'Why Choose Us',
                desc: 'Professional management, comprehensive support for startups, brand building services, community development initiatives, and a global network of mentors and investors.',
                icon: Heart,
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-3xl blur opacity-20 group-hover:opacity-100 transition-all duration-300`}></div>
                <div className="relative bg-gray-900/80 backdrop-blur p-8 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300`}>
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-40 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-cyan-500 font-black text-sm uppercase tracking-widest mb-4">Services</p>
            <h2 className="text-6xl lg:text-7xl font-black mb-6">
              What We <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Media Platforms',
                desc: 'Build your digital presence across integrated ecosystems designed for modern creators and businesses.',
                emoji: '📱',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Competitive Events',
                desc: 'Participate in exciting competitions, talent shows, and contests with real prizes and recognition.',
                emoji: '🏆',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Innovation Hub',
                desc: 'Develop and pitch your innovative ideas with mentorship and investor support.',
                emoji: '💡',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Talent Recognition',
                desc: 'Get recognized for your skills through structured awards and recognition programs.',
                emoji: '⭐',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Digital Branding',
                desc: 'Professional branding and community development services to boost your online presence.',
                emoji: '🎨',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'Startup Support',
                desc: 'Comprehensive support including mentoring, resources, and investor connections.',
                emoji: '🚀',
                gradient: 'from-pink-500 to-red-500'
              }
            ].map((service, i) => (
              <div key={i} className="group relative cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition-all duration-300`}></div>
                <div className="relative bg-gray-900/80 backdrop-blur p-8 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full">
                  <div className="text-5xl mb-4">{service.emoji}</div>
                  <h3 className="text-2xl font-black text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 font-semibold leading-relaxed">{service.desc}</p>
                  <div className="mt-6 inline-block">
                    <ArrowRight className="text-pink-500 group-hover:translate-x-2 transition-transform" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EVENTS SECTION ==================== */}
      <section id="events" className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-pink-500 font-black text-sm uppercase tracking-widest mb-4">Events</p>
            <h2 className="text-6xl lg:text-7xl font-black mb-6">
              Upcoming <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Opportunities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Creator Championship', date: 'Mar 15-25', emoji: '🎬', gradient: 'from-blue-500 to-blue-600' },
              { title: 'Startup Pitch Battle', date: 'Apr 10-20', emoji: '🚀', gradient: 'from-purple-500 to-purple-600' },
              { title: 'Marketing Summit', date: 'Apr 25-26', emoji: '📊', gradient: 'from-pink-500 to-pink-600' },
              { title: 'Talent Hunt 2024', date: 'May 5-15', emoji: '⭐', gradient: 'from-indigo-500 to-indigo-600' },
              { title: 'Innovation Hackathon', date: 'May 20-22', emoji: '💻', gradient: 'from-green-500 to-green-600' },
              { title: 'Community Awards', date: 'Jun 1', emoji: '🏅', gradient: 'from-yellow-500 to-yellow-600' }
            ].map((event, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient}`}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                <div className="relative p-8 text-white h-full flex flex-col justify-between min-h-72">
                  <div>
                    <div className="text-6xl mb-4">{event.emoji}</div>
                    <h3 className="text-2xl font-black mb-2">{event.title}</h3>
                    <p className="text-white/80 font-bold">📅 {event.date}</p>
                  </div>
                  <button className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl font-black hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-105">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Active Creators' },
              { number: '500+', label: 'Events Hosted' },
              { number: '₹50Cr+', label: 'Prize Pool' },
              { number: '25+', label: 'Countries' }
            ].map((stat, i) => (
              <div key={i} className="group cursor-pointer">
                <p className="text-6xl font-black text-white mb-2 group-hover:scale-125 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-lg font-bold text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-cyan-500/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Ready to <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Transform</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-semibold">
            Join thousands of creators and innovators making their mark today.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-black rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Get Started Now</span>
          </button>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-500 font-black text-sm uppercase tracking-widest mb-4">Connect</p>
            <h2 className="text-6xl lg:text-7xl font-black mb-6">
              Let's <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: 'Email', value: 'contact@incredible.com', emoji: '📧' },
              { icon: MessageCircle, title: 'Phone', value: '+91 9876543210', emoji: '📱' },
              { icon: Share2, title: 'Follow Us', value: '@incredibleplatform', emoji: '🌐' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl mb-4 group-hover:scale-150 transition-transform duration-300">{item.emoji}</div>
                <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-semibold group-hover:text-pink-500 transition-colors">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <form className="relative bg-gray-900/80 backdrop-blur p-8 rounded-2xl border border-white/10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="px-6 py-3 bg-gray-800/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition font-semibold text-white placeholder-gray-500" />
                  <input type="email" placeholder="Your Email" className="px-6 py-3 bg-gray-800/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition font-semibold text-white placeholder-gray-500" />
                </div>
                <input type="text" placeholder="Subject" className="w-full px-6 py-3 bg-gray-800/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition font-semibold text-white placeholder-gray-500" />
                <textarea rows="5" placeholder="Your Message" className="w-full px-6 py-3 bg-gray-800/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition resize-none font-semibold text-white placeholder-gray-500"></textarea>
                <button type="submit" className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-black shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg group/btn">
                  Send Message
                  <Send className="group-hover/btn:translate-x-2 transition-transform" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-black border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-black text-xl mb-4 flex items-center gap-2">
                <Sparkles className="text-pink-500" size={28} />
                INCREDIBLE
              </h3>
              <p className="text-gray-400 font-semibold">Building digital ecosystems for creators worldwide.</p>
            </div>
            <div>
              <h4 className="text-white font-black mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 font-semibold">
                <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
                <li><a href="#about" className="hover:text-pink-500 transition">About</a></li>
                <li><a href="#services" className="hover:text-pink-500 transition">Services</a></li>
                <li><a href="#events" className="hover:text-pink-500 transition">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 font-semibold">
                <li><a href="#" className="hover:text-pink-500 transition">Blog</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Terms</a></li>
                <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-4">Follow</h4>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition transform hover:scale-125 duration-300">
                    <Icon className="text-white" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 font-semibold">
            <p>&copy; 2024 Incredible Platform Private Limited. All rights reserved. 🚀✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}