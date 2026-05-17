# Quintline Advisory — Site Documentation

---

## What I Built & How to Talk About It

**The short version:**
A fully custom-coded marketing website, built from scratch without any website builder or template. Hosted on professional infrastructure with a custom domain, live analytics, and a working contact form pipeline.

**The tech stack:**
- **HTML** — the structure and content of every page. Think of it as the skeleton.
- **CSS** — all the visual design: colors, fonts, spacing, layout, animations. Every design decision (the warm cream palette, the serif headings, the hover effects) is hand-written.
- **JavaScript** — the interactive behavior: the mobile menu, the smooth scroll, the form submission with toast notifications.
- **No frameworks, no page builders, no Squarespace.** The entire site is three files written by hand.

**Hosting & infrastructure:**
- **Vercel** — a professional cloud platform used by companies like Meta and The Washington Post. Auto-deploys every time code is pushed. Handles HTTPS (the padlock), global CDN (fast loading anywhere in the world), and custom domain routing.
- **GitHub** — version control. Every change to the site is tracked, reversible, and stored in the cloud. Industry-standard engineering practice.
- **Spaceship** — domain registrar. Owns and manages `quintlineadvisory.com`.

**Integrations:**
- **Formspree** — form handling API. Contact form submissions are securely routed to Gmail without needing a server.
- **Google Analytics GA4** — industry-standard analytics. Tracks visitors, page views, traffic sources, time on site, and more. Same tool used by most of the internet.
- **Google Fonts** — typography (Cormorant Garamond serif + Inter sans-serif) loaded from Google's global CDN.

**The workflow:**
Changes are made in a code editor, committed to GitHub, and Vercel automatically publishes them live within 30 seconds. This is the same deployment workflow used by most professional software teams.

---

---

## Live URLs
- **Primary:** https://quintlineadvisory.com
- **WWW:** https://www.quintlineadvisory.com
- **GitHub repo:** https://github.com/quintlineadvisory/best-web-ever
- **Vercel dashboard:** https://vercel.com (log in with GitHub account: quintlineadvisory)

---

## Tech Stack
| Layer | Tool | Details |
|-------|------|---------|
| Languages | HTML, CSS, JavaScript | Hand-written, no framework |
| Hosting | Vercel | Free tier, auto-deploy on git push |
| Domain | quintlineadvisory.com | Expires May 16, 2027 |
| Registrar | Spaceship | spaceship.com |
| Version control | GitHub | Org: quintlineadvisory, repo: best-web-ever |
| Form handling | Formspree | Endpoint: formspree.io/f/xlgvrbkq |
| Analytics | Google Analytics GA4 | Measurement ID: G-Z83Q3Z8YSM |
| Typography | Google Fonts | Cormorant Garamond (serif) + Inter (sans-serif) |

---

## File Structure
```
Quintline Website/
├── index.html       # All page content and sections
├── style.css        # All styling, design tokens, responsive rules
├── script.js        # Nav active state, mobile menu toggle, form handler
├── rachel.png       # Professional headshot (black blazer) — add to folder & push
└── SITE_DOCS.md     # This file
```

---

## How to Make Changes & Deploy

1. Edit files in `/Users/rachelwitalec_home/Quintline Website/`
2. Open Terminal and run:
```bash
cd "/Users/rachelwitalec_home/Quintline Website"
git add -A && git commit -m "describe your change here" && git push
```
3. Vercel auto-deploys within ~30 seconds of every push to `main`

---

## DNS Configuration (Spaceship → Vercel)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 216.198.79.1 | 30 min |
| CNAME | www | 521598e3a033b74a.vercel-dns-017.com. | 30 min |

Nameservers: `launch1.spaceship.net`, `launch2.spaceship.net`

**If DNS breaks:** Spaceship → Domain Manager → quintlineadvisory.com → Nameservers & DNS → Advanced DNS → confirm preset is applied to the domain.

