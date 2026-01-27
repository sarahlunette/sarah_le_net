'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaLightbulb, FaGlobe } from 'react-icons/fa'

interface Event {
  name: string
  category: string
  icon: string
}

export default function EventsPage() {
  const events: Event[] = [
    { name: 'Climate House', category: 'Climate', icon: 'climate' },
    { name: 'DataKind', category: 'Data Science', icon: 'data' },
    { name: 'DataForGood', category: 'Social Impact', icon: 'social' },
    { name: 'Women in Tech', category: 'Diversity', icon: 'diversity' },
    { name: 'Databrunch', category: 'Data Science', icon: 'data' },
    { name: 'GenAI Collective', category: 'AI', icon: 'ai' },
    { name: 'AI Tinkerers', category: 'AI', icon: 'ai' },
    { name: 'Dust', category: 'Technology', icon: 'tech' },
    { name: 'X-IA', category: 'AI', icon: 'ai' },
    { name: 'Google', category: 'Technology', icon: 'tech' },
    { name: 'Women in Climate', category: 'Climate', icon: 'climate' },
    { name: 'Columbia University Maison Française', category: 'Education', icon: 'education' },
    { name: 'datacraft', category: 'Data Science', icon: 'data' },
    { name: '42', category: 'Education', icon: 'education' },
    { name: 'Columbia University Online', category: 'Education', icon: 'education' },
    { name: 'VivaTech', category: 'Technology', icon: 'tech' },
    { name: 'AdoptAI', category: 'AI', icon: 'ai' },
    { name: 'Open Source Conference', category: 'Technology', icon: 'tech' },
    { name: 'Wats4U', category: 'Innovation', icon: 'innovation' }
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Climate': 'from-green-500 to-emerald-600',
      'Data Science': 'from-blue-500 to-indigo-600',
      'Social Impact': 'from-purple-500 to-pink-600',
      'Diversity': 'from-pink-500 to-rose-600',
      'AI': 'from-violet-500 to-purple-600',
      'Technology': 'from-cyan-500 to-blue-600',
      'Education': 'from-orange-500 to-amber-600',
      'Innovation': 'from-teal-500 to-cyan-600'
    }
    return colors[category] || 'from-gray-500 to-gray-600'
  }

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'climate':
        return <FaGlobe className="text-2xl" />
      case 'data':
        return <FaLightbulb className="text-2xl" />
      case 'social':
        return <FaUsers className="text-2xl" />
      case 'diversity':
        return <FaUsers className="text-2xl" />
      case 'ai':
        return <FaLightbulb className="text-2xl" />
      case 'tech':
        return <FaCalendarAlt className="text-2xl" />
      case 'education':
        return <FaMapMarkerAlt className="text-2xl" />
      case 'innovation':
        return <FaLightbulb className="text-2xl" />
      default:
        return <FaCalendarAlt className="text-2xl" />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  // Group events by category
  const categories = Array.from(new Set(events.map(e => e.category)))
  const eventsByCategory = categories.map(category => ({
    category,
    count: events.filter(e => e.category === category).length
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
              <FaCalendarAlt className="text-4xl text-purple-600" />
              <h1 className="text-5xl font-bold text-gray-900">Events</h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed max-w-4xl"
            >
              A curated collection of tech watch and culture events spanning AI, climate, data science,
              education, and social impact. Engaging with the community and staying at the forefront
              of innovation.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Total Events</p>
                  <p className="text-4xl font-bold mt-1">{events.length}</p>
                </div>
                <FaCalendarAlt className="text-5xl text-purple-200 opacity-50" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Categories</p>
                  <p className="text-4xl font-bold mt-1">{categories.length}</p>
                </div>
                <FaMapMarkerAlt className="text-5xl text-blue-200 opacity-50" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Focus</p>
                  <p className="text-xl font-bold mt-1">Tech & Impact</p>
                </div>
                <FaUsers className="text-5xl text-green-200 opacity-50" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Community</p>
                  <p className="text-xl font-bold mt-1">Active Member</p>
                </div>
                <FaLightbulb className="text-5xl text-orange-200 opacity-50" />
              </div>
            </motion.div>
          </motion.div>

          {/* Category Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {eventsByCategory.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`bg-gradient-to-br ${getCategoryColor(item.category)} rounded-xl p-4 text-white`}
                >
                  <p className="text-sm opacity-90">{item.category}</p>
                  <p className="text-3xl font-bold mt-1">{item.count}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Events List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
              <h2 className="text-3xl font-bold">All Events</h2>
              <p className="text-purple-100 mt-2">
                Comprehensive list of attended events and conferences
              </p>
            </div>

            <div className="p-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-4"
              >
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      {/* Number Badge */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${getCategoryColor(event.category)} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                        {index + 1}
                      </div>

                      {/* Event Info */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                          {event.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(event.category)} text-white`}>
                            {getCategoryIcon(event.icon)}
                            {event.category}
                          </span>
                        </div>
                      </div>

                      {/* Hover Indicator */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getCategoryColor(event.category)} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity -z-10`} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Tech Watch */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 rounded-full p-3">
                  <FaLightbulb className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tech Watch</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Actively engaging with the latest developments in AI, data science, and technology
                through conferences, meetups, and community events. Staying current with emerging
                trends and best practices.
              </p>
            </div>

            {/* Community Engagement */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 rounded-full p-3">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Impact</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Building connections across diverse communities focused on climate action, social impact,
                diversity in tech, and innovation. Contributing to discussions and knowledge sharing
                in the technology ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 text-center"
          >
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border border-purple-200">
              <p className="text-gray-700">
                <strong className="text-purple-700">Active Participation:</strong> These events represent
                ongoing engagement with the tech community, continuous learning, and contributing to
                important conversations around technology, climate, and social impact.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
