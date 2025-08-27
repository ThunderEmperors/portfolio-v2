import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SiJavascript, SiRedux } from 'react-icons/si';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { TbBrandCpp, TbSql } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import Hero from '../components/Hero';
import './Landing.css'
import portfolioImg from '/portfolio.png'

const Landing = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      tech: ["React", "TailwindCSS"],
      image: portfolioImg,
      github: "https://github.com/ThunderEmperors/portfolio-v2",
      live: ""
    }
  ];

  const skills = [
    { name: "C++", icon: <TbBrandCpp className="w-6 h-6" /> },
    { name: "Python", icon: <FaPython className="w-6 h-6" /> },
    { name: "SQL", icon: <TbSql className="w-6 h-6" /> },
    { name: "Git", icon: <FaGitAlt className="w-6 h-6" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
    { name: "TypeScript", icon: <BiLogoTypescript className="w-6 h-6" /> },
    { name: "Django", icon: <DiDjango className="w-6 h-6" /> },
    { name: "React", icon: <FaReact className="w-6 h-6" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" /> },
    { name: "MongoDB", icon: <BiLogoMongodb className="w-6 h-6" /> },
    { name: "Redux", icon: <SiRedux className="w-6 h-6" /> },
    { name: "TailwindCSS", icon: <RiTailwindCssFill className="w-6 h-6" /> },

    
  ];

  return (
    <div className="min-h-screen text-gray-100">

      <Hero />
    
    {/* Scroll Bar */}
    {/* <div className="scroll h-12 -translate-y-6 backdrop-blur-xl">
      <div>
        <span>=============================================================================================================</span>
      </div>
      <div>
        <span>=============================================================================================================</span>
      </div>
    </div> */}

      <section id="about" className="about-section pt-20 text-white bg-black">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="sm:text-8xl font-milker-text text-3xl mb-4">About Me</h2>
            <p className="text-about-fontclr max-w-3xl mx-auto text-lg">
              A B.Tech student in Computer Science and Engineering.
              <br />
              Exploring Web Technologies. Producing, deploying and sharing meaningful web experiences.
              <br />
              Also starting my deep dive in the world of ML.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-10 items-center">
            {/* Skills Box */}
            <div className="px-[10%] w-[60%] border-2 border-solid p-8 rounded-lg max-w-6xl">
              <h1 className="text-2xl text-center font-semibold mb-6 bg-gradient-to-r from-[#343a40] via-[#495057] to-[#212529] bg-clip-text text-transparent">
                Skills & Technologies
              </h1>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 justify-items-center">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center text-gray-300">
                    <div className="bg-gray-700 p-3 rounded-full mb-2">
                      {skill.icon}
                    </div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Box */}
            {/* <div className="bg-gray-800/50 p-8 rounded-lg w-4/5 max-w-6xl">
              <h3 className="text-2xl font-semibold mb-4 text-center">Experience</h3>
              <p className="text-gray-300 text-center">
                Specialized in React ecosystem, Node.js backend development, and cloud deployment strategies.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      
      <div className="w-full h-32 bg-gradient-to-b from-black to-project-bg"></div>

      <section id="projects" className="py-20 bg-project-bg text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          </div>
          
          {
            projects.length === 0 ? 
              <div className='flex text-text-sec justify-center'>
                Nothing here yet but stay tuned!
              </div> 
              :
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {projects.map((project, index) => (
                  <div key={index} 
                  className="bg-gray-800 rounded-lg overflow-hidden 
                  text-[#36454F] hover:text-[#a3cef1] hover:bg-gray-700 
                  transition-colors"
                  >
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-gray-500 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                        <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-black transition-colors"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-400 hover:text-black transition-colors"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

          }

        </div>

      </section>

      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's connect and discuss how we can work together.
          </p>
          <a 
            href="mailto:thunderemperorwastaken@gmail.com"
            className="inline-flex items-center bg-gray-500 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors text-lg"
          >
            <Mail size={20} className="mr-2" />
            Say Hello
          </a>
        </div>
      </section>

      <footer className="py-8 border-t border-[#415a77]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 sm:mb-0">
              Thunder
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
