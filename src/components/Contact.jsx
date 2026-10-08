import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaFacebook,
  FaWhatsapp,
  FaCheckCircle
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = [
      'New portfolio message',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ].join('\n')
    const whatsappUrl = `https://wa.me/201098386972?text=${encodeURIComponent(body)}`
    const whatsappWindow = window.open(whatsappUrl, '_blank')
    if (whatsappWindow) whatsappWindow.opener = null
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 7000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary" size={20} />,
      label: 'Email',
      value: 'mohamedatya563@gmail.com',
      link: 'mailto:mohamedatya563@gmail.com'
    },
    {
      icon: <FaPhone className="text-primary" size={20} />,
      label: 'Phone',
      value: '01098386972',
      link: 'tel:+201098386972'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary" size={20} />,
      label: 'Location',
      value: 'Sidi-Ghazi, Kafr El-Dawar, Al-Buhayrah, Egypt',
      link: 'https://maps.google.com/?q=Sidi-Ghazi,Kafr+El-Dawar,Al-Buhayrah,Egypt'
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-atya-hawash-21853b344',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      url: 'https://github.com/mhmdatya72',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      icon: <FaFacebook size={24} />,
      label: 'Facebook',
      url: 'https://www.facebook.com/share/1CVzc6uuKV/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: 'WhatsApp',
      url: 'https://wa.me/201098386972',
      color: 'hover:text-green-500'
    }
  ]

  return (
    <section id="contact" className="contact-modern py-24 px-4">
      <div className="container-custom relative contact-shell">
        {/* Ambient glow */}
        <div className="absolute -top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }}></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="contact-content"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="contact-heading">
            <span className="section-eyebrow">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's <span className="title-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="contact-layout">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="contact-aside">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    href={info.link}
                  className="contact-info-row group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {info.label}
                      </div>
                      <div className="text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="contact-socials">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`contact-social ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="contact-form-panel">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500" size={20} />
                    <span className="text-green-700 dark:text-green-300 font-medium">
                      WhatsApp opened with your message. Press Send in WhatsApp to deliver it.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="contact-input contact-textarea"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="contact-submit"
                  >
                    <FaWhatsapp size={18} />
                    Continue in WhatsApp
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
