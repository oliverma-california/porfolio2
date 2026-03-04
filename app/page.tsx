'use client';

import Image from "next/image";
import { cubicBezier, motion } from "motion/react"
import Card from "@/components/card";

const cards = [
  {
    title: "BlueKingRedKing",
    description: "A simple and elegant Clash Royale guide and deck builder built with Next.js, Tailwind CSS, and TypeScript.",
    imageSrc: "/bluekingredking.png",
    link: "https://calhacks-tech.vercel.app",
    githubLink: "https://github.com/oliverma-california/calhacks-tech"
  },
  {
    title: "MXR Website",
    description: "A sleek and modern website for the Milpitas Xtreme Robotics team, showcasing their projects and achievements.",
    imageSrc: "/mxr.png",
    link: "https://mxrwebsite.vercel.app",
    githubLink: "https://github.com/oliverma-california/mxrwebsite"
  },
  {
    title: "RxReader",
    description: "Instantly scans medications using OCR and LLMs, providing users with clear translations and easy-to-understand explanations. Won Best Demo at Chinatown Hacks 2025.",
    imageSrc: "/rxreader.png",
    link: "https://devpost.com/software/rxreader",
    githubLink: "https://github.com/unixers/chinatown-hacks"
  },
  {
    title: "OncoVision",
    description: "The convenient machine learning solution to detect early signs of cancer, using Tensorflow and a convolutional neural network. Won Third Place at E-Med Hacks 2024 and Honorable Mention at BISV Hacks 2025.",
    imageSrc: "/oncovision.png",
    link: "https://devpost.com/software/oncovision-bnwl6f",
    githubLink: "https://github.com/oliverma-california/bisv-hacks"
  },
  {
    title: "Milpitas Hacks 2 Website",
    description: "A modern and minimalist website for the Milpitas Hacks 2/Bay Hacks Hackathon, built with Next.js, Tailwind CSS, and TypeScript.",
    imageSrc: "/mh2.png",
    link: "https://milpitashacks2.vercel.app",
    githubLink: "https://github.com/oliverma-california/milpitashacks2.0"
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: cubicBezier(0.4, 0, 0.2, 1) }}
      className="flex flex-col min-h-screen items-center justify-center font-sans"
    >
      <main className="flex min-h-screen min-w-screen w-full max-w-3xl flex-col items-center justify-center lg:py-0 lg:px-16 text-4xl lg:text-8xl">
        <div id="text" className="flex flex-col lg:inline-block text-white min-h-screen lg:min-h-full justify-between py-32 lg:py-0">
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

      <div className="flex min-w-screen w-full max-w-3xl flex-col items-center justify-center lg:pb-48 lg:px-16 text-4xl lg:text-8xl">
        <div className="flex flex-col lg:flex-row flex-wrap gap-8 mt-16 justify-center">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} imageSrc={card.imageSrc} link={card.link} githubLink={card.githubLink} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
