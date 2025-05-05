import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>;
}