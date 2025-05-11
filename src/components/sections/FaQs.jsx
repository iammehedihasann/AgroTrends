import React from "react";
import { useState } from "react";

const FaQs = () => {
  const faqs = [
    {
      question: "How do I start an agriculture blog?",
      answer:
        "Choose a niche (organic farming, hydroponics, etc.), set up your blog platform, and start sharing your knowledge with engaging content.",
    },
    {
      question: "What are the best crops for beginners?",
      answer:
        "Tomatoes, lettuce, and herbs like basil are great starter crops due to their low maintenance and fast growth cycles.",
    },
    {
      question: "How often should I water my plants?",
      answer:
        "It depends on the plant type and climate. Most vegetables need 1-2 inches of water per week, but always check soil moisture first.",
    },
    {
      question: "Can I use this blog for commercial farming tips?",
      answer:
        "Absolutely! Our platform supports both hobbyists and commercial farmers. Share your expertise and connect with the community.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center p-4 bg-green-50 hover:bg-green-100 focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-left text-green-800">
                {faq.question}
              </h3>
              <span className="text-green-600">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-700 border-t border-gray-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaQs;
