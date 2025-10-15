import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaVuejs, FaDatabase, FaUsers, FaArrowRight, FaGlobe } from 'react-icons/fa'

const Projects = () => {
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

  const projects = [
    {
      title: 'Educhain Learning Management System',
      description: 'Developed and customized the Educhain Learning Management System as a SaaS platform using Laravel and Blade templating engine. Built dynamic interfaces for managing courses, users, and blockchain-based certificates with full CRUD operations and optimized performance.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'Blade Templates', 'MySQL', 'AJAX', 'jQuery', 'Bootstrap', 'SaaS'],
      features: [
        'Dynamic course management system',
        'Blockchain-based certificates',
        'Secure user authentication & access control',
        'AJAX-powered seamless interactions',
        'Optimized database performance'
      ],
      github: 'https://github.com/mhmdatya72/educhain-lms',
      demo: 'https://educhain.inomhub.com/',
      status: 'Live',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'Out Seller CRM',
      description: 'Comprehensive CRM system with advanced lead scoring, segmentation, and automated workflows to help sales teams manage and convert leads more effectively.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel 9', 'Bootstrap', 'MySQL', 'Chart.js', 'Mail System'],
      features: [
        'Lead scoring and segmentation',
        'Automated email campaigns',
        'Sales pipeline management',
        'Analytics and reporting',
        'Team collaboration tools'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://outseller.tech/',
      status: 'Live',
      icon: <FaDatabase className="text-primary" size={32} />
    },
    {
      title: 'Kemework Marketplace',
      description: 'Freelance marketplace backend optimization project that improved API performance by 30% and successfully handled 1,000+ concurrent users with enhanced security measures.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel 8', 'Redis', 'MySQL', 'API Optimization', 'Load Balancing'],
      features: [
        'High-performance API endpoints',
        'Redis caching implementation',
        'Database query optimization',
        'Load balancing setup',
        'Security enhancements'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'http://kemework.com/',
      status: 'Live',
      icon: <FaLaravel className="text-primary" size={32} />
    },
    {
      title: 'Kemedar — Real Estate Platform',
      description: 'Kemedar is a modern PropTech (Property Technology) platform designed to digitalize and simplify the real estate market. It provides a unified ecosystem for property management, buying, selling, renting, and related services using Microservices Architecture for high performance and scalability.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'Blade Templates', 'MongoDB', 'Microservices', 'Docker', 'Nginx', 'JWT'],
      features: [
        'Microservices Architecture for scalability',
        'MongoDB for complex property data',
        'API Gateway & JWT Authentication',
        '40% improved response times',
        'Docker containerized deployment'
      ],
      github: 'https://github.com/mhmdatya72/kemedar-platform',
      demo: 'http://kemedar.com/',
      status: 'Live',
      icon: <FaVuejs className="text-primary" size={32} />
    }
  ]


  return (
    <section id="projects" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800">
      {/* Animated Divider - Top of Projects Section */}
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

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A showcase of my recent work and projects that demonstrate my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg">
                    <div className="text-2xl text-primary">
                      {project.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons - Fixed at bottom */}
                <div className="flex gap-2 sm:gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white px-3 sm:px-4 py-2 rounded-lg text-center text-xs sm:text-sm font-medium transition-colors duration-300"
                  >
                    <FaGithub className="inline mr-1 sm:mr-2" size={12} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-sky-600 text-white px-3 sm:px-4 py-2 rounded-lg text-center text-xs sm:text-sm font-medium transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="inline mr-1 sm:mr-2" size={12} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-primary hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View All Projects
            <FaArrowRight size={16} />
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm always excited to take on new challenges and create amazing web applications.
              Let's discuss your project!
            </p>
            <a
              href="#contact"
              className="bg-primary hover:bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 inline-block text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
