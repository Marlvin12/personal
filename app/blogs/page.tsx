import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essays - Marlvin Goremusandu',
  description: 'Thoughts on technology, culture, and the slow resistance to a fast world.',
}

const essays = [
  {
    id: 'success-is-a-numbers-game',
    title: 'Success Is a Numbers Game — Nothing More',
    excerpt: 'I didn\'t learn about success from a textbook — I learned it from experience. From college and scholarship applications, to job rejections, to reaching out to investors, I began to see a pattern: success isn\'t magic, it\'s mathematics.',
    date: 'November 9, 2025',
    readTime: '5 min read',
  },
  {
    id: 'ubiquitous-assimilation',
    title: 'Ubiquitous Assimilation: The Marketing Holocaust That Kills Great Work',
    excerpt: 'There is a quiet war being fought every day — not with weapons, but with trends. A war where originality dies not by censorship, but by assimilation.',
    date: 'November 9, 2025',
    readTime: '8 min read',
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 mb-8 sm:mb-12 transition-colors">
          <span>←</span> back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-3 sm:mb-4">essays</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-10 sm:mb-16 max-w-2xl">
          thoughts on technology, culture, and the slow resistance to a fast world.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {essays.map((essay) => (
            <Link
              key={essay.id}
              href={`/blogs/${essay.id}`}
              className="section-border bg-white p-6 sm:p-8 block hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
                  {essay.title}
                </h2>
                <span className="text-gray-400 flex-shrink-0">→</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{essay.excerpt}</p>
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                <span>{essay.date}</span>
                <span>•</span>
                <span>{essay.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

