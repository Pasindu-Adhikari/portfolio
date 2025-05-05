import React from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <div className="relative">
              <span className="text-2xl font-bold text-teal-400">P</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full"></span>
            </div>
            <div className="text-lg">
              <span className="font-bold text-gray-300">Pasindu</span>
              <span className="font-light text-teal-400">Dev</span>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="text-gray-400 text-center md:text-right"
          >
            <p className="flex items-center justify-center md:justify-end">
              Made by Pasindu Adhikari
            </p>
            <p className="text-sm mt-1">© {currentYear} All Rights Reserved</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
