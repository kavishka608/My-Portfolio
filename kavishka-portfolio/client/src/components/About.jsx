import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const stats = [
  ['3rd', 'year student'],
  ['3+', 'projects built'],
  ['10+', 'technologies'],
  ['1', 'career direction'],
];

export default function About() {
  return (
    <section id="about" className="section about">
      <FadeIn>
        <SectionHeader
          eyebrow="01 / ABOUT ME"
          title="Curious by nature. Building with purpose."
        />
      </FadeIn>

      <div className="about-grid">
        <FadeIn direction="left">
          <p className="large-copy">
            I am an undergraduate Software Engineering student, passionate about
            web technologies, programming and practical problem-solving.
          </p>
        </FadeIn>

        <FadeIn direction="right">
          <p>
            I enjoy collaborating on projects, learning new tools, and improving
            the details that make a product easier to use. I’m looking for an
            internship where I can grow alongside a thoughtful engineering team
            and contribute to real-world software.
          </p>
          <a
            className="cv-link"
            href="/Kavishka-Dewduni-Resume.pdf"
            download
          >
            Download Resume <span>↓</span>
          </a>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="stats">
          {stats.map(([n, l]) => (
            <div key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}