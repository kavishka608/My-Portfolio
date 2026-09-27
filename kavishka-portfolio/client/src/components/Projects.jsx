import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const projects = [
  {
    n: '01',
    name: 'HirePath AI',
    type: 'AI-Powered Recruitment Platform',
    stack: 'ASP.NET Core 8 · C# · Entity Framework · SQL Server · Swagger',
    link: 'https://github.com/kavishka608/HirePath',
    screen: 'home',
    desc: 'Recruiter management subsystem with 9 RESTful APIs. Built using Repository Pattern, Service Layer and SOLID principles. Includes job search, dashboard statistics and proper database relationships.',
  },
  {
    n: '02',
    name: 'HomeCraft',
    type: 'Home Services Booking Platform',
    stack: 'Node.js · Express · PostgreSQL · React · JWT',
    link: 'https://github.com/kavishka608/homecraft-backend',
    screen: 'next',
    desc: 'Full-stack platform connecting homeowners with construction professionals. Features 20+ REST APIs, bidding system, reviews and portfolio management.',
  },
  {
    n: '03',
    name: 'NextStep',
    type: 'Centralized university management platform',
    stack: 'React.js · Team collaboration · Frontend',
    link: 'https://github.com/kavishka608/NextStep.git',
    screen: 'spare',
    desc: 'Collaborative frontend for university management workflows.',
  },
  {
    n: '04',
    name: 'SpareHubLK',
    type: 'Automotive parts e-commerce solution',
    stack: 'PHP · MySQL · JavaScript',
    link: 'https://github.com/kavishka608/sparehublk.com.git',
    screen: 'home',
    desc: 'E-commerce platform for automotive spare parts with product catalog and ordering flow.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <FadeIn>
        <SectionHeader
          eyebrow="03 / SELECTED WORK"
          title="Learning by making."
          copy="A selection of projects where I applied development fundamentals to useful user experiences."
        />
      </FadeIn>

      <div className="project-list">
        {projects.map((p, i) => (
          <FadeIn key={p.name} direction={i % 2 ? 'right' : 'left'}>
            <article className="project">
              <div className={`project-screen ${p.screen}`}>
                <div className="browser">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="screen-content">
                  <b>{p.name}</b>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="project-info">
                <span className="project-number">{p.n}</span>
                <h3>{p.name}</h3>
                <p>{p.type}</p>
                <small>{p.stack}</small>
                {p.desc && (
                  <p
                    style={{
                      marginTop: 12,
                      fontSize: 15,
                      color: 'var(--muted)',
                      lineHeight: 1.55,
                    }}
                  >
                    {p.desc}
                  </p>
                )}
                <a href={p.link} target="_blank" rel="noreferrer">
                  View on GitHub <b>↗</b>
                </a>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}