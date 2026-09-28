'use client'

import { useState, useEffect, useRef } from 'react'
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
  Terminal as TerminalIcon,
  Copy,
  ExternalLink,
  Layers,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  Smartphone,
  Globe,
  CornerDownLeft,
  Flame,
  Clock,
  Send
} from 'lucide-react'

// Projects data
const projects = [
  {
    number: '01',
    name: 'Transcend PM',
    category: 'enterprise',
    type: 'Construction & Finance Operations Platform',
    description:
      'Enterprise-grade project execution, inspection management, and financial workflow system designed for multi-tier teams managing complex construction operations.',
    architecture: 'High-throughput REST API, Role-Based Access Control, Automated Reporting Pipelines',
    tags: ['PHP', 'MySQL', 'REST API', 'JavaScript', 'Bootstrap', 'jQuery', 'Angular'],
    stats: 'Multi-role Workflow Engine',
    href: '#contact',
    isExternal: false,
  },
  {
    number: '02',
    name: 'Tankline Pro',
    category: 'enterprise',
    type: 'Fleet & Order Dispatch Operating System',
    description:
      'A mission-critical operating platform built for tankline operators and commercial fuel carriers to execute dispatches, track loads, and sync manifests in real time.',
    architecture: 'Real-time order routing, normalized relational schema, low-latency API architecture',
    tags: ['CodeIgniter', 'PHP', 'JavaScript', 'MySQL', 'REST API', 'Bootstrap'],
    stats: 'Sub-second Order Routing',
    href: 'https://tanklinepro.com',
    isExternal: true,
  },
  {
    number: '03',
    name: 'EstateHub',
    category: 'saas',
    type: 'Next-Gen Property Marketplace & CRM',
    description:
      'A comprehensive real estate marketplace featuring interactive property analytics, dynamic listing management, and secure broker communication tools.',
    architecture: 'Laravel Sanctum Token Auth, React Single Page Architecture, Recharts Analytics Engine',
    tags: ['Laravel', 'Tailwind CSS', 'MySQL', 'React JS', 'Axios', 'Sanctum', 'Recharts'],
    stats: 'Interactive Analytics Dashboard',
    href: 'https://estatehub.business',
    isExternal: true,
  },
  {
    number: '04',
    name: 'MovieFinder',
    category: 'frontend',
    type: 'High-Performance Discovery Experience',
    description:
      'A fast, responsive streaming discovery engine utilizing TMDB API with instantaneous debounced search, rich movie metadata, and a modern glass interface.',
    architecture: 'Asynchronous API aggregation, edge deployment on Vercel, optimized asset hydration',
    tags: ['React', 'TMDB API', 'Tailwind CSS', 'React Router', 'Vercel Edge'],
    stats: 'Instant Debounced Search',
    href: 'https://moviefinder-pied.vercel.app',
    isExternal: true,
  },
]

// Capabilities
const capabilities = [
  {
    icon: Server,
    title: 'High-Concurrency Backends',
    tech: 'PHP / Laravel / Node.js / MySQL',
    text: 'Engineered for reliability. I design clean database schemas, fast RESTful APIs, and secure authentication workflows that stay resilient under heavy loads.',
    badge: 'Core Engine'
  },
  {
    icon: Code2,
    title: 'Reactive Frontend Systems',
    tech: 'React / Next.js / TypeScript / Tailwind',
    text: 'Building responsive, tactile web apps with smooth state management, micro-interactions, and accessible UI components that users love.',
    badge: 'User Experience'
  },
  {
    icon: Smartphone,
    title: 'Mobile & Hybrid Platforms',
    tech: 'Cross-Platform / Responsive Web / PWA',
    text: 'Delivering seamless mobile experiences with touch-optimized interfaces, fluid animations, and offline-first architectural considerations.',
    badge: 'Ubiquitous Access'
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    tech: 'AWS / Docker / CI/CD / Linux',
    text: 'Automated containerization, smooth production builds, edge deployments, and monitoring setups for frictionless delivery.',
    badge: 'Scalability'
  },
]

