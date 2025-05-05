import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
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
  return <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="max-w-6xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In <span className="text-teal-400">Touch</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-teal-400 mx-auto mb-10"></motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg text-teal-400">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <p className="text-gray-400">pasinduadhikari.dev@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg text-teal-400">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <p className="text-gray-400">(+94) 760022701</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg text-teal-400">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Location</h4>
                    <p className="text-gray-400">Kurunegala, Sri Lanka</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/pasindu-adhikari/" className="bg-gray-700 hover:bg-teal-500 text-white p-3 rounded-full transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://github.com/Pasindu-Adhikari" className="bg-gray-700 hover:bg-teal-500 text-white p-3 rounded-full transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/pasindu_adhikar" className="bg-gray-700 hover:bg-teal-500 text-white p-3 rounded-full transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:border-teal-400" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:border-teal-400" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:border-teal-400" placeholder="Project Inquiry" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:border-teal-400 resize-none" placeholder="Your message here..."></textarea>
                </div>
                {submitMessage && <div className="mb-6 p-3 bg-green-500/20 border border-green-500 text-green-300 rounded-md">
                    {submitMessage}
                  </div>}
                <button type="submit" disabled={isSubmitting} className={`flex items-center justify-center w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </> : <>
                      Send Message
                      <SendIcon size={18} className="ml-2" />
                    </>}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Contact;