'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  Menu,
  Server,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Transcend PM',
    type: 'Construction operations platform',
    description:
      'Inspection, project execution, and finance workflows for teams managing complex construction operations.',
    tags: ['PHP', 'MySQL', 'REST API'],
    href: '#contact',
  },
  {
    number: '02',
    name: 'Tankline Pro',
    type: 'Order & dispatch management',
    description:
      'A streamlined operating system for tankline operators and gasoline carriers to move orders with confidence.',
    tags: ['CodeIgniter', 'JavaScript', 'Docker'],
    href: 'https://tanklinepro.com',
  },
  {
    number: '03',
    name: 'EstateHub',
    type: 'Property marketplace',
    description:
      'A property platform for discovering, listing, and managing real estate across a responsive experience.',
    tags: ['Laravel', 'Tailwind', 'MySQL'],
    href: 'https://estatehub.business',
  },
  {
    number: '04',
    name: 'MovieFinder',
    type: 'Discovery experience',
    description:
      'A fast, focused movie browser with search, rich details, and a polished TMDB-powered interface.',
    tags: ['React', 'TMDB API', 'Vercel'],
    href: 'https://moviefinder-pied.vercel.app',
  },
]

const capabilities = [
  { icon: Code2, title: 'Product engineering', text: 'From first screen to production-ready API, I build thoughtful, maintainable products.' },
  { icon: Server, title: 'Systems that scale', text: 'Robust backends, clean data models, and infrastructure that stays reliable as you grow.' },
  { icon: Zap, title: 'Fast, useful interfaces', text: 'Responsive experiences that feel intuitive on every screen, without sacrificing performance.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Suraj Rajput home"><span className="brand-mark">S</span><span>suraj<span className="muted-dot">.</span>dev</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> Available for select projects <span className="eyebrow-line" /></div>
          <h1>Building digital<br /><em>things that matter.</em></h1>
          <p className="hero-intro">I&apos;m Suraj — a full-stack &amp; mobile developer turning complex problems into scalable products, intuitive interfaces, and dependable systems.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="mailto:surajrajput733@gmail.com">Get in touch <span>↗</span></a></div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core"><span>SR</span></div><span className="orbit-label label-top">FULL-STACK</span><span className="orbit-label label-right">3+ YEARS</span><span className="orbit-label label-bottom">SHIP / ITERATE</span></div>
        <div className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={16} /></div>
      </section>

      <section className="ticker" aria-label="Technology focus"><div className="ticker-track"><span>PHP</span><i>✦</i><span>JAVASCRIPT</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>REACT</span><i>✦</i><span>NODE.JS</span><i>✦</i><span>DOCKER</span><i>✦</i><span>AWS</span><i>✦</i><span>PHP</span><i>✦</i><span>JAVASCRIPT</span><i>✦</i><span>REACT</span></div></section>

      <section className="section container" id="work"><div className="section-heading"><div><p className="kicker">Selected work / 2023—now</p><h2>Built for the <em>real world.</em></h2></div><p className="section-note">A few things I&apos;ve helped bring to life.<br />Most of the interesting stuff lives in private repos.</p></div><div className="project-list">{projects.map((project) => <a className="project-row" href={project.href} key={project.number} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><span className="project-number">{project.number}</span><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow"><ArrowUpRight /></span></a>)}</div></section>

      <section className="statement" id="about"><div className="container statement-inner"><p className="kicker">The short version</p><h2>Good software should feel <em>obvious.</em></h2><p className="statement-copy">I care about the details users notice and the architecture they don&apos;t. With 3+ years across PHP, JavaScript, APIs, mobile, and cloud infrastructure, I build products that are calm on the surface and solid underneath.</p><div className="stat-grid"><div><strong>3+</strong><span>Years building</span></div><div><strong>15+</strong><span>Technologies</span></div><div><strong>∞</strong><span>Curiosity</span></div></div></div></section>

      <section className="section container" id="skills"><div className="section-heading"><div><p className="kicker">What I bring</p><h2>More than just<br /><em>shipping code.</em></h2></div></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <div className="capability" key={title}><Icon className="capability-icon" /><h3>{title}</h3><p>{text}</p><Check className="capability-check" size={16} /></div>)}</div></section>

      <section className="contact container" id="contact"><div className="contact-card"><Sparkles className="contact-spark" /><p className="kicker">Have a project in mind?</p><h2>Let&apos;s make something<br /><em>worth talking about.</em></h2><a className="button button-light" href="mailto:surajrajput733@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></div></section>

      <footer className="footer container"><a href="#top" className="brand"><span className="brand-mark">S</span><span>suraj<span className="muted-dot">.</span>dev</span></a><span>© 2026 Suraj Rajput. Crafted with intent.</span><div className="socials"><a href="https://github.com/uniksrj" aria-label="GitHub"><GitBranch size={18} /></a><a href="https://linkedin.com/in/suraj-thapa-1651591bb" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a><a href="mailto:surajrajput733@gmail.com" aria-label="Email"><Mail size={18} /></a></div></footer>
    </main>
  )
}