// Tech Stack Categories
const techStack = [
  {
    category: 'Backend & APIs',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'CodeIgniter', 'REST APIs', 'JWT / Sanctum', 'GraphQL']
  },
  {
    category: 'Frontend & UI',
    skills: ['React.js', 'Next.js 16', 'TypeScript', 'JavaScript (ESNext)', 'Tailwind CSS', 'Angular', 'HTML5 / CSS3']
  },
  {
    category: 'Databases & Storage',
    skills: ['MySQL', 'PostgreSQL', 'Database Indexing', 'Schema Design', 'ORM / Eloquent', 'Query Optimization']
  },
  {
    category: 'DevOps & Tooling',
    skills: ['Docker', 'AWS', 'Git & GitHub', 'Postman', 'Linux / Apache / Nginx', 'Vercel', 'CI/CD Pipelines']
  }
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [timeString, setTimeString] = useState('')
  const [activeProjectModal, setActiveProjectModal] = useState<typeof projects[0] | null>(null)
  
  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    {
      command: 'init',
      output: 'Welcome to Suraj Magar System Shell v2.6. Type "help" or click suggestions below.'
    }
  ])
  const terminalEndRef = useRef<HTMLDivElement>(null)

  // Real-time IST clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
      setTimeString(`${formatted} IST (UTC+5:30)`)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Auto scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [terminalHistory])

  // Copy email handler
  const copyEmail = () => {
    navigator.clipboard.writeText('surajrajput733@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Handle Terminal Commands
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    let output: string | React.ReactNode = ''
    switch (cmd) {
      case 'help':
        output = 'Available commands: "skills", "projects", "experience", "contact", "about", "clear"'
        break
      case 'skills':
        output = 'Stack: PHP, Laravel, React, Next.js, TypeScript, Node.js, MySQL, Docker, AWS, Tailwind CSS.'
        break
      case 'projects':
        output = '1. Transcend PM (Enterprise) | 2. Tankline Pro (Logistics) | 3. EstateHub (Real Estate SaaS) | 4. MovieFinder (React/TMDB)'
        break
      case 'experience':
        output = '3+ Years building production web apps, REST APIs, scalable databases, and enterprise platforms.'
        break
      case 'contact':
        output = 'Email: surajrajput733@gmail.com | GitHub: github.com/uniksrj | LinkedIn: linkedin.com/in/suraj-thapa-1651591bb'
        break
      case 'about':
        output = 'Suraj Magar — Full-Stack & Systems Developer specializing in high-reliability web applications and modern interactive interfaces.'
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      default:
        output = `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`
    }

    setTerminalHistory(prev => [...prev, { command: terminalInput, output }])
    setTerminalInput('')
  }

  const runQuickCommand = (cmd: string) => {
    setTerminalInput(cmd)
    let output: string | React.ReactNode = ''
    switch (cmd) {
      case 'skills':
        output = 'Stack: PHP, Laravel, React, Next.js, TypeScript, Node.js, MySQL, Docker, AWS, Tailwind CSS.'
        break
      case 'projects':
        output = '1. Transcend PM (Enterprise) | 2. Tankline Pro (Logistics) | 3. EstateHub (Real Estate SaaS) | 4. MovieFinder (React/TMDB)'
        break
      case 'contact':
        output = 'Email: surajrajput733@gmail.com | GitHub: github.com/uniksrj | LinkedIn: linkedin.com/in/suraj-thapa-1651591bb'
        break
      case 'experience':
        output = '3+ Years building production web apps, REST APIs, scalable databases, and enterprise platforms.'
        break
      default:
        output = `Executed: ${cmd}`
    }
    setTerminalHistory(prev => [...prev, { command: cmd, output }])
    setTerminalInput('')
  }

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen relative selection:bg-lime-400 selection:text-black">
      
      {/* Top HUD Status Banner */}
      <div className="border-b border-white/5 bg-black/40 backdrop-blur-md py-2 px-4 text-[11px] font-tech text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-lime-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="radar-pulse absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              AVAILABLE FOR NEW PROJECTS
            </span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-gray-400">
              <ShieldCheck size={13} className="text-cyan-400" /> FULL-STACK ARCHITECTURE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-400">
              <Clock size={12} className="text-gray-500" />
              {timeString || 'LIVE CLOCK'}
            </span>
            <button 
              onClick={copyEmail}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer bg-white/5 px-2 py-0.5 rounded border border-white/10"
              title="Click to copy email"
            >
              {copied ? <Check size={11} className="text-lime-400" /> : <Copy size={11} />}
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Glass Navigation */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 mt-2">
        <nav className="glass-panel rounded-full px-6 py-3.5 flex items-center justify-between shadow-2xl">
          <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight text-white group">
            <div className="w-8 h-8 rounded-full bg-lime-400 text-black flex items-center justify-center font-editorial font-bold text-base transition-transform group-hover:scale-105 shadow-sm">
              S
            </div>
            <span className="text-sm font-medium tracking-wide">
              suraj<span className="text-lime-400">.</span>dev
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-300">
            <a href="#work" className="hover:text-lime-400 transition-colors">Selected Work</a>
            <a href="#architecture" className="hover:text-lime-400 transition-colors">Architecture</a>
            <a href="#terminal" className="hover:text-lime-400 transition-colors flex items-center gap-1">
              <TerminalIcon size={13} className="text-lime-400" /> Console
            </a>
            <a href="#skills" className="hover:text-lime-400 transition-colors">Stack</a>
            <a href="#about" className="hover:text-lime-400 transition-colors">About</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#contact" 
              className="bg-lime-400 hover:bg-lime-300 text-black px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-lime-400/20 flex items-center gap-1.5"
            >
              Let&apos;s Build <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <div className="md:hidden mt-2 glass-panel rounded-2xl p-5 flex flex-col gap-4 text-sm font-medium text-gray-200 animate-in fade-in slide-in-from-top-3">
            <a href="#work" onClick={() => setMenuOpen(false)} className="py-1 hover:text-lime-400">Selected Work</a>
            <a href="#architecture" onClick={() => setMenuOpen(false)} className="py-1 hover:text-lime-400">Architecture</a>
            <a href="#terminal" onClick={() => setMenuOpen(false)} className="py-1 hover:text-lime-400 flex items-center gap-2">
              <TerminalIcon size={14} className="text-lime-400" /> Interactive Console
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="py-1 hover:text-lime-400">Technology Stack</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="py-1 hover:text-lime-400">About</a>
            <a 
              href="#contact" 
              onClick={() => setMenuOpen(false)}
              className="bg-lime-400 text-black text-center py-2.5 rounded-xl font-bold mt-2"
            >
              Get In Touch
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28" id="top">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-tech text-gray-300 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              FULL-STACK & SYSTEMS DEVELOPER
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.05] font-editorial">
              Engineering digital <br />
              <span className="italic font-normal text-gradient-lime">systems with purpose.</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              I&apos;m <span className="text-white font-medium">Suraj Magar</span> — crafting high-concurrency backends, responsive web applications, and intuitive interfaces with 3+ years of battle-tested engineering.
            </p>

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="glass-pill px-3.5 py-1.5 rounded-lg text-xs font-tech flex items-center gap-2 text-gray-300">
                <Flame size={13} className="text-orange-400" />
                <span>3+ Years Shipping</span>
              </div>
              <div className="glass-pill px-3.5 py-1.5 rounded-lg text-xs font-tech flex items-center gap-2 text-gray-300">
                <Cpu size={13} className="text-cyan-400" />
                <span>15+ Core Technologies</span>
              </div>
              <div className="glass-pill px-3.5 py-1.5 rounded-lg text-xs font-tech flex items-center gap-2 text-gray-300">
                <Globe size={13} className="text-lime-400" />
                <span>Production Workflows</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#work" 
                className="bg-lime-400 hover:bg-lime-300 text-black px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-lime-400/25 flex items-center gap-2"
              >
                Explore Projects <ArrowUpRight size={16} />
              </a>
              <a 
                href="#terminal"
                className="glass-pill text-white px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 hover:border-lime-400/50"
              >
                <TerminalIcon size={15} className="text-lime-400" />
                Open Console
              </a>
            </div>
          </div>

          {/* Right Hero Interactive Cosmic Halo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 orbit-halo flex items-center justify-center">
              {/* Concentric orbital rings */}
              <div className="orbit-ring orbit-ring-1" />
              <div className="orbit-ring orbit-ring-2" />
              <div className="orbit-ring orbit-ring-3" />

              {/* Central Glowing Core */}
              <div className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-600 flex flex-col items-center justify-center text-black shadow-2xl shadow-lime-500/20 border-4 border-white/20">
                <span className="font-editorial text-4xl font-bold tracking-tighter">SM</span>
                <span className="font-tech text-[9px] tracking-widest uppercase font-bold text-black/80 mt-0.5">DEV CORE</span>
              </div>

              {/* Floating Orbit Badges */}
              <div className="absolute top-2 right-4 glass-pill px-3 py-1 rounded-full text-[10px] font-tech text-lime-400 border-lime-400/30">
                PHP // LARAVEL
              </div>
              <div className="absolute bottom-6 right-2 glass-pill px-3 py-1 rounded-full text-[10px] font-tech text-cyan-400 border-cyan-400/30">
                REACT // NEXT.JS
              </div>
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 glass-pill px-3 py-1 rounded-full text-[10px] font-tech text-emerald-400 border-emerald-400/30">
                REST APIS & DB
              </div>
            </div>
          </div>

        </div>

        {/* Scroll cue */}
        <div className="mt-14 flex items-center justify-center gap-2 text-gray-500 text-[11px] font-tech uppercase tracking-widest">
          <span>Scroll to explore architecture</span>
          <ChevronDown size={14} className="animate-bounce text-lime-400" />
        </div>
      </section>

      {/* Infinite Seamless Tech Marquee */}
      <div className="border-y border-white/10 py-4 bg-white/[0.01]">
        <div className="marquee-container">
          <div className="marquee-track">
            {['PHP 8+', 'LARAVEL', 'REACT.JS', 'NEXT.JS 16', 'TYPESCRIPT', 'MYSQL', 'REST APIS', 'DOCKER', 'AWS', 'TAILWIND CSS', 'CODEIGNITER', 'NODE.JS'].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 text-xs font-tech tracking-widest text-gray-400 uppercase">
                <span className="text-white hover:text-lime-400 transition-colors font-medium">{tech}</span>
                <span className="text-lime-400 text-xs">✦</span>
              </div>
            ))}
            {/* Duplicated for seamless 100% infinite scroll */}
            {['PHP 8+', 'LARAVEL', 'REACT.JS', 'NEXT.JS 16', 'TYPESCRIPT', 'MYSQL', 'REST APIS', 'DOCKER', 'AWS', 'TAILWIND CSS', 'CODEIGNITER', 'NODE.JS'].map((tech, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-4 text-xs font-tech tracking-widest text-gray-400 uppercase">
                <span className="text-white hover:text-lime-400 transition-colors font-medium">{tech}</span>
                <span className="text-lime-400 text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Project Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 py-24" id="work">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-lime-400 text-xs font-tech tracking-widest uppercase mb-2">
              <Layers size={14} /> Selected Engineering Work / 2023—Present
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white font-editorial tracking-tight">
              Architected for the <span className="italic text-gradient-lime">real world.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'enterprise', label: 'Enterprise & Systems' },
              { id: 'saas', label: 'SaaS Platforms' },
              { id: 'frontend', label: 'Web Apps' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-tech transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-lime-400 text-black font-bold shadow-md shadow-lime-400/20'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project List / Cards */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.number}
              className="glass-panel hover:bg-white/[0.04] transition-all duration-300 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-lime-400/40 group relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Index & Title */}
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-tech text-xs text-lime-400 font-bold px-2 py-0.5 rounded bg-lime-400/10 border border-lime-400/20">
                      {project.number}
                    </span>
                    <span className="text-xs font-tech text-gray-400 uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-normal text-white group-hover:text-lime-300 transition-colors font-editorial">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="pt-1 text-xs text-gray-400 font-tech flex items-center gap-2">
                    <span className="text-gray-500">Architecture:</span>
                    <span className="text-gray-300">{project.architecture}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 rounded-md text-[11px] font-tech text-gray-300 bg-white/5 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action & Stats */}
                <div className="flex lg:flex-col items-start lg:items-end justify-between gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-white/5">
                  <div className="text-left lg:text-right">
                    <span className="text-[10px] font-tech uppercase text-gray-500 block">Performance Highlight</span>
                    <span className="text-xs font-tech text-lime-400 font-medium">{project.stats}</span>
                  </div>

                  <a
                    href={project.href}
                    target={project.isExternal ? '_blank' : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-lime-400 hover:text-black text-white px-4 py-2 rounded-full text-xs font-tech font-bold tracking-wider transition-all"
                  >
                    <span>{project.isExternal ? 'Live System' : 'Architecture'}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Terminal / Developer Console Section */}
      <section className="max-w-6xl mx-auto px-4 py-16" id="terminal">
        <div className="glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
          
          {/* Terminal Window Header */}
          <div className="bg-black/60 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-tech text-gray-400 ml-2">suraj@developer-terminal: ~</span>
            </div>
            <div className="text-[11px] font-tech text-gray-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" /> bash active
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-tech text-xs sm:text-sm bg-black/90 min-h-[220px] max-h-[380px] overflow-y-auto space-y-3 text-gray-300">
            {terminalHistory.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2 text-lime-400 font-medium">
                  <span className="text-gray-500">visitor@suraj.dev:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-gray-300 pl-4 border-l border-white/10 py-0.5 leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleTerminalSubmit} className="border-t border-white/10 bg-black/80 p-3 flex items-center gap-2">
            <span className="text-lime-400 font-tech text-xs font-bold pl-2">visitor@suraj.dev:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder='Type a command (e.g. "skills", "projects", "contact", "experience")'
              className="flex-1 bg-transparent text-white font-tech text-xs sm:text-sm focus:outline-none placeholder-gray-600"
            />
            <button 
              type="submit" 
              className="px-3 py-1 bg-lime-400/20 text-lime-400 hover:bg-lime-400 hover:text-black rounded text-xs font-tech font-bold transition-colors cursor-pointer"
            >
              Run <CornerDownLeft size={12} className="inline ml-1" />
            </button>
          </form>

          {/* Quick Run Chips */}
          <div className="bg-black/50 px-4 py-2 border-t border-white/5 flex flex-wrap items-center gap-2 text-[11px] font-tech text-gray-400">
            <span className="text-gray-500">Quick run:</span>
            {['skills', 'projects', 'experience', 'contact', 'about', 'clear'].map(cmd => (
              <button
                key={cmd}
                onClick={() => runQuickCommand(cmd)}
                className="hover:text-lime-400 transition-colors bg-white/5 hover:bg-white/10 px-2 py-0.5 rounded border border-white/5 cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Engineering Capabilities & Architecture Grid */}
      <section className="max-w-6xl mx-auto px-4 py-20" id="architecture">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-lime-400 text-xs font-tech tracking-widest uppercase mb-2">
            <Cpu size={14} /> Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white font-editorial tracking-tight">
            Architectural pillars & <span className="italic text-gradient-lime">execution.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map(({ icon: Icon, title, tech, text, badge }) => (
            <div 
              key={title}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-lime-400/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <span className="text-[10px] font-tech uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                  {badge}
                </span>
              </div>

              <h3 className="text-xl font-normal text-white font-editorial mb-1 group-hover:text-lime-300 transition-colors">
                {title}
              </h3>
              <p className="text-xs font-tech text-lime-400/80 mb-3">{tech}</p>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Tech Stack Matrix */}
      <section className="max-w-6xl mx-auto px-4 py-16" id="skills">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="mb-10">
            <span className="text-xs font-tech text-lime-400 tracking-widest uppercase block mb-2">
              // PRODUCTION TOOLKIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white font-editorial">
              Technologies & <span className="italic text-gradient-lime">frameworks in daily use.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map(group => (
              <div key={group.category} className="space-y-3 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                <h4 className="text-xs font-tech text-gray-300 uppercase tracking-wider font-semibold border-b border-white/10 pb-2 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-lime-400">✦</span>
                </h4>
                <ul className="space-y-2 pt-1">
                  {group.skills.map(skill => (
                    <li key={skill} className="text-xs font-tech text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400/60" />
                      <span className="hover:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Statement */}
      <section className="max-w-6xl mx-auto px-4 py-20" id="about">
        <div className="bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-tech text-lime-400 uppercase tracking-widest block">
              // ENGINEERING PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white font-editorial leading-tight">
              Good software should feel <span className="italic text-gradient-lime">obvious and effortless.</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              I care about the micro-details users interact with and the invisible architecture underneath. With 3+ years spanning backend architectures, reactive frontends, and cloud workflows, I craft software that remains calm on the surface and unshakeable under load.
            </p>

            {/* Impact Metric Counters */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <strong className="text-3xl sm:text-5xl font-editorial font-light text-lime-400 block">3+</strong>
                <span className="text-[11px] font-tech text-gray-400 uppercase tracking-wider">Years Active</span>
              </div>
              <div>
                <strong className="text-3xl sm:text-5xl font-editorial font-light text-cyan-400 block">15+</strong>
                <span className="text-[11px] font-tech text-gray-400 uppercase tracking-wider">Technologies</span>
              </div>
              <div>
                <strong className="text-3xl sm:text-5xl font-editorial font-light text-white block">100%</strong>
                <span className="text-[11px] font-tech text-gray-400 uppercase tracking-wider">Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Futuristic Contact Station */}
      <section className="max-w-6xl mx-auto px-4 py-20" id="contact">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 text-black overflow-hidden shadow-2xl">
          {/* Background Ambient Elements */}
          <Sparkles className="absolute right-8 top-8 text-black/20 w-32 h-32 rotate-12 pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-black/10 text-xs font-tech font-bold uppercase tracking-wider">
              INITIATE COLLABORATION
            </span>

            <h2 className="text-3xl sm:text-5xl font-editorial font-normal leading-[1.05]">
              Let&apos;s engineer something <br />
              <span className="italic font-normal text-emerald-950">worth talking about.</span>
            </h2>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
              Currently accepting select projects, technical consulting, and high-impact full-stack engineering opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="mailto:surajrajput733@gmail.com" 
                className="bg-black hover:bg-neutral-900 text-white px-7 py-3.5 rounded-full text-xs font-tech font-bold tracking-wider uppercase transition-all shadow-xl flex items-center gap-2 hover:scale-105"
              >
                <Send size={15} /> Start a Conversation
              </a>
              <button
                onClick={copyEmail}
                className="bg-black/10 hover:bg-black/20 text-black px-5 py-3.5 rounded-full text-xs font-tech font-bold tracking-wider transition-all flex items-center gap-2 cursor-pointer border border-black/15"
              >
                {copied ? <Check size={14} className="text-emerald-900" /> : <Copy size={14} />}
                {copied ? 'Email Copied!' : 'Copy Email Address'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-tech text-gray-500">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-lime-400 text-black flex items-center justify-center font-editorial font-bold text-xs">
            S
          </div>
          <span className="text-gray-300">© 2026 Suraj Magar. Built with Next.js 16 &amp; Tailwind CSS.</span>
        </div>

        <div className="flex items-center gap-5 text-gray-400">
          <a href="https://github.com/uniksrj" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors flex items-center gap-1">
            <GitBranch size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/in/suraj-thapa-1651591bb" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors flex items-center gap-1">
            <BriefcaseBusiness size={16} /> LinkedIn
          </a>
          <a href="mailto:surajrajput733@gmail.com" className="hover:text-lime-400 transition-colors flex items-center gap-1">
            <Mail size={16} /> Email
          </a>
        </div>
      </footer>

    </main>
  )
}
