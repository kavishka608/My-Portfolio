const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.6h3.8v11H3.3v-11Zm6.2 0h3.6v1.5h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6.1v5.4h-3.8v-4.8c0-1.1 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6v4.9H9.5v-11Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.7a9.5 9.5 0 0 0-3 18.5c.5.1.6-.2.6-.5v-1.8c-2.5.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.3 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2-.2-4.1-1-4.1-4.4 0-1 .4-1.8.9-2.4-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.5.9a8.9 8.9 0 0 1 4.6 0c1.8-1.1 2.5-.9 2.5-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.4 0 3.4-2.1 4.2-4.1 4.4.3.3.6.9.6 1.7v2.5c0 .3.2.6.6.5A9.5 9.5 0 0 0 12 2.7Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer>
      <a className="logo" href="#home">
        KD<span>.</span>
      </a>

      <p>Designed & built by Kavishka Dewduni</p>

      <div className="footer-links">
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/kavishka-dewduni/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>

        <a
          className="social-icon"
          href="https://github.com/kavishka608"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>

        <a href="/Kavishka-Dewduni-Resume.pdf" download>
          Résumé
        </a>
      </div>
    </footer>
  );
}