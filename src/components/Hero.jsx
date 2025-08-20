import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import Runner from './Runner'
import program from './program.js'

const Hero = () => {
  return (
    <>
    <Runner program={program}/>
    <div className='h-[100vh] w-[100vw] bg-sky-50/30 absolute'>

    </div>
    <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-6xl relative top-0 z-[6] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Thunder
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
