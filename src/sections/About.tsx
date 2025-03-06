"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { FaReact, FaNodeJs, FaAws, FaDocker, FaFigma } from "react-icons/fa"
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiNestjs, SiPython, SiSocketdotio ,SiPrisma, SiRedis,SiMysql} from "react-icons/si"

// Data directly included in the file
const toolboxItems = [
  { title: "React", iconType: FaReact, color: "#61DAFB" },
  { title: "Next.js", iconType: SiNextdotjs, color: "#ffffff" },
  { title: "Javascript", iconType: SiJavascript, color: "#F7DF1E" },
  { title: "Tailwind", iconType: SiTailwindcss, color: "#06B6D4" },
  { title: "Node.js", iconType: FaNodeJs, color: "#339933" },
  { title: "Prisma", iconType: SiPrisma, color: "##0C344B" },
  { title: "NestJs", iconType: SiNestjs, color: "#B81E3E" },
    
  { title: "SocketIo", iconType: SiSocketdotio, color: "#007BFF" },
  { title: "MongoDB", iconType: SiMongodb, color: "#47A248" },
 

  { title: "Sql", iconType: SiMysql, color: "#336791" },
  { title: "Redis", iconType: SiRedis, color: "#DC382D" },
  { title: "Docker", iconType: FaDocker, color: "#2496ED" },
 
]

const hobbies = [
  { title: "Photography", emoji: "📸" },
  { title: "Movies", emoji: "📽️" },
  { title: "Reading", emoji: "📚" },
  { title: "Travel", emoji: "✈️" },
  { title: "Cooking", emoji: "🍳" },
  { title: "Gaming", emoji: "🎮" },
  { title: "Music", emoji: "🎸" },
  { title: "Fitness", emoji: "💪" },
]

// SectionHeader Component
const SectionHeader = ({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) => {
  return (
    <div className="max-w-3xl mx-auto text-center" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 mb-4">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-gray-300 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  )
}

// SkillCard Component
const SkillCard = ({
  item,
  index,
}: {
  item: {
    title: string
    iconType: React.ElementType
    color: string
  }
  index: number
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const { title, iconType: Icon, color } = item

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/80 border border-gray-700/50 backdrop-blur-sm shadow-lg overflow-hidden group"
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          rotateX: -10,
          z: 20,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-xl z-0"
          style={{
            background: `radial-gradient(circle at center, ${color}40 0%, transparent 70%)`,
          }}
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Icon with 3D effect */}
        <motion.div
          className="relative z-10 mb-3"
          animate={{
            rotateY: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{
            rotateY: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 0.3 },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Icon size={36} color={color} />
        </motion.div>

        {/* Title with glow effect */}
        <motion.p
          className="text-sm font-medium text-white relative z-10"
          animate={{
            textShadow: isHovered ? `0 0 8px ${color}` : "none",
          }}
        >
          {title}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

// Improved HobbyBubble Component
const HobbyBubble = ({
  hobby,
  index,
  total,
}: {
  hobby: {
    title: string
    emoji: string
  }
  index: number
  total: number
}) => {
  const controls = useAnimation()

  // Calculate position in a properly centered circular pattern
  useEffect(() => {
    const angle = (index / total) * Math.PI * 2
    const radius = 100 // Radius of the circle
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    // Start floating animation around the calculated position
    controls.start({
      x: [x, x + 15 * Math.sin(index), x - 10 * Math.cos(index), x],
      y: [y, y - 10 * Math.cos(index), y + 15 * Math.sin(index), y],
      transition: {
        duration: 8 + index % 3, // Varied duration for more natural movement
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    })
  }, [controls, index, total])

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
      }}
      animate={controls}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { delay: index * 0.1, duration: 0.5 },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r shadow-lg cursor-pointer whitespace-nowrap"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(219, 39, 119, 0.8))`,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          backgroundImage: `linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(219, 39, 119, 0.9))`,
          zIndex: 50,
        }}
      >
        <motion.span className="text-lg" whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
          {hobby.emoji}
        </motion.span>
        <motion.span
          className="text-sm font-medium text-white"
          whileHover={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.5)" }}
        >
          {hobby.title}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

// Main AboutSection Component
export const AboutSection = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <div className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10">
        <SectionHeader
          eyebrow="About Me"
          title="Crafting Digital Experiences & Beyond"
          description="Full-Stack Engineer with a passion for building scalable applications and exploring creative technologies."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Skills & Toolbox */}
          <motion.div
            className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 shadow-xl relative overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>

            <h3 className="text-2xl font-bold mb-6 text-white relative z-10 flex items-center">
              <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Tech Toolbox
              </span>
              <div className="h-px flex-grow bg-gradient-to-r from-blue-400/50 to-transparent ml-4"></div>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
              {toolboxItems.map((item, index) => (
                <SkillCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Hobbies & Personality - Improved Layout */}
          <motion.div
            className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 shadow-xl relative overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
              },
            }}
          >
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"></div>

            <h3 className="text-2xl font-bold mb-6 text-white relative z-10 flex items-center">
              <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Beyond the Code
              </span>
              <div className="h-px flex-grow bg-gradient-to-r from-purple-400/50 to-transparent ml-4"></div>
            </h3>

            {/* Improved container for hobby bubbles with proper centering */}
            <div className="relative h-[300px] w-full flex items-center justify-center z-10">
              <div className="relative w-[250px] h-[250px] md:-ml-28 -ml-36">
                {hobbies.map((hobby, index) => (
                  <HobbyBubble key={hobby.title} hobby={hobby} index={index} total={hobbies.length} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}