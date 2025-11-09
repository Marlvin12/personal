import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const essays: Record<
  string,
  {
    title: string
    date: string
    readTime: string
    content: string[]
  }
> = {
  'success-is-a-numbers-game': {
    title: 'Success Is a Numbers Game — Nothing More',
    date: 'November 9, 2025',
    readTime: '5 min read',
    content: [
      `I didn't learn about success from a textbook — I learned it from experience. From college and scholarship applications, to job rejections, to reaching out to investors, I began to see a pattern: success isn't magic, it's mathematics.`,
      `My dad used to tell me, "You just need one yes." At first, it sounded like encouragement. Later, I realized it was probability. If the chance of success is 0.0001, and you try 10,000 times, you're guaranteed a win. The problem is, no one knows where the stopping line is. That uncertainty — not failure itself — is what makes people quit.`,
      `I think about it like the 3-mile races I used to run back home in Zimbabwe. We didn't have watches or distance markers. We just ran. You never knew how far you'd gone or how much was left. The exhaustion wasn't just physical — it was mental. That's what life feels like: running toward a finish line you can't see. Some people get there after three tries. Others after a hundred. Some after a thousand. But everyone's race is different.`,
      `Even the confident and gifted face the same math. Cold-approaching a girl? The success rate is about 25%, even for the handsome ones. The difference isn't charm — it's volume and resilience. Thomas Edison tried over a thousand times before perfecting the light bulb. Each "failure" wasn't wasted effort; it was data. Machine learning algorithms work the same way — not by guessing right the first time, but by iterating through millions of examples until accuracy emerges. Progress — human or artificial — is built on repetition and refinement.`,
      `As the saying goes, "If you hang around a barbershop long enough, sooner or later you'll get a haircut." Stay close to opportunity long enough, and probability will eventually reward you.`,
      `Success, in the end, is not a mystery — it's statistical persistence. You don't have to be the smartest or the luckiest. You just have to keep showing up. Because the game isn't about knowing when you'll win — it's about never leaving the table before you do.`,
    ],
  },
  'ubiquitous-assimilation': {
    title: 'Ubiquitous Assimilation: The Marketing Holocaust That Kills Great Work',
    date: 'November 9, 2025',
    readTime: '8 min read',
    content: [
      `There is a quiet war being fought every day — not with weapons, but with trends. A war where originality dies not by censorship, but by assimilation. Ideas are no longer allowed to breathe. The moment something sparks with truth, it is stripped, marketed, remixed, and recycled until it becomes another product to scroll past. This is the marketing holocaust — the systematic destruction of great work through mass digestion. Genius doesn't disappear anymore; it goes viral.`,
      `In the age of ubiquitous assimilation, everything is consumed at the same speed — whether it's a 2,000-year-old philosophy or a 15-second dance clip. Algorithms flatten the world into sameness. What was once sacred becomes "content." What was once studied becomes "trending." Creativity becomes a treadmill of attention — where artists, thinkers, and builders must constantly perform or vanish. We are drowning in exposure while starving for depth.`,
      `But in every dark age of distraction, there are those who resist. The nerds — not in the shallow pop-culture sense, but in the deeper one. The ones who still believe in concentration as a form of rebellion. They sit alone with code, with books, with silence. They build worlds out of nothing. They are the few who still possess the power to think without an audience. In a society that worships attention, attention itself becomes sacred currency — and the nerd, the focused mind, becomes the new monk.`,
      `The nerd is the man who left the cave.`,
      `In Plato's allegory, prisoners mistake shadows on the wall for reality. When one escapes, he turns toward the blinding sun — the symbol of truth. Today, the shadows are not on stone but on screens. The fire that casts them is not mythic, but algorithmic. The cave is the internet. And the light — the painful, unfiltered light — is the ability to see the world without its filters of dopamine, marketing, and ego.`,
      `The tragedy is that most people don't want the light. They return to the cave — to likes, ads, and noise — because the sunlight of solitude burns. It demands patience, boredom, and self-confrontation. To read deeply, to write slowly, to think originally — these are revolutionary acts now. They do not feed the algorithm. They starve it.`,
      `Reading is the first rebellion. When you read, you resist assimilation — you enter the mind of another without noise. You slow down time. You develop memory and taste, two things marketing can't automate.`,
      `Writing is the second rebellion. To write is to structure chaos into meaning. It is to take your pain, your questions, your confusion — and sculpt them into clarity. Writing teaches us to think for ourselves in a world that wants us to think collectively. It is the act of anchoring truth in a sea of manipulation.`,
      `And imagination — imagination is the third rebellion. It is the last untouched land, the one thing corporations can't yet sell. The world belongs to those who can see what doesn't exist yet, who can build what can't be optimized, who can dream without a market.`,
      `The marketing holocaust kills great work because it kills time — the long, slow time required for mastery. It convinces creators to ship fast, talk loud, and never think too long. But all great work is born in silence, in the uncomfortable stillness where nothing happens — until everything happens.`,
      `So this essay is a call — not to retreat from the world, but to confront it with discipline. To be a reader when others scroll. To be a writer when others post. To be a creator when others consume. To reject assimilation not by hiding, but by building what cannot be copied.`,
      `The nerd wins not by attention, but by endurance.`,
      `He plays the long game of mastery.`,
      `He reads what no one reads.`,
      `He writes what no one understands yet.`,
      `And one day, when the world wakes up from its dopamine dream, his work will still be there — untouched, unmarketed, alive.`,
      `The marketing holocaust cannot kill the mind that refuses to be sold.`,
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const essay = essays[params.slug]

  if (!essay) {
    return {
      title: 'Essay Not Found',
    }
  }

  return {
    title: `${essay.title} - Marlvin Goremusandu`,
    description: essay.content[0].substring(0, 155),
  }
}

export default function EssayPost({ params }: { params: { slug: string } }) {
  const essay = essays[params.slug]

  if (!essay) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 mb-8 sm:mb-12 transition-colors"
        >
          <span>←</span> back to essays
        </Link>

        <article className="section-border bg-white p-6 sm:p-8 md:p-12">
          <header className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-gray-200">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 leading-tight">
              {essay.title}
            </h1>
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
              <span>{essay.date}</span>
              <span>•</span>
              <span>{essay.readTime}</span>
            </div>
          </header>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {essay.content.map((paragraph, index) => (
              <p key={index} className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className="mt-12 section-border bg-white p-8">
          <p className="text-gray-600 mb-4">written by marlvin goremusandu</p>
          <Link href="/blogs" className="text-accent hover:underline">
            read more essays →
          </Link>
        </div>
      </div>
    </main>
  )
}
