import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    console.log('Scrolling to:', href)
    
    // Close mobile menu first
    setIsOpen(false)
    
    // Check if it's a page navigation (starts with /)
    if (href.startsWith('/')) {
      window.location.href = href
      return
    }
    
    // Check if we're on the home page or projects page
    const isHomePage = window.location.pathname === '/'
    const isProjectsPage = window.location.pathname === '/projects'
    
    if (isProjectsPage && href.startsWith('#')) {
      // If we're on projects page and trying to go to other sections, navigate to home
      window.location.href = `/${href}`
      return
    }
    
    // Wait a bit for menu to close, then scroll
    setTimeout(() => {
      const element = document.querySelector(href)
      console.log('Element found:', element)
      
      if (element) {
        // Calculate offset for fixed navbar
        const navbarHeight = 64 // h-16 = 64px
        const elementPosition = element.offsetTop - navbarHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      } else {
        console.error('Element not found:', href)
        // Fallback: try scrolling to the element directly
        const elementDirect = document.querySelector(href)
        if (elementDirect) {
          elementDirect.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 150)
  }

  return (
    <>
      <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mobile-menu-container fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className="text-lg sm:text-xl font-bold text-primary">
              Mohamed Atya Hawash
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  console.log('Menu button clicked, current state:', isOpen)
                  setIsOpen(!isOpen)
                }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: isOpen ? 0 : -20 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut'
            }}
            className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20
                }}
                transition={{
                  duration: 0.3,
                  delay: isOpen ? index * 0.1 : 0
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300"
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
      </motion.nav>
      
        {/* Spacer for small screens */}
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3 px-4">
          <div className="text-center">
            <span className="text-primary font-semibold text-lg">&nbsp;</span>
          </div>
        </div>
    </>
  )
}

export default Navbar
