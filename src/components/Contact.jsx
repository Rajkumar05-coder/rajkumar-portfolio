import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Me</h2>

        <form
          action="https://formspree.io/f/mqkrnjdy"
          method="POST"
          className="flex flex-col gap-4 mb-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-6 text-2xl text-gray-600 dark:text-gray-300">
          <a href="mailto:rajesram999@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/Rajkumar05-coder" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rajkumar-esram-97a307315/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
