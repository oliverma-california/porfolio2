import Image from "next/image";
import { LinkIcon, GithubIcon, TrophyIcon } from "lucide-react";

export default function Card({ title, description, winner, imageSrc, link, githubLink }: { title: string; description: string; winner: string, imageSrc: string; link: string; githubLink: string }) {
  return (
    <div className="flex flex-col bg-neutral-900 border-2 border-neutral-800 rounded-lg overflow-hidden w-full max-w-sm">
      <Image src={imageSrc} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-8 flex flex-col justify-between h-full ">
        <div className="flex flex-col space-y-2">
          {winner && <h3 className="mb-4 text-xs lg:text-sm font-bold text-amber-300">🏆 {winner}</h3>}
          <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
          <h3 className="text-sm lg:text-base text-neutral-400">{description}</h3>
        </div>
        <div className="mt-8 flex justify-between">
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label="View Project">
            <LinkIcon size={24} />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="View GitHub Repository">
            <GithubIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
