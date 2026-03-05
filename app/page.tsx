'use client';

import Image from "next/image";
import { cubicBezier, motion } from "motion/react"
import Card from "@/components/card";
import { desc } from "motion/react-client";

const cards = [
  {
    title: "BlueKingRedKing",
    description: "A simple and elegant Clash Royale guide and deck builder built with Next.js, Tailwind CSS, and TypeScript.",
    winner: "",
    imageSrc: "/bluekingredking.png",
    link: "https://calhacks-tech.vercel.app",
    githubLink: "https://github.com/oliverma-california/calhacks-tech"
  },
  {
    title: "MXR Website",
    description: "A sleek and modern website for the Milpitas Xtreme Robotics team, showcasing their projects and achievements.",
    winner: "",
    imageSrc: "/mxr.png",
    link: "https://mxrwebsite.vercel.app",
    githubLink: "https://github.com/oliverma-california/mxrwebsite"
  },
  {
    title: "RxReader",
    description: "Instantly scans medications using OCR and LLMs, providing users with clear translations and easy-to-understand explanations.",
    winner: "Best Demo - Chinatown Hacks 2025",
    imageSrc: "/rxreader.png",
    link: "https://devpost.com/software/rxreader",
    githubLink: "https://github.com/unixers/chinatown-hacks"
  },
  {
    title: "OncoVision",
    description: "The convenient machine learning solution to detect early signs of cancer, using Tensorflow and a convolutional neural network.",
    winner: "Third Place - E-Med Hacks 2024, Honorable Mention - BISV Hacks 2025",
    imageSrc: "/oncovision.png",
    link: "https://devpost.com/software/oncovision-bnwl6f",
    githubLink: "https://github.com/oliverma-california/bisv-hacks"
  },
  {
    title: "Milpitas Hacks 2 Website",
    description: "A modern and minimalist website for the Milpitas Hacks 2/Bay Hacks Hackathon, built with Next.js, Tailwind CSS, and TypeScript.",
    winner: "",
    imageSrc: "/mh2.png",
    link: "https://milpitashacks2.vercel.app",
    githubLink: "https://github.com/oliverma-california/milpitashacks2.0"
  },
  {
    title: "Milpitas Hacks Website",
    description: "An SEO-optimized website for Milpitas High School's first-ever on-campus hackathon, achieving #1 search rank on Google and driving increased web traffic and participant registration. Built with React.js, Tailwind CSS, and JavaScript.",
    winner: "",
    imageSrc: "/milpitashacks.png",
    link: "https://milpitashacks-test.vercel.app",
    githubLink: "https://github.com/jerrymiahdg/milpitashacks"
  },
  {
    title: "Apical",
    description: "Leverages Keras and computer vision to maintain productivity, reduce distractions, and stay concentrated.",
    winner: "4th Place Finalist - HackaKhan 2024",
    imageSrc: "/apical.png",
    link: "https://devpost.com/software/apical",
    githubLink: "https://github.com/bub655/focus-calendar/"
  },
  {
    title: "OpenHarvest",
    description: "The simple, all-in-one solution for managing volunteering at food banks, integrating a CalOES GIS database of local food banks and pantries with a reminder system integrated with calendar apps.",
    winner: "Second Place + Code for Cause Track Winner - MountainHacks 2024",
    imageSrc: "/openharvest.png",
    link: "https://devpost.com/software/openharvest",
    githubLink: "https://github.com/jmshgs/foodbankfinder"
  },
  {
    title: "FoodFind",
    description: "Helps avoid food waste by allowing users to post any surplus or unwanted food, both reducing waste and benefiting the local community. Built with Svelte, Tailwind CSS, shadcn, and Mapbox.",
    winner: "Second Place - OAKHacks 2024",
    imageSrc: "/foodfind.png",
    link: "https://devpost.com/software/foodfind-ei5kp6",
    githubLink: "https://github.com/jmshgs/oakhacks2024"
  },
  {
    title: "WorldChat",
    description: "The online center for language and cultural exchange. A real-time translation chat app using DeepL's machine translation API to break down language barriers and facilitate communication between people from different cultures. Built with Svelte, Tailwind CSS, and shadcn.",
    winner: "Third Place - MateoHacks 2025",
    imageSrc: "/worldchat.png",
    link: "https://devfolio.co/projects/worldchat-1354",
    githubLink: "https://github.com/jmshgs/worldchat"
  },
  {
    title: "CivicIssues",
    description: "A web-based civic engagement platform that empowers users to report and track local issues, fostering community involvement and improving public services. Built with Svelte, Tailwind CSS, shadcn, and Mapbox.",
    winner: "",
    imageSrc: "/civicissues.png",
    link: "https://devpost.com/software/civicissues",
    githubLink: "https://github.com/quacksire/smoothride"
  },
  {
    title: "EcoNavigator",
    description: "A carbon footprint calculator, using a combination of user input and EPA data to provide nearby transit routes and displaying how much emissions are reduced versus driving. Built with Svelte, Tailwind CSS, shadcn, and Mapbox.",
    winner: "Environment Track Winner - BellHacks 2024",
    imageSrc: "/econavigator.png",
    link: "https://devpost.com/software/ecotransit-gqk7uf",
    githubLink: "https://github.com/jmshgs/bellhacks2024"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans"
    >
      <main className="flex min-h-screen min-w-screen w-full max-w-3xl flex-col items-center justify-center lg:py-0 lg:px-16 text-4xl lg:text-8xl">
        <div id="text" className="flex flex-col lg:inline-block text-white min-h-screen lg:min-h-full justify-between py-32 lg:py-0">
          <div className="line">
            <h1 className="word">Oliver</h1>
            <h1 className="word"> </h1>
            <h1 className="word">Ma</h1>
          </div>
          <div className="line">
            <h1 className="word">EECS</h1>
            <h1 className="word">&</h1>
            <h1 className="word">DS</h1>
            <h1 className="word">@</h1>
          </div>
          <div className="line">
            <h1 className="word">UC</h1>
            <h1 className="word">Berkeley</h1></div>
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

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: cubicBezier(0.4, 0, 0.2, 1) }}
        className="flex min-w-screen w-full max-w-3xl flex-col items-center justify-center mt-0.5 pb-24 lg:pb-48 px-8 lg:px-16 text-4xl lg:text-8xl">
        <div className="flex flex-col lg:flex-row flex-wrap gap-8 mt-16 justify-center">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} winner={card.winner} imageSrc={card.imageSrc} link={card.link} githubLink={card.githubLink} />
          ))}
        </div>
      </motion.div>

      <footer className="w-full p-12 text-center text-sm text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Oliver Ma. All rights reserved. Made with ❤️ in Berkeley, CA</p>
      </footer>
    </div>
  );
}