---

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--cream` | #FAF7F2 | Main background |
| `--warm-off` | #F2EDE4 | Section backgrounds, cards |
| `--sand` | #E8DDD0 | Borders |
| `--taupe` | #BFB0A0 | Placeholder text, subtle borders |
| `--brown` | #7A6455 | Button hover |
| `--dark` | #2B2118 | Footer, tension band |
| `--accent` | #8B5E3C | Primary buttons, eyebrows, arrows |
| `--accent-light` | #C4926A | Accent on dark backgrounds |
| `--text` | #3D2F25 | Primary text |
| `--text-mid` | #6B5A4E | Body text |
| `--text-light` | #9C8878 | Meta text, labels |

### Typography
- **Headings:** Cormorant Garamond (serif), weight 400–600
- **Body:** Inter (sans-serif), weight 300–600
- **Eyebrows:** Inter, 0.72rem, uppercase, letter-spaced, accent color

### Buttons
- **Primary** (`.btn-primary`): Accent brown background, white text — used for all CTAs
- **Ghost** (`.btn-ghost`): Transparent, sand border — used for secondary hero CTA
- **Nav** (`.btn-nav`): Same as primary, smaller padding — used in navigation

---

## Page Content & Copy (Section by Section)

### Navigation
- Logo: "Quintline Advisory" (links to top)
- Links: Services · About · Pricing · Work Together (CTA button)
- Behavior: Sticky, blurred background on scroll, collapses to hamburger on mobile

---

### Hero
- Eyebrow: "Product Coaching & Advisory"
- Headline: "For the product leaders *in the middle of everything.*"
  - Italic portion renders in accent brown
- Body: "Series B–D companies don't need more frameworks. They need leaders who can hold ambiguity, drive alignment, and make the team around them sharper. That's what we work on together."
- CTA 1 (primary): "Start a conversation" → scrolls to #contact
- CTA 2 (ghost): "See how I work" → scrolls to #services

---

### Tension Band (dark section)
- "Transformation doesn't stall because teams lack talent.
  It stalls because leaders lack the structure, language, and confidence to lead it."

---

### Services
- Eyebrow: "How I work"
- Headline: "Three ways to go deeper"
- All 3 cards are the same cream color

**Card 01 — Individual Coaching**
- Tagline: "A thinking partner who's been in it."
- Description: "Most product leaders don't have a safe space to think out loud, pressure-test a position, or get direct feedback on their work. I'm that space — part sounding board, part advisor, part sparring partner. We work on the real stuff."
- Bullets: Tactical coaching on decks, narratives, and decisions · Executive presence and stakeholder influence · Navigating organizational complexity and politics · Leadership identity and career strategy
- Format: "Ongoing engagement · Bi-weekly sessions · Senior ICs to VPs"
- CTA: "Contact me" → scrolls to #contact

**Card 02 — Product Workshops**
- Tagline: "Shared language. Shared standard."
- Description: "When a product team lacks a shared definition of 'good,' everything slows down — roadmaps, reviews, hiring, prioritization. These workshops give teams a common framework for what great product looks like and how to build it at your stage."
- Bullets: What product leadership actually means at Series B–D · How to structure discovery, decisions, and delivery · Role clarity across product, design, and engineering · Defining and communicating "product quality"
- Format: "Half-day or full-day · In-person or remote · Team of 5–25"
- CTA: "Contact me" → scrolls to #contact

**Card 03 — AI Upskill Sessions**
- Tagline: "Beyond the hype. Into the workflow."
- Description: "Product teams are under pressure to 'use AI' with no clarity on what that actually means. These sessions move from vague urgency to a concrete point of view on where AI creates leverage — for individuals, teams, and the organization."
- Bullets: How individual PMs can use AI in their daily workflow · Where AI accelerates team processes (research, synthesis, documentation) · Organizational strategy for AI adoption without chaos · Building a POV on AI's impact on your product and market
- Format: "2–4 hour sessions · Workshops or advisory · Individual to org-wide"
- CTA: "Contact me" → scrolls to #contact

---

### Who This Is For
- Eyebrow: "Who this is for"
- Headline: "You're probably the person holding the most threads."
- Body: "You're leading product at a company that's growing faster than its processes. You're expected to have a point of view on strategy, roadmap, team design, GTM, and increasingly AI — often in the same week. You're good. You just want to be sharper."
- Body 2: "Quintline works best with product leaders at Series B–D companies going through real transformation: a platform shift, a new market, a team scaling challenge, a product-to-platform transition, or a mandate that keeps expanding."
- Tags — Stages: Series B · Series C · Series D · Growth
- Tags — Roles: CPO · VP Product · Director of Product · Senior PM · First Product Hire
- Tags — Moments: Platform transition · Team scaling · New market entry · Executive transition · AI adoption · Org redesign

---

### About
- Eyebrow: "About"
- Headline: "I've captained the mess. Now I help others do the same."
- Photo: rachel.png (professional headshot, black blazer, 3:4 ratio, cropped to face/shoulders)
- Body 1: "There's a word for what I've done across my career: captaincy. Not management. Not executive leadership in the generic sense. The thing that happens when someone walks into the collision between a great idea and messy reality — and holds the thread all the way from strategy to the work."
- Body 2: "I've done this repeatedly: as a CPO scaling product teams from first hire to 20+, navigating platform transitions, evolving single-product companies into multi-product businesses, repositioning go-to-market, and leading organizations through the kind of change that doesn't come with a clear playbook. Across startup, scale-up, and transformation — Series B through E — in B2B health tech, where the stakes are high and the complexity is real."
- Body 3: "I didn't wait for authority to do any of it. I stepped into responsibility, changed the culture of rooms, and built things others thought were unlikely. That's the experience I bring to coaching — not frameworks, but lived pattern recognition from inside the same transformational moments you're in right now."
- Body 4: "My coaching is direct, warm, and systems-oriented. I'll push you to develop judgment — not just tactics — and to understand that your role is bigger than your job description says it is."
- Coaching style pillars:
  - **The Warrior:** Builds confidence through honest reflection. Models courage. Encourages you to take the risk.
  - **The Navigator:** Connects you to people and ideas. Helps you read the room, position yourself, manage perception.
  - **The Sage:** Offers wisdom rooted in experience. Helps you reconnect to the big picture when you're in the weeds.

---

### Pull Quote
- "Product isn't feature delivery. It's market judgment, narrative creation, organizational alignment, and business model thinking — all at once. The leaders who get this right are the ones who define what their company becomes."
- Attribution: — Rachel Witalec, Founder, Quintline Advisory

---

### Pricing
- Eyebrow: "Pricing"
- Headline: "Straightforward engagements, tailored to where you are."
- Subtext: "Every engagement is scoped to what you actually need. Reach out and we'll figure out the right fit together."
- All 3 cards are the same cream color, no pricing figures shown

**Card — Individual Coaching**
- "Ongoing bi-weekly sessions for product leaders who want a thinking partner, tactical feedback, and leadership development."
- CTA: "Contact me" → scrolls to #contact

**Card — Team Workshops**
- "Half-day or full-day sessions for product teams going through a moment of change, alignment, or capability building."
- CTA: "Contact me" → scrolls to #contact

**Card — AI Upskill Sessions**
- "2–4 hour working sessions for individuals, teams, or full organizations. Can be standalone or part of a broader engagement."
- CTA: "Contact me" → scrolls to #contact

---

### Contact
- Eyebrow: "Work together"
- Headline: "Let's figure out where to start."
- Body: "Most engagements start with a 30-minute conversation about what you're working through. No pressure, no pitch — just a real conversation to see if working together makes sense."
- CTA button: "Book a 30-min call" → **replace href="#" with Calendly URL when ready**
- Form fields: Name (required) · Work email (required) · Role & company · Focus area dropdown · Message (textarea)
- Focus area options: Team workshop · Individual coaching · AI upskilling · Not sure yet — let's talk
- Form behavior: Submits via POST to Formspree endpoint · Shows success message "Thanks — I'll be in touch within 48 hours." · Disables fields on submit
- Email subject line: "New inquiry — Quintline Advisory"

---

### Footer
- Logo: "Quintline Advisory"
- Tagline: "Product coaching for leaders in transformation."
- Links: Services · About · Contact
- Copyright: © 2026 Quintline Advisory. All rights reserved.

---

## Pending Items
- [ ] Add `rachel.png` to repo root and push
- [ ] Replace Calendly `href="#"` with real Calendly booking link
- [ ] Turn on auto-renew for quintlineadvisory.com in Spaceship

## Completed
- [x] Site live at https://quintlineadvisory.com via Vercel
- [x] Custom domain connected (Spaceship → Vercel DNS)
- [x] Formspree wired up — endpoint: https://formspree.io/f/xlgvrbkq
- [x] Form submission shows green inline confirmation + floating toast
- [x] All 3 service cards with "Contact me" buttons
- [x] Pricing section restored and added to nav
- [x] About section with captaincy framing
- [x] Nav button text fixed to white
- [x] All service and pricing cards unified to same cream color

---

## Contact Form (Formspree)
- Account: https://formspree.io — quintlineadvisory@gmail.com
- Form name: "Quintline Contact"
- **Live endpoint:** `https://formspree.io/f/xlgvrbkq`
- Submissions delivered to: quintlineadvisory@gmail.com
- Subject line: "New inquiry — Quintline Advisory"
- On submit: button shows "Sending..." → green inline message → green floating toast for 4 seconds
- Enable spam filtering in the Formspree dashboard if submissions get noisy

