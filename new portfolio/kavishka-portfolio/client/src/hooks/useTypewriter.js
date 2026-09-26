import { useEffect, useState } from 'react';

export default function useTypewriter(words, typingSpeed = 80, pause = 1500) {
  const [text, setText] = useState('');
  const [word, setWord] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[word];
    const done = !deleting && text === current;
    const empty = deleting && text === '';
    const timeout = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) { setDeleting(false); return setWord((word + 1) % words.length); }
      setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }, done ? pause : deleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, word, deleting, words, typingSpeed, pause]);
  return text;
}
