'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} className="h-10 w-auto" alt="logo" priority />
          </Link>

          {/* Desktop Links - with separators */}
          <ul className="hidden md:flex items-center space-x-1">
            {links.map((link, index) => (
              <li key={link.id} className="flex items-center">
                <Link 
                  href={link.url} 
                  className="px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition"
                >
                  {link.text}
                </Link>
                {index < links.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Social */}
          <ul className="hidden md:flex items-center space-x-4">
            {social.map((socialIcon, index) => (
              <li key={socialIcon.id} className="flex items-center">
                <Link 
                  href={socialIcon.url} 
                  className="text-gray-600 hover:text-blue-500 transition p-1"
                >
                  {socialIcon.icon}
                </Link>
                {index < social.length - 1 && (
                  <span className="text-gray-300 ml-2">•</span>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={toggleLinks}
            aria-label="Toggle menu"
          >
            {showLinks ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            showLinks ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col py-4 space-y-3">
            {links.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.url} 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition border-b border-gray-100"
                >
                  {link.text}
                </Link>
              </li>
            ))}
            
            {/* Social icons for mobile */}
            <div className="border-t border-gray-200 pt-4 mt-2">
              <p className="text-xs text-gray-400 px-4 mb-3">Follow us</p>
              <div className="flex space-x-6 px-4">
                {social.map((socialIcon) => (
                  <Link 
                    key={socialIcon.id} 
                    href={socialIcon.url}
                    className="text-gray-600 hover:text-blue-500 transition"
                  >
                    {socialIcon.icon}
                  </Link>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;