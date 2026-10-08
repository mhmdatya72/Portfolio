import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaArrowDown, FaDownload, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const roles = ['Full Stack Developer', 'Laravel & Vue.js Architect', 'SEO-Friendly Web Builds', 'Software Engineering Team Lead']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 2800)
    return () => clearInterval(timer)
  }, [])

  const downloadCv = () => {
    const link = document.createElement('a')
    link.href = '/Mohamed_Atya_Hawash.pdf'
    link.download = 'Mohamed_Atya_Hawash_CV.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const socials = [
    { label: 'GitHub', href: 'https://github.com/mhmdatya72', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-atya-hawash-21853b344', icon: FaLinkedin },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1CVzc6uuKV/', icon: FaFacebook },
    { label: 'WhatsApp', href: 'https://wa.me/201098386972', icon: FaWhatsapp },
  ]

  return (
    <section id="home" className="hero-section dev-hero relative min-h-screen overflow-hidden px-5 pb-20 pt-28 sm:px-8">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container-custom relative z-10 mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="code-path mb-8">
          <span className="path-muted">~/</span> mohamed-atya <span className="path-muted">/</span> portfolio <span className="path-muted">/</span> <span className="path-file">index.tsx</span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .1, delayChildren: .12 } } }} className="dev-intro">
            <motion.div variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }} className="dev-status"><span className="availability-dot" /> OPEN_TO_WORK <span className="status-value">= true</span></motion.div>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="dev-kicker">SOFTWARE ENGINEER <span>//</span> EGYPT</motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="dev-title">
              <span className="dev-title-line"><span className="title-prompt">&lt;</span>Mohamed</span>
              <span className="dev-title-line">Atya Hawash<span className="title-prompt"> /&gt;</span></span>
            </motion.h1>
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="dev-role-line">
              <span className="syntax-keyword">const</span> role <span className="syntax-operator">=</span>
              <AnimatePresence mode="wait"><motion.span key={roleIndex} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -7 }} transition={{ duration: .22 }} className="syntax-string">'{roles[roleIndex]}'</motion.span></AnimatePresence><span className="syntax-semicolon">;</span>
            </motion.div>
            <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="dev-description">
              I turn complex ideas into reliable software. I build enterprise platforms, Laravel products, and SEO-friendly web experiences from architecture to deployment.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="dev-actions">
              <a href="#projects" className="dev-button dev-button-primary"><span>View selected work</span><FaArrowRight size={13} /></a>
              <button type="button" onClick={downloadCv} className="dev-button"><FaDownload size={13} /><span>Download CV</span></button>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="dev-social-row">
              <span className="social-label">LINKS <span>//</span></span>
              {socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"><Icon size={15} /></a>)}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 22, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .7, delay: .2 }} className="ide-window">
            <div className="ide-titlebar">
              <div className="ide-lights"><i /><i /><i /></div>
              <div className="ide-tabs"><span className="ide-tab-active"><b className="file-dot" /> developer.ts</span><span className="ide-tab-muted">profile.jpg</span></div>
              <span className="ide-workspace">PORTFOLIO</span>
            </div>
            <div className="ide-breadcrumb"><span>src</span><b>/</b><span>data</span><b>/</b><strong>developer.ts</strong></div>
            <div className="ide-editor">
              <div className="code-lines" aria-label="Developer profile code">
                <div><i>01</i><span className="syntax-purple">export const</span> <span className="syntax-blue">developer</span> <span className="syntax-operator">=</span> {'{'}</div>
                <div><i>02</i><span className="code-indent" /><span className="syntax-key">name</span>: <span className="syntax-string">'Mohamed Atya Hawash'</span>,</div>
                <div><i>03</i><span className="code-indent" /><span className="syntax-key">title</span>: <span className="syntax-string">'Full Stack Engineer'</span>,</div>
                <div><i>04</i><span className="code-indent" /><span className="syntax-key">experience</span>: <span className="syntax-number">5</span>,</div>
                <div><i>05</i><span className="code-indent" /><span className="syntax-key">location</span>: <span className="syntax-string">'Egypt'</span>,</div>
                <div><i>06</i><span className="code-indent" /><span className="syntax-key">stack</span>: [</div>
                <div><i>07</i><span className="code-indent double" /><span className="syntax-string">'Laravel'</span>, <span className="syntax-string">'Vue.js'</span>,</div>
                <div><i>08</i><span className="code-indent double" /><span className="syntax-string">'PHP'</span>, <span className="syntax-string">'MySQL'</span></div>
                <div><i>09</i><span className="code-indent" />],</div>
                <div><i>10</i><span className="code-indent" /><span className="syntax-key">available</span>: <span className="syntax-boolean">true</span></div>
                <div><i>11</i>{'}'}<span className="syntax-semicolon">;</span><span className="terminal-caret" /></div>
              </div>
              <div className="ide-photo-wrap"><img src="/mohamed-atya-workspace.png" alt="Mohamed Atya Hawash working at his desk" /><span>mohamed.jpg</span></div>
            </div>
            <div className="ide-terminal-head"><span>TERMINAL</span><span>OUTPUT</span><span className="terminal-live">● RUNNING</span></div>
            <div className="ide-terminal"><span className="syntax-green">➜</span> <span className="syntax-blue">npm run</span> build <span className="terminal-success">✓ compiled successfully</span></div>
            <div className="ide-statusbar"><span><b>⌘</b> main*</span><span>UTF-8</span><span>TypeScript React</span><span className="status-ready">● Ready</span></div>
          </motion.div>
        </div>
        <div className="dev-stack-strip"><span>BUILT WITH</span><b>PHP</b><b>Laravel</b><b>Vue.js</b><b>MySQL</b><b>REST APIs</b><b>SEO</b><span className="stack-note">clean code / shipped with care</span></div>
      </div>
      <a href="#about" className="hero-scroll" aria-label="Scroll to about section"><span>SCROLL TO EXPLORE</span><FaArrowDown size={12} /></a>
    </section>
  )
}

export default Hero
