import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';

const Landing = () => {
  const projects = [
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "TypeScript", 
    "Next.js", "MongoDB", "Redux", "Express"
  ];

  return (
    <div className="min-h-screen text-gray-100">

      <Hero />

      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              I'm a passionate developer with experience in modern web technologies. 
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-700/50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <p className="text-gray-300">
                Specialized in React ecosystem, Node.js backend development, and cloud deployment strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-text-sec max-w-2xl mx-auto text-lg">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          
          {
            projects.length === 0 ? 
              <div className='flex text-text-sec justify-center'>
                Nothing here yet but stay tuned!
              </div> 
              :
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
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
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                      <a 
                        href={project.live}
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
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
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors text-lg"
          >
            <Mail size={20} className="mr-2" />
            Say Hello
          </a>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-800">
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
