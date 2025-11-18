import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essays - Marlvin Goremusandu',
  description: 'Thoughts on technology, culture, and the slow resistance to a fast world.',
}

const essays = [
  {
    id: 'the-african-mask',
    title: 'The African Mask',
    excerpt: 'I grew up believing the world was simple: the people with the least should be the ones who complain the most. Then I left home, traveled, returned, and realized how wrong that assumption was.',
    date: 'November 18, 2025',
    readTime: '5 min read',
  },
  {
    id: 'living-more-loving-more',
    title: 'Living More and Loving More',
    excerpt: 'Somewhere along the way, someone lied. They sold us the wrong dream — that success means screens, schedules, and status. That to matter, we have to constantly do more, own more, post more.',
    date: 'November 10, 2025',
    readTime: '3 min read',
  },
  {
    id: 'internet-library-to-marketplace',
    title: 'The Internet Used to Be a Library, Now It\'s a Marketplace',
    excerpt: 'There was a time when the internet felt pure — a place of curiosity, creativity, and community. You could search for something, learn, and move on. No one followed you with ads.',
    date: 'November 10, 2025',
    readTime: '4 min read',
  },
  {
    id: 'life-is-easy',
    title: 'Life Is Easy If We Make It That Way',
    excerpt: 'I\'ve lived half my life in Zimbabwe and half in the United States, and that contrast has taught me one thing: life is easy if we make it that way.',
    date: 'November 10, 2025',
    readTime: '6 min read',
  },
  {
    id: 'success-is-a-numbers-game',
    title: 'Success Is a Numbers Game — Nothing More',
    excerpt: 'I didn\'t learn about success from a textbook — I learned it from experience. From college and scholarship applications, to job rejections, to reaching out to investors, I began to see a pattern: success isn\'t magic, it\'s mathematics.',
    date: 'November 9, 2025',
    readTime: '5 min read',
  },
  {
    id: 'ubiquitous-assimilation',
    title: 'Ubiquitous Assimilation: The Erasure of Original Thought',
    excerpt: 'There is a quiet war being fought every day — not with weapons, but with trends. A war where originality dies not by censorship, but by assimilation.',
    date: 'November 9, 2025',
    readTime: '8 min read',
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-12 sm:mb-16 transition-colors duration-300 font-medium">
          <span>←</span> Back
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 tracking-tight">Essays</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-16 sm:mb-20 max-w-2xl font-light">
          Thoughts on technology, culture, and the slow resistance to a fast world.
        </p>

        <div className="space-y-8 sm:space-y-12">
          {essays.map((essay) => (
            <Link
              key={essay.id}
              href={`/blogs/${essay.id}`}
              className="section-border bg-white p-8 sm:p-10 rounded-2xl block group"
            >
              <div className="flex items-start justify-between gap-6 mb-5">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight group-hover:text-gray-600 transition-colors duration-300">
                  {essay.title}
                </h2>
                <span className="text-gray-300 group-hover:text-black transition-colors duration-300 flex-shrink-0 text-xl">→</span>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-light">{essay.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
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

