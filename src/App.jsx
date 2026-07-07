const navItems = ['Platform', 'Workflow', 'Use cases', 'Pricing'];

const capabilities = [
  ['Orchestrate', 'Coordinate intelligent purchasing agents across data, policies, approvals and merchant systems.'],
  ['Observe', 'Surface every action, decision, confidence score and exception in one live operating layer.'],
  ['Negotiate', 'Run parallel merchant conversations with price memory, policy context and auditable reasoning.'],
  ['Audit', 'Keep immutable records for approvals, terms, scopes and every agent action.']
];

const workflow = ['Intake', 'Analysis', 'Negotiate', 'Approve', 'Execute'];

const useCases = [
  ['Procurement teams', 'Expand supplier discovery, benchmark terms and reduce manual commercial work.'],
  ['Merchants', 'Respond to autonomous buyers with structured offers, rules and selling intelligence.'],
  ['Finance & Risk', 'Enforce policy, approval thresholds, spend authority and traceability by design.']
];

const plans = [
  ['Pilot', 'Validate and activate', ['Up to 3 workflows', '5 merchant connections', 'Standard approval policies', '30-day audit trail']],
  ['Scale', 'Expand and optimize', ['Unlimited workflows', 'Unlimited merchant connections', 'Advanced policies', '180-day audit trail']],
  ['Enterprise', 'Custom deployment', ['Dedicated support', 'SSO and data residency', 'Custom approval rules', '1-year+ audit history']]
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Atlas home">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 54 32 7l24 47" />
        <path d="M18 54h28" />
        <circle cx="32" cy="38" r="11" />
        <path d="M21 38h22M32 27v22M24 30c5 4 11 4 16 0M24 46c5-4 11-4 16 0" />
        <path d="M32 2v9M27.5 6.5h9" />
      </svg>
      <span>ATLAS</span>
    </a>
  );
}

function Icon({ type = 'star' }) {
  if (type === 'shield') {
    return <svg viewBox="0 0 48 48"><path d="M24 5 39 11v11c0 10-6.4 17-15 21C15.4 39 9 32 9 22V11l15-6Z"/><path d="m18 24 4 4 8-10"/></svg>;
  }
  if (type === 'globe') {
    return <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><path d="M8 24h32M24 8c5 5 7 10 7 16s-2 11-7 16M24 8c-5 5-7 10-7 16s2 11 7 16"/></svg>;
  }
  if (type === 'nodes') {
    return <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="5"/><circle cx="12" cy="14" r="5"/><circle cx="36" cy="14" r="5"/><circle cx="12" cy="34" r="5"/><circle cx="36" cy="34" r="5"/><path d="M16 16.5 20 21M32 16.5 28 21M16 31.5 20 27M32 31.5 28 27"/></svg>;
  }
  return <svg viewBox="0 0 48 48"><path d="M24 5v38M5 24h38"/><path d="M24 13c2 6 5 9 11 11-6 2-9 5-11 11-2-6-5-9-11-11 6-2 9-5 11-11Z"/></svg>;
}

function Button({ children, ghost = false }) {
  return <a className={ghost ? 'button ghost' : 'button'} href="#contact"><span>{children}</span><span>→</span></a>;
}

