import React, { useState } from "react";
import assets from "../assets/assets";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const Events = () => {
  // Event data
  const [activeFilter, setActiveFilter] = useState("All");
  const events = [
    {
      id: 1,
      title: "Smart Farming Workshop",
      date: "2024-06-15",
      time: "10:00 AM - 2:00 PM",
      location: "Online (Zoom)",
      category: "Workshop",
      description:
        "Learn IoT applications for precision agriculture from industry leaders.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "Organic Farming Expo 2024",
      date: "2024-07-22",
      time: "9:00 AM - 5:00 PM",
      location: "Austin Convention Center, TX",
      category: "Expo",
      description:
        "500+ exhibitors showcasing organic seeds, tools, and techniques.",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
  ];

  const categories = ["All", "Workshop", "Expo", "Webinar"];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-green-800 overflow-hidden">
        <img
          src={assets.upcoming_events}
          alt="Farmers at an event"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full mb-4">
              <Calendar size={18} className="mr-2" />
              <span>Event Calendar</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Upcoming Events
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Connect with the agriculture community through workshops, expos,
              and more.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full ${
                activeFilter === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .filter(
              (event) =>
                activeFilter === "All" || event.category === activeFilter
            )
            .map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock size={14} className="mr-1" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin size={14} className="mr-1" />
                    {event.location}
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="flex items-center text-green-600 font-medium group">
                    Register Now
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition"
                    />
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* No Events Fallback */}
        {events.filter((e) => e.category === activeFilter).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No {activeFilter.toLowerCase()} events scheduled yet. Check back
              soon!
            </p>
          </div>
        )}

        {/* Past Events Testimonials */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Past Event Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-40 rounded-lg overflow-hidden group relative"
              >
                <img
                  src={`https://source.unsplash.com/random/300x300/?agriculture-event&sig=${i}`}
                  alt="Past event"
                  className="w-full h-full object-cover border border-gray-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white font-medium">View Photos</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-green-50 rounded-xl p-8 md:p-12 mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Never Miss an Event
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to get monthly updates on workshops, early-bird tickets,
            and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
