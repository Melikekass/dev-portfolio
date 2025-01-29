"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SoundButton } from "./components/SoundButton";
import useSound from "use-sound";

export default function Home() {
  const [playHover] = useSound("/sounds/click-wav", { volume: 0.3 });

  return (
    <div className="h-screen bg-retro-dark p-8 flex flex-col items-center justify-center overflow-hidden">
      
      <motion.div className="arcade-cabinet w-full max-w-3xl mx-auto text-center">
        {/* Profil Bölümü */}
        <div className="screen bg-retro-dark border-4 border-retro-brown p-6 mb-6">
          <motion.img
            src="/images/melo.jpg"
            alt="Melike Kas"
            className="w-32 h-32 mx-auto rounded-full border-4 border-retro-yellow 
                       filter-pixel mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.h1
            className="text-3xl font-retro text-retro-yellow mb-2 pixel-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            MELIKE KAS
          </motion.h1>
          <motion.p
            className="text-retro-yellow font-retro text-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            FULLSTACK DEVELOPER
          </motion.p>
        </div>

        {/* Kontrol Paneli - Yeni Düzen */}
        <motion.div
          className="controls grid grid-cols-4 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Link href="/projects" className="col-span-1">
            <SoundButton
              className="arcade-btn w-full py-3 px-4 bg-retro-yellow 
                       border-4 border-retro-brown text-retro-brown font-retro
                       hover:translate-y-1 transition-transform"
              onMouseEnter={playHover}
            >
              PROJECTS
              <span className="block text-[10px] mt-1">[P]</span>
            </SoundButton>
          </Link>

          <Link href="/skills" className="col-span-1">
            <SoundButton
              className="arcade-btn w-full py-3 px-4 bg-retro-yellow 
                       border-4 border-retro-brown text-retro-brown font-retro
                       hover:translate-y-1 transition-transform"
              onMouseEnter={playHover}
            >
              SKILLS
              <span className="block text-[10px] mt-1">[S]</span>
            </SoundButton>
          </Link>

          <Link href="/contact" className="col-span-1">
            <SoundButton
              className="arcade-btn w-full py-3 px-4 bg-retro-yellow 
                       border-4 border-retro-brown text-retro-brown font-retro
                       hover:translate-y-1 transition-transform"
              onMouseEnter={playHover}
            >
              CONTACT
              <span className="block text-[10px] mt-1">[C]</span>
            </SoundButton>
          </Link>

          <SoundButton
            className="arcade-btn w-full py-3 px-4 bg-retro-brown 
                     border-4 border-retro-yellow text-retro-yellow font-retro
                     hover:translate-y-1 transition-transform col-span-1"
            onMouseEnter={playHover}
            onClick={() => window.location.reload()}
          >
            RESET
            <span className="block text-[10px] mt-1">[R]</span>
          </SoundButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
