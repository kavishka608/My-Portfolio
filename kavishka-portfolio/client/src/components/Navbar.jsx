import { useEffect, useState } from 'react';

const links = ['About', 'Skills', 'Projects', 'Journey', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'solid' : ''}`}>
      <a className="logo" href="#home">
        KD<span>.</span>
      </a>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={open ? 'open' : ''}>
        {links.map((x) => (
          <a
            key={x}
            href={`#${x.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {x}
          </a>
        ))}
      </nav>
    </header>
  );
}