'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, MapPin } from 'lucide-react'

const trips = [
  {
    id: 'south-america',
    name: 'South America',
    title: 'South America 2016/2017',
    description: 'Interviews with actors of social and environmental changes / In construction'
  },
  {
    id: 'greece',
    name: 'Greece',
    title: 'Greece 2017',
    description: ''
  }
]

export default function TripsPage() {
  const [selectedTrip, setSelectedTrip] = useState(trips[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Globe className="w-12 h-12 text-cyan-600" />
            <h1 className="text-5xl font-bold text-gray-900">Trips</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose a trip
            </label>
            <select
              value={selectedTrip.id}
              onChange={(e) => {
                const trip = trips.find(t => t.id === e.target.value)
                if (trip) setSelectedTrip(trip)
              }}
              className="w-full px-4 py-3 bg-white border-2 border-cyan-200 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors duration-200 text-lg"
            >
              {trips.map((trip) => (
                <option key={trip.id} value={trip.id}>
                  {trip.name}
                </option>
              ))}
            </select>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTrip.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-8 h-8 text-cyan-600 mt-1" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedTrip.title}
                </h2>
              </div>

              {selectedTrip.description && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {selectedTrip.description}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
