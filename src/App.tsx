import { useState } from 'react'
import './App.css'

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
    title: 'One Night in Eva',
    body: `The temple doors swung open on silent hinges, and the night air swept in behind them. Alana looked up from the silver tray she was polishing and let her gaze travel over the three figures silhouetted against the torchlight of the courtyard.

A drow woman stood at the front. Tall, lithe, draped in dark silks that whispered against the marble as she moved. Her skin was the color of deep twilight, her hair a cascade of white silver that fell past her shoulders. Her eyes, crimson and knowing, swept the entry hall with the slow confidence of a woman who had walked through far darker places than this.

Beside her stood a dwarf. He was broad and thick with muscle, his chest covered by a mat of dark auburn hair visible above the collar of his leather tunic. His beard was full and well kept, braided with small iron rings that clinked faintly when he moved.

The third traveler hung back near the door. A half elf. Dark hair fell across his brow, partially obscuring eyes that gleamed with a faint, otherworldly light. Shadows clung to his cloak in a way that had nothing to do with the dim lighting.

Alana set down her tray and rose, her crimson gown swirling around her ankles. "Welcome to the Temple of Sharess," she said, her voice warm and practiced. "You must be weary from the road. How may we serve you?"`,
  },
  {
    title: 'The Guest Room',
    body: `The suburbs had a way of swallowing men whole. Jason had forgotten that, or maybe he had never really known it. He spent his twenties in cramped city apartments with paper-thin walls and the constant hum of traffic, building a life that was supposed to mean something. Now, at thirty-two, he stood in his brother's driveway with a duffel bag and a hollow chest, watching the sprinklers arc over a lawn so green it looked fake.

Three years. Three years of his life poured into a woman who looked at him across their anniversary dinner and said, "I don't think I ever really loved you." Not angry. Just stating a fact. Like she was talking about the weather.

He packed his things in forty-seven minutes. He counted.

"Jason!" His brother Mark appeared on the porch, grinning with that easy confidence Jason had always envied. "Get your ass in here."

The house smelled like cinnamon. Familiar in a way that made his throat tight. He spent summers here as a teenager, escaping his own parents' screaming matches.`,
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
          <h3>To be named</h3>
          <p>My debut novel – To be named – yet be publish</p>
          <a href="https://www.patreon.com/c/MinaJollivet" className="btn" target="_blank" rel="noreferrer">
            Visit my Patreon for more details
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
