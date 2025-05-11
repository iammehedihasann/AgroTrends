import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative h-96 bg-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Growing Knowledge, Harvesting Success
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to{" "}
            <span className="font-semibold text-green-600">AgriBlog</span>, your
            trusted source for farming tips, crop insights, and sustainable
            agriculture practices. Founded in 2023, we aim to empower farmers
            and agri-enthusiasts with knowledge that drives growth.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🌱</span>
              <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To provide actionable farming insights through reliable,
              research-backed content.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">👨‍🌾</span>
              <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To bridge the gap between traditional and smart farming for a
              food-secure future.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mohammad Nayyem",
                role: "Founder, Agri Expert",
                img: assets.nayyem,
              },
              {
                name: "Mehedi Hasan",
                role: "Sustainable Farming Advocate",
                img: assets.mehedi,
              },
              {
                name: "Lamiya Akter",
                role: "Agri-Tech Specialist",
                img: assets.lamiya,
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-green-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Trust Us? */}
        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Trust Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "✅",
                title: "Expert-Backed",
                desc: "Written by agriculture experts",
              },
              {
                icon: "📊",
                title: "Data-Driven",
                desc: "Research-based, practical advice",
              },
              {
                icon: "🔍",
                title: "Farmer-First",
                desc: "Unbiased, community-focused",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center shadow-sm"
              >
                <span className="text-3xl mb-3 inline-block">{item.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Grow Your Knowledge?
          </h3>
          <Link to="/Blogs">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition">
              Explore Our Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
