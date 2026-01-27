'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Theater as TheaterIcon, Sparkles } from 'lucide-react'

const theaterYears = [
  {
    id: 'florent-youth',
    name: 'Cours Florent Ateliers Jeunesse',
    title: 'Cours Florent Ateliers Jeunes - 2 ans',
    productions: ['Poèmes d&apos;Aragon - Le Fou d&apos;Elsa']
  },
  {
    id: 'henri-iv-first',
    name: 'Henri IV First Year',
    title: 'Henri IV First Year',
    productions: ['Faut pas Payer - Dario Fo au théâtre Mouffetard']
  },
  {
    id: 'henri-iv-second',
    name: 'Henri IV Second Year',
    title: 'Henri IV Second Year',
    productions: ['Le Roi se Meurt - Ionesco']
  },
  {
    id: 'florent-stage',
    name: 'Cours Florent Stage',
    title: 'Cours Florent Stage',
    productions: ['Les Précieuses Ridicules - Molière']
  },
  {
    id: 'polytechnique',
    name: 'Tentative d&apos;organisation d&apos;une pièce à l&apos;école Polytechnique',
    title: 'Barouffe à Chiogia - Carlo Goldoni',
    productions: []
  },
  {
    id: 'first-year-evoe',
    name: 'First Year EVOE',
    title: 'First Year',
    productions: ['Antigona']
  },
  {
    id: 'second-year-evoe',
    name: 'Second Year EVOE',
    title: 'Second Year',
    productions: ['Harry Potter']
  },
  {
    id: 'beaujon',
    name: 'Espace Beaujon',
    title: 'Espace Beaujon',
    productions: [
      'Terrasses - Laurent Gaudet - Jeux Isthmiques',
      'Terrasses - Laurent Gaudet - Espace Beaujon'
    ]
  },
  {
    id: 'paid-work',
    name: 'Paid Work',
    title: 'Paid Work',
    productions: [
      {
        title: 'O Magico de Oz - plataforma',
        description: 'Interventions in schools and festivals'
      },
      {
        title: 'Teatro de Marionetas',
        description: 'Street performances in Bélèm'
      }
    ]
  }
]

export default function TheaterPage() {
  const [selectedYear, setSelectedYear] = useState(theaterYears[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
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
            <TheaterIcon className="w-12 h-12 text-purple-600" />
            <h1 className="text-5xl font-bold text-gray-900">Theater</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select a Year
            </label>
            <select
              value={selectedYear.id}
              onChange={(e) => {
                const year = theaterYears.find(y => y.id === e.target.value)
                if (year) setSelectedYear(year)
              }}
              className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors duration-200 text-lg"
            >
              {theaterYears.map((year) => (
                <option key={year.id} value={year.id}>
                  {year.name}
                </option>
              ))}
            </select>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex items-start gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-purple-600 mt-1" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedYear.title}
                </h2>
              </div>

              <div className="space-y-6">
                {selectedYear.productions.map((production, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-purple-300 pl-6 py-2"
                  >
                    {typeof production === 'string' ? (
                      <p className="text-xl text-gray-700 leading-relaxed">
                        {production}
                      </p>
                    ) : (
                      <div>
                        <p className="text-xl font-semibold text-gray-900 mb-2">
                          {production.title}
                        </p>
                        <p className="text-lg text-gray-600">
                          {production.description}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}

                {selectedYear.productions.length === 0 && (
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {selectedYear.title}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
