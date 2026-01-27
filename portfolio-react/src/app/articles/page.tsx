'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Article {
  id: string
  title: string
  language: 'French' | 'English'
}

export default function ArticlesPage() {
  const [language, setLanguage] = useState<'French' | 'English'>('French')
  const [articles, setArticles] = useState<Article[]>([])

  // Articles available in the application
  const allArticles: Article[] = [
    { id: 'Califrais', title: 'Califrais', language: 'French' },
    { id: 'Chatgpt_HRO', title: 'ChatGPT HRO', language: 'French' },
    { id: 'Chatgpt_ICS', title: 'ChatGPT ICS', language: 'French' },
    { id: 'EcoAct', title: 'EcoAct', language: 'French' },
    { id: 'HighWind', title: 'HighWind', language: 'French' },
    { id: 'Marc', title: 'Marc', language: 'French' },
    { id: 'Ministère_de_l\'aménagement_du_territoire', title: 'Ministère de l\'aménagement du territoire', language: 'French' },
    { id: 'Solène_de_Baobab_Tech', title: 'Solène de Baobab Tech', language: 'French' },
    { id: 'Post_Baobab', title: 'Post Baobab', language: 'English' },
    { id: 'Tech_accross_years', title: 'Tech Across Years', language: 'English' },
  ]

  useEffect(() => {
    const filtered = allArticles.filter(article => article.language === language)
    setArticles(filtered)
  }, [language])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Articles</h1>
          <p className="text-xl text-gray-600">
            Exploring data, AI, and technology for social good
          </p>
        </motion.div>

        {/* Language Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg shadow-lg bg-white p-1">
            <button
              onClick={() => setLanguage('French')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                language === 'French'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Français
            </button>
            <button
              onClick={() => setLanguage('English')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                language === 'English'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              English
            </button>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={`/articles/${article.id}`}
                className="block h-full"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full border border-gray-100">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {article.title}
                      </h3>
                      <div className="inline-block">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                          {article.language}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <span className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                        Read article
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {articles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600">
              No articles available in {language === 'French' ? 'French' : 'English'} yet.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
