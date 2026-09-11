import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaRocket, FaBriefcase, FaUsers, FaGlobe } from 'react-icons/fa'

const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience', icon: <FaRocket className="text-primary" size={26} /> },
  { value: 24, suffix: '+', label: 'Projects Delivered', icon: <FaBriefcase className="text-primary" size={26} /> },
  { value: 12, suffix: '+', label: 'Happy Clients', icon: <FaUsers className="text-primary" size={26} /> },
  { value: 1000, suffix: '+', label: 'Users Served', icon: <FaGlobe className="text-primary" size={26} /> },
]

const useCountUp = (target, start) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    const duration = 1600
    const startTime = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [target, start])

  return value
}

const StatCard = ({ stat, index, start }) => {
  const count = useCountUp(stat.value, start)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="stat-card group"
    >
      <motion.div
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="stat-icon"
      >
        {stat.icon}
      </motion.div>

      <div className="stat-number font-bold">
        <span>{count.toLocaleString('en-US')}</span>
        <span className="stat-suffix">{stat.suffix}</span>
      </div>

      <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
        {stat.label}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-sky-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  )
}

const Stats = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="stats" className="relative py-16 sm:py-20 px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="bg-dots absolute inset-0 opacity-40"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Animated Dots */}
          <div className="flex justify-center space-x-2 mb-4">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.4, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
                className="w-3 h-3 bg-primary rounded-full"
              />
            ))}
          </div>

          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            Key Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Impact in <span className="title-gradient">Numbers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} start={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats