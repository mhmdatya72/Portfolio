import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa'

const educationData = {
  degree: "Bachelor's Degree in Computers and Information (Information Systems)",
  university: 'Damanhour University — Faculty of Computers and Information',
  graduationYear: '2024',
  description: 'Studied under the credit hour system focusing on web technologies, databases, and software engineering.',
  highlights: ['Web Technologies & Development', 'Database Design & Management', 'Software Engineering Principles', 'Information Systems Analysis'],
  facebookPage: 'https://www.facebook.com/FCIDamanhour?mibextid=ZbWKwL',
}

const Education = () => (
  <section id="education" className="education-archive py-24 px-4">
    <div className="container-custom education-shell">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <header className="education-heading">
          <div><span className="education-kicker"><i /> ACADEMIC BACKGROUND / 02</span><h2>Education<span>.</span></h2></div>
          <p>Foundations that shaped<br />the way I engineer.</p>
        </header>

        <article className="education-record">
          <aside className="education-year-panel">
            <span className="education-record-label">GRADUATION YEAR</span>
            <strong>{educationData.graduationYear}</strong>
            <span className="education-degree-icon"><FaGraduationCap /></span>
            <span className="education-year-caption">BACHELOR'S DEGREE</span>
            <div className="education-year-grid" aria-hidden="true" />
          </aside>

          <div className="education-record-main">
            <div className="education-record-top"><span>EDUCATION RECORD · 001</span><span className="education-record-status"><i /> COMPLETED</span></div>
            <div className="education-institution"><span><FaUniversity /></span><div><small>INSTITUTION</small><h3>{educationData.university}</h3></div></div>
            <div className="education-degree"><small>QUALIFICATION</small><h4>{educationData.degree}</h4><p>{educationData.description}</p></div>
            <div className="education-curriculum"><small>AREAS OF STUDY</small><div>{educationData.highlights.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div>
            <a className="education-faculty-link" href={educationData.facebookPage} target="_blank" rel="noopener noreferrer"><FaFacebook /><span>Explore the faculty</span><FaExternalLinkAlt /></a>
          </div>
        </article>
        <div className="education-bottomline"><span>INFORMATION SYSTEMS</span><span>DEMANHOUR UNIVERSITY</span><span>ACADEMIC RECORD: VERIFIED</span></div>
      </motion.div>
    </div>
  </section>
)

export default Education
