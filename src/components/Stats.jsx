import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaRocket, FaBriefcase, FaUsers, FaGlobe } from 'react-icons/fa'

const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience', icon: <FaRocket /> },
  { value: 25, suffix: '+', label: 'Projects Delivered', icon: <FaBriefcase /> },
  { value: 12, suffix: '+', label: 'Happy Clients', icon: <FaUsers /> },
  { value: 1000, suffix: '+', label: 'Users Served', icon: <FaGlobe /> },
]

const useCountUp = (target, start) => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    const duration = 1600
    const startTime = performance.now()
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, start])
  return value
}

const Metric = ({ stat, index, start, featured = false }) => {
  const count = useCountUp(stat.value, start)
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ x: featured ? 0 : 5 }}
      className={`impact-metric${featured ? ' impact-metric-featured' : ''}`}
    >
      <div className="impact-metric-top"><span>METRIC / 0{index + 1}</span><span>{stat.icon}</span></div>
      <strong>{count.toLocaleString('en-US')}<em>{stat.suffix}</em></strong>
      <div className="impact-metric-label">{stat.label}</div>
      {featured && <div className="impact-graph" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>}
      <span className="impact-coordinate">{featured ? 'GLOBAL REACH · 2024—26' : 'VERIFIED OUTPUT'}</span>
    </motion.article>
  )
}

const Stats = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="stats" className="impact-section px-4">
      <div className="container-custom impact-container">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="impact-heading"
        >
          <div><span className="impact-kicker"><i /> SYSTEM REPORT / 001</span><h2>My Impact in <span>Numbers</span></h2></div>
          <p>Measured outcomes from the systems<br />and teams I've helped build.</p>
        </motion.header>

        <div className="impact-dashboard">
          <div className="impact-dashboard-bar"><span className="impact-terminal-lights"><i /><i /><i /></span><code>~/mohamed/impact --summary</code><span className="impact-dashboard-live"><i /> LIVE</span></div>
          <div className="impact-dashboard-grid">
            <Metric stat={STATS[3]} index={3} start={inView} featured />
            <div className="impact-side-metrics">
              {STATS.slice(0, 3).map((stat, index) => <Metric key={stat.label} stat={stat} index={index} start={inView} />)}
            </div>
            <div className="impact-dashboard-foot"><span>MODE <b>PRODUCTION</b></span><span>FOCUS <b>SCALABLE APPS</b></span><span className="impact-foot-note">CAREER SNAPSHOT <i>↗</i></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
