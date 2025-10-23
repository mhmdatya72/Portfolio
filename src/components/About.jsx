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
      description: 'Reduced API response times by 30% at Kemework',
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
    <section id="about" className="pt-24 pb-20 px-4 bg-gray-50 dark:bg-gray-800">
      {/* Animated Divider - Top of About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex justify-center mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
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
                  delay: 0.9 + index * 0.2, 
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
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      </motion.div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content - Left Side */}
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate Full Stack Web Developer with over 3 years of experience 
                  specializing in Laravel and modern web technologies. I love creating 
                  efficient, scalable, and user-friendly web applications that solve real-world problems.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I've worked on multiple Laravel-based platforms improving performance, security, 
                  and scalability. At Kemework, I optimized APIs serving 1,000+ concurrent users, 
                  reducing response times by 30%. My expertise spans from backend API development 
                  to frontend user interfaces, ensuring seamless integration and optimal user experience.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  When I'm not coding, I enjoy learning new technologies, contributing to open-source 
                  projects, and sharing knowledge with the developer community. I believe in continuous 
                  learning and staying up-to-date with the latest industry trends and best practices.
                </p>
              </motion.div>

              {/* Key Stats - Right Side */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                      <div className="text-3xl font-bold text-primary mb-2">3+</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                      <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Users Served</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                      <div className="text-3xl font-bold text-primary mb-2">30%</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Performance Boost</div>
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
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="card p-6 text-center group"
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
