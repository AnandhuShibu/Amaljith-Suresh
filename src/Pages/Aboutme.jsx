import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Aboutme() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-sans">
      <Navbar />

      <div className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-400">About Me</h2>
        <div className="bg-[#0f172a]/60 border border-gray-700 rounded-lg shadow-lg p-6 sm:p-10 space-y-6">
          <p className="text-gray-300 leading-relaxed text-lg">
            Hello! I'm <span className="text-blue-400 font-semibold">Amaljith Suresh</span>, a dedicated and dynamic Human Resources professional with a deep passion for empowering people, building strong organizational cultures, and driving business growth through innovative strategies.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            I hold a <span className="font-medium text-white">Bachelor of Business Administration (BBA)</span> and a <span className="font-medium text-white">Master of Business Administration (MBA)</span>, specializing in Human Resource Management. These academic foundations have given me a robust understanding of both people management and business operations.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
          Beyond my studies, I’m passionate about entrepreneurship. I founded{" "}
  <a
    href="https://shadowtravelpartner.com/index.html" // replace with your actual URL
    target="_blank"
    rel="noopener noreferrer"
    className="text-white font-medium hover:text-blue-400 transition duration-200"
  >
    Shadow – The Travel Partner
  </a>
  , a Kerala-based freelance travel company offering personalized travel planning and experiences. Actively promoted on social media.
</p>

          <p className="text-gray-300 leading-relaxed text-lg">
            My next entrepreneurial venture is <a
    href="http://sharonchips.com/index.html" // replace with your actual URL
    target="_blank"
    rel="noopener noreferrer"
    className="text-white font-medium hover:text-blue-400 transition duration-200"
  >Sharon Chips</a>, a growing banana chips production company. We operate primarily through online sales channels like Amazon, with strong customer demand from states like Karnataka, Tamil Nadu, and Delhi.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">Through these ventures, I’ve developed strong capabilities in:</p>
          <li> Sales strategy and execution</li>
          <li>Marketing and brand positioning</li>
          <li>Customer experience and retention</li>
          <li>Business development and growth planning</li>
          <li>Human Resource Operations</li>
          <p className="text-gray-300 leading-relaxed text-lg">I am committed to leveraging my expertise in human resources and entrepreneurship to drive sustainable growth, foster strong relationships, and deliver strategic value across all endeavors. By combining innovative business strategies with a people-centric approach, I aim to contribute meaningfully to every organization and venture I engage with.</p>

          {/* Certificates Download Section */}
          <div className="pt-6 border-t border-gray-700">
  <h3 className="text-xl font-semibold text-blue-400 mb-4">View Certificates</h3>
  <div className="flex flex-col sm:flex-row flex-wrap gap-3">

  <a
  href="MBA.JPG"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between bg-[#1e293b] border border-gray-600 hover:border-blue-500 rounded-md p-2.5 text-sm text-white transition-all duration-200 shadow-sm hover:shadow-md"
>
  MBA Certificate
</a>


    <a
  href="BBA.jpg"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between bg-[#1e293b] border border-gray-600 hover:border-blue-500 rounded-md p-2.5 text-sm text-white transition-all duration-200 shadow-sm hover:shadow-md"
>
  BBA Certificate
</a>

<a
  href="Travel&Air ticket.JPG"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between bg-[#1e293b] border border-gray-600 hover:border-blue-500 rounded-md p-2.5 text-sm text-white transition-all duration-200 shadow-sm hover:shadow-md"
>
  Travel Management & Air Ticketing
</a>

<a
  href="galileo.JPG"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between bg-[#1e293b] border border-gray-600 hover:border-blue-500 rounded-md p-2.5 text-sm text-white transition-all duration-200 shadow-sm hover:shadow-md"
>
  Galileo GDS
</a>

<a
  href="ASAP.JPG"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between bg-[#1e293b] border border-gray-600 hover:border-blue-500 rounded-md p-2.5 text-sm text-white transition-all duration-200 shadow-sm hover:shadow-md"
>
  ASAP Govt of Kerala
</a>

  </div>
</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Aboutme;
