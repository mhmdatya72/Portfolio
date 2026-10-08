import React from 'react'
import { motion } from 'framer-motion'
import { FaCogs, FaLayerGroup, FaCode, FaRocket, FaArrowRight, FaSearch } from 'react-icons/fa'

const services = [
  {
    title: 'Business Platforms & ERP',
    description: 'Custom cloud business systems that connect operations, teams, and data in one dependable workspace.',
    details: ['ERP workflows', 'CRM & POS', 'Inventory and finance'],
    icon: <FaLayerGroup />,
    code: 'platforms',
  },
  {
    title: 'Backend Systems & APIs',
    description: 'Secure Laravel backends and REST APIs built to support complex products and integrations.',
    details: ['Laravel architecture', 'RESTful APIs', 'RBAC and integrations'],
    icon: <FaCode />,
    code: 'backend',
  },
  {
    title: 'SaaS & Full-Stack Products',
    description: 'From product requirements to deployment, I build web applications that are ready to grow.',
    details: ['SaaS applications', 'Vue.js interfaces', 'Dashboards'],
    icon: <FaCogs />,
    code: 'products',
  },
  {
    title: 'Performance & Team Leadership',
    description: 'Improve existing systems and help engineering teams ship reliable, maintainable software.',
    details: ['Query optimization', 'Code reviews', 'Team mentorship'],
    icon: <FaRocket />,
    code: 'engineering',
  },
  {
    title: 'Search Engine Optimization',
    description: 'SEO improvements that make websites easier to discover, faster to use, and technically sound for search engines.',
    details: ['Technical SEO', 'On-page optimization', 'Search-ready web builds'],
    icon: <FaSearch />,
    code: 'seo',
  },
]

const Services = () => (
  <section id="services" className="services-section px-4 py-24">
    <div className="container-custom services-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="services-heading"
        >
          <div><span className="services-kicker"><i /> WHAT I BUILD / 05</span><h2>Services<span>.</span></h2></div>
          <p>From a technical challenge<br />to software built for real work.</p>
        </motion.header>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="service-card"
            >
              <div className="service-card-top"><span>0{index + 1} / SERVICE</span><code>src/{service.code}</code></div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-details">{service.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
              <a href="#contact" className="service-link">Discuss a project <FaArrowRight /></a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default Services
