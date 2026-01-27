'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const articles = [
  {
    title: "Storio, Energy Storage Company by X2010",
    url: "https://www.lajauneetlarouge.com/il-manquait-une-technologie-dans-le-paysage-du-stockage-denergie-en-france-caroline-le-floch-gautier-maigret-jean-yves-stephan-et-julien-dumazert-tous-x10-et-cofondateurs-de/"
  },
  {
    title: "Galadrim",
    url: "https://www.lajauneetlarouge.com/en-services-it-les-besoins-sont-partout-de-la-start-up-au-grand-groupe-arnaud-albalat-x11-cofondateur-de-galadrim/?srsltid=AfmBOor-xOwxXyWJaobmhiUuEjt01h7QbzyfOXbwujUifuv3S16wq0ig"
  },
  {
    title: "Rivages, de la joaillerie créée par les clients",
    url: "https://www.lajauneetlarouge.com/rivages-de-la-joaillerie-cocreee-avec-les-clients/?srsltid=AfmBOopywqmalYDogkaDhWIeNHXJH4KM5vBIAfvRPKiEO3XNFh2HPJzX"
  }
]

export default function JauneRougePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Articles from La Jaune et La Rouge
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Polytechnique&apos;s Magazine
          </motion.p>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {article.title}
                </h2>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  Read Article
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
