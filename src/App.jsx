import { atlasImages } from './sectionImages';

const heroImage = atlasImages.section_01_hero;

const panels = [
  { number: '02', title: 'Trusted infrastructure', label: 'Atlas proof system', copy: 'Uses the generated trust and proof image as a cropped section asset so the site inherits the same editorial composition and UI language.', image: atlasImages.section_02_trust },
  { number: '03', title: 'Control the full purchasing workflow.', label: 'Features', copy: 'Uses the generated features artwork directly, cropped into a premium web section rather than recreated with generic CSS blocks.', image: atlasImages.section_03_features },
  { number: '04', title: 'See every decision from intake to approval.', label: 'Product experience', copy: 'Uses the product-interface artwork with workflow, negotiation and audit trail visible in-frame.', image: atlasImages.section_04_product },
  { number: '05', title: 'Built for every side of the transaction.', label: 'Use cases', copy: 'Uses the generated Atlas editorial/use-case imagery, preserving the mythic commercial tone.', image: atlasImages.section_05_usecases },
  { number: '06', title: 'Autonomy that can be trusted.', label: 'Proof', copy: 'Uses the generated proof/social-validation section image as the source artwork.', image: atlasImages.section_06_proof },
  { number: '07', title: 'Start with a workflow. Scale to full autonomy.', label: 'Pricing', copy: 'Uses the generated pricing image, cropped and framed inside the Atlas layout.', image: atlasImages.section_07_pricing }
];

function Logo() {
  return <a className="logo" href="#top"><span className="mark">A</span><span>ATLAS</span></a>;
}

function Header() {
  return <header><Logo /><nav><a href="#brandkit">Sections</a><a href="#product">Product</a><a href="#principles">Principles</a><a href="#contact">Contact</a></nav><a className="demo" href="#contact">Book a demo</a></header>;
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Header />
      <div className="heroImage" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="heroShade" />
      <div className="heroText">
        <p>Agentic commerce system</p>
        <h1>Auditable autonomy for purchasing.</h1>
        <span>Orchestrate · Observe · Negotiate · Audit</span>
      </div>
    </section>
  );
}

function Panel({ panel, reverse = false, id }) {
  return (
    <section className={`brandPanel ${reverse ? 'reverse' : ''}`} id={id}>
      <div className="panelMeta"><span>{panel.number}</span><p>{panel.label}</p></div>
      <div className="panelCopy"><h2>{panel.title}</h2><p>{panel.copy}</p></div>
      <div className="crop" style={{ backgroundImage: `url(${panel.image})` }} />
    </section>
  );
}

function Principles() {
  return (
    <section className="principles" id="principles">
      {['Orchestrate', 'Observe', 'Negotiate', 'Audit', 'Trust'].map((item) => <article key={item}><span>✦</span><h3>{item}</h3><p>{item === 'Trust' ? 'Built on policy, governance and verifiable integrity.' : 'A core Atlas operating mode carried directly from the generated website imagery.'}</p></article>)}
    </section>
  );
}

function CTA() {
  return <footer id="contact"><div className="footerImage" aria-hidden="true" style={{ backgroundImage: `url(${atlasImages.section_08_cta})` }} /><div className="footerShade" /><div className="footerInner"><h2>Bearing complexity. Enabling commerce.</h2><p>Deploy Atlas to orchestrate purchasing with visibility, confidence and enforceable control.</p><a className="demo large" href="mailto:hello@atlas.ai">Book a demo</a><Logo /></div></footer>;
}

export default function App() {
  return <main><Hero />{panels.map((panel, index) => <Panel key={panel.number} panel={panel} reverse={index % 2 === 1} id={panel.number === '02' ? 'brandkit' : panel.number === '04' ? 'product' : undefined} />)}<Principles /><CTA /></main>;
}
