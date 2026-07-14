import { useState } from 'react'
import './App.css'
import weightBook from "./assets/book 2 Mina King.jpg";
import elvesBook from "./assets/by Mina King.jpg";
const PayPalIcon = () => (
  <svg className="pay-icon" viewBox="0 0 24 24" fill="#a0c4ff" aria-hidden="true">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
  </svg>
)

const BitcoinIcon = () => (
  <svg className="pay-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#f7931a" />
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fontSize="15"
      fontFamily="Georgia, serif"
      fontWeight="bold"
      fill="#fff"
    >
      ₿
    </text>
  </svg>
)

const samples = [
  {
    title: 'The Golden Stranger | Excerpt',
    body: `We led him through the winding corridors to the largest of the private alcoves, the one reserved for patrons of exceptional status. It was a chamber of deep crimson and burnished gold, lit by enchanted candles that cast a warm amber glow across the massive bed piled with silk cushions and fur throws. The air smelled of jasmine and sandalwood and something else, something electric, as if the room itself was holding its breath.

    The door clicked shut behind us.

    Alana moved first. She circled him slowly, her hips swaying, her fingers trailing across his shoulders, his back, the curve of his spine. "You have been on the road a long time," she murmured. "Your body is tense. Let us take care of you."

    He stood still, allowing her exploration, his eyes tracking me as I approached from the front. I reached up and unfastened the clasp of his cloak. It fell to the floor in a pool of deep blue. His tunic followed, lifted over his head by Alana's eager hands, revealing the full expanse of his chest. His skin was sun-kissed gold, smooth over hard muscle, with a faint dusting of lighter hair across his pectorals that trailed downward in a thin line, disappearing beneath the waist of his breeches.

    Alana made a sound low in her throat. "Oh, this is unfair. You are entirely unfair."

    He smiled, a slow curve of his lips. "I have been called worse."

    "Not by us," I said.

    I knelt. Alana knelt beside me. Together, we unlaced his breeches and pulled them down his powerful thighs. His cock sprang free, and for a long moment, neither of us spoke.

    It was magnificent.

    Thick. Cut. The head was a perfect dome of flushed pink, smooth and gleaming, already slick with the first bead of arousal at the slit. The shaft was long and straight, veins tracing subtle ridges along the sides, and at the base, his balls hung heavy and full, drawn up slightly in anticipation. He was groomed meticulously, not a hair out of place, his skin soft and warm and smelling faintly of sandalwood and clean male sweat.

    Alana reached him first. She wrapped her fingers around the base of his shaft, her red nails a vivid contrast against his golden skin, and squeezed gently. "Look at this," she breathed. "Eva, look at this perfect cock."

    I leaned in, my lips brushing the inside of his thigh. "We are going to worship you," I said, looking up at him through my lashes. "Every inch. For as long as you can stand it."

    His hand came to rest on my head, fingers threading through my hair. "Then worship," he said, his voice a deep rumble of command.

    We did.

    Alana took the head into her mouth first, her lips stretching around his girth, her tongue swirling over the sensitive underside where the ridge met the shaft. She sucked slowly, deliberately, pulling back until her lips barely clung to the tip, then sinking down again until he hit the back of her throat. She gagged softly, her eyes watering, and kept going.

    While she worked the upper half, I attended to the rest. My tongue traced the thick vein that ran along the underside of his shaft, following it down to the base. I cupped his balls in my palm, feeling their weight, their warmth, and lifted them gently to my mouth. I sucked one into my lips, then the other, rolling them on my tongue while Alana bobbed her head above me. His sack was soft and warm and tasted faintly of salt and skin, and I lavished it with attention, licking the seam between the two spheres, dragging my tongue back up to meet Alana's mouth where it was stretched around his cock.

    We traded places without speaking. I took him into my throat while Alana moved lower, her tongue tracing circles around the base of his shaft, then lower still, daring to flick against the sensitive spot behind his balls. He groaned, a deep resonant sound, and his fingers tightened in my hair.

    "Good," he rumbled. "Both of you. So good."

    We worshipped him with our mouths, our hands, our voices. Alana whispered filthy praise against his skin, calling his cock a gift from the heavens, a monument, a thing that deserved temples built in its honor. I told him he was the most beautiful man I had ever seen, that his body made me ache, that I wanted to feel him inside me until I forgot my own name. He guided us with gentle pressure on our heads, tilting my face up to meet his gaze while Alana sucked his balls, his eyes burning with desire and tenderness in equal measure.
`,
  },
  {
    title: 'The Guest Room',
    body: `The suburbs had a way of swallowing men whole. Jason had forgotten that, or maybe he had never really known it. He spent his twenties in cramped city apartments with paper-thin walls and the constant hum of traffic, building a life that was supposed to mean something. Now, at thirty-two, he stood in his brother's driveway with a duffel bag and a hollow chest, watching the sprinklers arc over a lawn so green it looked fake.

Three years. Three years of his life poured into a woman who looked at him across their anniversary dinner and said, "I don't think I ever really loved you." Not angry. Just stating a fact. Like she was talking about the weather.

He packed his things in forty-seven minutes. He counted.

"Jason!" His brother Mark appeared on the porch, grinning with that easy confidence Jason had always envied. "Get your ass in here."

The house smelled like cinnamon. Familiar in a way that made his throat tight. He spent summers here as a teenager, escaping his own parents' screaming matches.`,
  },
    {
    title: 'For Zod',
    body: `Mira turned. The man turned. His honey eyes landed on me, and his mouth opened slightly. I was still in my ceremonial robe from prayers, a sheer thing of pale blue silk that clung to my breasts and hips and left very little to the imagination. His gaze traveled down, then up, then down again, and his flush deepened from red to crimson.

    I walked toward him, letting my hips sway with each step. When I reached him, I placed a hand on his chest. The muscle beneath his tunic was warm and solid. I leaned in close to Mira, my lips near her ear, but my voice was loud enough for only her.

    "Look down."

    Mira's gaze dropped.

    Beneath the loose fabric of his travel-worn breeches, a distinct shape was already pressing forward. Not fully hard, but well on its way. A soft outline, thick and promising, curving against his thigh.

    Mira's smile widened. "Ah," she said. "I see. Well then. Eva, this is..."

    She looked at him expectantly.

    "Zod," he said. His voice cracked slightly on the single syllable. He cleared his throat. "Zod. That is, uh, that is what they call me here. It changes. Depending on where I am. I do not mind. Most names are fine. Except one. There was a man in Qas'Rivar who called me, well, it does not matter. Zod is fine. Zod is good."

    He was rambling. I bit my lip to keep from laughing.

    "Zod," I said, tasting the name. "I am Eva. Come with me."

    I took his hand. His palm was enormous, rough with calluses, but his grip was hesitant, almost shy. I led him down the corridor toward one of the smaller alcoves, the one with the soft blue cushions and the window that faced the sea. He followed in silence, though I could feel his eyes on my back, my hips, the sway of my hair.

    When we reached the alcove, I gestured to the low bed. "Sit."

    He sat. The bed creaked under his weight. He perched on the edge like he was afraid it might break.

    I knelt before him and placed my hands on his knees. "You have never done this before, have you?"

    His flush returned. "I, uh. No. Not, not sober. I mean, there was once, in a tavern, but I was very drunk and I do not think it, uh, counted. She said it counted but I do not remember much. Just her elbow. She had a sharp elbow. That is all I remember."

    I laughed. I could not help it. The sound bubbled out of me, bright and genuine, and his eyes widened in something like wonder.

    "You are laughing," he said.

    "You are very sweet," I said. "And very nervous. Do not be nervous, Zod. I will show you what to do. All you have to do is listen and ask questions when you have them. Can you do that?"

    He nodded vigorously. "I can do that. I am very good at listening. I listen to people all the time. Mostly when they are telling me where the danger is. Or where the food is. I listen very well to food directions."

    I laughed again. "Good. Then stand up."

    He stood. I reached for the ties of his breeches. His breath caught. I looked up at him, my violet eyes meeting his honey ones.

    "May I?"

    He swallowed. "Yes. Please. Yes."

    I unlaced him slowly, letting my fingers brush the warm skin beneath. When the fabric fell away, his cock sprang free, and I stopped. I stared.

    It was not the largest I had seen. Thogrin had been thicker, Balnui longer. But Zod's cock was beautiful. Perfectly proportioned, thick without being overwhelming, the shaft smooth and warm, the head still partially hidden beneath a soft, velvety foreskin. He had foreskin… “thank the goddess” I whispered, and the sight of that gentle hood, the way it framed the flushed tip, made my mouth water.

    "You are beautiful," I breathed.

    He blinked. "I am?"

    "Your cock," I said, and I could not keep the reverence from my voice. "It is lovely. Not too big, not too small. Thick. With its sheath intact." I reached out and traced a single finger along the length of him, from base to tip. He shivered. "You are perfect, Zod. Do you know that?"

    His face was crimson. "I, uh. No one has ever said that. About my, uh. About that. A woman once called it adequate but she was, I think, being mean. She was mean about a lot of things. My horse did not like her."

    I giggled. "Your horse has good instincts."

    "My horse is very smart," he agreed.

    I wrapped my hand around him. He was warm and heavy in my palm, and at my touch, a bead of moisture appeared at the tip, glistening under the candlelight. I stroked him once, slowly, and he let out a low, shuddering groan that seemed to come from somewhere deep in his massive chest.

    "Have you ever been touched like this?" I asked.

    "Not... not like this. Not... gently." His voice was strained. His hands hung at his sides, clenched into fists. "What do I do with my hands? I do not know what to do with my hands. They are just... here."

    I smiled up at him. "You can touch me. Anywhere you like. I will tell you if something is not good, but I promise you, Zod, you will not hurt me."

    He reached out. His massive hand, rough and scarred and trembling slightly, settled on my shoulder. His thumb traced the curve of my collarbone with a gentleness that made my breath catch. He moved slowly, exploring, his fingers skating over the bare skin of my arm, my waist, the swell of my hip.

    "You are very soft," he said quietly. "Is that... is that normal? For people to be this soft?"

    I laughed, soft and warm. "It is normal for me."

    "It is very nice," he said. "I like it. I like... I like this."

    "Good." I released his cock and stood, letting my robe slip from my shoulders. It pooled at my feet. I stood before him naked but for the emerald at my throat, and his eyes went wide. His mouth opened. No sound came out.
`,
  },
]

