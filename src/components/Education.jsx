import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa'

const Education = () => {
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

  const educationData = {
    degree: "Bachelor's Degree in Computers and Information (Information Systems)",
    university: "Damanhour University — Faculty of Computers and Information",
    graduationYear: "2024",
    description: "Studied under the credit hour system focusing on web technologies, databases, and software engineering.",
    highlights: [
      "Web Technologies & Development",
      "Database Design & Management", 
      "Software Engineering Principles",
      "Information Systems Analysis"
    ],
    facebookPage: "https://www.facebook.com/FCIDamanhour?mibextid=ZbWKwL"
  }

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      {/* Animated Divider - Top of Education Section */}
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
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              My academic journey and educational background
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              {/* Degree Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <FaGraduationCap className="text-primary" size={32} />
              </div>

              {/* Degree Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {educationData.degree}
              </h3>

              {/* University */}
              <div className="flex items-center justify-center mb-4">
                <FaUniversity className="text-primary mr-3" size={20} />
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {educationData.university}
                </span>
              </div>

              {/* Graduation Year */}
              <div className="flex items-center justify-center mb-6">
                <FaCalendarAlt className="text-primary mr-3" size={20} />
                <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                  Graduated in {educationData.graduationYear}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8 leading-relaxed">
                {educationData.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {educationData.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                  >
                    <FaAward className="text-primary mr-3 flex-shrink-0" size={16} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Facebook Page Link */}
              {educationData.facebookPage && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                  <a
                    href={educationData.facebookPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-sky-600 transition-colors duration-300 text-sm font-medium"
                  >
                    <FaFacebook className="mr-2" size={16} />
                    Visit Faculty Facebook Page
                    <FaExternalLinkAlt className="ml-2" size={12} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
