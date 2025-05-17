import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Swal from 'sweetalert2';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_9emqzz2', 'template_9dfh8wn', form.current, 'MhYJRV2MCh6b7ubfd')
    .then(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
          confirmButtonColor: '#3085d6',
        });
        e.target.reset();
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
          confirmButtonColor: '#d33',
        });
        
      }
    );
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4">

      <Navbar/>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-[#1e293b] p-6 rounded-lg border border-gray-700 shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">Contact Me</h2>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Send Message
        </button>
      </form>

      <Footer/>
    </div>
  );
}

export default Contact;
