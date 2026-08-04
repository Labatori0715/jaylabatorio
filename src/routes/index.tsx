import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Database,
  Download,
  ExternalLink,
  FileSpreadsheet,
  FolderKanban,
  Github,
  Globe2,
  Headphones,
  HeartHandshake,
  Image,
  Laptop,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  PenTool,
  Play,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Video,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export const Route = createFileRoute('/')({
  component: PortfolioPage,
})

const navItems = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Skills', 'skills'],
  ['Work', 'portfolio'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
] as const

const services = [
  {
    icon: CalendarDays,
    number: '01',
    title: 'Virtual Assistance',
    description: 'Reliable day-to-day support that keeps your priorities moving and your workspace in order.',
    items: ['Administrative Support', 'Email Management', 'Calendar Management', 'Internet Research', 'File Organization'],
  },
  {
    icon: FileSpreadsheet,
    number: '02',
    title: 'Data Management',
    description: 'Accurate, structured data and polished documents you can confidently use to make decisions.',
    items: ['Data Entry', 'Microsoft Excel', 'Google Sheets', 'Database Management', 'Document Preparation'],
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Technical Support',
    description: 'Calm, practical troubleshooting for the tools, systems, and websites your business depends on.',
    items: ['IT Support', 'Software Troubleshooting', 'Website Maintenance', 'WordPress Updates', 'PHP & MySQL Support'],
  },
  {
    icon: PenTool,
    number: '04',
    title: 'Graphic Design',
    description: 'Professional brand visuals that make your message clear, memorable, and ready to share.',
    items: ['Social Media Graphics', 'Tarpaulin Design', 'Posters & Flyers', 'Marketing Materials', 'Branding Assets'],
  },
  {
    icon: Video,
    number: '05',
    title: 'Photo & Video',
    description: 'Clean, engaging visual content formatted for promotions, campaigns, and social channels.',
    items: ['Promotional Videos', 'Reels', 'Photo Retouching', 'Canva Designs', 'Photoshop Editing'],
  },
  {
    icon: Headphones,
    number: '06',
    title: 'Customer Support',
    description: 'Helpful and professional communication that gives every customer a positive experience.',
    items: ['Email Support', 'Chat Support', 'Client Assistance', 'Technical Assistance'],
  },
]

const skillGroups = [
  {
    eyebrow: 'Technical toolkit',
    icon: Laptop,
    title: 'Systems & productivity',
    skills: [
      ['Microsoft Office', 94],
      ['Google Workspace', 92],
      ['Excel & Google Sheets', 90],
      ['WordPress', 84],
      ['HTML & CSS', 82],
      ['PHP & MySQL', 76],
      ['Database Management', 85],
    ],
  },
  {
    eyebrow: 'Creative toolkit',
    icon: Palette,
    title: 'Visual communication',
    skills: [
      ['Canva', 96],
      ['Adobe Photoshop', 88],
      ['Graphic Design', 92],
      ['Branding', 86],
      ['Social Media Design', 94],
      ['Photo & Video Editing', 85],
    ],
  },
]

const professionalSkills = ['Communication', 'Problem Solving', 'Time Management', 'Organization', 'Attention to Detail', 'Customer Service']

