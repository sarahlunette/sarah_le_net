import { notFound } from 'next/navigation'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

// Define all available articles
const articles = [
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

// Generate static params for all articles
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.id,
  }))
}

// Get article content
async function getArticleContent(slug: string) {
  const article = articles.find(a => a.id === slug)
  if (!article) {
    return null
  }

  // Try different file naming patterns
  let fileName = `${article.id}_(${article.language}_Version).html`
  let filePath = path.join(process.cwd(), 'public', 'articles', fileName)

  // Try alternate format without underscore before parenthesis
  if (!fs.existsSync(filePath)) {
    fileName = `${article.id}(${article.language}_Version).html`
    filePath = path.join(process.cwd(), 'public', 'articles', fileName)
  }

  // Try format without version suffix (for Tech_accross_years)
  if (!fs.existsSync(filePath)) {
    fileName = `${article.id}.html`
    filePath = path.join(process.cwd(), 'public', 'articles', fileName)
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    return {
      content,
      title: article.title,
      language: article.language,
    }
  } catch (error) {
    console.error(`Error reading article ${fileName}:`, error)
    return null
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const articleData = await getArticleContent(params.slug)

  if (!articleData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Articles
        </Link>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {articleData.title}
          </h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Sarah LE NET
            </span>
            <span className="text-gray-400">•</span>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
              {articleData.language}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div
            className="prose prose-lg prose-article max-w-none"
            dangerouslySetInnerHTML={{ __html: articleData.content }}
          />
        </div>

        {/* Navigation Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-600 font-medium">Enjoyed this article?</p>
          </div>
          <Link
            href="/articles"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Read More Articles
          </Link>
        </div>
      </article>
    </div>
  )
}
