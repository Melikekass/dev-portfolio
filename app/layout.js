'use client';
import './globals.css';
import useSound from 'use-sound';
import RetroPlayer from './components/RetroPlayer';

export default function RootLayout({ children }) {
  const [playClick] = useSound('/sounds/click.wav', { volume: 0.5 });

  if (typeof window !== 'undefined') {
    document.addEventListener('click', (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        playClick();
      }
    });
  }

  return (
    <html lang="tr">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
      <RetroPlayer />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}