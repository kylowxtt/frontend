import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Cpu,
  Eye,
  Factory,
  Globe2,
  Handshake,
  Layers3,
  LockKeyhole,
  Mail,
  PackageCheck,
  Play,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from 'lucide-react'
import heroAtlas from './assets/hero-atlas-statue.png'
import dashboardCrop from './assets/dashboard-crop.png'
import earthHorizon from './assets/earth-horizon.png'
import waveMetrics from './assets/wave-metrics.png'
import resourceCardsCrop from './assets/resource-cards-crop.png'
import brandkit from './assets/atlas-brandkit.png'

const nav = ['Platform', 'Solutions', 'Resources', 'Company', 'Pricing']

const trustMarks = [
  { name: 'Mercantile', sub: 'Global', symbol: 'M' },
  { name: 'Northridge', sub: 'Industries', symbol: '▲' },
  { name: 'Veridian', sub: 'Supply Co.', symbol: '◇' },
  { name: 'Aurelius', sub: 'Capital', symbol: '✺' },
  { name: 'Pioneer', sub: 'Logistics', symbol: 'P' },
  { name: 'Summit', sub: 'Energy', symbol: '◭' },
]

const overview = [
  {
    title: 'Autonomous Agents',
    copy: 'Purpose-built agents for every function.',
    icon: Layers3,
  },
  {
    title: 'Policy & Guardrails',
    copy: 'Enforceable rules at every step.',
    icon: ShieldCheck,
  },
  {
    title: 'Cross-Merchant Reach',
    copy: 'Negotiate across any counterparty.',
    icon: Globe2,
  },
  {
    title: 'Audit & Observability',
    copy: 'Every decision is traceable and verifiable.',
    icon: Eye,
  },
]

const workflow = [
  ['01. Ingest', 'Connect your data, policies and systems.', LockKeyhole],
  ['02. Orchestrate', 'Agents collaborate and evaluate every option.', Layers3],
  ['03. Negotiate', 'Atlas negotiates the best terms for you.', Handshake],
  ['04. Approve', 'You stay in control with full visibility.', ShieldCheck],
  ['05. Execute', 'Atlas executes and monitors outcomes.', Play],
  ['06. Audit', 'Every action is logged, traceable and secure.', PackageCheck],
]

const industries = [
  ['Manufacturing', 'Optimize supplier networks and material sourcing.', Factory],
  ['Energy & Utilities', 'Negotiate complex contracts across global markets.', Zap],
  ['Retail & CPG', 'Drive margin and agility across your supply chain.', Building2],
  ['Technology', 'Streamline procurement of technology and services.', Cpu],
  ['Logistics & Transport', 'Automate freight and capacity negotiations.', Truck],
]

const metrics = [
  ['$18.7M', 'Total value negotiated this month', '▲ 23% vs last month'],
  ['95.4%', 'Negotiation success rate', ''],
  ['2.4x', 'Average ROI for customers', ''],
  ['100%', 'Audit coverage on all transactions', ''],
]

const resources = [
  ['WHITEPAPER', 'The Future of Agentic Commerce', 'Read now'],
  ['CASE STUDY', 'How NorthRidge Cut Costs by 32%', 'Read case study'],
  ['BLOG', '5 Principles of Trusted Automation', 'Read article'],
]

function AtlasMark({ compact = false }) {
  return (
    <div className="atlas-mark" aria-label="Atlas logo">
      <svg viewBox="0 0 96 74" role="img" aria-hidden="true">
        <path d="M7 67L48 6l41 61" />
        <path d="M24 67L48 29l24 38" />
        <circle cx="48" cy="51" r="14" />
        <path d="M34 51h28M48 37v28M39 41c5 7 5 13 0 20M57 41c-5 7-5 13 0 20" />
        <path d="M48 0v13M41 7h14" className="spark" />
      </svg>
      {!compact && (
        <div className="wordmark">
          <span>ATLAS</span>
        </div>
      )}
    </div>
  )
}

