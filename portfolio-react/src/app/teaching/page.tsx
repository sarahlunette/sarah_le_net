'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaVideo, FaYoutube } from 'react-icons/fa'

export default function TeachingPage() {
  const [selectedVideo, setSelectedVideo] = useState<string>('Principal Component Analysis')

  const videos = [
    {
      title: 'Principal Component Analysis',
      url: 'https://www.youtube.com/embed/n9GORRPxnC0',
      description: 'Comprehensive overview of PCA and its applications in data science'
    },
    {
      title: 'Multibox Detection',
      url: 'https://www.youtube.com/embed/nK_z7bw3CZs',
      description: 'Object detection techniques and multibox methodology'
    },
    {
      title: 'Multi-threading, multi-processing, and computing power/costs in ML',
      url: 'https://www.youtube.com/embed/aO5xc_R0JKQ',
      description: 'Performance optimization strategies for machine learning workloads'
    },
  ]

  const currentVideo = videos.find(v => v.title === selectedVideo) || videos[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaVideo className="text-4xl text-rose-600" />
            <h1 className="text-5xl font-bold text-gray-900">Teaching</h1>
          </div>

          {/* Video Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose a video workshop
            </label>
            <div className="flex flex-wrap gap-2">
              {videos.map((video) => (
                <button
                  key={video.title}
                  onClick={() => setSelectedVideo(video.title)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedVideo === video.title
                      ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {video.title}
                </button>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <motion.div
            key={selectedVideo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-500 to-red-600 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <FaYoutube className="text-3xl" />
                <h2 className="text-2xl font-bold">{currentVideo.title}</h2>
              </div>
              <p className="text-rose-100">{currentVideo.description}</p>
            </div>

            {/* Video Embed */}
            <div className="aspect-video w-full">
              <iframe
                src={currentVideo.url}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Info Section */}
            <div className="p-6 bg-gray-50">
              <div className="flex items-center gap-2 text-gray-600">
                <FaYoutube className="text-red-600" />
                <span className="text-sm">DataScientest Channel</span>
              </div>
              <p className="mt-4 text-gray-700">
                These educational videos cover key concepts in machine learning, computer vision,
                and data engineering. Created for DataScientest to help students understand complex
                technical concepts through clear explanations and practical examples.
              </p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">About Data Workshops</h3>
            <p className="text-gray-700 leading-relaxed">
              These workshops are part of my teaching experience with DataScientest, where I create
              educational content to help students master data science and machine learning concepts.
              Each video focuses on practical applications and real-world scenarios.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
