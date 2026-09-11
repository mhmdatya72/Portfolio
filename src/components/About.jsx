import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const achievements = [
    {
      icon: <FaRocket className="text-primary" size={24} />,
      title: 'Performance Optimization',
      description: 'Reduced API response times by 30% while serving 1,000+ concurrent users',
    },
    {
      icon: <FaUsers className="text-primary" size={24} />,
      title: 'Scalable Solutions',
      description: 'Built systems serving 1,000+ concurrent users',
    },
    {
      icon: <FaShieldAlt className="text-primary" size={24} />,
      title: 'Security Focus',
      description: 'Implemented robust security measures in all projects',
    },
    {
      icon: <FaCode className="text-primary" size={24} />,
      title: 'Clean Code',
      description: 'Maintainable and well-documented codebase',
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="section-eyebrow">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Who I Am
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="title-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content - Left Side */}
              <motion.div variants={itemVariants} className="glass-card glass-card-hover gradient-ring p-6 sm:p-8 space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a Software Engineering Team Lead &amp; Senior Full Stack Laravel Developer with 
                  over <span className="text-primary font-semibold">5+ years</span> of experience 
                  architecting and scaling web applications, Cloud ERPs, and SaaS platforms using 
                  PHP 8+, Laravel, MySQL, Vue.js, and RESTful APIs.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I lead engineering teams and manage full software development lifecycles, with a proven 
                  track record optimizing backend performance — reducing API response times by 30% and 
                  supporting 1,000+ concurrent users. My expertise spans system security, database design, 
                  and delivering complex B2B/Enterprise solutions in Agile environments.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, I enjoy learning new technologies, contributing to open-source 
                  projects, and sharing knowledge with the developer community. I believe in continuous 
                  learning and staying up-to-date with the latest industry trends and best practices.
                </p>
              </motion.div>

              {/* Key Stats - Right Side */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="glass-card glass-card-hover text-center p-6">
                      <div className="text-3xl sm:text-4xl font-bold title-gradient mb-2">5+</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Years Experience</div>
                    </div>
                    <div className="glass-card glass-card-hover text-center p-6">
                      <div className="text-3xl sm:text-4xl font-bold title-gradient mb-2">20+</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Web Applications</div>
                    </div>
                    <div className="glass-card glass-card-hover text-center p-6">
                      <div className="text-3xl sm:text-4xl font-bold title-gradient mb-2">1000+</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Users Served</div>
                    </div>
                    <div className="glass-card glass-card-hover text-center p-6">
                      <div className="text-3xl sm:text-4xl font-bold title-gradient mb-2">30%</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Performance Boost</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Achievements Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mt-16">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  className="glass-card glass-card-hover gradient-ring p-6 text-center group"
                >
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
