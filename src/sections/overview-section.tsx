"use client"

import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import { Code2, Database, Server, Cpu, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const overviewCards = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant web applications with modern JavaScript frameworks and libraries.",
    icon: Code2,
    stats: [
      { label: "Primary Skills", value: "JavaScript, Next.js" },
      { label: "Other Skills", value: "React, TypeScript, HTML/CSS" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Designing and implementing robust server-side applications and APIs that power modern web experiences.",
    icon: Server,
    stats: [
      { label: "Primary Skills", value: "Node.js, Express" },
      { label: "Other Skills", value: "Prisma, NestJS" },
    ],
  },
  {
    title: "Database Management",
    description:
      "Working with various database technologies to design efficient data models and implement optimized queries.",
    icon: Database,
    stats: [
      { label: "Primary Skills", value: "MongoDB, MySql" },
      { label: "Other Skills", value: "NeonDB, Redis" },
    ],
  },
  {
    title: "DevOps Fundamentals",
    description:
      "Implementing containerization, learning CI/CD pipelines, and server management to ensure smooth deployment and operation.",
    icon: Cpu,
    stats: [
      { label: "Technologies", value: "Docker, Git" },
      { label: "Systems", value: "Linux" },
    ],
  },
  {
    title: "Education & Projects",
    description:
      "Pursuing BTech with relevant coursework while gaining practical experience through indie and internship projects.",
    icon: GraduationCap,
    stats: [
      { label: "Degree", value: "BTech" },
      { label: "Coursework", value: "DBMS, CN, SE" },
    ],
  },
]

export function OverviewSection() {
  return (
    <div className="py-20 lg:py-28 bg-primary">
      <div className="container">
        <SectionHeader
          eyebrow="What I Do"
          title="Full-Stack Engineering"
          description="Specialized in building end-to-end web applications with a focus on clean code, performance, and user experience."
          
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {overviewCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 md:p-8 bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="inline-flex size-12 items-center justify-center rounded-lg bg-white">
                  <card.icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/80">{card.description}</p>
                <div className="mt-6 grid grid-cols-1 gap-4">
                  {card.stats.map((stat) => (
                    <div key={stat.label} className="border-t border-white/10 pt-3">
                      <div className="text-sm font-medium text-white/60">{stat.label}</div>
                      <div className="text-base font-bold text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

