import { Zap } from "lucide-react";
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6 border border-indigo-200">
            <Zap size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Contact Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-base text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-10">

            {[
              {
                icon: FaEnvelope,
                title: "Email",
                value: "platformincredible@gmail.com",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaPhoneAlt,
                title: "Phone",
                value: "+91 9977160008",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaMapMarkerAlt,
                title: "Address",
                value: "55-A, Avantika Nagar, Indore, MP 452006",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <item.icon size={22} className="text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-indigo-600 transition">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>

            <form className="relative bg-white rounded-3xl p-8 space-y-6 border border-gray-200 shadow-lg">

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition text-sm"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition resize-none text-sm"
              ></textarea>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <FaPaperPlane
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
