import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import pfp from '/pfp.jpeg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
  <nav className="fixed top-0 w-full bg-navbar-bg backdrop-blur-2xl border-b border-gray-800 z-50">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-opacity-50">
      <div className="hidden md:flex justify-between py-2">
        <div className="flex text-xl font-bold text-white">
          <img src={pfp} className='w-16 h-16 mr-5' />
          <div className='flex items-center'>
            Puranjay
          </div>  
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-navbar-text font-semibold">
          <HashLink smooth to='#hero'>
            <div className="hover:text-blue-400 transition-colors pr-6">Home</div>
          </HashLink>
          <HashLink smooth to='/#about'>
            <div className="hover:text-blue-400 transition-colors pr-6  ">About</div>
          </HashLink>
          <HashLink smooth to='/#projects'>
            <div className="hover:text-blue-400 transition-colors pr-6">Projects</div>
          </HashLink>  
        </div>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </div>
  </nav>
  )
}

export default Navbar