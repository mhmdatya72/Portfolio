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
      website: "https://corddigital.com/",
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
      website: "https://seo-wolves.com/",
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
      website: "https://themok.company/",
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
    <section id="experience" className="career-section px-4 py-24">
      <div className="container-custom career-shell">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <header className="career-heading">
            <div><span className="career-kicker"><i /> CAREER JOURNAL / 03</span><h2>Professional<br /><span>Experience</span></h2></div>
            <p>Roles, teams, and systems<br />shipped along the way.</p>
          </header>

          <div className="career-ledger">
            <div className="career-ledger-head"><span>ROLE / COMPANY</span><span>PERIOD</span><span>ENGAGEMENT</span></div>
            {experiences.map((exp, index) => (
              <motion.article key={`${exp.company}-${exp.title}`} variants={itemVariants} className="career-entry">
                <div className="career-entry-index"><span>0{index + 1}</span><i /></div>
                <div className="career-entry-main">
                  <div className="career-entry-titleline"><span className="career-entry-icon">{exp.icon}</span><div><h3>{exp.title}</h3>{exp.website ? <a className="career-company-link" href={exp.website} target="_blank" rel="noopener noreferrer">{exp.company}<FaExternalLinkAlt aria-hidden="true" /></a> : <p>{exp.company}</p>}</div></div>
                  <p className="career-entry-description">{exp.description}</p>
                  <div className="career-entry-results"><span>SELECTED CONTRIBUTIONS</span><ul>{exp.achievements.map((achievement, achIndex) => <li key={achIndex}><b>↳</b>{achievement}</li>)}</ul></div>
                </div>
                <div className="career-entry-meta"><span><FaCalendarAlt />{exp.period}</span><b>{exp.type}</b></div>
              </motion.article>
            ))}
            <div className="career-ledger-foot"><span>END OF CURRENT RECORD</span><span>6 POSITIONS INDEXED</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
