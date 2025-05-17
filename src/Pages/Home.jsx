import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (

    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-sans">

      <Navbar/>

      {/* Hero Section */}
      <div className="flex flex-col items-center pt-[150px] justify-center text-center py-12 px-4">

        <img
          src="img.JPG"
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6">
          Hi, I'm <span className="text-blue-500">Amaljith Suresh</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-300">
          Human Resources professional specializing in talent acquisition, employee engagement, and HR operations
        </p>

        <a href="/Amaljith-Suresh.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 border border-dashed border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all"
        > View My Resume </a>

        <p className="mt-10 text-sm text-gray-400">Connect with me</p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 text-2xl text-gray-300">
          
          <a
            href="https://wa.me/9207858476"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
          href="tel:+919207858476"
          className="text-lg hover:text-yellow-400 transition duration-300"
          >
          <FaPhoneAlt />
          </a>
          <a
            href="mailto:amaljithsuresh2000@gmail.com"
            className="hover:text-red-400 transition duration-300"
          >
            <MdEmail />
          </a>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
