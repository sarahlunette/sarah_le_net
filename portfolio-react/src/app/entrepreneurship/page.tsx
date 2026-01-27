'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function EntrepreneurshipPage() {
  const [selectedProject, setSelectedProject] = useState<string>('The Bubble')
  const [selectedProgram, setSelectedProgram] = useState<string>('Sista')

  const projects = ['The Bubble', 'TheLab AI', 'TheLab Data']
  const programs = ['Sista', 'LFA Funds', 'Grandes Ecoles Au Féminin', "Empow'Her"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Entrepreneurship</h1>

          {/* Project Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose a project
            </label>
            <div className="flex flex-wrap gap-3">
              {projects.map((project) => (
                <button
                  key={project}
                  onClick={() => setSelectedProject(project)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedProject === project
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {project}
                </button>
              ))}
            </div>
          </div>

          {/* The Bubble Content */}
          {selectedProject === 'The Bubble' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Bubble, Coworking Space with Daycare
                </h2>

                {/* Program Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose a program
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {programs.map((program) => (
                      <button
                        key={program}
                        onClick={() => setSelectedProgram(program)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedProgram === program
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {program}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Program Content */}
                <div className="bg-gray-50 rounded-xl p-6 mt-6">
                  {selectedProgram === 'Sista' && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Sista Incubator Interviews
                      </h3>
                      <a
                        href="https://drive.google.com/file/d/1C9PNTzMqSl9ZqF5N2ZHRPkrnrEZRUBDr/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Presentation Video
                      </a>
                    </div>
                  )}

                  {selectedProgram === 'LFA Funds' && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        LFA Funds Interviews - Passed
                      </h3>
                      <div className="space-y-3">
                        <a
                          href="https://docs.google.com/presentation/d/1QVvzZKSw53ftSpOCNvsqHaUnoTFsip1PPyLWAmdAhw4/edit?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-3"
                        >
                          <FaExternalLinkAlt />
                          First Interview Slides
                        </a>
                        <a
                          href="https://drive.google.com/file/d/1MTj82NeF25V7NCvF5KBWLG0mBv5gaYf6/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <FaExternalLinkAlt />
                          Second Interview Slides
                        </a>
                      </div>
                    </div>
                  )}

                  {selectedProgram === 'Grandes Ecoles Au Féminin' && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Concours Startup Grandes Ecoles Au Féminin
                      </h3>
                      <a
                        href="https://www.gefstartup.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Grandes Ecoles Au Féminin
                      </a>
                    </div>
                  )}

                  {selectedProgram === "Empow'Her" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Business Plan and Definition of the Project Workshop
                      </h3>
                      <a
                        href="https://empow-her.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Empow'Her Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* TheLab AI Content */}
          {selectedProject === 'TheLab AI' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🧪 TheLab AI — ResilienceAI
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  ResilienceAI is an AI-powered platform designed to help with disaster preparedness
                  and emergency crisis response. The project combines RAG (Retrieval-Augmented Generation)
                  with specialized knowledge bases for resilience planning.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://docs.google.com/document/d/1PavXYrLPB_1cIbeF82kskaSMMAiSQI0z7zIxVIzwB_g/edit?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-3 mb-3"
                  >
                    <FaExternalLinkAlt />
                    AI for Planification (French)
                  </a>

                  <a
                    href="https://docs.google.com/document/d/1Y58MhDJ2axgbhHyfjSfwgX6mGUmfpbFl9bLjDX6Vg-E/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-3 mb-3"
                  >
                    <FaExternalLinkAlt />
                    Presentation (French)
                  </a>

                  <a
                    href="https://github.com/sarahlunette/TheLab_resilienceai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors mb-3"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> The full ResilienceGPT chatbot with RAG capabilities
                    requires backend services and API access. The GitHub repository contains
                    the complete implementation details.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TheLab Data Content */}
          {selectedProject === 'TheLab Data' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  TheLab Data, Data Acquisition
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  DataCapture project focused on efficient data acquisition and processing
                  for resilience and crisis management applications.
                </p>

                <a
                  href="https://docs.google.com/document/d/1oN0aXKn18-BLT67qKn_HNoH7-VxB8cYJW8_n-93GwVg/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt />
                  DataCapture Documentation
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
