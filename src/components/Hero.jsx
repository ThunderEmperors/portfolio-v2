import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import Runner from './Runner'
import program from './program.js'

const Hero = () => {
  return (
    <>
    <Runner program={program}/>
    {/* <div className='h-[100vh] w-[100vw] bg-[rgba(53,68,89,0.47)] absolute'>
    </div> */}

        <div className='h-[100vh] w-[100vw] bg-[rgba(53,68,89,0.33)] absolute'></div>
    <section id="home" className="pt-20 min-h-screen flex items-center">
        <div id="test" className="max-w-6xl relative top-0 z-[6] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* <div className="absolute inset-0 bg-black/40 rounded-2xl backdrop-blur-sm z-[-1]" /> */}
          <div className="absolute inset-0 shadow-[0_0_15px_5px_rgba(0,0,0,0.5)] bg-[#4f788d9a] backdrop-blur-[3px] rounded-2xl z-[-1]" />
          
          <div className="text-center flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl mb-5 font-bold">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#caf0f8]">
                Thunder
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex justify-center mt-5 space-x-6">
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
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-about-bg"></div>
      </section>
    </>
  )
}

export default Hero