const portfolioItems = [
  { category: 'Graphic Design', title: 'Launch Campaign Suite', description: 'A cohesive set of launch posters, social cards, and print-ready promotional pieces.', tech: ['Canva', 'Photoshop'], icon: Image, tone: 'cobalt' },
  { category: 'Graphic Design', title: 'Community Event Identity', description: 'Large-format tarpaulin and flyer system designed for clarity from screen to street.', tech: ['Photoshop', 'Branding'], icon: Palette, tone: 'sky' },
  { category: 'Video Editing', title: 'Product Story Reel', description: 'A fast-paced vertical promo that turns product highlights into a concise visual story.', tech: ['Premiere', 'Canva'], icon: Play, tone: 'violet' },
  { category: 'Technical Support', title: 'Business Website Care', description: 'Content updates, responsive checks, plugin maintenance, and issue resolution.', tech: ['WordPress', 'HTML/CSS'], icon: Globe2, tone: 'cyan' },
  { category: 'Technical Support', title: 'Records Database', description: 'A practical data system for organizing, finding, and maintaining operational records.', tech: ['PHP', 'MySQL'], icon: Database, tone: 'navy' },
  { category: 'Virtual Assistance', title: 'Operations Command Center', description: 'A streamlined workspace for email, reports, task tracking, and recurring processes.', tech: ['Sheets', 'Workspace'], icon: FolderKanban, tone: 'blue' },
  { category: 'Virtual Assistance', title: 'Monthly Reporting System', description: 'Clean data entry and dashboard-style reports that make performance easier to review.', tech: ['Excel', 'Data Entry'], icon: BarChart3, tone: 'slate' },
  { category: 'Video Editing', title: 'Social Content Pack', description: 'Short-form edits and branded motion assets prepared for consistent weekly posting.', tech: ['Video Editing', 'Canva'], icon: Video, tone: 'indigo' },
]

const experiences = [
  { role: 'IT Support Specialist', label: 'Technical Operations', icon: Laptop, description: 'Delivered responsive user support while maintaining databases, troubleshooting software, and keeping digital tools dependable.', items: ['Technical Support', 'Database Management', 'Software Troubleshooting', 'User Assistance'] },
  { role: 'Administrative Support', label: 'Business Operations', icon: FolderKanban, description: 'Kept records, documents, and office workflows organized so teams could work efficiently and access accurate information.', items: ['Record Management', 'Document Preparation', 'Data Entry', 'Office Administration'] },
  { role: 'Graphic Designer', label: 'Creative Services', icon: PenTool, description: 'Translated business goals into clear visual materials for promotions, social media, events, and brand communication.', items: ['Marketing Materials', 'Social Media Graphics', 'Posters', 'Branding'] },
]

const features = [
  ['3+ Years Experience', BadgeCheck],
  ['Fast Learner', Zap],
  ['Detail-Oriented', Search],
  ['Reliable', ShieldCheck],
  ['Organized', FolderKanban],
  ['Clear Communication', MessageCircle],
  ['On-Time Delivery', Clock3],
  ['High-Quality Results', Sparkles],
] as const

const testimonials = [
  { quote: 'Jay quickly understood our workflow and brought order to tasks that had been slowing the team down. The communication was clear and the work was consistently accurate.', name: 'Maria S.', role: 'Small Business Owner' },
  { quote: 'From website updates to promotional graphics, Jay handled every request with patience and great attention to detail. A dependable partner for both technical and creative work.', name: 'Daniel R.', role: 'Operations Manager' },
  { quote: 'Our reports are cleaner, our files are easier to find, and our social posts finally feel consistent. Jay made an immediate, positive difference to our daily operations.', name: 'Angela T.', role: 'Remote Team Lead' },
]

