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
  FaDatabase,
  FaServer,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaBug,
  FaShieldAlt
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
        { name: 'RESTful APIs', icon: <FaCode className="text-green-500" size={20} />, level: 99 },
        { name: 'Composer', icon: <FaCode className="text-indigo-500" size={20} />, level: 96 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <FaCode className="text-primary" size={24} />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={20} />, level: 99 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={20} />, level: 99 },
        { name: 'Sass (SCSS)', icon: <FaCss3Alt className="text-pink-500" size={20} />, level: 95 },
        { name: 'JavaScript ES6+', icon: <FaJs className="text-yellow-500" size={20} />, level: 99 },
        { name: 'Vue.js', icon: <FaVuejs className="text-green-500" size={20} />, level: 95 },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" size={20} />, level: 99 },
        { name: 'Blade Templating', icon: <FaCode className="text-cyan-500" size={20} />, level: 97 },
      ]
    },
    {
      title: 'API Integration & Testing',
      icon: <FaServer className="text-primary" size={24} />,
      skills: [
        { name: 'Postman', icon: <FaCode className="text-orange-500" size={20} />, level: 96 },
        { name: 'JSON / XML', icon: <FaCode className="text-blue-500" size={20} />, level: 97 },
        { name: 'Laravel API Resources', icon: <FaLaravel className="text-red-500" size={20} />, level: 97 },
        { name: 'JWT / Sanctum', icon: <FaShieldAlt className="text-green-500" size={20} />, level: 96 },
        { name: 'PHPUnit', icon: <FaBug className="text-yellow-500" size={20} />, level: 95 },
        { name: 'Laravel Dusk', icon: <FaBug className="text-red-500" size={20} />, level: 93 },
      ]
    },
    {
      title: 'Tools & Deployment',
      icon: <FaGitAlt className="text-primary" size={24} />,
      skills: [
        { name: 'Git / GitHub / GitLab', icon: <FaGitAlt className="text-orange-500" size={20} />, level: 99 },
        { name: 'cPanel / WHM', icon: <FaServer className="text-gray-500" size={20} />, level: 99 },
        { name: 'AWS / VPS / GoDaddy', icon: <FaServer className="text-purple-500" size={20} />, level: 96 },
        { name: 'SSL & Domain Linking', icon: <FaShieldAlt className="text-cyan-500" size={20} />, level: 97 },
        { name: 'AWS S3 / Backblaze B2', icon: <FaDatabase className="text-blue-500" size={20} />, level: 94 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers className="text-primary" size={24} />,
      skills: [
        { name: 'Advanced Problem Solving & Bug Debugging', icon: <FaLightbulb className="text-yellow-500" size={20} />, level: 99 },
        { name: 'Agile Leadership & Team Collaboration', icon: <FaUsers className="text-blue-500" size={20} />, level: 98 },
        { name: 'Technical Communication & Stakeholder Alignment', icon: <FaCode className="text-green-500" size={20} />, level: 97 },
        { name: 'Adaptability & Rapid Onboarding', icon: <FaBug className="text-red-500" size={20} />, level: 97 },
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
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-gradient-to-r from-primary to-sky-600 h-2 rounded-full"
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <span className="section-eyebrow">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & <span className="title-gradient">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card glass-card-hover gradient-ring p-4 sm:p-6 md:p-8"
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
            <div className="glass-card glass-card-hover gradient-ring p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
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
