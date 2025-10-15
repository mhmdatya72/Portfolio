import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaLaravel, 
  FaPhp, 
  FaVuejs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaGitAlt, 
  FaFigma, 
  FaTrello,
  FaDatabase,
  FaServer,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaBug
} from 'react-icons/fa'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <FaServer className="text-primary" size={24} />,
      skills: [
        { name: 'PHP 8+', icon: <FaPhp className="text-purple-500" size={20} />, level: 99 },
        { name: 'Laravel', icon: <FaLaravel className="text-red-500" size={20} />, level: 99 },
        { name: 'MySQL', icon: <FaDatabase className="text-blue-500" size={20} />, level: 99 },
        { name: 'MongoDB', icon: <FaDatabase className="text-green-500" size={20} />, level: 95 },
        { name: 'Microservices', icon: <FaServer className="text-indigo-500" size={20} />, level: 94 },
        { name: 'REST APIs', icon: <FaCode className="text-green-500" size={20} />, level: 99 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <FaCode className="text-primary" size={24} />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={20} />, level: 99 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={20} />, level: 99 },
        { name: 'JavaScript ES6+', icon: <FaJs className="text-yellow-500" size={20} />, level: 99 },
        { name: 'Vue.js', icon: <FaVuejs className="text-green-500" size={20} />, level: 95 },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" size={20} />, level: 99 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaGitAlt className="text-primary" size={24} />,
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" size={20} />, level: 99 },
        { name: 'Postman', icon: <FaCode className="text-orange-500" size={20} />, level: 96 },
        { name: 'Figma', icon: <FaFigma className="text-pink-500" size={20} />, level: 95 },
        { name: 'Trello', icon: <FaTrello className="text-blue-500" size={20} />, level: 96 },
        { name: 'cPanel', icon: <FaServer className="text-gray-500" size={20} />, level: 99 },
        { name: 'Hostinger', icon: <FaServer className="text-purple-500" size={20} />, level: 96 },
        { name: 'CloudPanel', icon: <FaServer className="text-cyan-500" size={20} />, level: 95 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers className="text-primary" size={24} />,
      skills: [
        { name: 'Teamwork', icon: <FaUsers className="text-blue-500" size={20} />, level: 99 },
        { name: 'Communication', icon: <FaCode className="text-green-500" size={20} />, level: 99 },
        { name: 'Problem Solving', icon: <FaLightbulb className="text-yellow-500" size={20} />, level: 99 },
        { name: 'Debugging', icon: <FaBug className="text-red-500" size={20} />, level: 99 },
      ]
    }
  ]

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {skill.icon}
          <span className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base truncate">{skill.name}</span>
        </div>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-gradient-to-r from-primary to-sky-600 h-2 rounded-full"
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="section-padding">
      {/* Animated Divider - Top of Skills Section */}
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              A comprehensive overview of my technical skills and professional capabilities
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card p-4 sm:p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 text-center"
          >
            <div className="card p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always eager to learn new technologies and improve my skills. Currently exploring 
                advanced Laravel features, microservices architecture, and modern frontend frameworks 
                to stay at the forefront of web development.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-4">
                <span className="px-3 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                  Always Learning
                </span>
                <span className="px-3 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-3 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                  Team Player
                </span>
                <span className="px-3 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                  Detail Oriented
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
