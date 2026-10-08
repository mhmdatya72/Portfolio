import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { safeStorage } from './utils/storage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import AllProjects from './components/AllProjects'

function PointerBackdrop() {
  const pointerX = useMotionValue(-300)
  const pointerY = useMotionValue(-300)
  const x = useSpring(pointerX, { stiffness: 100, damping: 25, mass: 0.45 })
  const y = useSpring(pointerY, { stiffness: 100, damping: 25, mass: 0.45 })
  const trailX = useSpring(pointerX, { stiffness: 45, damping: 28, mass: 0.8 })
  const trailY = useSpring(pointerY, { stiffness: 45, damping: 28, mass: 0.8 })

  useEffect(() => {
    const followPointer = (event) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }
    window.addEventListener('pointermove', followPointer, { passive: true })
    return () => window.removeEventListener('pointermove', followPointer)
  }, [pointerX, pointerY])

  return (
    <div className="pointer-backdrop" aria-hidden="true">
      <motion.div className="pointer-aura pointer-aura-trail" style={{ x: trailX, y: trailY }}>
        <span className="pointer-ring" />
        <span className="pointer-orbit pointer-orbit-one" />
        <span className="pointer-orbit pointer-orbit-two" />
      </motion.div>
      <motion.div className="pointer-aura pointer-aura-core" style={{ x, y }} />
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => safeStorage.getItem('portfolio-theme-v3') !== 'light')

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    safeStorage.setItem('portfolio-theme-v3', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Handle scrolling to section after page load
  useEffect(() => {
    const scrollToSection = safeStorage.sGet('scrollToSection')
    const urlHash = window.location.hash

    if (scrollToSection || urlHash) {
      const targetSection = scrollToSection || urlHash

      // Clear the stored section
      if (scrollToSection) {
        safeStorage.sRemove('scrollToSection')
      }

      let scrollTimeout

      const scrollToTarget = () => {
        const element = document.querySelector(targetSection)
        if (element) {
          const navbarHeight = 64 // h-16 = 64px
          const elementPosition = element.offsetTop - navbarHeight

          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        } else {
          // If element not found, try again after a short delay
          scrollTimeout = setTimeout(scrollToTarget, 100)
        }
      }

      // Start trying to scroll after a delay
      scrollTimeout = setTimeout(scrollToTarget, 800)
      return () => clearTimeout(scrollTimeout)
    }
  }, [])

  // Update URL based on current section
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'experience', 'skills', 'services', 'projects', 'contact']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for navbar
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            const newUrl = `#${section}`
            if (window.location.hash !== newUrl) {
              window.history.replaceState(null, null, newUrl)
            }
            break
          }
        }
      }
    }

    // Only run on home page
    if (window.location.pathname === '/') {
      window.addEventListener('scroll', handleScroll)
      // Only run once on mount if there is no incoming section hash,
      // so the initial URL is not overwritten before it can be scrolled to
      const currentHash = window.location.hash
      if (!currentHash || currentHash === '#home') {
        handleScroll()
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 overflow-x-hidden">
        {/* Global modern backdrop */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="bg-mesh absolute inset-0"></div>
          <div className="bg-grid absolute inset-0"></div>
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        </div>

        <PointerBackdrop />

        <Routes>
          <Route path="/" element={
            <>
              <ScrollProgress />
              <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <main className="relative z-10">
                <Hero />
                <Stats />
                <About />
                <Education />
                <Experience />
                <Skills />
                <Services />
                <Projects />
                <Contact />
              </main>
              <Footer />
              <BackToTop />
            </>
          } />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
