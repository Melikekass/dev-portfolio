'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const songs = [
  {
    id: 1,
    title: "The Slimekin..",
    url: "/sounds/TheSlimeking'sTower.mp3"
  },
  {
    id: 2,
    title: "City Of Tomo..",
    url: "/sounds/CityOfTomorrow.ogg"
  },
  {
    id: 3,
    title: "Retro Vibes",
    url: "/sounds/RetroVibes.mp3"
  }
];

export default function RetroPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

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

  return (
    <motion.div 
      className="fixed top-4 right-4 bg-retro-yellow border-4 border-retro-brown p-4 
                 shadow-[4px_4px_0px_0px_rgba(184,92,56,1)] w-64"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <audio
        ref={audioRef}
        src={songs[currentSong].url}
        onEnded={() => changeSong((currentSong + 1) % songs.length)}
      />
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-retro text-retro-brown text-sm">RETRO RADIO</h3>
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
          className="w-20 h-2 bg-retro-brown"
        />
      </div>

      <div className="space-y-2">
        {songs.map((song, index) => (
          <button
            key={song.id}
            onClick={() => changeSong(index)}
            className={`w-full text-left px-2 py-1 font-retro text-xs 
                      ${currentSong === index ? 'bg-retro-brown text-retro-yellow' : 'text-retro-brown'}`}
          >
            {currentSong === index ? '► ' : '• '}{song.title}
          </button>
        ))}
      </div>

      <button
        onClick={togglePlay}
        className="mt-4 w-full py-2 bg-retro-brown text-retro-yellow font-retro text-sm
                 border-2 border-retro-brown hover:translate-y-[1px] transition-transform"
      >
        {isPlaying ? 'PAUSE' : 'PLAY'}
      </button>
    </motion.div>
  );
}