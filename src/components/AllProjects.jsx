import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaVuejs, FaDatabase, FaUsers, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const AllProjects = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

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
      title: 'Fans Var',
      description: 'A sports-focused social media platform that connects fans, players, and clubs in one place. It allows users to create profiles, follow their favorite teams, share posts, comment, and engage in real-time discussions about matches and sports events.',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel 10', 'Vue.js 3', 'MySQL', 'Tailwind CSS', 'JWT', 'Laravel Echo', 'Pusher', 'Laravel Socialite'],
      features: [
        'User authentication and profiles (Laravel + JWT)',
        'Social login integration (Google, Facebook, Twitter)',
        'Post creation, likes, and comments',
        'Real-time chat and notifications (Laravel Echo + Pusher)',
        'Club and player pages with stats and updates',
        'Admin dashboard to manage users, posts, and reports'
      ],
      github: 'https://github.com/mhmdatya72/fans-far',
      demo: 'http://fanzvar.rkmait.com/',
      status: 'Under Development',
      country: 'Egypt',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'Eat',
      description: 'A full-featured food delivery and restaurant management system built with Laravel and Vue.js. It enables restaurants to manage menus, orders, deliveries, and payments efficiently through a single platform. Originally based on a CodeCanyon template, it was heavily customized and optimized for performance and scalability.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel 10', 'Vue.js 3', 'MySQL', 'Tailwind CSS', 'Stripe', 'PayPal', 'Square', 'Clover', 'Uber Direct'],
      features: [
        'Multi-restaurant support (Admin, Restaurant, Delivery, and Customer panels)',
        'Real-time order tracking and delivery notifications',
        'Secure online payment integration (Stripe, PayPal, Square, Clover)',
        'Uber Direct, Square, and Clover integration for delivery and payment management',
        'Offers, coupons, and loyalty program',
        'Advanced analytics dashboard (sales, orders, performance)',
        'Optimized backend using Laravel caching and query tuning'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://eat.invasso.com/home',
      status: 'Live',
      country: 'Egypt',
      icon: <FaUsers className="text-primary" size={32} />
    },
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
      country: 'Egypt',
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
      country: 'Egypt',
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
      country: 'Egypt',
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
      country: 'Egypt',
      icon: <FaVuejs className="text-primary" size={32} />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" size={16} />
                Back to Portfolio
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              All Projects
            </h1>
            <div className="w-16"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg">
                    <div className="text-3xl text-primary">
                      {project.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Status */}
                {project.status && (
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Under Development' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      project.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                )}

                {/* Action Buttons - Fixed at bottom */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    <FaGithub className="mr-2" size={16} />
                    View Code
                  </a>
                  {project.demo !== '#' ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary hover:bg-sky-600 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-300 flex items-center justify-center"
                    >
                      <FaExternalLinkAlt className="mr-2" size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 px-6 py-3 rounded-lg text-center font-medium flex items-center justify-center cursor-not-allowed">
                      <FaExternalLinkAlt className="mr-2" size={16} />
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm always excited to take on new challenges and create amazing web applications.
              Let's discuss your project!
            </p>
            <Link
              to="/#contact"
              className="bg-primary hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AllProjects
