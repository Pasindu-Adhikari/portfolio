import React, { Children, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Pasindu from '../assets/pasindu.jpg';
const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="text-teal-400">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-teal-400 mx-auto mb-10"></motion.div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div variants={itemVariants} className="md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-2 bg-teal-400/20 rounded-lg blur-lg"></div>
                <img src={Pasindu} alt="Profile" className="w-full h-auto rounded-lg relative z-10 object-cover aspect-square" />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">
                Pasindu Adhikari
              </h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate Full Stack Developer with experience in
                creating comprehensive web solutions. I specialize in both
                front-end and back-end development, building complete, scalable
                applications from the ground up.
              </p>
              <p className="text-gray-300 mb-6">
                With a strong foundation in both client-side and server-side
                technologies, I bring a holistic approach to every project. I'm
                committed to writing clean, efficient code and creating robust
                applications that deliver exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p>
                    <span className="font-semibold text-teal-400">Name:</span>{' '}
                    Pasindu Adhikari
                  </p>
                  <p>
                    <span className="font-semibold text-teal-400">Email:</span>{' '}
                    pasinduadhikari.dev@gmail.com                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold text-teal-400">
                      Location:
                    </span>{' '}
                    Kurunegala, Sri Lanka
                  </p>
                  <p>
                    <span className="font-semibold text-teal-400">
                      Availability:
                    </span>{' '}
                    Full-time
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="inline-block bg-transparent border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-6 py-3 rounded-md transition-colors duration-300">
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutMe;