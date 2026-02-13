import { Zap } from "lucide-react";
import React from "react";
import { FaStar, FaCalendarAlt, FaUsers, FaArrowRight } from "react-icons/fa";

export default function Events() {
  const events = [
    {
      title: "Creator Championship",
      date: "Mar 15-25",
      attendees: 2500,
      category: "Competition",
    },
    {
      title: "Startup Pitch",
      date: "Apr 10-20",
      attendees: 500,
      category: "Workshop",
    },
    {
      title: "Marketing Summit",
      date: "Apr 25-26",
      attendees: 1000,
      category: "Summit",
    },
    {
      title: "Talent Hunt",
      date: "May 5-15",
      attendees: 5000,
      category: "Competition",
    },
    {
      title: "Hackathon",
      date: "May 20-22",
      attendees: 300,
      category: "Workshop",
    },
    {
      title: "Awards Night",
      date: "Jun 1",
      attendees: 800,
      category: "Summit",
    },
  ];

  return (
    <section
      id="events"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6 border border-indigo-200">
            <Zap size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Events
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Opportunities
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Be part of our exciting community events and competitions
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, i) => (
            <div key={i} className="group relative">
              <div
                className="
    relative
    rounded-3xl
    bg-white/20
    backdrop-blur-3xl
    border border-white/30
    shadow-[0_8px_32px_rgba(31,38,135,0.15)]
    transition-all duration-500
    hover:shadow-[0_8px_40px_rgba(31,38,135,0.25)]
    hover:-translate-y-2
    overflow-hidden
    min-h-[300px]
  "
              >
                {/* Glass Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60 pointer-events-none"></div>

                {/* Top Accent Line */}
                <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

                <div className="relative p-8 flex flex-col justify-between h-full">
                  {/* Category + Star */}
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <span className="px-3 py-1 text-xs font-semibold bg-white/30 backdrop-blur-md text-indigo-700 rounded-full border border-white/40">
                        {event.category}
                      </span>

                      <FaStar className="text-yellow-400" size={14} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-5 group-hover:text-indigo-600 transition">
                      {event.title}
                    </h3>

                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-indigo-500" size={14} />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-3">
                        <FaUsers className="text-purple-500" size={14} />
                        {event.attendees.toLocaleString()} Participants
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-10 flex justify-between items-center">
                    <button className="px-5 py-2.5 bg-indigo-600/90 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition">
                      Register
                    </button>

                    <button className="flex items-center gap-2 text-indigo-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      View Details
                      <FaArrowRight className="group-hover:translate-x-1 transition" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
