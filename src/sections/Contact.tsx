"use client"
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const ParticlesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];
    
    const particleCount = 50;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    />
  );
};

const GlowBadge = ({ children }: { children: React.ReactNode }) => (
  <div 
    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
    style={{
      animation: "float 6s ease-in-out infinite",
    }}
  >
    {children}
  </div>
);

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:bagsounabh2003@gmail.com";
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-800" id="contact">
      <div className="w-full max-w-4xl relative">
        <div 
          className="relative overflow-hidden rounded-3xl border border-white/10"
          style={{
            background: "linear-gradient(to right, rgba(52, 211, 153, 0.1), rgba(56, 189, 248, 0.1))",
            backdropFilter: "blur(24px)",
          }}
        >
          <ParticlesCanvas />
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-xl">
                <GlowBadge>
                  <span className="text-white/80 text-sm font-medium">
                    Available for work
                  </span>
                </GlowBadge>
                
                <h2 
                  className="text-4xl md:text-5xl font-bold"
                  style={{
                    background: "linear-gradient(to right, #34d399, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% 100%",
                    animation: "gradientMove 15s ease infinite",
                  }}
                >
                  Let's Build Something Amazing Together
                </h2>
                
                <p className="mt-4 text-white/80 text-lg leading-relaxed">
                  I'm looking for opportunities as a Full-Stack Engineer—let's
                  connect and discuss how I can contribute to your team.
                </p>
              </div>

              <div className="relative group">
                <div 
                  className="absolute inset-0 rounded-2xl opacity-50 transition-all duration-300"
                  style={{
                    background: "linear-gradient(to right, #34d399, #38bdf8)",
                    filter: "blur(8px)",
                    transform: "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />
                <button
                  onClick={handleEmailClick}
                  className="relative flex items-center gap-2 px-8 py-4 rounded-2xl bg-black text-white transition-all duration-300"
                  style={{
                    transform: "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const button = e.currentTarget;
                    const glow = button.previousElementSibling as HTMLElement;
                    button.style.transform = "scale(1.05)";
                    glow.style.filter = "blur(12px)";
                  }}
                  onMouseLeave={(e) => {
                    const button = e.currentTarget;
                    const glow = button.previousElementSibling as HTMLElement;
                    button.style.transform = "scale(1)";
                    glow.style.filter = "blur(8px)";
                  }}
                >
                  <span className="font-medium">Contact Me</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes gradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ContactSection;