function Dashboard() {
  return (
    <div className="dashboard" aria-label="Atlas dashboard mockup">
      <div className="dash-top"><Logo /><span className="status">Active</span></div>
      <div className="flowline">
        {workflow.map((step, i) => <div className="flow-step" key={step}><span>{i + 1}</span><p>{step}</p></div>)}
      </div>
      <div className="dash-grid">
        <article>
          <small>Agent orchestration</small>
          {['Market Analyst', 'Risk Evaluator', 'Negotiation Agent', 'Audit Agent'].map(agent => <p className="agent" key={agent}><b />{agent}<span>live</span></p>)}
        </article>
        <article>
          <small>Negotiation</small>
          <h3>Merchant A</h3>
          <strong>$96,250</strong>
          <em>12% better than benchmark</em>
          <div className="spark" />
        </article>
        <article>
          <small>Audit trail</small>
          {['Analysis complete', '8 merchants qualified', 'Offer received', 'Policy check passed', 'PO issued'].map((event, i) => <p className="event" key={event}><span>10:{42 + i * 3}</span>{event}</p>)}
        </article>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero panel" id="top">
      <header>
        <Logo />
        <nav>{navItems.map(item => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}</nav>
        <Button>Book a demo</Button>
      </header>
      <div className="hero-copy">
        <p className="eyebrow">Agentic commerce system</p>
        <h1>Auditable autonomy for purchasing.</h1>
        <p>Atlas orchestrates intelligent commerce across merchants so teams can observe, negotiate and enforce every buying decision with confidence.</p>
        <div className="actions"><Button>Book a demo</Button><Button ghost>See platform</Button></div>
      </div>
      <div className="atlas-art" aria-hidden="true"><div className="globe" /><div className="statue"><i/><b/><span/></div></div>
      <aside className="principles">Orchestrate · Observe · Negotiate · Audit</aside>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof panel">
      <p className="eyebrow">Trusted infrastructure</p>
      <h2>Policy-safe decisions across procurement, finance and merchant teams.</h2>
      <div className="metrics">
        {['100% Policy aligned', '$1.2M Projected savings', '2.4 days Avg. cycle time', 'Full audit trail'].map(metric => <strong key={metric}>{metric}</strong>)}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features panel" id="platform">
      <div className="section-intro">
        <p className="eyebrow">Core capabilities</p>
        <h2>Control the full purchasing workflow.</h2>
        <p>Coordinate every decision from intake to approval with agents, policy guardrails and complete visibility.</p>
      </div>
      <div className="feature-grid">
        {capabilities.map(([title, copy], i) => <article key={title}><Icon type={i === 0 ? 'nodes' : i === 1 ? 'globe' : i === 3 ? 'shield' : 'star'} /><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="product panel" id="workflow">
      <div>
        <p className="eyebrow">Product experience</p>
        <h2>See every decision from intake to approval.</h2>
        <p>Observe autonomous negotiations, policy checks and approval history as a single auditable system of record.</p>
      </div>
      <Dashboard />
    </section>
  );
}

function UseCases() {
  return (
    <section className="usecases panel" id="use-cases">
      <div className="section-intro">
        <p className="eyebrow">Use cases</p>
        <h2>Built for every side of the transaction.</h2>
      </div>
      <div className="case-grid">{useCases.map(([title, copy], i) => <article key={title}><Icon type={i === 2 ? 'shield' : i === 1 ? 'star' : 'nodes'} /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing panel" id="pricing">
      <p className="eyebrow">Pricing</p>
      <h2>Start with a workflow. Scale to full autonomy.</h2>
      <div className="plan-grid">{plans.map(([name, desc, items], i) => <article className={i === 1 ? 'featured' : ''} key={name}><h3>{name}</h3><p>{desc}</p>{items.map(item => <span key={item}>✓ {item}</span>)}<Button>{i === 1 ? 'Request pricing' : 'Talk to sales'}</Button></article>)}</div>
    </section>
  );
}

function CTA() {
  return (
    <footer className="cta panel" id="contact">
      <div><p className="eyebrow">Final CTA</p><h2>Bearing complexity. Enabling commerce.</h2><p>Deploy Atlas to orchestrate purchasing with visibility, confidence and enforceable control.</p><div className="actions"><Button>Book a demo</Button><Button ghost>See platform</Button></div></div>
      <div className="footer-grid"><Logo /><span>Policy-safe · Auditable · Enterprise-ready</span><span>Platform</span><span>Solutions</span><span>Resources</span><span>Company</span></div>
    </footer>
  );
}

export default function App() {
  return <main><Hero /><Proof /><Features /><Product /><UseCases /><Pricing /><CTA /></main>;
}