function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [showTop, setShowTop] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('jay-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(storedTheme ? storedTheme === 'dark' : prefersDark)
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    window.localStorage.setItem('jay-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const filteredWork = useMemo(
    () => activeFilter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState('sending')
    const form = event.currentTarget
    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(
          Array.from(new FormData(form).entries()).map(
            ([key, value]) => [key, String(value)] as [string, string],
          ),
        ).toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  return (
    <div className="site-shell">
    <a href="#home" className="brand" aria-label="Jay Labatorio, home">
  <img
    src="/jay.png"
    alt="Jay Labatorio"
    className="brand-photo"
  />

  <span>
    <strong>Jay Labatorio</strong>
    <small>Digital Support Specialist</small>
  </span>
</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDarkMode(!darkMode)} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-cta" href="#contact">Let’s work together <ArrowRight size={16} /></a>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={16} /></a>)}
          </nav>
        )}
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="availability reveal"><span /> Available for remote opportunities</div>
            <p className="hero-kicker reveal delay-1">Virtual Assistance <span>•</span> IT Support <span>•</span> Creative Design</p>
            <h1 className="reveal delay-2">Helping businesses stay <em>organized, productive,</em> and professionally branded.</h1>
            <p className="hero-copy reveal delay-3">Hi! I’m <strong>Jay Labatorio</strong>, a reliable and detail-oriented digital support professional with over three years of experience helping businesses operate smoothly, solve technical problems, and show up with confidence.</p>
            <div className="hero-actions reveal delay-4">
              <a className="button button-primary" href="#portfolio">View portfolio <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="/jay-labatorio-resume.txt" download>Download resume <Download size={17} /></a>
              <a className="button button-ghost" href="#contact">Contact me</a>
            </div>
            <div className="hero-socials reveal delay-4">
              <span>Connect</span><i />
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href="mailto:jay.labatorio@example.com" aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>

          <div className="hero-visual reveal delay-3" aria-label="Jay Labatorio professional profile card">
            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-top"><span>PROFILE / 2026</span><BadgeCheck size={20} /></div>
              <div className="portrait-frame">
                <div className="portrait-monogram">JL</div>
                <div className="portrait-lines" />
                <span className="portrait-badge"><span /> Remote Ready</span>
              </div>
              <div className="profile-details">
                <span>Based in the Philippines</span>
                <strong>Jay Labatorio</strong>
                <p>Digital support for modern teams.</p>
              </div>
            </div>
            <div className="floating-card floating-card-top"><CircleCheck size={18} /><span><strong>Reliable support</strong><small>From task to done</small></span></div>
            <div className="floating-card floating-card-bottom"><Sparkles size={18} /><span><strong>3+ years</strong><small>Multi-skilled experience</small></span></div>
          </div>

          <div className="hero-stats">
            <div><strong>3<span>+</span></strong><p>Years of<br />experience</p></div>
            <div><strong>6</strong><p>Core service<br />areas</p></div>
            <div><strong>20<span>+</span></strong><p>Professional<br />skills</p></div>
            <div className="stat-note"><BadgeCheck size={20} /><p><strong>One reliable partner.</strong><br />Administrative, technical, and creative support in one place.</p></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label"><span>01</span> About me</div>
          <div className="about-layout">
            <div className="about-heading">
              <p className="eyebrow">The person behind the work</p>
              <h2>A steady hand for your <em>digital operations.</em></h2>
            </div>
            <div className="about-copy">
              <p className="lead">I specialize in administrative support, technical support, data management, website updates, and graphic design—giving growing businesses the flexible support they need without juggling multiple providers.</p>
              <div className="about-columns">
                <p>I’m highly organized, detail-oriented, and quick to learn new tools and processes. Whether I’m cleaning a spreadsheet, troubleshooting software, updating a WordPress page, or creating campaign graphics, I bring the same focused approach to every task.</p>
                <p>My goal is simple: deliver accurate, high-quality work that saves you time, reduces friction, and helps your business look and operate at its best.</p>
              </div>
              <div className="signature-row"><span className="signature">Jay L.</span><i /><span>Ready to support your next project</span></div>
            </div>
          </div>
          <div className="principles-grid">
            <div><span>01</span><ShieldCheck /><strong>Dependability</strong><p>Consistent follow-through and proactive updates.</p></div>
            <div><span>02</span><Search /><strong>Precision</strong><p>Careful work, reviewed before delivery.</p></div>
            <div><span>03</span><Zap /><strong>Adaptability</strong><p>Fast learning across tools and workflows.</p></div>
            <div><span>04</span><HeartHandshake /><strong>Partnership</strong><p>Your goals shape every task and decision.</p></div>
          </div>
        </section>

        <section className="section section-tinted" id="services">
          <div className="section-intro">
            <div><div className="section-label"><span>02</span> Services</div><p className="eyebrow">How I can help</p><h2>Support that covers the <em>whole workflow.</em></h2></div>
            <p>From the back office to your brand’s front door, I provide connected support that keeps work moving and details handled.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, number, title, description, items }) => (
              <article className="service-card" key={title}>
                <div className="service-card-head"><span className="service-icon"><Icon /></span><span className="card-number">{number}</span></div>
                <h3>{title}</h3><p>{description}</p>
                <ul>{items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-intro">
            <div><div className="section-label"><span>03</span> Skills</div><p className="eyebrow">Tools meet good judgment</p><h2>Practical skills, applied with <em>purpose.</em></h2></div>
            <p>I pair hands-on software knowledge with the professional habits that make remote collaboration easy.</p>
          </div>
          <div className="skill-panels">
            {skillGroups.map(({ eyebrow, icon: Icon, title, skills }) => (
              <article className="skill-panel" key={title}>
                <div className="skill-panel-title"><span><Icon /></span><div><small>{eyebrow}</small><h3>{title}</h3></div></div>
                <div className="skill-bars">
                  {skills.map(([skill, level]) => <div className="skill-row" key={skill}><div><span>{skill}</span><small>{level}%</small></div><div className="skill-track"><i style={{ '--skill-level': `${level}%` } as React.CSSProperties} /></div></div>)}
                </div>
              </article>
            ))}
          </div>
          <div className="professional-skills"><div><small>Professional strengths</small><h3>How I show up</h3></div><div className="skill-badges">{professionalSkills.map((skill) => <span key={skill}><CircleCheck size={16} />{skill}</span>)}</div></div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="section-intro portfolio-intro">
            <div><div className="section-label"><span>04</span> Selected work</div><p className="eyebrow">Built to solve real needs</p><h2>A portfolio of <em>practical impact.</em></h2></div>
            <p>Representative projects across design, content, technical support, and remote business operations.</p>
          </div>
          <div className="portfolio-filters" role="group" aria-label="Filter portfolio projects">
            {['All', 'Graphic Design', 'Video Editing', 'Technical Support', 'Virtual Assistance'].map((filter) => <button key={filter} className={filter === activeFilter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
          <div className="portfolio-grid">
            {filteredWork.map(({ category, title, description, tech, icon: Icon, tone }, index) => (
              <article className={`project-card ${index === 0 ? 'project-featured' : ''}`} key={title}>
                <div className={`project-visual tone-${tone}`}>
                  <div className="visual-grid" /><div className="visual-circle" /><Icon className="visual-icon" />
                  <span className="visual-index">0{portfolioItems.findIndex((item) => item.title === title) + 1}</span>
                  {category === 'Video Editing' && <span className="play-button"><Play fill="currentColor" /></span>}
                </div>
                <div className="project-content"><div className="project-meta"><span>{category}</span><ExternalLink size={17} /></div><h3>{title}</h3><p>{description}</p><div>{tech.map((item) => <small key={item}>{item}</small>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="section-intro">
            <div><div className="section-label"><span>05</span> Experience</div><p className="eyebrow">A multi-disciplinary foundation</p><h2>Experience that connects <em>people, systems, and design.</em></h2></div>
            <p>Each role strengthened a different part of the end-to-end support I bring to remote teams today.</p>
          </div>
          <div className="timeline">
            {experiences.map(({ role, label, icon: Icon, description, items }, index) => (
              <article className="timeline-item" key={role}><div className="timeline-marker"><span>0{index + 1}</span></div><div className="timeline-card"><div className="timeline-title"><span><Icon /></span><div><small>{label}</small><h3>{role}</h3></div></div><p>{description}</p><div className="timeline-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></div></article>
            ))}
          </div>
        </section>

        <section className="section why-section">
          <div className="why-copy"><div className="section-label"><span>06</span> Why work with me</div><p className="eyebrow">Low friction. High standards.</p><h2>A capable partner who makes work feel <em>lighter.</em></h2><p>You need more than someone who can complete a checklist. You need a thoughtful professional who communicates clearly, protects the details, and cares about the outcome.</p><a href="#contact" className="text-link">Start a conversation <ArrowRight size={16} /></a></div>
          <div className="features-grid">{features.map(([label, Icon], index) => <div key={label}><span>0{index + 1}</span><Icon /><strong>{label}</strong></div>)}</div>
        </section>

        <section className="section testimonial-section" aria-labelledby="testimonial-title">
          <div className="testimonial-heading"><div className="section-label"><span>07</span> Testimonials</div><p className="eyebrow">Kind words from collaborators</p><h2 id="testimonial-title">Trusted to deliver, <em>remembered for the care.</em></h2></div>
          <div className="testimonials-grid">{testimonials.map(({ quote, name, role }, index) => <figure key={name}><Quote /><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{quote}”</blockquote><figcaption><span>{name.charAt(0)}</span><div><strong>{name}</strong><small>{role}</small></div><i>0{index + 1}</i></figcaption></figure>)}</div>
          <p className="placeholder-note">Sample testimonials shown for layout preview.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-copy">
            <div className="section-label light"><span>08</span> Contact</div><p className="eyebrow">Have a task in mind?</p><h2>Let’s turn your to-do list into <em>done.</em></h2><p>Tell me what support you need, what success looks like, and your ideal timeline. I’ll get back to you with clear next steps.</p>
            <div className="contact-methods">
              <a href="mailto:jay.labatorio@example.com"><span><Mail /></span><div><small>Email</small><strong>jay.labatorio@example.com</strong></div></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span><Linkedin /></span><div><small>LinkedIn</small><strong>Connect professionally</strong></div></a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><span><Github /></span><div><small>GitHub</small><strong>View technical work</strong></div></a>
            </div>
            <div className="response-note"><Clock3 /><span><strong>Quick response</strong><small>Typically within one business day</small></span></div>
          </div>
          <div className="contact-form-wrap">
            <div className="form-heading"><span><Send /></span><div><small>Project inquiry</small><h3>How can I help?</h3></div></div>
            {formState === 'success' ? (
              <div className="form-success" role="status"><span><CircleCheck /></span><h3>Message received.</h3><p>Thanks for reaching out. I’ll review your inquiry and get back to you soon.</p><button className="button button-primary" onClick={() => setFormState('idle')}>Send another message</button></div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <p className="honeypot"><label>Don’t fill this out: <input name="bot-field" /></label></p>
                <div className="form-grid"><label><span>Name *</span><input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label><label><span>Email *</span><input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label></div>
                <div className="form-grid"><label><span>Company</span><input name="company" type="text" placeholder="Company or brand" autoComplete="organization" /></label><label><span>Subject *</span><input name="subject" type="text" placeholder="What do you need help with?" required /></label></div>
                <label><span>Message *</span><textarea name="message" rows={5} placeholder="Share a few details about your project, priorities, and timeline..." required /></label>
                {formState === 'error' && <p className="form-error" role="alert">Something went wrong. Please try again or use the email link.</p>}
                <div className="form-actions"><button className="button button-primary" type="submit" disabled={formState === 'sending'}>{formState === 'sending' ? 'Sending…' : 'Send message'} <Send size={16} /></button><a className="button button-secondary" href="mailto:jay.labatorio@example.com?subject=Project%20Inquiry">Hire me <ArrowRight size={16} /></a></div>
                <p className="privacy-note"><ShieldCheck size={14} /> Your information is used only to respond to this inquiry.</p>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer><div className="footer-brand"><span className="brand-mark">JL</span><div><strong>Jay Labatorio</strong><small>Organized. Capable. Creative.</small></div></div><nav aria-label="Footer navigation">{navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav><div className="footer-socials"><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin /></a><a href="https://github.com" aria-label="GitHub"><Github /></a><a href="mailto:jay.labatorio@example.com" aria-label="Email"><Mail /></a></div><div className="footer-bottom"><span>© 2026 Jay Labatorio. All rights reserved.</span><span>Built with care for ambitious teams.</span></div></footer>
      {showTop && <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top"><ArrowUp /></button>}
    </div>
  )
}
