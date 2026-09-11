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
      title: 'Cordiana ERP System',
      description: 'All-in-One Enterprise Business Management Platform. A comprehensive Cloud ERP solution featuring Sales CRM, POS, HR & Payroll, Financial Accounting, and Electronic Invoicing.',
      image: '/project-cordiana.jpg',
      technologies: ['Laravel', 'PHP 8+', 'MySQL', 'Vue.js', 'Bootstrap', 'RESTful APIs'],
      features: [
        'Cloud ERP: Sales CRM, POS, HR & Payroll, Financial Accounting, E-Invoicing',
        'Modular Eloquent database schemas and RESTful API endpoints',
        'Role-Based Access Control (RBAC) for secure multi-tenant operations',
        'Real-time reporting workflows and seamless data integration'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://cordiana-sys.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaDatabase className="text-primary" size={32} />
    },
    {
      title: 'One Step Industrial',
      description: 'B2B E-Commerce & Equipment Supply Platform. A scalable B2B industrial marketplace supporting multi-category product hierarchies and dynamic machinery quote requests.',
      image: '/project-onestep.jpg',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap', 'RESTful APIs'],
      features: [
        'Scalable B2B industrial marketplace with multi-category hierarchies',
        'Dynamic machinery quote requests',
        'Optimized search across 1,000+ SKU items (+35% API performance)',
        'Custom back-office dashboards for sales and order tracking'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://onestepcorp.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaGlobe className="text-primary" size={32} />
    },
    {
      title: 'Tour Egypt Club',
      description: 'Travel & Tourism Booking Engine. An interactive travel engine featuring dynamic tour itineraries, transport reservations, and automated quote systems.',
      image: '/project-tour.jpg',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
      features: [
        'Dynamic tour itineraries and transport reservations',
        'Automated quote systems',
        'Multi-category filtering mechanisms',
        'Optimized UI components boosting engagement and conversions'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://touregyptclub.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaVuejs className="text-primary" size={32} />
    },
    {
      title: 'Al Manarat Al Munira',
      description: 'Heavy Equipment & Crane Fleet Management Platform. An enterprise web solution for industrial equipment hire, service management, and engineering project tracking.',
      image: '/project-almanarat.jpg',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
      features: [
        'Enterprise web solution for equipment hire and service management',
        'Secure backend workflows for service requests',
        'Automated client notifications and quote handling',
        'Engineering project tracking'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://almanratalmonerah.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaLaravel className="text-primary" size={32} />
    },
    {
      title: 'Taggz App',
      description: 'AI-Powered Event Photo Matching Platform. Backend APIs and media processing workflows for an AI-driven event platform that matches and distributes event photos via facial recognition.',
      image: '/project-taggz.jpg',
      technologies: ['Laravel', 'PHP 8+', 'MySQL', 'RESTful APIs', 'Media Processing'],
      features: [
        'AI facial recognition photo matching and distribution',
        'Multi-role architectures for Hosts, Photographers, and Attendees',
        'Batch file uploads and QR invitations',
        'Real-time gallery sync'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://taggz.app/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'Al-Nasser Group Portal',
      description: 'Enterprise Retail Operations & Delivery Dashboard. An enterprise internal portal for Al-Nasser (leading Kuwaiti retail brand) to manage logistics, delivery operations, and multi-store workflows.',
      image: '/alnasser-brand.jpg',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
      features: [
        'Enterprise portal for logistics and delivery operations',
        'Multi-store workflows and operational dashboards',
        'Role-based access control (RBAC)',
        'Multi-tenant security layers and optimized reporting'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://alnasser.themok.company/',
      status: 'Live',
      country: 'Kuwait',
      icon: <FaDatabase className="text-primary" size={32} />
    }
  ]


  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8 sm:mb-12"
        >
          <motion.span variants={itemVariants} className="section-eyebrow">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            Live Work
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="title-gradient">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></motion.div>
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A showcase of live client work — 24+ projects delivered, from enterprise ERPs to AI-powered platforms
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="glass gradient-ring glass-card-hover rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-emerald-500 text-white text-[11px] sm:text-xs font-bold rounded-full shadow-lg">
                    <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mr-1.5 align-middle"></span>
                    {project.status}
                  </span>
                  <span className="px-2.5 py-1 bg-white/90 text-gray-800 text-[11px] sm:text-xs font-semibold rounded-full shadow-lg">
                    {project.country}
                  </span>
                </div>
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
                  {project.features.map((feature, featureIndex) => (
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
            </motion.div>
          ))}
        </motion.div>

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="glass-card glass-card-hover gradient-ring rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm always excited to take on new challenges and create amazing web applications.
              Let's discuss your project!
            </p>
            <a
              href="#contact"
              className="bg-primary hover:bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-colors duration-300 inline-block text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