---

## Calendly Integration
In `index.html`, find:
```html
<a href="#" class="btn btn-primary" id="calendly-btn">Book a 30-min call</a>
```
Replace `href="#"` with your Calendly URL (e.g. `https://calendly.com/quintlineadvisory/30min`)

---

## GitHub Credentials
- GitHub org: `quintlineadvisory`
- Repo: `best-web-ever`
- Auth: Personal Access Token via HTTPS
- Save credentials permanently: `git config --global credential.helper osxkeychain`

---

## If Something Breaks

| Problem | Fix |
|---------|-----|
| Site not loading | Check Vercel dashboard for deploy errors |
| DNS not resolving | Spaceship → Advanced DNS → confirm preset applied |
| Changes not live | Confirm `git push` succeeded; check Vercel deploy log |
| Form not sending | Verify Formspree endpoint is in index.html and account is verified |
| Photo not showing | Confirm `rachel.png` is in repo root and has been pushed |
| Vercel badges red | Hit Refresh in Vercel → Settings → Domains; wait 10–30 min |

---

## Security Considerations
- **HTTPS:** Vercel provides and auto-renews SSL — confirm padlock appears in browser
- **Domain:** Enable auto-renew in Spaceship; expires May 16, 2027
- **GitHub token:** Stored in macOS Keychain — never share screen while pushing; revoke at github.com if compromised
- **Public repo:** Code is visible to anyone — never commit API keys, tokens, or passwords to any file
- **Formspree endpoint:** Visible in page source — this is normal and expected; enable spam filtering in Formspree dashboard
- **No database, no logins, no server-side code** — attack surface is very small for a static site
- **Data handling:** Formspree stores form submissions — review formspree.io privacy policy if client data sensitivity is a concern
