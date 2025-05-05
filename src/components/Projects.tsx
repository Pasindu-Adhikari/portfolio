import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [filter, setFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A responsive admin dashboard for an e-commerce platform with data visualization, user management, and inventory tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    category: 'web',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 2,
    title: 'Fitness Tracker App',
    description: 'A mobile-first application for tracking workouts, nutrition, and fitness goals with customizable dashboards.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React Native', 'Redux', 'Firebase'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 3,
    title: 'Task Management Platform',
    description: 'A collaborative task management tool with real-time updates, team assignments, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'web',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 4,
    title: 'Weather Visualization',
    description: 'An interactive weather application with animated visualizations and 7-day forecasts for global locations.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['JavaScript', 'D3.js', 'Weather API', 'CSS'],
    category: 'web',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 5,
    title: 'Social Media Analytics',
    description: 'A dashboard for tracking and analyzing social media performance across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'web',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 6,
    title: 'Augmented Reality Game',
    description: 'A mobile AR game that transforms your surroundings into an interactive gaming environment.',
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Unity', 'AR Kit', 'C#', '3D Modeling'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
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
  return <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="max-w-6xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="text-teal-400">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-teal-400 mx-auto mb-10"></motion.div>
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <div className="flex space-x-2 bg-gray-700/50 p-1 rounded-lg">
              <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-teal-400 text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                All
              </button>
              <button onClick={() => setFilter('web')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'web' ? 'bg-teal-400 text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                Web
              </button>
              <button onClick={() => setFilter('mobile')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'mobile' ? 'bg-teal-400 text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                Mobile
              </button>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} technologies={project.technologies} liveUrl={project.liveUrl} githubUrl={project.githubUrl} index={index} />)}
          </div>
          {filteredProjects.length === 0 && <motion.p variants={itemVariants} className="text-center text-gray-400 mt-10">
              No projects found in this category.
            </motion.p>}
        </motion.div>
      </div>
    </section>;
};
export default Projects;