import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} className="bg-gray-800 rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden h-48 sm:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-teal-400">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>)}
        </div>
        <div className="flex justify-between">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300 transition-colors">
              <span>Live Demo</span>
              <ExternalLinkIcon size={14} />
            </a>}
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300 transition-colors">
              <span>View Code</span>
              <GithubIcon size={14} />
            </a>}
        </div>
      </div>
    </motion.div>;
};
export default ProjectCard;