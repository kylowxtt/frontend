const navItems = [
  ['Platform', '#platform'],
  ['Workflow', '#workflow'],
  ['Use cases', '#use-cases'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact']
];

const metrics = [
  ['100%', 'policy aligned'],
  ['$1.2M', 'projected savings'],
  ['2.4 days', 'avg. cycle time'],
  ['Full', 'audit trail']
];

const capabilities = [
  ['01', 'Orchestrate', 'Coordinate agents, workflows, approvals and merchant systems inside one governed layer.'],
  ['02', 'Observe', 'Surface live activity, risk signals, policy status and performance for every agent action.'],
  ['03', 'Negotiate', 'Run parallel merchant conversations with data-backed strategy and live commercial leverage.'],
  ['04', 'Audit', 'Record approvals, terms, exceptions and outcomes in a complete traceable history.']
];

const workflow = ['Intake', 'Analyze', 'Negotiate', 'Approve', 'Execute'];

const useCases = [
  ['Procurement teams', 'Discover suppliers, compare markets and move from request to purchase order with less manual work.'],
  ['Merchants', 'Respond to intelligent buyers with structured offers, policy-aware terms and faster close cycles.'],
  ['Finance & Risk', 'Enforce authority, spend policy, approval evidence and audit readiness before money moves.']
];

const plans = [
  ['Pilot', 'Validate one high-value workflow.', ['3 workflows', '5 merchant connections', 'Standard policies', '30-day audit trail']],
  ['Scale', 'Expand autonomous purchasing.', ['Unlimited workflows', 'Unlimited merchants', 'Advanced policies', '180-day audit trail']],
  ['Enterprise', 'Deploy across the company.', ['SSO and data residency', 'Custom governance', 'Dedicated support', '1-year+ audit history']]
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Atlas home">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M9 54 32 8l23 46" />
        <path d="M18 54h28" />
        <circle cx="32" cy="38" r="10" />
        <path d="M22 38h20M32 28v20M25 31c4 3 10 3 14 0M25 45c4-3 10-3 14 0" />
        <path d="M32 3v10M27 8h10" />
      </svg>
      <span>ATLAS</span>
    </a>
  );
}

