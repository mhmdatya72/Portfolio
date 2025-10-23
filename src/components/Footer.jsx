import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/mohamed-atya-hawash-21853b344?utm_source=share_via&utm_content=profile&utm_medium=member_android',
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
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Mohamed Atya Hawash
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Web Developer specializing in Laravel, PHP, and Vue.js. 
                Passionate about creating efficient, scalable, and user-friendly applications.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-primary rounded-lg text-gray-400 hover:text-white transition-all duration-300"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
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
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 mohamedatya563@gmail.com</p>
                <p>📞 +20 109 838 6972</p>
                <p>🌍 Sidi-Ghazi, Kafr El-Dawar, Al-Buhayrah, Egypt</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© 2024 Mohamed Atya Hawash. Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500"
                >
                  <FaHeart />
                </motion.span>
                <span>and React</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <span>Back to top</span>
                <FaArrowUp />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
