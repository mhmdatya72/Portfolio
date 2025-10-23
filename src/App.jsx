import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { initEmailJS } from './config/emailjs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import AllProjects from './components/AllProjects'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
    
    // Initialize EmailJS
    initEmailJS()
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Handle scrolling to section after page load
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection')
    const urlHash = window.location.hash
    
    if (scrollToSection || urlHash) {
      const targetSection = scrollToSection || urlHash
      
      // Clear the stored section
      if (scrollToSection) {
        sessionStorage.removeItem('scrollToSection')
      }
      
      // Wait for components to render, then scroll
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
          setTimeout(scrollToTarget, 100)
        }
      }
      
      // Start trying to scroll after a delay
      setTimeout(scrollToTarget, 800)
    }
  }, [])

  // Update URL based on current section
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact']
    
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
      // Run once on mount
      handleScroll()
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
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <main>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Skills />
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
