import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function HeroAnimatedSparkle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create sparkle particles on mouse move
      if (Math.random() > 0.8) {
        const newParticle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4 - 2,
          life: 1
        };
        setParticles(prev => [...prev, newParticle].slice(-50));
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1,
            life: p.life - 0.02
          }))
          .filter(p => p.life > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Animated Background - Mouse Tracking */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Sparkling Dust Particles */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        {/* Background floating dust */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute w-1 h-1 rounded-full bg-indigo-400/40 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkleFloat ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: `0 0 ${Math.random() * 8 + 4}px rgba(99, 102, 241, 0.6)`
            }}
          ></div>
        ))}

        {/* Mouse-tracking particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              background: `radial-gradient(circle, rgba(168, 85, 247, ${particle.life}), transparent)`,
              boxShadow: `0 0 ${8 * particle.life}px rgba(168, 85, 247, ${particle.life * 0.8})`,
              transform: 'translate(-50%, -50%)',
              opacity: particle.life,
              transition: 'all 0.05s linear'
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-120px)] flex items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full border border-indigo-200 backdrop-blur-xl animate-bounce group hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300" style={{animationDuration: '2s'}}>
              <Sparkles size={16} className="animate-spin" style={{animationDuration: '3s'}} />
              <span className="text-sm font-bold">Welcome to Innovation Hub</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-4xl lg:text-6xl font-black leading-tight text-gray-900">
              Discover Your
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Creative Potential
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg font-semibold">
              Join a thriving community of creators, innovators, and changemakers. Compete in exciting events and turn your ideas into reality with our comprehensive platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-base relative overflow-hidden">
                {/* Sparkle effect on button */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.3), transparent)',
                  animation: 'sparklePulse 0.6s ease-out'
                }}></span>
                <span className="relative">
                  Start Your Journey
                  <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-bold hover:bg-indigo-50 hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2 text-base">
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '10K+', label: 'Active Members', icon: '👥' },
                { number: '500+', label: 'Events', icon: '🎯' },
                { number: '25+', label: 'Countries', icon: '🌍' }
              ].map((stat, i) => (
                <div key={i} className="group cursor-pointer relative">
                  <div className="text-3xl mb-2 transform group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                  <p className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 origin-left">{stat.number}</p>
                  <p className="text-sm text-gray-600 font-semibold">{stat.label}</p>
                  
                  {/* Sparkle effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="absolute w-1 h-1 rounded-full bg-purple-400"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animation: 'sparkleShoot 0.6s ease-out',
                          animationDelay: `${j * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Sparkles Only */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Large floating sparkle circles */}
            <div className="absolute w-96 h-96 rounded-full border-2 border-purple-300/30 animate-pulse" style={{animation: 'spin 8s linear infinite'}}></div>
            <div className="absolute w-72 h-72 rounded-full border-2 border-indigo-300/20 animate-pulse" style={{animation: 'spin 12s linear infinite reverse'}}></div>
            
            {/* Central sparkle glow */}
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="text-indigo-500 animate-spin" size={64} style={{animationDuration: '3s'}} />
              </div>
            </div>

            {/* Floating dust particles around center */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`orbit-${i}`}
                className="absolute w-2 h-2 rounded-full bg-purple-400/60"
                style={{
                  left: '50%',
                  top: '50%',
                  animation: `orbit ${6 + i}s linear infinite`,
                  transformOrigin: '0 0',
                  '--radius': `${120 + i * 15}px`,
                  '--angle': `${(i * 360) / 8}deg`,
                  boxShadow: `0 0 8px rgba(168, 85, 247, 0.8)`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sparkleFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes sparkleShoot {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? 30 : -30}px, -40px);
            opacity: 0;
          }
        }

        @keyframes sparklePulse {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit {
          from {
            transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle)));
          }
          to {
            transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * var(--angle) - 360deg));
          }
        }
      `}</style>
    </section>
  );
}