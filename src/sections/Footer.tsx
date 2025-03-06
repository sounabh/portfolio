"use client"

// Import the SVG icon - adjust this based on your project setup
import { ArrowUpRight } from "lucide-react"; // Using lucide-react instead of SVG import

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/sounabh",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sounabho/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Decorative background - kept at lower z-index */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      
      {/* Main content - brought to normal z-index */}
      <div className="container relative z-0">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition cursor-pointer"
                onClick={() => console.log(`Clicked: ${link.title}`)}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};