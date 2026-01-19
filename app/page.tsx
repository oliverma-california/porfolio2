'use client';

import Image from "next/image";
import { cubicBezier, motion } from "motion/react"

export default function Home() {
  return (
    <motion.div className="flex min-h-screen items-center justify-center bg-black font-sans" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5, ease: cubicBezier(0.4, 0, 0.2, 1) }}>
      <main className="flex min-h-screen min-w-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-black text-8xl">
        <div id="text">
          <div className="line">
            <p className="word">Oliver</p>
            <p className="word"> </p>
            <p className="word">Ma</p>
          </div>
          <div className="line">
            <p className="word">EECS</p>
            <p className="word">&</p>
            <p className="word">DS</p>
            <p className="word">@</p>
          </div>
          <div className="line">
            <p className="word">UC</p>
            <p className="word">Berkeley</p></div>
          <div className="line">
            <a className="word fancy" href="mailto:oliverma@berkeley.edu">
              <span className="letter1">&rsaquo;</span>
              <span className="letter1">E</span>
              <span className="letter1">m</span>
              <span className="letter1">a</span>
              <span className="letter1">i</span>
              <span className="letter1">l</span>
            </a>
            <a className="word fancy" href="https://www.linkedin.com/in/oliverma-ca/">
              <span className="letter2">&rsaquo;</span>
              <span className="letter2">L</span>
              <span className="letter2">i</span>
              <span className="letter2">n</span>
              <span className="letter2">k</span>
              <span className="letter2">e</span>
              <span className="letter2">d</span>
              <span className="letter2">I</span>
              <span className="letter2">n</span>
            </a>
          </div>
          <div className="line">
            <a className="word fancy" href="https://github.com/oliverma-california">
              <span className="letter3">&rsaquo;</span>
              <span className="letter3">G</span>
              <span className="letter3">i</span>
              <span className="letter3">t</span>
              <span className="letter3">H</span>
              <span className="letter3">u</span>
              <span className="letter3">b</span>
            </a>
            <a className="word fancy" href="/Oliver-Ma-Resume.pdf">
              <span className="letter4">&rsaquo;</span>
              <span className="letter4">R</span>
              <span className="letter4">e</span>
              <span className="letter4">s</span>
              <span className="letter4">u</span>
              <span className="letter4">m</span>
              <span className="letter4">e</span>
            </a>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
