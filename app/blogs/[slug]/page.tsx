import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const essays: Record<
  string,
  {
    title: string
    date: string
    readTime: string
    content: string[]
    image?: string
  }
> = {
  'living-more-loving-more': {
    title: 'Living More and Loving More',
    date: 'November 10, 2025',
    readTime: '3 min read',
    content: [
      `Somewhere along the way, someone lied.`,
      `They sold us the wrong dream — that success means screens, schedules, and status. That to matter, we have to constantly do more, own more, post more.`,
      `But I've been taking time away — long days camping, hiking, sitting under trees, and just breathing. And dang, man… someone really lied.`,
      `Out there, where there's no Wi-Fi, no notifications, and no pressure to perform, life feels real again. You notice how food tastes better when you're hungry, how laughter feels deeper when you're not rushing, how people — your parents, your friends, even strangers — start to matter again.`,
      `We've all been tricked into caring about things that don't. Followers, fashion, titles, opinions. We scroll through other people's lives while forgetting to live our own. But the truth is simple: We don't need more stuff. We need more moments. We don't need to be more liked. We need to be more loving.`,
      `Living more isn't about doing more — it's about being present. Loving more isn't about saying it — it's about showing up.`,
      `So yeah, someone lied. But we don't have to keep believing it. All we have to do is unplug, step outside, and remember what really matters — to live more, and love more.`,
    ],
  },
  'internet-library-to-marketplace': {
    title: 'The Internet Used to Be a Library, Now It\'s a Marketplace',
    date: 'November 10, 2025',
    readTime: '4 min read',
    content: [
      `There was a time when the internet felt pure — a place of curiosity, creativity, and community. You could search for something, learn, and move on. No one followed you with ads. No one tried to sell you a "limited-time offer." You just explored.`,
      `Now, everything online is a product. Every click, every thought, every interest is part of someone's sales funnel. Social media turned our personalities into brands, our attention into currency, and our time into inventory.`,
      `It's ironic — the internet, which once liberated people with free access to knowledge, has now become one of the greatest tools of subtle control. You can't scroll for ten seconds without being targeted. The "explore" page isn't there to inspire you — it's there to sell you. Even authenticity has been commodified: "Be real," but do it in 4K with sponsored lighting.`,
      `People aren't just tired — they're mentally crowded. Every platform competes for your focus, every influencer for your trust. Even silence feels strange now, because the world has trained us to consume nonstop.`,
      `That's why it's fascinating to see a quiet migration happening — people moving from mainstream Google to tools like ChatGPT. Not because it's trendy, but because it's quiet. No ads. No clickbait. No one trying to sell you something. Just information, the way the internet used to be.`,
      `It reminds me of what the web was meant to be — a library, not a mall. A space for thought, not distraction.`,
      `Maybe this is the new definition of digital freedom: being able to learn, think, and create without being converted into a customer every five minutes.`,
      `The same principle applies to life itself. Freedom — whether in the real world or online — isn't about owning more, it's about filtering less.`,
      `And maybe, just maybe, the most radical thing left to do is to be unreachable, unbranded, and unbothered — to live and think without selling yourself in the process.`,
    ],
  },
  'life-is-easy': {
    title: 'Life Is Easy If We Make It That Way',
    date: 'November 10, 2025',
    readTime: '6 min read',
    content: [
      `I've lived half my life in Zimbabwe and half in the United States, and that contrast has taught me one thing: life is easy if we make it that way.`,
      `In Zimbabwe, people are happy. They laugh loudly, dance freely, and live slowly. According to mainstream media, they're "poor." But I've realized the world often equates not having with unhappiness, as if peace only exists behind a credit score.`,
      `My grandparents built their home in one month — mortar bricks molded by my cousins, a few bags of cement, and pure teamwork. No debt. No mortgage. Just family and freedom. Meanwhile, in America, you can build the same house — maybe even better — but you'll spend thirty years paying for it. That's when I understood what true freedom is.`,
      `Freedom isn't having more than yesterday; it's having enough for today. My grandparents grow their food, raise chickens and cattle, and live without alarm clocks or rent reminders. They are rich — not in money, but in time.`,
      `When I traveled to Europe, I saw a glimpse of that same rhythm. People would smoke after lunch, sip tea, and spend hours in conversation. They weren't racing life; they were living it. Life is meant to be experienced — not traded away for a house you'll only own for a decade before you die.`,
      `Growing up, I didn't know about clothing labels. We wore whatever our parents bought — hand-me-downs, second-hand shirts from the open market, my dad's old coat, my brother's jeans that no longer fit him. It wasn't a lack of money; it was a lack of obsession. We didn't measure worth in logos.`,
      `Then I got my first phone at twenty, and the world changed. Suddenly, I could see what everyone else owned — their Jordans, their cars, their vacations. I began to want what they had, not because I needed it, but because I didn't want to feel less. Just like C.S. Lewis wrote in "The Inner Ring," I was peeling the onion — chasing a place among people who didn't even know I existed.`,
      `By twenty-two, I realized I was going nowhere. I had to course-correct. So I went back to my roots — to simplicity. Now, I wear plain shirts that cost a dollar, thrifted jeans, and a peaceful conscience. I'm not embarrassed — that's how I was raised. And it's liberating.`,
      `Because I've learned that: Happiness is peace of mind, not possessions. Freedom is control over your time, not your image. Success is alignment between your values and your actions — not your follower count.`,
      `In the end, life isn't supposed to be a race. It's supposed to be a rhythm — something you live with intention, not exhaustion.`,
      `So yes, life is easy — if we make it that way. But it requires unlearning what the world told us to chase, and remembering what our grandparents never forgot: you don't need more to live better; you just need enough.`,
    ],
  },
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
    title: 'Ubiquitous Assimilation: The Erasure of Original Thought',
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
  'the-african-mask': {
    title: 'The African Mask',
    date: 'November 18, 2025',
    readTime: '5 min read',
    image: '/african-mask.jpeg',
    content: [
      `I grew up believing the world was simple: the people with the least should be the ones who complain the most. Then I left home, traveled, returned, and realized how wrong that assumption was.`,
      `If you drive through Cape Town long enough, you'll meet the contradiction face-to-face. I remember one afternoon — nothing dramatic, no life-changing event — just a moment that hit harder than I expected. A man on the side of the road asked for twenty rand. I handed it to him. He looked at me, smiled, and said, "Dankie, baba. Have a great day."`,
      `Not a rehearsed script. Not a transactional thank you. A real one. The kind that disarms you. He walked away smiling, toward a small boy who couldn't have been more than five. And the thing that stuck with me wasn't the poverty. It was the dignity. The softness. The humanity that had no business being that intact in circumstances that harsh.`,
      `Southern Africans carry a trait the world doesn't understand: we smile even when life hasn't given us a reason to. Outsiders call it humility. But that's too shallow. It's something more complicated. More ancient. It's a mask — not the kind that hides the truth, but the kind that protects it.`,
      `Because here's the uncomfortable reality: People who've been forced to survive learn to choose grace. People who've been ignored learn to stay gentle. People who've been told they are "less" refuse to let hardship define their spirit.`,
      `That smile is not naïve. It is not passive. It is not a sign of weakness. It is a declaration: "You will not take my dignity."`,
      `We don't have high-speed trains. We haven't landed anyone on the moon. Entire nations on our continent still battle corruption, scarcity, and instability. But somehow, in the middle of all that, we've mastered a social technology the rest of the world has forgotten — humility without defeat, kindness without resources.`,
      `The world chases innovation, infrastructure, and achievement. Those things matter. But they are not the only currency that shapes a civilization. There's another one — quieter, softer, but just as powerful: A smile that carries history. A thank-you that holds the weight of struggle. A humility that refuses to die.`,
      `That is the African mask. Not a disguise — a shield. A reminder that humanity doesn't require wealth, comfort, or progress. Just character.`,
      `And every time I step outside and see someone smile through circumstances that should have broken them, I'm reminded of a truth no textbook ever taught me: Strength doesn't always look like power. Sometimes it looks like gratitude.`,
    ],
  },
  'the-unbroken-flight': {
    title: 'The Unbroken Flight',
    date: 'November 18, 2025',
    readTime: '3 min read',
    image: '/icarus.webp',
    content: [
      `In the bruise colored hour before night fully arrives, an eagle drags itself through the wind not to survive, but to defy the sky that keeps daring it to break. Every ascent is a wager, every breath a hard earned stake.`,
      `Its wings are not blessings; they are scars learned into shape. It rises because falling has become a debt it refuses to escape.`,
      `And then Icarus, reckless, radiant, unrepentantly bold, burns upward with the arrogance only the desperate hold. He does not climb for freedom; he climbs because gravity feels like a cage, because staying on the ground would be a quiet, lifelong rage.`,
      `The sun does not kill him. It unmasks him. It shows him the cost of wanting more than he was built to bear. His fall is not tragedy; it is truth stripped raw of every prayer.`,
      `From that wreck, in the silence no mortal voice can reach, the phoenix convulses into flame, a violent, searing breach. Rebirth is not peaceful. It is not kind. It is a funeral for the version of yourself you must leave behind.`,
      `Its scream is the sound of becoming. Its fire is the price of returning.`,
      `So let these three be our witnesses, the scarred, the shattered, the reborn, proof that every kind of flight demands its own kind of storm. Strength is forged, not granted. Hope is earned, not found. And every rise worth taking drags something dark to the ground.`,
      `If you must fall, then fall fiercely, with nothing held tight. For only those who burn completely ever learn how to rise and bite back at the night.`,
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

          {essay.image && (
            <div className="mb-8 sm:mb-12">
              <Image
                src={essay.image}
                alt={essay.title}
                width={800}
                height={600}
                className="w-full h-auto rounded grayscale"
              />
            </div>
          )}

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
