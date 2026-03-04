import Image from "next/image";
import { LinkIcon, GithubIcon } from "lucide-react";

export default function Card({ title, description, imageSrc, link, githubLink }: { title: string; description: string; imageSrc: string; link: string; githubLink: string }) {
  return (
    <div className="flex flex-col bg-neutral-900 border-2 border-neutral-800 rounded-lg overflow-hidden w-full max-w-sm">
      <Image src={imageSrc} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-8 flex flex-col justify-between h-full ">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <h3 className="text-base text-neutral-400">{description}</h3>
        </div>  
        <div className="mt-8 flex justify-between">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <LinkIcon size={24} />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
