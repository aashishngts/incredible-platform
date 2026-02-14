import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function StatsAndCTA() {
  return (
    <>
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "10K+", label: "Members" },
              { number: "500+", label: "Events" },
              { number: "₹50Cr+", label: "Prizes" },
              { number: "25+", label: "Countries" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="font-heading text-4xl sm:text-5xl font-extrabold mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>

                <p className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center font-sans">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Transform Your Future?
          </h2>

          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto font-medium">
            Join thousands of creators and innovators making their mark today.
          </p>

          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group">
            Get Started Today
            <ArrowUpRight
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={20}
            />
          </button>
        </div>
      </section>
    </>
  );
}
