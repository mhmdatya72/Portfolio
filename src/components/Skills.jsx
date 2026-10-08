import React, { useState } from 'react'
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
  FaShieldAlt,
  FaSearch
} from 'react-icons/fa'
import { SiNextdotjs, SiReact } from 'react-icons/si'

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({})
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
        { name: 'React', icon: <SiReact className="text-cyan-400" size={20} />, level: null },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white" size={20} />, level: null },
        { name: 'JavaScript ES6+', icon: <FaJs className="text-yellow-500" size={20} />, level: 99 },
        { name: 'Vue.js', icon: <FaVuejs className="text-green-500" size={20} />, level: 95 },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={20} />, level: 99 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={20} />, level: 99 },
        { name: 'Sass (SCSS)', icon: <FaCss3Alt className="text-pink-500" size={20} />, level: 95 },
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
    },
    {
      title: 'Search Engine Optimization',
      icon: <FaSearch className="text-primary" size={24} />,
      skills: [
        { name: 'Technical SEO', icon: <FaSearch className="text-cyan-500" size={20} />, level: null },
        { name: 'On-Page Optimization', icon: <FaCode className="text-green-500" size={20} />, level: null },
        { name: 'SEO-Friendly Web Development', icon: <FaCode className="text-blue-500" size={20} />, level: null },
      ]
    }
  ]

  const coreStackNames = ['Laravel', 'PHP 8+', 'MySQL', 'Vue.js', 'React', 'Next.js', 'RESTful APIs']
  const coreStack = coreStackNames.map((name) => skillCategories.flatMap((category) => category.skills).find((skill) => skill.name === name))
  const getProficiency = (level) => level == null ? null : level >= 98 ? 'Expert' : level >= 95 ? 'Advanced' : 'Proficient'

  const SkillBar = ({ skill, level, index }) => (
    <div className="skill-row">
      <div className="skill-row-top"><span className="skill-row-icon">{skill.icon}</span><span className="skill-row-name">{skill.name}</span>{getProficiency(level) && <span className="skill-level">{getProficiency(level)}</span>}<code>{String(index + 1).padStart(2, '0')}</code></div>
      {level != null && <div className="skill-track" aria-label={`${skill.name}: ${getProficiency(level)}`}><motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: .8, delay: index * .04, ease: 'easeOut' }} style={{ width: level >= 98 ? '92%' : level >= 95 ? '78%' : '64%' }} /></div>}
    </div>
  )

  return (
    <section id="skills" className="skills-lab px-4 py-24">
      <div className="container-custom skills-shell">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <header className="skills-heading"><div><span className="skills-kicker"><i /> CAPABILITY MAP / 04</span><h2>Skills &amp; <span>Expertise</span></h2></div><p>A working toolkit, organized<br />by how I ship software.</p></header>
          <div className="skills-window">
            <div className="skills-window-bar"><span><i /><i /><i /></span><code>skills.config — Mohamed Atya Hawash</code><small>{skillCategories.length} MODULES LOADED</small></div>
            <div className="skills-index"><span>INDEX</span>{skillCategories.map((category, i) => <a key={category.title} href={`#skill-module-${i}`}><b>0{i + 1}</b>{category.title}</a>)}<div className="skills-index-status"><i /> ALL SYSTEMS OPERATIONAL</div></div>
            <div className="skills-modules">
              <div className="skills-core-stack"><span className="skills-core-label">CORE STACK <i /> DAILY DRIVER</span><div>{coreStack.map((skill) => <span className="skills-core-chip" key={skill.name}>{skill.icon}{skill.name}</span>)}</div></div>
              {skillCategories.map((category, categoryIndex) => (
                <motion.article id={`skill-module-${categoryIndex}`} key={category.title} variants={itemVariants} className={`skill-module${categoryIndex === 4 ? ' skill-module-soft' : ''}`}>
                  <div className="skill-module-head"><span className="skill-module-icon">{category.icon}</span><div><small>MODULE / 0{categoryIndex + 1}</small><h3>{category.title}</h3></div><span className="skill-module-count">{String(category.skills.length).padStart(2, '0')} ENTRIES</span></div>
                  <div className="skill-list">{(expandedCategories[categoryIndex] ? category.skills : category.skills.slice(0, 4)).map((skill, skillIndex) => <SkillBar key={skill.name} skill={skill} level={skill.level} index={skillIndex} />)}</div>
                  {category.skills.length > 4 && <button className="skill-show-more" type="button" aria-expanded={Boolean(expandedCategories[categoryIndex])} onClick={() => setExpandedCategories((current) => ({ ...current, [categoryIndex]: !current[categoryIndex] }))}>{expandedCategories[categoryIndex] ? 'Show less' : `Show ${category.skills.length - 4} more`}<span>{expandedCategories[categoryIndex] ? '−' : '+'}</span></button>}
                </motion.article>
              ))}
              <motion.aside variants={itemVariants} className="skills-growth"><span className="skills-kicker"><i /> IN PROGRESS</span><h3>Continuous learning<br />is part of the build.</h3><p>Currently exploring advanced Laravel features, microservices architecture, and modern frontend frameworks.</p><div><b>Always Learning</b><b>Problem Solver</b><b>Team Player</b><b>Detail Oriented</b></div></motion.aside>
            </div>
            <div className="skills-window-foot"><span>PHP · LARAVEL · VUE · MYSQL · API · SEO</span><span>END OF CONFIG <b>✓</b></span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