function Button({ children, ghost = false, href = '#contact' }) {
  return (
    <a className={ghost ? 'button buttonGhost' : 'button'} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function Glyph({ index = 0 }) {
  const paths = [
    <><circle cx="24" cy="24" r="5"/><circle cx="10" cy="24" r="5"/><circle cx="38" cy="24" r="5"/><circle cx="24" cy="10" r="5"/><circle cx="24" cy="38" r="5"/><path d="M15 24h18M24 15v18"/></>,
    <><circle cx="24" cy="24" r="17"/><path d="M7 24h34M24 7c5 6 7 11 7 17s-2 11-7 17M24 7c-5 6-7 11-7 17s2 11 7 17"/></>,
    <><path d="M10 29 19 18l8 7 4-5 7 8"/><path d="M10 36h28"/><circle cx="34" cy="14" r="3"/></>,
    <><path d="M24 5 39 11v12c0 10-6 17-15 21-9-4-15-11-15-21V11l15-6Z"/><path d="m18 24 4 4 8-10"/></>
  ];
  return <svg className="glyph" viewBox="0 0 48 48" aria-hidden="true">{paths[index % paths.length]}</svg>;
}

function ProductConsole() {
  return (
    <div className="console">
      <div className="consoleTop">
        <div>
          <span>Purchase Workflow</span>
          <small>WF-7821</small>
        </div>
        <b>Active</b>
      </div>

      <div className="workflowRail">
        {workflow.map((step, index) => (
          <div className="workflowStep" key={step}>
            <i>{index + 1}</i>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <div className="consoleGrid">
        <section className="agentList">
          <small>Agent orchestration</small>
          {['Market analyst', 'Risk evaluator', 'Negotiation agent', 'Audit agent'].map((agent) => (
            <p key={agent}><span />{agent}<em>live</em></p>
          ))}
        </section>

        <section className="offerCard">
          <small>Best offer</small>
          <h3>Merchant A</h3>
          <strong>$96,250</strong>
          <em>12% better</em>
          <div className="chart"><i/><i/><i/><i/><i/></div>
        </section>

        <section className="auditCard">
          <small>Audit trail</small>
          {['Analysis complete', '8 merchants qualified', 'Policy check passed', 'Approved by J. Patel', 'PO issued'].map((event, index) => (
            <p key={event}><time>10:{42 + index * 3}</time>{event}</p>
          ))}
        </section>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <header className="siteHeader">
        <Logo />
        <nav>{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <Button>Book a demo</Button>
      </header>

      <div className="heroGrid shell">
        <div className="heroCopy">
          <p className="eyebrow">Agentic commerce system</p>
          <h1>Auditable autonomy for purchasing.</h1>
          <p className="lede">Atlas orchestrates intelligent commerce across merchants so teams can observe, negotiate and enforce every buying decision with confidence.</p>
          <div className="actions"><Button>Book a demo</Button><Button ghost href="#platform">See platform</Button></div>
          <div className="heroTags"><span>Orchestrate</span><span>Observe</span><span>Negotiate</span><span>Audit</span></div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <div className="orbital"><div className="planet"/><div className="northStar"/></div>
          <ProductConsole />
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof section">
      <div className="shell proofGrid">
        <div>
          <p className="eyebrow">Trusted infrastructure</p>
          <h2>Policy-safe decisions across procurement, finance and merchant teams.</h2>
        </div>
        <div className="metricGrid">{metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section features" id="platform">
      <div className="shell">
        <div className="sectionHead wide">
          <p className="eyebrow">Core capabilities</p>
          <h2>Control the full purchasing workflow.</h2>
          <p>Atlas turns agent autonomy into a visible, scoped and enforceable operating system.</p>
        </div>
        <div className="featureGrid">
          {capabilities.map(([num, title, copy], index) => (
            <article key={title}>
              <div className="cardTop"><Glyph index={index}/><span>{num}</span></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="section product" id="workflow">
      <div className="shell productGrid">
        <ProductConsole />
        <div className="productCopy">
          <p className="eyebrow">Product experience</p>
          <h2>See every decision from intake to approval.</h2>
          <p>Every negotiation, policy check and approval event is captured in a single system of record — designed for commercial teams that need speed without losing control.</p>
          <div className="callouts"><span>Policy check</span><span>Best offer</span><span>Audit event</span></div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="section usecases" id="use-cases">
      <div className="shell">
        <div className="sectionHead">
          <p className="eyebrow">Use cases</p>
          <h2>Built for every side of the transaction.</h2>
        </div>
        <div className="useGrid">{useCases.map(([title, copy], index) => <article key={title}><Glyph index={index}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="shell quoteGrid">
        <div>
          <p className="eyebrow">Proof</p>
          <h2>Autonomy that can be trusted.</h2>
          <p>Procurement moves faster when every action is visible, bounded and recorded.</p>
        </div>
        <article className="quote"><q>Atlas runs the negotiation while my team stays focused on strategy. The outcomes speak for themselves.</q><span>Sarah Mitchell · VP Procurement</span></article>
        <article className="quote stat"><strong>8</strong><span>merchants negotiated in parallel</span></article>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="shell">
        <div className="sectionHead center">
          <p className="eyebrow">Pricing</p>
          <h2>Start with a workflow. Scale to full autonomy.</h2>
          <p>Usage-based enterprise deployment for agentic commerce.</p>
        </div>
        <div className="planGrid">{plans.map(([name, desc, items], index) => <article className={index === 1 ? 'featuredPlan' : ''} key={name}><h3>{name}</h3><p>{desc}</p><div>{items.map((item) => <span key={item}>✓ {item}</span>)}</div><Button ghost={index !== 1}>Request pricing</Button></article>)}</div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <footer className="cta" id="contact">
      <div className="shell ctaInner">
        <p className="eyebrow">Deploy Atlas</p>
        <h2>Bearing complexity. Enabling commerce.</h2>
        <p>Orchestrate purchasing with visibility, confidence and enforceable control.</p>
        <div className="actions"><Button>Book a demo</Button><Button ghost href="#top">Back to top</Button></div>
        <div className="footerBar">
          <Logo />
          <span>Policy-safe · Auditable · Enterprise-ready</span>
          <nav>{navItems.slice(0, 4).map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return <main><Hero /><Proof /><Features /><Product /><UseCases /><Testimonials /><Pricing /><CTA /></main>;
}
