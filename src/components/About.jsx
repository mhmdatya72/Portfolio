import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa'

const achievements = [
  { icon: <FaRocket />, title: 'Performance Optimization', description: 'Reduced API response times by 30% while serving 1,000+ concurrent users', tag: 'perf' },
  { icon: <FaUsers />, title: 'Scalable Solutions', description: 'Built systems serving 1,000+ concurrent users', tag: 'scale' },
  { icon: <FaShieldAlt />, title: 'Security Focus', description: 'Implemented robust security measures in all projects', tag: 'secure' },
  { icon: <FaCode />, title: 'Clean Code', description: 'Maintainable and well-documented codebase', tag: 'quality' },
]

const metrics = [
  { value: '05+', label: 'YEARS BUILDING' },
  { value: '21+', label: 'WEB APPLICATIONS' },
  { value: '1K+', label: 'USERS SUPPORTED' },
  { value: '30%', label: 'FASTER API' },
]

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const About = () => (
  <section id="about" className="about-lab py-24 px-4">
    <div className="container-custom about-shell">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="about-content"
      >
        <motion.div variants={rise} className="about-heading">
          <span className="about-kicker"><i /> PROFILE / 01</span>
          <h2>About <span>Me</span><sup>01</sup></h2>
          <p>A little context behind the code.</p>
        </motion.div>

        <div className="about-main-grid">
          <motion.article variants={rise} className="about-story">
            <div className="about-story-top"><span>01 — THE ENGINEER</span><span className="about-live"><i /> AVAILABLE FOR IMPACT</span></div>
            <div className="about-big-mark" aria-hidden="true">{`{ }`}</div>
            <p className="about-lead">I turn complex business needs into <em>software that scales.</em></p>
            <p className="about-copy">I'm a Software Engineering Team Lead &amp; Senior Full Stack Laravel Developer with over <b>5+ years</b> of experience architecting and scaling web applications, Cloud ERPs, and SaaS platforms using PHP 8+, Laravel, MySQL, Vue.js, and RESTful APIs. I also work on SEO to help websites improve their visibility in search.</p>
            <p className="about-copy">I lead engineering teams and manage full software development lifecycles, with a proven track record optimizing backend performance — reducing API response times by 30% and supporting 1,000+ concurrent users. My expertise spans system security, database design, SEO-friendly web development, and delivering complex B2B/Enterprise solutions in Agile environments.</p>
            <div className="about-focus"><span>FOCUS</span><b>Architecture</b><b>Backend</b><b>SEO</b><b>Team Leadership</b><b>SaaS</b></div>
            <p className="about-footnote">Away from the keyboard, I explore new technologies, contribute to open source, and share what I learn with the developer community.</p>
          </motion.article>

          <motion.aside variants={rise} className="about-console">
            <div className="about-console-head"><span><i /><i /><i /></span><b>impact.log</b><small>LIVE DATA</small></div>
            <div className="about-metrics">
              {metrics.map((metric, index) => (
                <div className="about-metric" key={metric.label}>
                  <span className="about-metric-index">0{index + 1}</span>
                  <strong>{metric.value}</strong>
                  <small>{metric.label}</small>
                  <span className="about-metric-line" />
                </div>
              ))}
            </div>
            <div className="about-console-foot"><span>STATUS</span><b><i /> BUILDING WHAT'S NEXT</b></div>
          </motion.aside>
        </div>

        <motion.div variants={rise} className="about-principles">
          <div className="about-principles-title"><span>02 — HOW I BUILD</span><p>Principles in production</p></div>
          <div className="about-principle-list">
            {achievements.map((item, index) => (
              <motion.article key={item.tag} whileHover={{ x: 5 }} className="about-principle">
                <span className="about-principle-index">0{index + 1}</span>
                <span className="about-principle-icon">{item.icon}</span>
                <span className="about-principle-text"><b>{item.title}</b><small>{item.description}</small></span>
                <code>{item.tag}</code>
                <span className="about-principle-arrow">↗</span>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default About
