import useTypewriter from '../hooks/useTypewriter';
import photo from './photo.jpeg';

export default function Hero() {
  const role = useTypewriter([
    'Software Engineering Student',
    'Full-Stack Developer',
    'Problem Solver',
  ]);

  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="kicker">Hello, I’m</p>
        <h1>
          Kavishka
          <br />
          <em>Dewduni.</em>
        </h1>
        <p className="role">
          {role}
          <b>|</b>
        </p>
        <p className="intro">
          An aspiring software engineer who enjoys turning ideas into useful,
          thoughtful digital experiences.
        </p>
        <div className="hero-actions">
          <a className="button" href="#projects">
            View my work <i>↗</i>
          </a>
          <a className="text-link" href="#contact">
            Get in touch <i>↓</i>
          </a>
        </div>
      </div>

      <div className="hero-art" aria-label="Kavishka Dewduni">
        <div className="orbit orbit-a"></div>
        <div className="orbit orbit-b"></div>

        <div className="portrait">
          <img src={photo} alt="Kavishka Dewduni" />
        </div>

        <p>
          based in Sri Lanka <span>✦</span>
        </p>
      </div>
    </section>
  );
}