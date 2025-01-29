'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HomeButton() {
  return (
    <motion.div
      className="fixed bottom-8 left-8"
      whileHover={{ scale: 1.1 }}
    >
      <Link href="/">
        <button 
          className="px-4 py-2 bg-retro-brown text-retro-yellow font-retro
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
        >
          ← HOME
        </button>
      </Link>
    </motion.div>
  );
}