function SectionNumber({ n, label, side = false }) {
  return (
    <div className={side ? 'section-rail' : 'section-id'}>
      <strong>{String(n).padStart(2, '0')}</strong>
      {label && <span>{label}</span>}
    </div>
  )
}

function Button({ children, variant = 'gold', className = '' }) {
  return (
    <a className={`btn btn-${variant} ${className}`} href="#book-demo">
      <span>{children}</span>
      <ArrowRight size={14} strokeWidth={1.6} />
    </a>
  )
}

function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="hero-bg-grid" />
      <header className="topbar">
        <AtlasMark />
        <nav aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <Button variant="outline" className="nav-cta">Book a Demo</Button>
      </header>

      <SectionNumber n={1} side />

      <div className="hero-copy">
        <h1>Agentic commerce<br />for the modern world.</h1>
        <p>Atlas orchestrates autonomous agents to negotiate, decide and execute purchasing across any merchant, anywhere.</p>
        <div className="hero-actions">
          <Button>Book a Demo</Button>
          <a className="text-link" href="#platform">Explore the Platform <ArrowRight size={14} /></a>
        </div>
      </div>

      <img className="hero-atlas" src={heroAtlas} alt="Atlas statue holding a blue technical globe" />

      <aside className="hero-principles" aria-label="Atlas principles">
        {['Orchestrate', 'Observe', 'Negotiate', 'Audit', 'Trust'].map((item) => <span key={item}>{item}</span>)}
      </aside>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="section trust-section" id="trust">
      <SectionNumber n={2} />
      <div className="trust-inner">
        <div className="trust-label">Trusted by innovators</div>
        <div className="trust-logos">
          {trustMarks.map((mark) => (
            <div className="trust-logo" key={mark.name}>
              <span>{mark.symbol}</span>
              <p>{mark.name}<small>{mark.sub}</small></p>
            </div>
          ))}
        </div>
        <div className="trust-callout">Powering commerce for companies<br />that move the world forward.</div>
      </div>
    </section>
  )
}

