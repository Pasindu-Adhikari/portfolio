import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };
  const navItems = [{
    name: 'About',
    id: 'about'
  }, {
    name: 'Projects',
    id: 'projects'
  }, {
    name: 'Skills',
    id: 'skills'
  }, {
    name: 'Contact',
    id: 'contact'
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} className="flex items-center space-x-2">
          <div className="relative">
            <span className="text-2xl font-bold text-teal-400">P</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full"></span>
          </div>
          <div className="text-lg">
            <span className="font-bold text-gray-300">Pasindu</span>
            <span className="font-light text-teal-400">Dev</span>
          </div>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => <motion.li key={item.id} initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1 * index
          }}>
                <button onClick={() => scrollToSection(item.id)} className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  {item.name}
                </button>
              </motion.li>)}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-teal-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-gray-800 shadow-lg">
          <ul className="py-4 px-4 space-y-3">
            {navItems.map(item => <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-teal-400 rounded transition-colors duration-300">
                  {item.name}
                </button>
              </li>)}
          </ul>
        </motion.div>}
    </header>;
};
export default Header;