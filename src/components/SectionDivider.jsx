import React from 'react'
import { motion } from 'framer-motion'

const SectionDivider = ({ delayBase = 0.5 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delayBase, duration: 0.6 }}
    className="flex justify-center mb-8 sm:mb-12"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delayBase + 0.2, duration: 0.6 }}
      className="relative"
    >
      {/* Animated Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: delayBase + 0.4 + index * 0.2,
              duration: 0.4,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 1,
            }}
            className="w-3 h-3 bg-primary rounded-full"
          />
        ))}
      </div>

      {/* Animated Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: delayBase + 0.7, duration: 1 }}
        className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </motion.div>
  </motion.div>
)

export default SectionDivider