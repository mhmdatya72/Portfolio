import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEye, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const handleDownloadCV = () => {
    // Download the actual CV file
    try {
      // Encode the filename to handle spaces
      const filename = 'Mohamed Atya Hawash.pdf'
      const encodedFilename = encodeURIComponent(filename)
      
      const link = document.createElement('a')
      link.href = `/${encodedFilename}`
      link.download = 'Mohamed_Atya_Hawash_CV.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback: open in new tab
      window.open('/Mohamed%20Atya%20Hawash.pdf', '_blank')
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1"
          >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Available for work</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
          >
            <span className="block">Mohamed</span>
            <span className="block text-primary">Atya Hawash</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Full Stack Web Developer
            </h2>
            <div className="flex items-center justify-center lg:justify-start">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-lg border border-primary/20">
                Laravel Framework
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Crafting exceptional digital experiences with <span className="text-primary font-semibold">3+ years</span> of expertise in modern web development.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed">
              Specializing in scalable Laravel applications, dynamic Vue.js interfaces, and robust database solutions.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-sky-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                <FaEye size={20} />
                View My Work
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="group px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3"
            >
              <FaDownload size={20} />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-4"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/mohamed-atya-hawash-21853b344?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-primary"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/mhmdatya72"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-primary"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/share/1CVzc6uuKV/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-primary"
            >
              <FaFacebook size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/201098386972"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-green-500"
            >
              <FaWhatsapp size={20} />
            </motion.a>
          </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20"
              >
                  <img
                    src="/WhatsApp Image 2025-10-23 at 18.04.01_02f0dc7f.jpg"
                    alt="Mohamed Atya Hawash"
                    className="w-full h-full object-cover"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-primary/20"
              >
                <FaGithub className="text-primary" size={20} />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-primary/20"
              >
                <FaLinkedin className="text-primary" size={18} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

 

      {/* Animated Divider - Bottom of Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute left-0 right-0 flex justify-center"
        style={{ bottom: '-60px' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.6 }}
          className="relative"
        >
          {/* Animated Dots */}
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 2.9 + index * 0.2, 
                  duration: 0.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                }}
                className="w-3 h-3 bg-primary rounded-full"
              />
            ))}
          </div>
          
          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 3.2, duration: 1 }}
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
