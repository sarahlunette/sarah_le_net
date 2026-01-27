'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            The Lab
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            by Sarah LE NET
          </p>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Inspired by passions and interests, I started writing this blog while working on a state-of-the-art of data in prevention of natural risks and crises response as well as GenAI in Healthcare. In the last section I'll present some tech watch and culture events. It turned out a lot of what has been done is valuable and I would love to present it to you.
            </p>
            <p>
              I build this endeavor throughout the years, starting a long time ago, inspired by my love for nature, inspired by people and physics. At Columbia University, I got out of my training with a will to use data for good, looking into Peace Corps, Engineers without Borders and water solutions for development but decided to stay for love in NYC. I then continued into environmental issues and decided to go on a Long trip across South America to discover landscape, problematics around development and technology possibilities. 4 years ago I encountered DataKind whom I have followed since and when GenAI appeared mainstream, I started asking questions on how to apply it to disaster preparedness, emergency crisis, NGOs, etc. I looked from far organisations such as Global Pulse or Google Crisis Response. Would love to work when trained for MSF.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { title: 'Entrepreneurship', href: '/entrepreneurship', color: 'from-blue-500 to-blue-600' },
            { title: 'Articles', href: '/articles', color: 'from-indigo-500 to-indigo-600' },
            { title: 'Events', href: '/events', color: 'from-purple-500 to-purple-600' },
            { title: 'Hackathons', href: '/hackathons', color: 'from-pink-500 to-pink-600' },
            { title: 'Resume & Career', href: '/resume', color: 'from-rose-500 to-rose-600' },
            { title: 'Teaching', href: '/teaching', color: 'from-orange-500 to-orange-600' },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className={`block p-6 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
