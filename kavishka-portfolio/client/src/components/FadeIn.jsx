import useInView from '../hooks/useInView';

export default function FadeIn({ children, direction = 'up', className = '' }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade ${direction} ${visible ? 'show' : ''} ${className}`}
    >
      {children}
    </div>
  );
}