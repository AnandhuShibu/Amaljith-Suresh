import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Skill() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 px-6 font-sans">
      <Navbar/>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-400">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* HR Core Skills */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">HR Core Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Talent Acquisition & Recruitment</li>
              <li>Employee Engagement & Retention</li>
              <li>Performance Management & Training</li>
              <li>HR Policies & Compliance</li>
            </ul>
          </div>

          {/* Sales Skills */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Sales Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Negotiation & Closing Deals</li>
              <li>Strategic Sales Planning</li>
              <li>Customer Relationship Management</li>
              <li>Market Research & Analysis</li>
              <li>Digital Marketing & Social Selling</li>
              <li>Sales Forecasting & Reporting</li>
            </ul>
          </div>

          {/* Technical Tools */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-green-500/30 transition duration-300">
            <h3 className="text-xl font-semibold text-green-300 mb-4">Technical Tools</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>MS Office (Excel, PowerPoint, Word)</li>
              <li>Applicant Tracking Systems (ATS)</li>
              <li>Payroll Software</li>
              <li>Google Workspace</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-pink-500/30 transition duration-300">
            <h3 className="text-xl font-semibold text-pink-300 mb-4">Soft Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Communication & Interpersonal Skills</li>
              <li>Customer Relationship</li>
              <li>Emotional Intelligence</li>
              <li>Problem Solving</li>
              <li>Leadership & Team Building</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
            </ul>
          </div>

          {/* Strategic Skills */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-yellow-500/30 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">Strategic Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Talent Acquisition & Organizational Development</li>
              <li>Strategic Sales Planning</li>
              <li>Employee Engagement Strategy</li>
              <li>Customer Relationship Management</li>
              
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-indigo-500/30 transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">Languages Known</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>English</li>
              <li>Malayalam</li>
              <li>Tamil</li>
              <li>Kannada</li>
              <li>Hindi</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Skill;
