import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Background3D from './Background3D';
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Background3D />
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-teal-400">Pasindu Adhikari</span>
          </motion.h1>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
            Full Stack Developer
          </motion.h2>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.4
        }} className="mb-12">
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I create engaging, responsive web experiences with modern
              technologies.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.6
        }} className="flex justify-center space-x-4 mb-16">
            <button onClick={() => scrollToSection('projects')} className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md transition-colors duration-300 font-medium">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="border border-gray-600 hover:border-teal-400 text-gray-300 hover:text-teal-400 px-8 py-3 rounded-md transition-colors duration-300 font-medium">
              Contact Me
            </button>
          </motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 0.8
        }} className="flex justify-center space-x-6">
            <a href="https://github.com/Pasindu-Adhikari" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pasindu-adhikari/" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://x.com/pasindu_adhikar" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <TwitterIcon size={24} />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1
    }} className="absolute bottom-10 z-10">
        <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-teal-400 transition-colors duration-300 animate-bounce">
          <ArrowDownIcon size={28} />
        </button>
      </motion.div>
    </section>;
};
export default Hero;