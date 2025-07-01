import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const navItems = ['home', 'about', 'projects', 'contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur' : ''}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">Rajkumar</a>
        <ul className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-blue-600 dark:hover:text-blue-400 capitalize">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setDark(!dark)} className="text-xl text-gray-800 dark:text-white ml-4">
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
