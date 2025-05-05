import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Skills = () => {
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
        staggerChildren: 0.1
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
  const skills = [{
    category: 'Frontend',
    items: [{
      name: 'HTML5',
      level: 95
    }, {
      name: 'CSS3/SCSS',
      level: 90
    }, {
      name: 'JavaScript',
      level: 92
    }, {
      name: 'TypeScript',
      level: 85
    }, {
      name: 'React',
      level: 90
    }, {
      name: 'Next.js',
      level: 80
    }, {
      name: 'Tailwind CSS',
      level: 88
    }]
  }, {
    category: 'Backend',
    items: [{
      name: 'Node.js',
      level: 75
    }, {
      name: 'Express',
      level: 78
    }, {
      name: 'RESTful APIs',
      level: 85
    }, {
      name: 'GraphQL',
      level: 70
    }, {
      name: 'MongoDB',
      level: 72
    }, {
      name: 'PostgreSQL',
      level: 68
    }]
  }, {
    category: 'Tools & Others',
    items: [{
      name: 'Git/GitHub',
      level: 88
    }, {
      name: 'Docker',
      level: 65
    }, {
      name: 'Figma',
      level: 82
    }, {
      name: 'Jest',
      level: 75
    }, {
      name: 'CI/CD',
      level: 70
    }, {
      name: 'Agile/Scrum',
      level: 85
    }]
  }];
  return <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="max-w-6xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="text-teal-400">Skills</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-teal-400 mx-auto mb-10"></motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skills.map((skillGroup, groupIndex) => <motion.div key={skillGroup.category} variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-teal-400">
                  {skillGroup.category}
                </h3>
                <div className="space-y-5">
                  {skillGroup.items.map((skill, skillIndex) => <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div initial={{
                    width: 0
                  }} animate={inView ? {
                    width: `${skill.level}%`
                  } : {
                    width: 0
                  }} transition={{
                    duration: 1,
                    delay: 0.2 + groupIndex * 0.1 + skillIndex * 0.05
                  }} className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"></motion.div>
                      </div>
                    </div>)}
                </div>
              </motion.div>)}
          </div>
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'Jest', 'Figma'].map((tech, index) => <motion.div key={tech} initial={{
            opacity: 0,
            scale: 0.8
          }} animate={inView ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.8
          }} transition={{
            duration: 0.4,
            delay: 0.1 * index
          }} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-teal-400 transition-colors">
                <span className="text-gray-300">{tech}</span>
              </motion.div>)}
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Skills;