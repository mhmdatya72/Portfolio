import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/mohamed-atya-hawash-21853b344',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/mhmdatya72',
      label: 'GitHub'
    },
    {
      icon: <FaFacebook size={20} />,
      url: 'https://www.facebook.com/share/1CVzc6uuKV/',
      label: 'Facebook'
    },
    {
      icon: <FaWhatsapp size={20} />,
      url: 'https://wa.me/201098386972',
      label: 'WhatsApp'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    console.log('Footer scrolling to:', href)

    // Check if it's a page navigation (starts with /)
    if (href.startsWith('/')) {
      window.location.href = href
      return
    }

    // Check if we're on the projects page
    const isProjectsPage = window.location.pathname === '/projects'

    if (isProjectsPage && href.startsWith('#')) {
      // If we're on projects page and trying to go to other sections, navigate to home
      window.location.href = `/${href}`
      return
    }

    // Wait a bit, then scroll
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
    }, 100)
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="footer-modern relative text-white mt-8"
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="container-custom footer-shell">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <h3 className="text-2xl font-bold title-gradient">
                Mohamed Atya Hawash
              </h3>
              <p className="footer-description">
                Full Stack Web Developer specializing in Laravel, PHP, Vue.js, and SEO-friendly web development.
                I create efficient, scalable, and search-ready applications.
              </p>
              <div className="footer-socials">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-nav">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="footer-contact-list">
                <a href="mailto:mohamedatya563@gmail.com">mohamedatya563@gmail.com</a>
                <a href="tel:+201098386972">+20 109 838 6972</a>
                <span>Sidi-Ghazi, Kafr El-Dawar, Al-Buhayrah, Egypt</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-row">
              <div className="footer-credit">
                <span>© {new Date().getFullYear()} Mohamed Atya Hawash. All rights reserved.</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="footer-top-link"
              >
                <span>Back to top</span>
                <FaArrowUp />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