const pricing = [
  { tier: 'Short Story', words: '1000 – 3000 words', price: '$50 – $150' },
  { tier: 'Standard Commission', words: '3000 – 7000 words', price: '$150 – $300' },
  { tier: 'Premium Commission', words: '7000+ words', price: 'Contact for Quote' },
]

const BTC = '3BVt7HbBzbj6ypbtZNtJ4fcaXXndY5Hzs8'

export default function App() {
  const [copied, setCopied] = useState(false)
  const [method, setMethod] = useState('')

  const copyBtc = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(BTC)
    } else {
      const el = document.createElement('textarea')
      el.value = BTC
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      el.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const get = (k: string) => String(f.get(k) ?? '').trim()
    const body = [
      `— Contact —`,
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Preferred contact method: ${get('contact_method')} (${get('contact_handle')})`,
      ``,
      `— Project Overview —`,
      `Genre: ${get('genre')}`,
      `Desired word count: ${get('wordcount')}`,
      ``,
      `— Story Details —`,
      `Point of view: ${get('pov')}`,
      `Main character(s): ${get('characters')}`,
      `Setting: ${get('setting')}`,
      `Tone / mood: ${get('tone')}`,
      ``,
      `— Content Guidelines —`,
      `Themes / elements to include: ${get('include')}`,
      `Themes / elements to avoid (hard limits): ${get('avoid')}`,
      ``,
      `— Additional Notes —`,
      get('notes'),
      ``,
      `— Agreement —`,
      `Portfolio use understood: ${f.get('agree_portfolio') ? 'Yes' : 'No'}`,
      `50% upfront agreed: ${f.get('agree_payment') ? 'Yes' : 'No'}`,
      `Patron signature: ${get('signature')}`,
    ].join('\n')
    const subject = `Commission request — ${get('name') || 'New'}`
    window.location.href = `mailto:info@veiledquill.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="page">
      <header className="hero">
        <h1>The Veiled Quill 𓂃🪶</h1>
        <p className="tagline">• Sensual Storytelling •</p>
        <nav>
          <a href="#contact" className="btn">Commission Me</a>
         <a href="#aboutme" className="btn">About Me</a>
        </nav>
      </header>

      <section id="about" className="about">
        <h2>Welcome to The Veiled Quill.</h2>
        <p>
      Behind every veil, a secret waits. Behind every secret, a story burns to be told.
The Veiled Quill ♥ where your hidden desires become scandalous tales, woven with intrigue and edged with pleasure.
        </p>
      </section>

      <section id="aboutme" className="aboutme">
        <h2>About Me</h2>
        <p className="goddess-name">You can call me Goddess... but most prefer Mina. ♥</p>
        <p>
        I'm a writer who lives at the intersection of fantasy and filth, of sweetness and sin.

        Give me high fantasy with elves and sorceresses. Give me sweet, aching love between two enemies or give me your 
        darkest desires, your sweetest dreams, your most scandalous secrets.

        I'm a total nerd. Anime? Yes. Dungeons & Dragons? Absolutely. When I'm not writing or reading scandalous tales of lust and desire, 
        I'm gaming. Baldur's Gate 3. Cyberpunk 2077. Sometimes I need a cozy pixelated game to unwind. But writing? That's my first love. 
        Always will be.
        </p>
      </section>

      <section className="featured">
  <h2>Debut Novel</h2>
  <div className="book-card">
    <h3>Ashes Of The Radiant Pearl</h3>
    <p>My debut novel – Ashes Of The Radiant Pearl – unpublished.</p>
    <a
      href="https://www.patreon.com/c/MinaJollivet"
      className="btn"
      target="_blank"
      rel="noreferrer"
    >
      Visit my Patreon for more details
    </a>
  </div>
</section>
<section className="featured">
  <h2>Available Now on Amazon</h2>

  <div className="amazon-books">

    <a
      href="https://www.amazon.com/Weight-Gentle-Hands-Temple-Karess-ebook/dp/B0H3WBVKF1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={weightBook} alt="The Weight of Gentle Hands" />
    </a>

    <a
      href="https://www.amazon.com/Three-Elves-Dwarf-Temple-Karess-ebook/dp/B0H8KG6T2S"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={elvesBook} alt="Three Elves and a Dwarf" />
    </a>

  </div>
</section>

      <section className="samples">
        <h2>Writing Samples</h2>
        {samples.map((s) => (
          <article key={s.title} className="sample">
            <h3>{s.title}</h3>
            {s.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="pricing">
        <h2>Commission Pricing</h2>
        <div className="tiers">
          {pricing.map((p) => (
            <div key={p.tier} className="tier">
              <h3>{p.tier}</h3>
              <p className="words">{p.words}</p>
              <p className="price">
                {p.price.includes('Contact') ? (
                  <a href="mailto:info@veiledquill.comquill@hotmail.com?subject=Commission%20Quote">
                    {p.price}
                  </a>
                ) : (
                  p.price
                )}
              </p>
            </div>
          ))}
        </div>

        <h3 className="pay-heading">Payment Options</h3>
        <div className="pay">
          <a
            className="pay-method"
            href="https://www.paypal.com/paypalme/mortess"
            target="_blank"
            rel="noreferrer"
          >
            <strong>
              <PayPalIcon />
              PayPal
            </strong>
          </a>
          <div className="pay-method">
            <strong>
              <BitcoinIcon />
              Bitcoin
            </strong>
            <button className="btc" onClick={copyBtc} title="click to copy">
              {BTC}
              <span className="btc-hint">{copied ? '✓ Copied!' : '(click to copy)'}</span>
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p className="lede">Ready to bring your story to life?</p>

        <form className="commission-form" onSubmit={submit}>
          <fieldset>
            <legend>Contact</legend>
            <div className="field-row">
              <label>
                Your Name
                <input name="name" required placeholder="How should I address you?" />
              </label>
              <label>
                Email Address
                <input name="email" type="email" required placeholder="you@example.com" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Preferred Contact Method
                <select
                  name="contact_method"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  <option>Email</option>
                  <option>Discord</option>
                  <option>Telegram</option>
                </select>
              </label>
              {method && (
                <label>
                  {method === 'Email' ? 'Email Address' : `${method} Username`}
                  <input
                    name="contact_handle"
                    placeholder={method === 'Email' ? 'you@example.com' : '@yourhandle'}
                  />
                </label>
              )}
            </div>
          </fieldset>

          <fieldset>
            <legend>Project Overview</legend>
            <div className="field-row">
              <label>
                Genre
                <input name="genre" required placeholder="Romance, fantasy, thriller, literary…" />
              </label>
              <label>
                Desired Word Count
                <select name="wordcount" defaultValue="">
                  <option value="" disabled>
                    Choose a length
                  </option>
                  <option>Short Story (1000 – 3000 words)</option>
                  <option>Standard (3000 – 7000 words)</option>
                  <option>Premium (7000+ words)</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Story Details</legend>
            <label>
              Preferred Point of View
              <select name="pov" defaultValue="">
                <option value="" disabled>
                  Choose a perspective
                </option>
                <option>First person</option>
                <option>Second person</option>
                <option>Third person</option>
              </select>
            </label>
            <label>
              Main Character(s)
              <textarea
                name="characters"
                rows={3}
                placeholder="Names, brief descriptions, roles, the dynamic between them…"
              />
            </label>
            <label>
              Setting
              <textarea
                name="setting"
                rows={2}
                placeholder="Time period, location, world-building notes…"
              />
            </label>
            <label>
              Desired Tone / Mood
              <input
                name="tone"
                placeholder="Lighthearted, dark, suspenseful, emotional…"
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Content Guidelines</legend>
            <label>
              Themes or Elements to Include
              <textarea name="include" rows={3} placeholder="Tropes, kinks, beats you want…" />
            </label>
            <label>
              Themes or Elements to Avoid (Hard Limits)
              <textarea name="avoid" rows={3} placeholder="Anything off the table…" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Additional Notes</legend>
            <label>
              Any Other Special Requests or Details?
              <textarea name="notes" rows={3} placeholder="Anything else I should know…" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Agreement</legend>
            <label className="check">
              <input type="checkbox" name="agree_portfolio" required />
              <span>
                I understand that the writer retains the right to use this piece in their
                portfolio unless otherwise negotiated.
              </span>
            </label>
            <label className="check">
              <input type="checkbox" name="agree_payment" required />
              <span>
                I agree to pay 50% upfront of the agreed-upon fee and the balance when the
                commission has been fulfilled.
              </span>
            </label>
            <label>
              Patron Signature <span className="req">*</span>
              <input name="signature" required placeholder="Type your full name" />
            </label>
          </fieldset>

          <button type="submit" className="btn submit-btn">
            Send My Commission ♥
          </button>
        </form>

        <p className="direct">
          Prefer to write directly?{' '}
          <a href="mailto:info@veiledquill.comquill@hotmail.com">info@veiledquill.com</a>
        </p>
      </section>

      <footer>© 2026 The Veiled Quill</footer>
    </div>
  )
}
