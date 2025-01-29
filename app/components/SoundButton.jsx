'use client';
import useSound from 'use-sound';

export function SoundButton({ children, onClick, className }) {
  const [playClick] = useSound('/sounds/click.wav', { volume: 0.5 });

  const handleClick = () => {
    playClick();
    if (onClick) onClick();
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}