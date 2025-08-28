import React from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
  return (
    <div className='text-footer-text bg-footer-bg'>
      <footer className="py-8 border-t border-[#415a77]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row sm:flex-row justify-between items-center">
            <div className='flex flex-col justify-between items-center'>
              <div className='flex font-bold text-2xl w-[100%] pb-6'>
                Thunder
              </div>
              <div className='flex w-lg pb-6'>
                Full-stack developer, software engineer, ambitious. Working to make
                the world a better place. 
              </div>
              <div className='flex self-start'>
                <a href="https://github.com/ThunderEmperors" className='pr-4'>
                  <FaGithub className='h-8 w-8'/>
                </a>
                <a href="https://www.linkedin.com/in/puranjay-joshi-361972289/" className='pr-4'>
                  <FaLinkedin className='h-8 w-8'/>
                </a>
                <a href="mailto:puranjayjoshi2004@gmail.com" className='pr-4'>
                  <MdEmail className='h-8 w-8'/>
                </a>
              </div>
            </div>
            <div className="flex space-x-6">
              Hope you found it interesting!
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
