import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Award, Check, ChevronDown, Code2, Download, ExternalLink, Mail, MapPin, Maximize2, Menu, Phone, ShieldCheck, Sparkles, X } from 'lucide-react'
import { experiences, personal, projects, skillGroups, stats, training } from './data/portfolio'

const nav = [['about','About'], ['experience','Experience'], ['skills','Skills'], ['projects','Projects'], ['credentials','Credentials'], ['contact','Contact']]

function downloadVCard() {
  const card = ['BEGIN:VCARD','VERSION:3.0','N:Akmal;Yousef;;;','FN:Yousef Akmal','TITLE:Software QA/QC Engineer',`TEL;TYPE=CELL:${personal.phoneHref}`,`EMAIL:${personal.email}`,`URL:${personal.linkedin}`,'ADR;TYPE=WORK:;;Giza;;;Egypt','END:VCARD'].join('\r\n')
  const url = URL.createObjectURL(new Blob([card], { type: 'text/vcard;charset=utf-8' }))
  const a = document.createElement('a'); a.href = url; a.download = 'Yousef_Akmal.vcf'; a.click(); URL.revokeObjectURL(url)
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>
}

function Header({ onQuickView }: { onQuickView: () => void }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="nav-shell">
    <a href="#top" className="brand" aria-label="Yousef Akmal home"><span>YA</span><div>Yousef Akmal<small>Quality, made visible.</small></div></a>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
      {nav.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <button className="quick-nav" onClick={() => { setOpen(false); onQuickView() }}><Sparkles size={15}/> Quick view</button>
    </nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
  </div></header>
}

function Hero({ onQuickView }: { onQuickView: () => void }) {
  return <section className="hero" id="top"><div className="hero-grid container">
    <div className="hero-copy reveal">
      <div className="eyebrow"><span className="pulse"/> Available in Giza, Egypt <span className="eyebrow-divider"/> ISTQB CTFL v4</div>
      <p className="kicker">Hello, I'm</p><h1>Yousef<br/><em>Akmal.</em></h1>
      <h2>{personal.title}</h2><p className="hero-secondary">{personal.secondary}</p><p className="hero-summary">{personal.summary}</p>
      <div className="hero-actions"><a className="button primary" href={personal.cv} download><Download size={18}/> Download CV</a><a className="button secondary" href="#projects">Explore my work <ArrowDown size={18}/></a><button className="text-action" onClick={onQuickView}><Sparkles size={16}/> 60-sec recruiter view</button></div>
      <div className="hero-social"><span>Connect</span><i/>
        <IconLink href={personal.linkedin} label="LinkedIn"><ExternalLink size={19}/></IconLink><IconLink href={personal.github} label="GitHub"><Code2 size={19}/></IconLink>
      </div>
    </div>
    <div className="hero-visual reveal delay">
      <div className="visual-orbit"><span className="orbit-label top">PLAN</span><span className="orbit-label right">VERIFY</span><span className="orbit-label bottom">REPORT</span></div>
      <div className="portrait-card"><div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Yousef Akmal"><span>YA</span><small>Portrait ready</small></div><div className="portrait-caption"><ShieldCheck/><div><strong>Quality advocate</strong><span>Web · Mobile · API · ERP</span></div></div></div>
      <div className="floating-card cert"><Award/><div><small>Certified</small><strong>ISTQB CTFL v4</strong></div></div>
      <div className="floating-card achiever"><Sparkles/><div><small>Recognition</small><strong>DigiLians Top Achiever</strong></div></div>
    </div>
  </div><div className="stat-ribbon container">{stats.map((s,i) => <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span>{i < stats.length-1 && <i/>}</div>)}</div></section>
}

function SectionIntro({ number, label, title, copy }: { number: string; label: string; title: string; copy?: string }) {
  return <div className="section-intro"><div className="section-index"><span>{number}</span>{label}</div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

function QuickView({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  useEffect(() => { const fn=(e:KeyboardEvent)=>e.key==='Escape'&&onClose(); window.addEventListener('keydown',fn); return()=>window.removeEventListener('keydown',fn)},[onClose])
  if (!open) return null
  return <div className="modal-backdrop" onMouseDown={e => e.currentTarget===e.target&&onClose()} role="presentation"><section className="quick-modal" role="dialog" aria-modal="true" aria-labelledby="quick-title">
    <button className="modal-close" onClick={onClose} aria-label="Close recruiter quick view"><X/></button>
    <div className="quick-head"><div className="mini-avatar">YA</div><div><span>Recruiter quick view</span><h2 id="quick-title">Yousef Akmal</h2><p>Software QA/QC Engineer · Giza, Egypt</p></div></div>
    <div className="quick-grid"><div><h3>At a glance</h3><ul className="check-list"><li><Check/> ISTQB CTFL v4 certified</li><li><Check/> 6+ QA projects</li><li><Check/> 350+ test cases executed</li><li><Check/> Web, mobile, API & ERP testing</li></ul></div><div><h3>Current experience</h3><p><strong>Software QC Tester</strong><br/>Mediconsult Egypt · Jun 2026 - Present</p><span className="highlight-tag">DigiLians Top Achiever</span></div></div>
    <div><h3>Core toolkit</h3><div className="quick-tags">{['Manual QA','Postman','SQL','JIRA','Selenium','JMeter','Agile Scrum'].map(x=><span key={x}>{x}</span>)}</div></div>
    <div><h3>Top projects</h3><div className="quick-projects">{projects.filter(p=>p.featured).map(p=><a key={p.title} href="#projects" onClick={onClose}><div><strong>{p.title}</strong><span>{p.metric}</span></div><ArrowUpRight/></a>)}</div></div>
    <div className="quick-actions"><a className="button primary" href={personal.cv} download><Download/> Download CV</a><a className="button secondary" href={personal.linkedin} target="_blank" rel="noreferrer"><ExternalLink/> LinkedIn</a><a className="button ghost" href={`mailto:${personal.email}`}><Mail/> Email</a></div>
  </section></div>
}

function About() { return <section className="section about" id="about"><div className="container"><SectionIntro number="01" label="Profile" title="I test beyond the happy path."/><div className="about-grid"><p className="lead-copy">{personal.longSummary}</p><div className="principles"><div><span>01</span><h3>Think in risks</h3><p>Prioritize the paths where failure matters most.</p></div><div><span>02</span><h3>Test with evidence</h3><p>Make every result traceable, reproducible, and clear.</p></div><div><span>03</span><h3>Communicate quality</h3><p>Turn defects into decisions teams can act on.</p></div></div></div></div></section> }

function Experience() { return <section className="section experience" id="experience"><div className="container"><SectionIntro number="02" label="Experience" title="Building quality into every cycle." copy="Hands-on QA work, structured training, and the teaching experience that sharpens how I reason and communicate."/><div className="timeline">{experiences.map((e,i)=><article className="timeline-item" key={e.role}><div className="timeline-marker"><span>{String(i+1).padStart(2,'0')}</span></div><div className="timeline-head"><div><h3>{e.role}</h3><p>{e.company}</p></div><div className="period">{e.current && <span>Current</span>}{e.period}</div></div>{e.recognition&&<div className="recognition"><Award/> {e.recognition} of the DigiLians Initiative</div>}<ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></article>)}</div></div></section> }

function Skills() { return <section className="section skills" id="skills"><div className="container"><SectionIntro number="03" label="Toolkit" title="A practical, honest skill set." copy="Automation and CI/CD are clearly marked as foundational exposure; the emphasis remains on proven QA execution."/><div className="skill-legend"><span><i className="practical"/> Practical</span><span><i className="exposure"/> Basic exposure</span></div><div className="skills-grid">{skillGroups.map((g,i)=><article className="skill-card" key={g.title}><div className="skill-number">{String(i+1).padStart(2,'0')}</div><div><div className="skill-title"><h3>{g.title}</h3><span className={g.level==='Basic exposure'?'exposure':''}>{g.level}</span></div><div className="tags">{g.items.map(x=><span key={x}>{x}</span>)}</div></div></article>)}</div></div></section> }

function ProjectCard({ p, i }: { p: typeof projects[number]; i: number }) {
  const [open, setOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)

  useEffect(() => {
    if (!imageOpen) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setImageOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [imageOpen])

  return <>
    <article className={`project-card ${p.featured ? 'featured' : ''}`}>
      <div className="project-top"><span>{String(i + 1).padStart(2, '0')}</span><div className="project-status">CASE STUDY</div></div>
      {p.image && <figure className="project-visual">
        <button className="project-visual-button" onClick={() => setImageOpen(true)} aria-label={`Open ${p.title} graduation project infographic`}>
          <img src={p.image} alt={p.imageAlt ?? ''} loading="lazy" />
          <span className="project-visual-action"><Maximize2/> View infographic</span>
        </button>
        {p.imageCaption && <figcaption>{p.imageCaption}</figcaption>}
      </figure>}
      <div className="project-body"><p className="project-subtitle">{p.subtitle}</p><h3>{p.title}</h3><p>{p.summary}</p><div className="approach-row">{p.approaches.slice(0, 3).map(a => <span key={a}>{a}</span>)}</div></div>
      <div className="project-metric"><strong>{p.metric}</strong><span>Verified from CV</span></div>
      <button className="project-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>View case details <ChevronDown className={open ? 'rotated' : ''}/></button>
      {open && <div className="project-details"><ul>{p.details.map(d => <li key={d}>{d}</li>)}</ul><div className="tool-row"><strong>Tools & methods</strong>{p.tools.map(t => <span key={t}>{t}</span>)}</div><p className="link-note">Repository or live demo not supplied.</p></div>}
    </article>
    {imageOpen && p.image && <div className="image-lightbox" onMouseDown={event => event.currentTarget === event.target && setImageOpen(false)} role="presentation">
      <section className="image-lightbox-panel" role="dialog" aria-modal="true" aria-label={`${p.title} graduation project infographic`}>
        <button className="image-lightbox-close" onClick={() => setImageOpen(false)} aria-label="Close infographic"><X/></button>
        <div className="image-lightbox-heading"><span>Graduation project showcase</span><strong>{p.title}</strong></div>
        <img src={p.image} alt={p.imageAlt ?? ''} />
        {p.imageCaption && <p>{p.imageCaption}</p>}
      </section>
    </div>}
  </>
}

function Projects() { return <section className="section projects" id="projects"><div className="container"><SectionIntro number="04" label="Selected work" title="Quality, documented in outcomes." copy="Six case studies spanning ERP, web, API, database, and foundational automation testing."/><div className="projects-grid">{projects.map((p,i)=><ProjectCard p={p} i={i} key={p.title}/>)}</div></div></section> }

function Credentials() { return <section className="section credentials" id="credentials"><div className="container"><SectionIntro number="05" label="Credentials" title="Certified foundations. Continued learning."/><div className="credential-grid"><article className="credential-feature"><div className="cert-emblem"><ShieldCheck/><span>CTFL<small>v4</small></span></div><div><p>International Software Testing Qualifications Board</p><h3>Certified Tester Foundation Level</h3><span>Certificate code: 260729018</span></div></article><article className="education-card"><span>2020 - 2024</span><Code2/><h3>BSc in Computer Science</h3><p>Misr University for Science and Technology (MUST)</p><strong>GPA 3.5 / 4.0</strong><small>Very Good with Honors</small></article></div><div className="training-list">{training.slice(1).map((t,i)=><div key={t}><span>{String(i+1).padStart(2,'0')}</span><p>{t}</p><Check/></div>)}</div></div></section> }

function Contact() { return <section className="contact section" id="contact"><div className="container contact-grid"><div><span className="contact-kicker">Let's make quality visible.</span><h2>Ready to discuss your<br/><em>next release?</em></h2><p>Open to QA/QC opportunities where structured testing, clear communication, and a quality-first mindset matter.</p><div className="contact-actions"><a className="button light" href={`mailto:${personal.email}`}><Mail/> Send an email</a><button className="button outline-light" onClick={downloadVCard}><Download/> Save contact</button></div></div><div className="contact-list"><a href={`mailto:${personal.email}`}><span><Mail/></span><div><small>Email</small><strong>{personal.email}</strong></div><ArrowUpRight/></a><a href={`tel:${personal.phoneHref}`}><span><Phone/></span><div><small>Phone</small><strong>{personal.phoneDisplay}</strong></div><ArrowUpRight/></a><a href={personal.linkedin} target="_blank" rel="noreferrer"><span><ExternalLink/></span><div><small>LinkedIn</small><strong>/in/yousefakmal</strong></div><ArrowUpRight/></a><a href={personal.github} target="_blank" rel="noreferrer"><span><Code2/></span><div><small>GitHub</small><strong>/yousefakmal</strong></div><ArrowUpRight/></a><div className="location"><span><MapPin/></span><div><small>Based in</small><strong>{personal.location}</strong></div></div></div></div></section> }

function Footer() { return <footer><div className="container"><a className="brand footer-brand" href="#top"><span>YA</span><div>Yousef Akmal<small>Software QA/QC Engineer</small></div></a><p>Built for quality. Designed for clarity.</p><a className="back-top" href="#top">Back to top <ArrowUpRight/></a></div></footer> }

export default function App() { const [quick,setQuick]=useState(false); return <><Header onQuickView={()=>setQuick(true)}/><main><Hero onQuickView={()=>setQuick(true)}/><About/><Experience/><Skills/><Projects/><Credentials/><Contact/></main><Footer/><QuickView open={quick} onClose={()=>setQuick(false)}/></> }
