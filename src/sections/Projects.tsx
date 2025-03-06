import cinematic from "@/assets/images/cinematic.png"
import corner from "@/assets/images/corner.png"
import trackor from "@/assets/images/trackor.png"
import speaksy from "@/assets/images/speaksy.png"
import Image from 'next/image'
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card"
import Link from "next/link"

const portfolioProjects = [
  {
    company: "Self Made",
    year: "2024",
    title: "Cinematic",
    results: [
      { title: "AI-powered movie recommendations and rating system." },
      { title: "Improved site speed with Redis caching and real-time features." },
      { title: "Scalable backend with Express.js and MongoDB." }
    ],
    link: "https://12angrymen.vercel.app/",
    image: cinematic
  },
  {
    company: "Self Made",
    year: "2024",
    title: "Corner",
    
    results: [
      { "title": "Real-time  code editor with Monaco and Socket.IO." },
      { "title": "Integrated video chat using Agora RTC ." },
      { "title": " Project-saving with MongoDB and shared rooms feature." }
    ],
    link: "https://corner-liard.vercel.app/",
    image: corner
  }
  ,
  {
    company: "Self Made",
    year: "2025",
    title: "Trackor",
   
    results: [
      { title: "Real-time device tracker with WebSockets for live location sharing." },
      { title: "Integrated QR code-based location sharing ." },
      { title: "Implemented multi-user tracking using Express.js ." }
    ],
    link: "https://trackor.onrender.com/",
    image: trackor
  }
  ,
  {
    company: "Intern Project",
    year: "2024",
    title: "Speaksy",
   
    results: [
      { title: "Designed a serverless architecture with NeonDB to handle seamless data storage." },
      { title: "Integrated Stripe for subscription management with real-time payment webhooks." },
      { title: "Developed an AI-powered platform that converts videos into  blog posts  ." }
    ],
    link: "https://sounabh-speaksy-ai-next.vercel.app/",
    image: speaksy
  }
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
    <div>
      <div className="container">
      <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed client's requirements into engaging digital experiences." />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card 
            key={project.title} 
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-sm text-white/50">
                        <CheckCircleIcon className="size-5 md:size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};
