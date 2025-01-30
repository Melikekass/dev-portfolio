'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const songs = [
  {
    id: 1,
    title: "The Slimeking's Tower",
    url: "/sounds/TheSlimeking'sTower.mp3"
  },
  {
    id: 2,
    title: "City Of Tomorrow",
    url: "/sounds/CityOfTomorrow.ogg"
  },
  {
    id: 3,
    title: "Retro Vibes",
    url: "/sounds/RetroVibes.mp3"
  }
];

export default function RetroPlayer() {
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMobile, setIsMobile] = useState(false);
  const [showSongList, setShowSongList] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeSong = (index) => {
    setCurrentSong(index);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current.play();
    }, 0);
  };

  // Ana sayfa değilse sadece audio elementi döndürüyor
 if (pathname !== '/') {
    return (
      <audio
        ref={audioRef}
        src={songs[currentSong].url}
        onEnded={() => changeSong((currentSong + 1) % songs.length)}
      />
    );
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={songs[currentSong].url}
        onEnded={() => changeSong((currentSong + 1) % songs.length)}
      />
      <motion.div 
        className={`fixed ${isMobile ? 'top-8 left-2 right-2' : 'top-4 right-4'} 
                   bg-retro-yellow border-2 sm:border-4 border-retro-brown 
                   p-2 sm:p-4 shadow-[4px_4px_0px_0px_rgba(184,92,56,1)] 
                   ${isMobile ? 'w-auto' : 'w-64'} z-50`}
        initial={isMobile ? { y: -100 } : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isMobile ? (
          // Mobil Tasarım
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="font-retro text-retro-brown text-xs">RETRO RADIO</h3>
              <button
                onClick={() => setShowSongList(!showSongList)}
                className="px-2 py-1 bg-retro-brown text-retro-yellow font-retro text-xs"
              >
                {currentSong + 1}/{songs.length}
              </button>
              <button
                onClick={togglePlay}
                className="px-3 py-1 bg-retro-brown text-retro-yellow font-retro text-xs"
              >
                {isPlaying ? 'PAUSE' : 'PLAY'}
              </button>
            </div>
            
            {showSongList && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-retro-yellow border-2 border-retro-brown mt-1"
              >
                {songs.map((song, index) => (
                  <button
                    key={song.id}
                    onClick={() => {
                      changeSong(index);
                      setShowSongList(false);
                    }}
                    className={`w-full text-left px-2 py-1 font-retro text-xs
                            ${currentSong === index ? 'bg-retro-brown text-retro-yellow' : 'text-retro-brown'}`}
                  >
                    {currentSong === index ? '► ' : '• '}{song.title}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          // Desktop Tasarım
          <div className={`flex items-center ${isMobile ? 'justify-between gap-2' : 'flex-col'}`}>
            <div className="flex items-center justify-between w-full">
              <h3 className="font-retro text-retro-brown text-xs">RETRO RADIO</h3>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => {
                  setVolume(e.target.value);
                  audioRef.current.volume = e.target.value;
                }}
                className="w-16 sm:w-20 h-1 sm:h-2 bg-retro-brown"
              />
            </div>

            {!isMobile && (
              <div className="space-y-1 w-full mt-2">
                {songs.map((song, index) => (
                  <button
                    key={song.id}
                    onClick={() => changeSong(index)}
                    className={`w-full text-left px-2 py-1 font-retro text-[10px] 
                            ${currentSong === index ? 'bg-retro-brown text-retro-yellow' : 'text-retro-brown'}`}
                  >
                    {currentSong === index ? '► ' : '• '}{song.title}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={togglePlay}
              className={`${isMobile ? 'ml-2' : 'mt-2'} px-4 py-1 bg-retro-brown text-retro-yellow 
                       font-retro text-xs border-2 border-retro-brown 
                       hover:translate-y-[1px] transition-transform`}
            >
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}