function ProductOverview() {
  return (
    <section className="section overview-section" id="platform">
      <SectionNumber n={3} />
      <div className="overview-copy">
        <div className="eyebrow">Product overview</div>
        <h2>One orchestration layer.<br />Limitless possibilities.</h2>
        <p>Atlas connects your data, agents and policies into a single intelligent system that makes buying and selling decisions with clarity and confidence.</p>
      </div>
      <div className="overview-grid">
        {overview.map(({ title, copy, icon: Icon }) => (
          <article className="overview-card" key={title}>
            <Icon size={34} strokeWidth={1.25} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="dashboard-window" aria-label="Atlas platform dashboard preview">
        <img src={dashboardCrop} alt="Atlas dashboard interface preview" />
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section workflow-section" id="solutions">
      <SectionNumber n={4} />
      <div className="workflow-left">
        <div className="eyebrow">How it works</div>
        <div className="workflow-steps">
          {workflow.map(([title, copy, Icon], index) => (
            <article className="workflow-step" key={title}>
              <div className="step-icon"><Icon size={24} strokeWidth={1.25} /></div>
              {index < workflow.length - 1 && <div className="step-line" />}
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="earth-panel">
        <img src={earthHorizon} alt="Blue orbital earth horizon with gold commerce lights" />
        <div className="earth-copy">Built for scale.<br />Designed for trust.</div>
      </div>
    </section>
  )
}

function Industries() {
  return (
    <section className="section industry-section" id="company">
      <SectionNumber n={5} />
      <div className="industry-copy">
        <div className="eyebrow">Designed for every industry</div>
        <h2>Adaptable to your world.</h2>
        <p>Atlas empowers teams across the enterprise to make better commercial decisions—faster.</p>
        <a className="text-link" href="#solutions">View all solutions <ArrowRight size={13} /></a>
      </div>
      <div className="industry-grid">
        {industries.map(([title, copy, Icon]) => (
          <article className="industry-card" key={title}>
            <Icon size={26} strokeWidth={1.15} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Intelligence() {
  return (
    <section className="section intelligence-section">
      <SectionNumber n={6} />
      <img className="wave-bg" src={waveMetrics} alt="Blue data wave and Atlas metrics texture" />
      <div className="intelligence-copy">
        <div className="eyebrow">Live intelligence</div>
        <h2>Decisions that adapt.<br />Intelligence that learns.</h2>
        <p>Atlas continuously learns from outcomes to improve negotiation strategies and drive better results.</p>
      </div>
      <div className="metrics-strip">
        {metrics.map(([value, label, delta], idx) => (
          <article className="metric" key={label}>
            {idx === 0 ? <div className="metric-big">{value}</div> : <div className="metric-value">{value}</div>}
            <p>{label}</p>
            {delta && <span>{delta}</span>}
          </article>
        ))}
      </div>
    </section>
  )
}

function ResourcesCTA() {
  return (
    <section className="section resources-section" id="resources">
      <SectionNumber n={7} />
      <img className="resource-crop" src={resourceCardsCrop} alt="Atlas resource card image textures" />
      <div className="resources-copy">
        <div className="eyebrow">Resources</div>
        <h2>Insights that move<br />commerce forward.</h2>
        <a className="text-link" href="#resources">Explore all resources <ArrowRight size={13} /></a>
      </div>
      <div className="resource-grid">
        {resources.map(([type, title, action]) => (
          <article className="resource-card" key={title}>
            <div className="eyebrow">{type}</div>
            <h3>{title}</h3>
            <a className="text-link small" href="#resources">{action} <ArrowRight size={12} /></a>
          </article>
        ))}
      </div>
      <div className="future-card" id="book-demo">
        <h3>Join the future<br />of commerce.</h3>
        <Button>Book a Demo</Button>
      </div>
    </section>
  )
}

function Footer() {
  const groups = [
    ['Platform', ['Overview', 'Workflows', 'Integrations', 'Security']],
    ['Solutions', ['By Industry', 'By Function', 'Use Cases', 'Customers']],
    ['Resources', ['Resources', 'Blog', 'Documentation', 'Help Center']],
    ['Company', ['About Us', 'Careers', 'Partners', 'Contact']],
  ]
  return (
    <footer className="section footer-section">
      <SectionNumber n={8} />
      <div className="footer-brand">
        <AtlasMark />
        <p>Agentic commerce for<br />the modern world.</p>
        <small>© 2024 Atlas Systems. All rights reserved.</small>
      </div>
      <div className="footer-links">
        {groups.map(([title, links]) => (
          <div key={title}>
            <h4>{title}</h4>
            {links.map((link) => <a href="#home" key={link}>{link}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-stay">
        <h4>Stay informed</h4>
        <p>Insights on agentic commerce and product updates.</p>
        <label>
          <span className="sr-only">Email address</span>
          <input placeholder="Email address" />
          <button aria-label="Submit email"><ArrowRight size={13} /></button>
        </label>
        <nav className="socials" aria-label="Social links">
          {['in', '◎', '𝕏', '●'].map((s) => <a href="#home" key={s}>{s}</a>)}
        </nav>
        <div className="legal">
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Service</a>
          <a href="#home">Security</a>
          <a href="#home">Status</a>
        </div>
      </div>
      <div className="footer-symbol"><AtlasMark compact /></div>
      <img className="brandkit-ghost" src={brandkit} alt="Atlas brand kit reference texture" />
    </footer>
  )
}

export default function App() {
  return (
    <main className="atlas-page">
      <Hero />
      <TrustBar />
      <ProductOverview />
      <HowItWorks />
      <Industries />
      <Intelligence />
      <ResourcesCTA />
      <Footer />
    </main>
  )
}
