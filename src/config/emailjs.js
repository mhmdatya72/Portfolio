// EmailJS Configuration
// You need to set up EmailJS account and get these values from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS service ID
  serviceId: 'service_portfolio',
  
  // Replace with your EmailJS template ID
  templateId: 'template_contact',
  
  // Replace with your EmailJS public key
  publicKey: 'your_public_key_here'
}

// EmailJS setup function
export const initEmailJS = () => {
  // Initialize EmailJS with your public key
  // This should be called in your main App component
  if (typeof window !== 'undefined') {
    import('@emailjs/browser').then(({ init }) => {
      init(EMAILJS_CONFIG.publicKey)
    })
  }
}
