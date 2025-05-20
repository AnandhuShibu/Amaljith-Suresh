import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Projects() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white py-20 px-4 sm:px-10 font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-400">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* First project card */}
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-500 transition-all duration-200">
            <h3 className="text-xl font-semibold text-blue-300">The impact of AI on HR</h3>
            <p className="text-sm text-gray-400 mb-2 italic">Project Author</p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Researched the influence of AI on HR functions such as talent acquisition, analytics, and automation. Compiled findings into a structured report as part of final year curriculum
            </p>
            <a
              href="impact of AI on HR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              View Presentation
            </a>
          </div>

          {/* Second project card */}
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-500 transition-all duration-200">
            <h3 className="text-xl font-semibold text-blue-300">Shadow – The Travel Partner</h3>
            <p className="text-sm text-gray-400 mb-2 italic">Co-Founder & Strategist</p>
            <p className="text-gray-300 leading-relaxed text-sm">
              A dedicated travel agency specializing in customized tours and seamless travel experiences, helping clients explore destinations with ease and personalized service.
            </p>
            <a
              href="https://shadowtravelpartner.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              View website
            </a>
          </div>

          {/* Third project card with 2 buttons */}
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-500 transition-all duration-200">
            <h3 className="text-xl font-semibold text-blue-300">Sharon Chips – Banana Chips Startup</h3>
            <p className="text-sm text-gray-400 mb-2 italic">Co-Founder & Sales Head</p>
            <p className="text-gray-300 leading-relaxed text-sm">
              A growing banana chips brand focused on producing crispy, high-quality snacks using traditional recipes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="http://sharonchips.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
              >
                View website
              </a>
              <a
                href="https://amzn.in/d/2j72qQJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
