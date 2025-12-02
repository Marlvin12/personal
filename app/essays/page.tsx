import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essays - Marlvin Goremusandu',
  description: 'Thoughts on technology, culture, and the slow resistance to a fast world.',
}

const essays = [
  {
    id: 'digital-minimalism',
    title: 'The Road to Digital Minimalism',
    excerpt: 'I used to think social media was just part of modern life — a noisy background, sometimes useful, mostly "for fun." Now I see it differently: like walking into a casino where the house not only rigs the games, but also watches my eyes.',
    date: 'December 2, 2025',
    readTime: '15 min read',
    customPath: '/detox',
  },
  {
    id: 'playing-in-the-rain',
    title: 'Playing in the Rain',
    excerpt: 'I didn\'t expect anything unusual to happen that day. I was just on a tennis court, doing what I\'ve done hundreds of times before. But then it started to rain, and something in me shifted.',
    date: 'December 1, 2025',
    readTime: '5 min read',
  },
  {
    id: 'hindsight-and-sacrifice',
    title: 'The Dilemma Between Hindsight and Sacrifice',
    excerpt: 'For years, I believed that progress demanded a price. Every time I reached for something I wanted, something else slipped through my fingers. But survival is a fragile kind of victory.',
    date: 'November 21, 2025',
    readTime: '7 min read',
  },
  {
    id: 'the-unbroken-flight',
    title: 'The Unbroken Flight',
    excerpt: 'In the bruise colored hour before night fully arrives, an eagle drags itself through the wind not to survive, but to defy the sky that keeps daring it to break.',
    date: 'November 18, 2025',
    readTime: '3 min read',
  },
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
    excerpt: 'I\'ve lived half my life in Zimbabwe and half around the world, and that contrast has taught me one thing: life is easy if we make it that way.',
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
              href={'customPath' in essay ? essay.customPath as string : `/essays/${essay.id}`}
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

