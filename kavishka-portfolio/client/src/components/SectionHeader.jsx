export default function SectionHeader({ eyebrow, title, copy }) { return <div className="section-header"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }
