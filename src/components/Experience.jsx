import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaRocket, FaChartLine, FaCode, FaUsers, FaExternalLinkAlt } from 'react-icons/fa'

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
      title: "Software Engineering Team Lead / Senior Full Stack Developer",
      company: "Cord Digital",
      period: "Jan 2022 – Present",
      type: "Full-time",
      description: "Head of the Software Engineering Department, driving technical architecture decisions, overseeing code reviews, and mentoring the development team across all active projects.",
      achievements: [
        "Developed and maintained 20+ web applications using Laravel, PHP, MySQL, Vue.js, and Bootstrap",
        "Engineered custom ERP systems, dashboards, RBAC, inventory, sales, and financial reporting workflows",
        "Managed the full software development lifecycle (SDLC) — from requirements analysis to deployment",
        "Optimized database indexing and Eloquent queries for high-performing, scalable solutions"
      ],
      icon: <FaRocket className="text-primary" size={24} />,
      color: "bg-blue-500"
    },
    {
      title: "Full Stack Laravel Developer", 
      company: "SEO Wolves",
      period: "Jul 2026 – Present",
      type: "Part-time",
      description: "Developing high-performance, SEO-friendly web applications, custom CMS solutions, and digital marketing tools using Laravel, PHP, and JavaScript.",
      achievements: [
        "Improved core web vitals and database performance (up to -30% page load times)",
        "Built scalable RESTful APIs for client platforms",
        "Integrated automated analytics tools for reporting and performance tracking"
      ],
      icon: <FaChartLine className="text-primary" size={24} />,
      color: "bg-green-500"
    },
    {
      title: "Senior Full Stack Laravel Developer",
      company: "The Mok Company",
      period: "Jan 2024 – Jun 2026",
      type: "Part-time",
      description: "Architected and maintained enterprise-grade web applications, SaaS platforms, and internal dashboards, including Al-Nasser Group Portal and Taggz AI App.",
      achievements: [
        "Designed modular RESTful APIs and Eloquent schemas supporting RBAC and real-time analytics",
        "Optimized backend architectures, database queries, and server-side caching",
        "Ensured low latency and high availability for high-traffic applications"
      ],
      icon: <FaCode className="text-primary" size={24} />,
      color: "bg-indigo-500"
    },
    {
      title: "Full Stack Developer",
      company: "Kemeder / Kemework",
      period: "Jun 2021 – Dec 2021",
      type: "Contract",
      description: "Led the backend development of the Kemework freelance marketplace, delivering 20+ core features with Laravel and Bootstrap.",
      achievements: [
        "Implemented Redis/Laravel caching, reducing API response times by 30% while serving 1,000+ concurrent users",
        "Integrated real-time broadcasting notifications and payment gateways (+35% success rate, +22% engagement)",
        "Revamped backend architecture for improved performance and reliability"
      ],
      icon: <FaRocket className="text-primary" size={24} />,
      color: "bg-purple-500"
    },
    {
      title: "Full Stack Developer",
      company: "Inom Tecks",
      period: "Jan 2020 – May 2021",
      type: "Full-time",
      description: "Built core CRM modules and improved system reliability for multiple client projects.",
      achievements: [
        "Built core CRM modules for 5+ client projects, reducing sales cycles by 15%",
        "Achieved 95% client satisfaction rate",
        "Improved reliability via CI/CD pipelines, PHPUnit testing, and API versioning (-60% bugs)"
      ],
      icon: <FaUsers className="text-primary" size={24} />,
      color: "bg-orange-500"
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2019 – Present",
      type: "Freelance",
      description: "Delivered SEO-optimized web applications and e-commerce portals for clients, managing end-to-end project deliveries.",
      achievements: [
        "Built 5+ SEO-optimized web applications and e-commerce portals (+40% user retention)",
        "Improved overall speed performance by 30%",
        "Integrated analytics and payment solutions (+20% conversions and delivery speed)"
      ],
      icon: <FaChartLine className="text-primary" size={24} />,
      color: "bg-cyan-500"
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
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
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="title-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
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
                      className="glass-card glass-card-hover gradient-ring rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
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
                              exp.type === 'Part-time' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
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
                                animate={{ opacity: 1, x: 0 }}
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
