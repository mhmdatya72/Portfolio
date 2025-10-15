import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaRocket, FaChartLine, FaCode, FaUsers, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
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

  const experiences = [
    {
      title: "Full Stack Laravel Developer",
      company: "Kemedar",
      period: "2/2025 - Present",
      type: "Full-time",
      description: "Led backend development for a comprehensive real estate ecosystem using Laravel & Bootstrap. Working on Kemedar Proptech Super App - the first of its kind with the Super App system in the field of real estate technology.",
      achievements: [
        "Optimized database queries (−30% response time)",
        "Handled +1,000 concurrent users",
        "Improved platform scalability",
        "Developed multiple integrated systems (Kemework, Kemetro, Kemereit, etc.)"
      ],
      website: "https://kemedar.com/",
      icon: <FaRocket className="text-primary" size={24} />,
      color: "bg-blue-500"
    },
    {
      title: "Laravel Developer", 
      company: "Inom Tecks\\inomhub",
      period: "4/2025 - Present",
      type: "Part-time",
      description: "Built CRM systems for multiple clients, integrated APIs, improved reliability. Working on mobile app development, custom software solutions, and digital marketing services.",
      achievements: [
        "Built CRM systems for multiple clients",
        "Integrated various APIs",
        "Improved system reliability by 60%",
        "Developed mobile apps and custom software solutions"
      ],
      website: "https://inomhub.com/",
      icon: <FaCode className="text-primary" size={24} />,
      color: "bg-green-500"
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      type: "Freelance",
      description: "Delivered SEO-optimized Laravel websites with improved performance metrics.",
      achievements: [
        "↑40% user retention rate",
        "↓30% page load time",
        "SEO-optimized websites"
      ],
      icon: <FaChartLine className="text-primary" size={24} />,
      color: "bg-purple-500"
    },
    {
      title: "Intern",
      company: "Damanhour University PMU",
      period: "2023",
      type: "Internship",
      description: "Worked on 3 Laravel-based university systems improving accessibility.",
      achievements: [
        "Worked on 3 university systems",
        "Improved accessibility (+25%)",
        "Laravel-based development"
      ],
      icon: <FaUsers className="text-primary" size={24} />,
      color: "bg-orange-500"
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      {/* Animated Divider - Top of Experience Section */}
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
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              My professional journey and work experience
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5"></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-white dark:border-gray-800"></div>

                  {/* Experience Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Background Pattern */}
                      <div className={`absolute top-0 right-0 w-20 h-20 ${exp.color} opacity-5 rounded-full -translate-y-10 translate-x-10`}></div>
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                              {exp.icon}
                            </div>
                            <div>
                              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                                {exp.title}
                              </h3>
                              <p className="text-primary font-semibold">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                              <FaCalendarAlt className="mr-1" size={12} />
                              {exp.period}
                            </div>
                            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                              exp.type === 'Full-time' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                              exp.type === 'Freelance' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                              'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: achIndex * 0.1, duration: 0.3 }}
                                className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                              >
                                <div className={`w-2 h-2 ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Website Link */}
                        {exp.website && (
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:text-sky-600 transition-colors duration-300 text-sm font-medium"
                            >
                              <FaExternalLinkAlt className="mr-2" size={12} />
                              Visit Website
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
