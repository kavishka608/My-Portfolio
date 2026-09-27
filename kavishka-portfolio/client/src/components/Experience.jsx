import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const entries = [
  {
    date: '2025 — present',
    title: 'BSc (Hons) Software Engineering',
    place: 'NSBM Green University, Homagama',
    text: 'Developing a foundation in software engineering, collaborative development and modern web technologies.',
  },
  {
    date: '2025',
    title: 'HirePath AI — Full-Stack Project',
    place: '5-Member Team Project',
    text: 'Built the recruiter management subsystem with 9 RESTful APIs using ASP.NET Core 8, C#, Entity Framework Core and SQL Server. Followed Repository Pattern and SOLID principles.',
  },
  {
    date: '2025',
    title: 'HomeCraft — Full-Stack Project',
    place: 'Individual Project',
    text: 'Built a complete home services booking platform with Node.js, Express, PostgreSQL and React, including JWT auth, bidding system and review features.',
  },
  {
    date: 'May 2026',
    title: 'Python for Beginners',
    place: 'University of Moratuwa & DP Education',
    text: 'Completed an online foundation course covering variables, control structures, functions and problem-solving.',
  },
  {
    date: '2023',
    title: 'Diploma in Computer Applications',
    place: 'Digitec - Negombo',
    text: 'Completed a diploma covering computer applications and foundational IT skills.',
  },
  {
    date: '2020 — 2022',
    title: 'G.C.E. Advanced Level — Technology',
    place: 'Jeyaraj Fernando Pulle M.V., Negombo',
    text: 'Studied Engineering Technology, ICT and Science for Technology.',
  },
];

export default function Experience() {
  return (
    <section id="journey" className="section dark">
      <FadeIn>
        <SectionHeader
          eyebrow="04 / JOURNEY"
          title="Where I’ve been learning."
        />
      </FadeIn>

      <div className="timeline">
        {entries.map((e, i) => (
          <FadeIn key={e.title} direction={i % 2 ? 'right' : 'left'}>
            <article>
              <span>{e.date}</span>
              <div>
                <h3>{e.title}</h3>
                <h4>{e.place}</h4>
                <p>{e.text}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}