import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const groups = [
  {
    name: 'Languages',
    items: [
      ['Java', 82],
      ['JavaScript', 78],
      ['Python', 72],
      ['SQL', 78],
      ['PHP', 68],
    ],
  },
  {
    name: 'Web & frameworks',
    items: [
      ['React.js', 80],
      ['Node.js / Express', 76],
      ['Spring Boot', 70],
      ['HTML & CSS', 84],
      ['PostgreSQL / MySQL', 74],
    ],
  },
  {
    name: 'Workflow',
    items: [
      ['Git & GitHub', 78],
      ['REST APIs & JWT', 75],
      ['Postman', 74],
      ['SDLC', 72],
      ['OOP', 80],
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section pale">
      <FadeIn>
        <SectionHeader
          eyebrow="02 / SKILLS"
          title="Tools I’m growing with."
          copy="A practical toolkit built through academic work, team projects and continual learning."
        />
      </FadeIn>

      <div className="skills-grid">
        {groups.map((group, index) => (
          <FadeIn
            key={group.name}
            direction={index === 1 ? 'up' : index ? 'right' : 'left'}
          >
            <div className="skill-group">
              <h3>{group.name}</h3>
              {group.items.map(([name, value]) => (
                <div className="skill" key={name}>
                  <div>
                    <span>{name}</span>
                    <small>{value}%</small>
                  </div>
                  <div className="track">
                    <i style={{ '--fill': `${value}%` }}></i>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}