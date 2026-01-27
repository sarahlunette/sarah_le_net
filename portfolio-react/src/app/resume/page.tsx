'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaLinkedin, FaCertificate, FaGraduationCap, FaBook } from 'react-icons/fa'

export default function ResumePage() {
  const [selectedSection, setSelectedSection] = useState<string>('Resume')
  const [selectedCourse, setSelectedCourse] = useState<string>('MVA')

  const sections = ['Resume', 'Certifications', 'LinkedIn', 'Professional Courses', "Additional Master's Courses", 'CNAM']

  const professionalCourses = [
    { name: 'Coursera', description: 'Preparing for Google Cloud Certification: Cloud Engineer' },
    { name: 'Cloud Guru', description: 'Professional Data Engineer, GCP' },
    { name: 'CloudSkillsBoost', description: '(1) Cloud Architect, (2) Data Engineer' },
    { name: 'Youtube Videos', description: 'Various videos on Data Engineering, MLOPS, Cloud Computing' },
    { name: 'Various Online Platforms', description: 'Udemy, OpenClassrooms, and more...' },
  ]

  const mvaCourses = [
    'Advanced learning for text and graph data (Vazirgiannis)',
    'Statistiques en Grandes Dimensions et Apprentissage (A.Dalalyan)',
    'Kernel methods for machine learning (J.Mairal/J.P.Vert)',
    "Méthodes Stochastiques pour l'analyse d'images (A.Desolneux/B.Galerne)",
  ]

  const mocisCourses = [
    'Coastal Hydrodynamics - A. Stegner, Y. Cuypers',
    'Energetics of the climate system - Hervé Le Treut',
    'Clouds, Aerosols and Precipitation - Hélène Chepfer',
    'Physical Oceanography - Oceanic circulation - Pascale Bouruet',
    'GFD-1 Geophysical Fluid Dynamics - Models and their main properties - Zeitlin',
  ]

  const m1m2Courses = ['Remote Sensing - Desa']

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Resume & Career</h1>

          {/* Section Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose a section
            </label>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedSection === section
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Section */}
          {selectedSection === 'Resume' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaBook className="text-3xl text-amber-600" />
                <h2 className="text-3xl font-bold text-gray-900">Resume</h2>
              </div>
              <a
                href="https://drive.google.com/file/d/1zJzdpMalbKEZ1vZ39UEeZFcH2-XhPieW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md"
              >
                <FaExternalLinkAlt />
                View Resume
              </a>
            </motion.div>
          )}

          {/* Certifications Section */}
          {selectedSection === 'Certifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaCertificate className="text-3xl text-amber-600" />
                <h2 className="text-3xl font-bold text-gray-900">Google Professional Data Engineer Certification</h2>
              </div>
              <a
                href="https://www.credly.com/badges/2f8d4c7a-3611-442d-bb47-21746eb20a56"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md"
              >
                <FaCertificate />
                View Certification
              </a>
            </motion.div>
          )}

          {/* LinkedIn Section */}
          {selectedSection === 'LinkedIn' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaLinkedin className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">LinkedIn Profile</h2>
              </div>
              <a
                href="https://www.linkedin.com/in/sarah-le-net-13268944/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                <FaLinkedin />
                View LinkedIn Profile
              </a>
            </motion.div>
          )}

          {/* Professional Courses Section */}
          {selectedSection === 'Professional Courses' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-3xl text-amber-600" />
                <h2 className="text-3xl font-bold text-gray-900">Professional Courses</h2>
              </div>
              <div className="space-y-4">
                {professionalCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{course.name}</h3>
                      <p className="text-gray-700">{course.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Additional Master's Courses Section */}
          {selectedSection === "Additional Master's Courses" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="text-3xl text-amber-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Additional Master's Courses</h2>
                </div>

                {/* Course Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose a course
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['MVA', 'MOCIS', 'M1M2 Risques et environnements'].map((course) => (
                      <button
                        key={course}
                        onClick={() => setSelectedCourse(course)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedCourse === course
                            ? 'bg-amber-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MVA */}
                {selectedCourse === 'MVA' && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      MVA - Master Vision, Apprentissage et Données
                    </h3>
                    <h4 className="font-semibold text-gray-700 mb-3">List of audited courses:</h4>
                    <ul className="space-y-2">
                      {mvaCourses.map((course, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-gray-800">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* MOCIS */}
                {selectedCourse === 'MOCIS' && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      MOCIS - Master Mathématiques et Optimisation pour la Connaissance, l'Incertitude et la Simulation
                    </h3>
                    <h4 className="font-semibold text-gray-700 mb-3">List of audited courses:</h4>
                    <ul className="space-y-2">
                      {mocisCourses.map((course, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-gray-800">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* M1M2 */}
                {selectedCourse === 'M1M2 Risques et environnements' && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      M1M2 Risques et Environnements - Master 1 et 2 Risques et Environnements
                    </h3>
                    <h4 className="font-semibold text-gray-700 mb-3">List of audited courses:</h4>
                    <ul className="space-y-2">
                      {m1m2Courses.map((course, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-gray-800">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* CNAM Section */}
          {selectedSection === 'CNAM' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">CNAM: Metrology and Citizen Science</h2>

              <div className="space-y-6">
                <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Slides (French Version)</h3>
                  <a
                    href="https://docs.google.com/presentation/d/1F1t67TK6D-fCbuYQ6IoT_T6-wQ2aN2eTbr2cA3qLWPI/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Open Presentation
                  </a>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Project Rendering (French Version)</h3>
                  <a
                    href="https://docs.google.com/document/d/165F-R3qm1RqhEpT7p1xB6oqRg3C_9l8VB-Bz-cO7gXg/edit?tab=t.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Open Rendering
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
