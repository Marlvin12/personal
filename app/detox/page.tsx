import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Road to Digital Minimalism - Marlvin Goremusandu',
  description:
    'Reclaiming My Attention in a World That Tracks My Eyes. A personal experiment in digital minimalism.',
}

export default function DetoxPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <Link
          href="/essays"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 mb-8 sm:mb-12 transition-colors"
        >
          <span>&larr;</span> back to essays
        </Link>

        {/* Essay Section */}
        <article className="section-border bg-white p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2">
            The Road to Digital Minimalism
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            Reclaiming My Attention in a World That Tracks My Eyes
          </p>

          <div className="mb-8 flex justify-center">
            <Image
              src="/digitalminimalism.png"
              alt="Digital Minimalism"
              width={600}
              height={315}
              className="w-full max-w-lg h-auto grayscale"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none text-base leading-relaxed">
            <p className="text-gray-700 mb-6">
              I used to think social media was just part of modern life - a
              noisy background, sometimes useful, mostly "for fun."
            </p>

            <p className="text-gray-700 mb-6">
              Now I see it differently: like walking into a casino where the
              house not only rigs the games, but also watches my eyes, heart
              rate, and micro-movements to redesign the room in real time.
            </p>

            <p className="text-gray-700 mb-6">
              That realization didn't come from a motivational quote. It came
              from reading actual research on eye tracking and contextual AI,
              and from listening to people who walked away from the slot
              machines for long enough to see clearly.
            </p>

            <p className="text-gray-700 mb-8">
              I'm fascinated by digital minimalism because I don't just want to{' '}
              <em>use</em> technology - I want to understand what it's doing
              back to me. My goal is simple, but not easy:{' '}
              <strong>one full month with zero social media</strong>, documenting
              how my mind, mood, focus, and relationships change, and then
              asking honestly whether going back is even worth it.
            </p>

            <p className="text-gray-700 mb-8">
              To understand <em>why</em> this experiment matters, you have to
              look at what social media has become - and what the latest AI +
              eye-tracking research says about where it's going.
            </p>

            <div className="border-t border-dashed border-gray-200 my-8"></div>

            <h3 className="text-xl sm:text-2xl font-normal mb-6">
              Scrolling Is the New Smoking
            </h3>

            <p className="text-gray-700 mb-6">
              In their TEDxFargo talk, <em>"Scrolling Is the New Smoking,"</em>{' '}
              The Minimalists describe something that felt uncomfortably
              familiar: the sense of being trapped in{' '}
              <strong>digital consumerism</strong> - constantly wanting "more"
              even when nothing satisfying ever really arrives.
            </p>

            <p className="text-gray-700 mb-6">They weren't casual users.</p>

            <p className="text-gray-700 mb-6">
              They reached <strong>half a billion people</strong> and gained{' '}
              <strong>4 million followers</strong> in a single year. By all
              conventional metrics, social media was "working" for them. And yet
              they still walked away from it for a year.
            </p>

            <p className="text-gray-700 mb-4">
              They shared a few numbers that cut through the denial:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                The average person spends{' '}
                <strong>nearly two hours a day</strong> on social media.
              </li>
              <li>
                Those who spend more than two hours are{' '}
                <strong>almost three times more likely</strong> to experience
                depression.
              </li>
              <li>
                Social media use is associated with about a{' '}
                <strong>40% higher risk of sleep problems</strong>.
              </li>
              <li>
                <strong>46% of adolescents</strong> feel worse about their body
                image because of it.
              </li>
              <li>
                <strong>60% of users</strong> say it negatively affects their
                self-esteem.
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              These aren't just side effects. They're signals.
            </p>

            <p className="text-gray-700 mb-6">
              What struck me is how they described the <em>quality</em> of the
              experience: stimulation without satisfaction. The constant sense
              of being plugged into something - news, trends, opinions - but not
              actually nourished by any of it.
            </p>

            <p className="text-gray-700 mb-4">
              They broke down three core problems with social media:
            </p>

            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Obligation</strong> - The pressure to keep up with every
                headline, hot take, and update, as if missing one makes you
                irrelevant.
              </li>
              <li>
                <strong>Overconsumption</strong> - The endless scroll,
                engineered to convert boredom into compulsive engagement.
              </li>
              <li>
                <strong>Discontent</strong> - The quiet shift from intentional
                searching ("I need this information") to aimless scrolling
                ("Show me something to feel something").
              </li>
            </ol>

            <p className="text-gray-700 mb-4">
              When they quit for a year, they didn't just "use their phones
              less." Their behavior rewired:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>They stopped instinctively reaching for their phones.</li>
              <li>Relationships deepened through actual calls and texts.</li>
              <li>They had more time and energy for creative work.</li>
              <li>
                They felt calmer and had more room for ideas to incubate.
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              They paid a price - their revenue dropped <strong>21%</strong>,
              and their online reach went to zero. But they gained something
              harder to measure: agency.
            </p>

            <p className="text-gray-700 mb-8">
              And that's before we even get to the part that genuinely changes
              the stakes: <strong>eye tracking and AI.</strong>
            </p>

            <div className="border-t border-dashed border-gray-200 my-8"></div>

            <h3 className="text-xl sm:text-2xl font-normal mb-6">
              From Scroll Data to Eye Data
            </h3>

            <p className="text-gray-700 mb-6">
              Most people understand that platforms track clicks, likes, watch
              time, and scroll behavior. That's old news.
            </p>

            <p className="text-gray-700 mb-6">
              What's less visible is how far this has pushed into{' '}
              <strong>attention-level signals</strong> - and how close it is to
              literal <strong>gaze tracking</strong>, whether you call it that
              or not.
            </p>

            <p className="text-gray-700 mb-4">
              Consider what Instagram and TikTok already do with "behavioral
              signals":
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>How long you hover before scrolling.</li>
              <li>When your scroll slows or stops.</li>
              <li>Whether your face is oriented toward the screen.</li>
              <li>
                How you react (expressions, micro-pauses) to different types of
                content.
              </li>
              <li>The rhythm and timing of your interactions.</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Even without formal "eye tracking," those patterns approximate{' '}
              <strong>where your attention is</strong> and{' '}
              <strong>what holds your gaze longest</strong>. Add in
              high-resolution front cameras (already used for AR filters, face
              landmarks, effects), and the gap between "behavioral analytics"
              and "de facto gaze tracking" shrinks quickly.
            </p>

            <p className="text-gray-700 mb-8">
              But then I read something that pulled this into sharp focus.
            </p>

            <div className="border-t border-dashed border-gray-200 my-8"></div>

            <h3 className="text-xl sm:text-2xl font-normal mb-6">
              What Meta's Eye-Gaze Paper Actually Shows
            </h3>

            <p className="text-gray-700 mb-6">
              In 2025, researchers at Meta Reality Labs published a paper called{' '}
              <strong>
                "Eye Gaze as a Signal for Conveying User Attention in Contextual
                AI Systems."
              </strong>
            </p>

            <p className="text-gray-700 mb-6">
              Stripped of academic phrasing, the core message is straightforward:
            </p>

            <blockquote className="border-l-4 border-accent pl-4 my-6 text-gray-700 italic">
              Eye gaze is a powerful signal for understanding what a user cares
              about and what they are about to do - and AI models can exploit
              that.
            </blockquote>

            <p className="text-gray-700 mb-4">They did two main things:</p>

            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Measured how accurate eye tracking needs to be</strong>{' '}
                to reliably know which real-world object you're looking at.
              </li>
              <li>
                <strong>
                  Tested how much eye-gaze history helps a vision-language model
                  (VLM)
                </strong>{' '}
                answer questions like: "What am I looking at?" and "What am I
                going to interact with?"
              </li>
            </ol>

            <h4 className="text-lg font-normal mb-4 mt-8">
              1. How accurate is "good enough"?
            </h4>

            <p className="text-gray-700 mb-6">
              They used the <strong>Aria Digital Twins</strong> dataset -
              egocentric recordings of people doing everyday tasks in a fully
              furnished apartment: cooking, cleaning, decorating, working. Every
              object in the scene was digitally tracked in 3D, and the glasses
              captured eye tracking data.
            </p>

            <p className="text-gray-700 mb-4">They looked at:</p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Near-field objects</strong>: within 1 meter.
              </li>
              <li>
                <strong>Mid-field objects</strong>: between 1-2 meters.
              </li>
              <li>
                <strong>Interacted objects</strong>: things people actually
                touched, pressed, picked up.
              </li>
              <li>
                <strong>Fixated objects</strong>: what people deliberately
                looked at.
              </li>
            </ul>

            <p className="text-gray-700 mb-4">What they found:</p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                For <strong>fixated objects</strong> within 2 meters, and for{' '}
                <strong>near-field objects</strong>, the object's angular size
                is usually <strong>larger than the tracking error</strong>. The
                system can reliably tell what you're looking at most of the
                time.
              </li>
              <li>
                For <strong>objects you interact with</strong> (grabbing,
                pressing, etc.), the visual footprint is even larger (10+
                degrees). When you're about to do something with an object, eye
                tracking can almost always identify it correctly.
              </li>
              <li>
                <strong>Mid-field objects</strong> (1-2 meters) are more
                borderline; around half of them are too small to reliably
                identify at 3 degree error.
              </li>
            </ul>

            <p className="text-gray-700 mb-8">
              <strong>Translation:</strong> For anything close to you -
              especially things you touch -{' '}
              <strong>
                today's wearable eye tracking is already accurate enough to know
                what you're focused on.
              </strong>{' '}
              This isn't speculative. It's measured.
            </p>

            <h4 className="text-lg font-normal mb-4 mt-8">
              2. How much does gaze history help AI understand you?
            </h4>

            <p className="text-gray-700 mb-6">
              Next, they fed gaze data into a{' '}
              <strong>Meta Llama 3.2 90B VLM</strong> to see how much better it
              could understand user attention and predict actions.
            </p>

            <p className="text-gray-700 mb-6">
              They used <strong>scanpaths</strong> - the sequence of previous
              fixations - as context.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Task E1: "What am I looking at?"</strong>
            </p>

            <p className="text-gray-700 mb-4">Results:</p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                With <strong>no gaze context</strong>, the model got the right
                object only <strong>10.3%</strong> of the time.
              </li>
              <li>
                When they added <strong>scanpath history</strong>, accuracy
                climbed and peaked at about <strong>24.8%</strong> with{' '}
                <strong>6 prior fixations</strong>.
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              So just by telling the model what you looked at over the last few
              moments, they <strong>more than doubled</strong> its ability to
              figure out what you're currently focused on.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Task E2: "What am I going to interact with?"</strong>
            </p>

            <p className="text-gray-700 mb-6">
              They only looked at frames where the user would{' '}
              <strong>
                physically interact with an object within the next second
              </strong>
              .
            </p>

            <p className="text-gray-700 mb-4">Results:</p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                With gaze context, accuracy reached{' '}
                <strong>around 49.5%</strong> at its peak.
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              Almost <strong>50/50 odds</strong> of correctly predicting what
              object you're about to touch - based just on{' '}
              <strong>where your eyes have been looking</strong> and the current
              scene image.
            </p>

            <p className="text-gray-700 mb-4">
              The authors describe this as proof that:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Gaze isn't just about the present.</strong> It encodes{' '}
                <strong>intent</strong>, <strong>task context</strong>, and{' '}
                <strong>action plans</strong>.
              </li>
              <li>
                <strong>Scanpaths have temporal structure</strong>, similar to
                how language has patterns over sequences. And VLMs can leverage
                that structure.
              </li>
            </ul>

            <p className="text-gray-700 mb-8">
              They also acknowledge something most users will never read: "Eye
              movements reveal personal information and preferences, and any
              contextual AI system using eye tracking must be secure and
              privacy-preserving." Whether systems will <em>actually</em> be
              built that way is another question.
            </p>

            <div className="border-t border-dashed border-gray-200 my-8"></div>

            <h3 className="text-xl sm:text-2xl font-normal mb-6">
              What This Means for the "Casino"
            </h3>

            <p className="text-gray-700 mb-4">
              Put this together with how social platforms already work:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                They optimize for <strong>what holds your gaze longest</strong>.
              </li>
              <li>
                They tune the feed using{' '}
                <strong>
                  scroll rhythm, micro-pauses, hesitation, and replays
                </strong>
                .
              </li>
              <li>
                High-resolution cameras and sensors can capture{' '}
                <strong>
                  micro-expressions, face orientation, and pupil changes
                </strong>
                .
              </li>
              <li>
                Now we know: eye tracking + VLMs can infer what you're looking
                at <strong>right now</strong>, predict what you will{' '}
                <strong>interact with next</strong>, and use your gaze history
                like a contextual prompt.
              </li>
            </ul>

            <p className="text-gray-700 mb-6">The casino has moved from:</p>

            <blockquote className="border-l-4 border-gray-300 pl-4 my-6 text-gray-600">
              "Which thumbnail will you click?"
            </blockquote>

            <p className="text-gray-700 mb-6">to:</p>

            <blockquote className="border-l-4 border-accent pl-4 my-6 text-gray-700 italic">
              "Given your recent scanpath, what object, topic, or content will
              capture you next - and how can we get there first?"
            </blockquote>

            <p className="text-gray-700 mb-8">
              That's the world I'm choosing to test myself against when I say:{' '}
              <strong>"I want to go one month with zero social media."</strong>
            </p>

            <p className="text-gray-700 mb-8">
              This is not a productivity challenge. It's a sovereignty test.
            </p>

            <div className="border-t border-dashed border-gray-200 my-8"></div>

            <h3 className="text-xl sm:text-2xl font-normal mb-6">
              The Road to Digital Minimalism
            </h3>

            <p className="text-gray-700 mb-6">
              The Minimalists offered a useful metaphor: social media as a{' '}
              <strong>digital table</strong> with three legs:
            </p>

            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Content Consumption</strong> - Ideally: intentional,
                replenishing, not draining.
              </li>
              <li>
                <strong>Creativity</strong> - Using tools to make things, not
                just react.
              </li>
              <li>
                <strong>Connection</strong> - Using platforms to express care,
                love, and purpose - not comparison and status.
              </li>
            </ol>

            <p className="text-gray-700 mb-6">
              But most people aren't sitting at a stable three-legged table.
            </p>

            <p className="text-gray-700 mb-6">
              They're standing at a slot machine that pays out dopamine,
              insecurity, distraction, and occasional validation.
            </p>

            <p className="text-gray-700 mb-4">
              After their year offline, The Minimalists didn't swear off
              technology forever. They set rules:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Casino Rule:</strong> Decide how much time you'll spend{' '}
                <em>before</em> you step into the app.
              </li>
              <li>
                <strong>Replace Scrolling with Searching:</strong> Never go
                online without a question or purpose.
              </li>
              <li>
                <strong>Make Your Phone Boring:</strong> Grayscale, no
                hyper-stimulating icons.
              </li>
              <li>
                <strong>Declutter Apps:</strong> Remove anything that exists
                purely to hijack time and attention.
              </li>
              <li>
                <strong>Entryway Rule:</strong> Leave the phone by the door so
                it doesn't follow you everywhere.
              </li>
            </ul>

            <p className="text-gray-700 mb-8">
              These aren't gimmicks. They're friction - deliberate resistance
              against systems designed to remove all friction between impulse
              and behavior.
            </p>

            <div className="border-t border-dashed border-gray-200 my-8"></div>

            <h3 className="text-xl sm:text-2xl font-normal mb-6">
              My One-Month Experiment
            </h3>

            <p className="text-gray-700 mb-6">
              Given everything above, my experiment is simple:
            </p>

            <blockquote className="border-l-4 border-accent pl-4 my-6 text-gray-700">
              <strong>One month. Zero social media.</strong>
              <br />
              Not a "detox." A deliberate interruption of the attention market.
            </blockquote>

            <p className="text-gray-700 mb-4">
              During that month, I plan to track:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Sleep quality:</strong> When I go to bed, how well I
                sleep, and whether my mind feels quieter at night.
              </li>
              <li>
                <strong>Mood and anxiety:</strong> How often I feel restless,
                scattered, or "itchy" for stimulation.
              </li>
              <li>
                <strong>Focus blocks:</strong> How many uninterrupted deep work
                sessions I get per day.
              </li>
              <li>
                <strong>Cravings:</strong> When and how often I feel the urge to
                reach for social media - and what triggers it.
              </li>
              <li>
                <strong>Relationships:</strong> Whether I text, call, or see
                people in person more.
              </li>
              <li>
                <strong>Creativity:</strong> Whether ideas come more easily when
                I'm not constantly consuming.
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              I'll also apply some of the Minimalists' rules to everything else
              digital:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Phone on grayscale.</li>
              <li>No addictive apps on the home screen.</li>
              <li>
                Phone parked away from me when I'm working, reading, praying, or
                resting.
              </li>
              <li>
                Online time driven by <strong>questions and projects</strong>,
                not boredom.
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              At the end of the month, I want to be able to answer honestly:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Do I think more clearly?</li>
              <li>
                Do I feel more grounded in my own life, not everyone else's?
              </li>
              <li>
                Do I miss social media - or do I just miss the easy escape it
                gave me?
              </li>
              <li>
                Now that I know how far eye-tracking and AI have gone,{' '}
                <strong>
                  do I actually want to keep feeding them my attention?
                </strong>
              </li>
            </ul>

            <div className="border-t border-dashed border-gray-200 my-8"></div>

            <h3 className="text-xl sm:text-2xl font-normal mb-6">
              Conclusion: Walking Away from the Table
            </h3>

            <p className="text-gray-700 mb-4">The research is clear:</p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                Our eyes are not just seeing; they are{' '}
                <strong>speaking a language</strong> that AI systems are
                learning to read.
              </li>
              <li>
                Our attention is not just drifting; it is being{' '}
                <strong>measured, modeled, and monetized</strong> with
                increasing precision.
              </li>
              <li>
                Our "free" platforms are not free; the cost is paid in{' '}
                <strong>
                  fragments of focus, sleep, self-esteem, and agency
                </strong>
                .
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              Digital minimalism, for me, is no longer about being "less online"
              or "more productive."
            </p>

            <p className="text-gray-700 mb-6">
              It's about refusing to be an unthinking data source for systems
              that can already guess what I'm about to do next.
            </p>

            <p className="text-gray-700 mb-6">
              The road to digital minimalism starts with a decision:
            </p>

            <p className="text-gray-700 mb-6">
              Step away from the machine long enough to remember what it feels
              like when my nervous system, my gaze, and my mind belong to me -
              and not to an algorithm that sees my eyes as just another input
              stream.
            </p>

            <p className="text-gray-700 mb-6">One month is the first step.</p>

            <p className="text-gray-700">
              The real question is what I'll see when I finally look back with
              my eyes fully my own.
            </p>
          </div>

          {/* Call to action to tracker */}
          <div className="mt-12 pt-8 border-t border-dashed border-gray-200 text-center">
            <Link href="/detox/tracker" className="btn-primary">
              start tracking my detox
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
