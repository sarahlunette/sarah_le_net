'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaTrophy, FaRocket } from 'react-icons/fa'

interface Hackathon {
  name: string
  repo: string
  tags?: string[]
}

export default function HackathonsPage() {
  const hackathons: Hackathon[] = [
    { name: 'GeoHack AI', repo: 'GeoAIHack_team_18', tags: ['AI', 'Remote Sensing'] },
    { name: 'FrugalAI', repo: 'FrugalAI', tags: ['AI', 'Optimization'] },
    { name: "Bat'Adapt", repo: 'Bat-Adapt', tags: ['Climate', 'Adaptation'] },
    { name: 'SAM API', repo: 'sam_api', tags: ['API', 'Computer Vision'] },
    { name: 'Tsunamis Project', repo: 'Tsunamis_Project', tags: ['Climate', 'Disaster Response'] },
    { name: 'AI Action Summit', repo: 'Doctolib_Hackaton', tags: ['Healthcare', 'AI'] },
    { name: 'Women in Data Science', repo: 'WiDS-AI-Potter-Irrigation', tags: ['Agriculture', 'AI'] },
    { name: 'Microsoft AI Agents - Emergency App', repo: 'microsoft_ai_agents', tags: ['AI Agents', 'Emergency'] },
    { name: 'Social Media for Resource Allocation in Emergency Crisis', repo: 'IBM_Hackaton', tags: ['Emergency', 'Social Media'] },
    { name: 'ESPF, Survival Projection of Railways in Climate Change', repo: 'ESPF', tags: ['Climate', 'Infrastructure'] },
    { name: 'Climate Relief to Resilience', repo: 'resilience2reliefai', tags: ['Climate', 'Resilience'] },
    { name: 'PyTorch Tsunamis', repo: 'pytorch_tsunamis', tags: ['PyTorch', 'Disaster Response'] },
    { name: 'LabLabAI', repo: 'Agent_Resilience', tags: ['AI Agents', 'Resilience'] },
    { name: 'Blackbox AI', repo: 'easyimmo', tags: ['AI', 'Real Estate'] },
    { name: 'Les clés du Château de Versailles', repo: 'Vers-AI-lles', tags: ['VIT', 'Culture'] },
    { name: 'HackTheGap', repo: 'HackTheGap', tags: ['Social Impact'] },
    { name: 'IteratexColumbia', repo: 'Hackathon-Columbia', tags: ['Innovation'] },
    { name: 'Manus', repo: 'navigating_through_crises', tags: ['Emergency', 'Navigation'] },
    { name: 'DevPost: A social media cartography of dangers with Confluent', repo: 'DevPost', tags: ['Social Media', 'Mapping'] },
    { name: 'Personal Project: Research on LLM responses to transcription of personal journals', repo: 'Transcription_OCR', tags: ['LLM', 'NLP', 'OCR'] }
  ]

  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon>(hackathons[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (hackathon: Hackathon) => {
    setSelectedHackathon(hackathon)
    setIsOpen(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <FaTrophy className="text-4xl text-green-600" />
              <h1 className="text-5xl font-bold text-gray-900">Hackathons</h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed max-w-4xl"
            >
              The entirety of these hackathons are directed towards emergency crises and resilience or healthcare as well as help to development, or towards specific technologies: remote sensing, VIT, NLP, Embeddings, LLM and Agents.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Total Hackathons</p>
                  <p className="text-4xl font-bold mt-1">{hackathons.length}</p>
                </div>
                <FaCode className="text-5xl text-green-200 opacity-50" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Focus Areas</p>
                  <p className="text-2xl font-bold mt-1">Climate & Emergency</p>
                </div>
                <FaRocket className="text-5xl text-blue-200 opacity-50" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Technologies</p>
                  <p className="text-xl font-bold mt-1">AI, NLP, VIT</p>
                </div>
                <FaTrophy className="text-5xl text-purple-200 opacity-50" />
              </div>
            </motion.div>
          </motion.div>

          {/* Hackathon Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose a hackathon
            </label>

            {/* Custom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full md:w-auto min-w-[400px] px-6 py-4 bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all text-left flex items-center justify-between group"
              >
                <span className="font-medium text-gray-900">{selectedHackathon.name}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 w-full md:w-auto min-w-[400px] mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                  >
                    {hackathons.map((hackathon, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelect(hackathon)}
                        className={`w-full px-6 py-3 text-left hover:bg-green-50 transition-colors ${
                          selectedHackathon.name === hackathon.name ? 'bg-green-100' : ''
                        } ${index !== hackathons.length - 1 ? 'border-b border-gray-100' : ''}`}
                      >
                        <div className="font-medium text-gray-900">{hackathon.name}</div>
                        {hackathon.tags && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {hackathon.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Selected Hackathon Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedHackathon.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Header Section */}
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 text-white">
                <h2 className="text-3xl font-bold mb-3">{selectedHackathon.name}</h2>
                {selectedHackathon.tags && (
                  <div className="flex flex-wrap gap-2">
                    {selectedHackathon.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href={`https://github.com/sarahlunette/${selectedHackathon.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg font-medium"
                  >
                    <FaGithub className="text-xl" />
                    View on GitHub
                  </a>

                  <a
                    href={`https://github.com/sarahlunette/${selectedHackathon.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg font-medium"
                  >
                    <FaExternalLinkAlt />
                    View Repository
                  </a>
                </div>

                {/* Project Info */}
                <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">About this project</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This hackathon project is part of a portfolio focused on emergency crisis management,
                    resilience, healthcare, and cutting-edge AI technologies. Visit the GitHub repository
                    to explore the complete codebase, documentation, and project details.
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Repository:</strong>{' '}
                      <code className="bg-white px-2 py-1 rounded text-green-600">
                        sarahlunette/{selectedHackathon.repo}
                      </code>
                    </p>
                  </div>
                </div>

                {/* Technologies Notice */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full p-2 mt-0.5">
                      <FaCode className="text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Technical Focus</h4>
                      <p className="text-sm text-blue-800">
                        Projects utilize advanced technologies including AI/ML, remote sensing,
                        natural language processing, computer vision, embeddings, LLMs, and AI agents
                        to address real-world challenges in emergency response and resilience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center text-gray-600"
          >
            <p className="text-sm">
              All projects are open source and available on{' '}
              <a
                href="https://github.com/sarahlunette"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium hover:underline"
              >
                GitHub
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
