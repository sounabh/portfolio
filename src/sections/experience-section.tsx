"use client"

import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Unified Mentor Pvt Lmd",
    position: "Web Developer",
    period: "2024",
    description:
      "Worked as a frontend developer while developing a serverless architecture AI powered SaaS for the team, implementing modern frameworks and optimizing performance.",
    achievements: [
      "Reduced load time by 20% through Serverless Architecture",
      "Implemented Authentication ,payment integration and gemini & assembly AI Api",
      "Manage Secure video uploads and focus on a minimilastic aesthetic design patterns",
    ],
  },
  {
    company: "TechForce Services",
    position: "Intern",
    period: "2024",
    description:
      "Complete a Health-Fitness Project,leveraging KPIs to drive insights and informed decision making ",
    achievements: [
      "Trailhead success 15 badges",
      "Worked with Salesforce Lightning, Apex, Visualforce.",
      "Enhanced security practices for data protection and gaining hands-on experience with Salesforce development tools.",
    ],
  }
]

export function ExperienceSection() {
  return (
    <div className="py-20 lg:py-28 bg-gray-950/50">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Journey"
          description="A timeline of my professional experience and key achievements in the tech industry."
        />
        <div className="mt-20 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-300 to-sky-400 hidden lg:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative lg:ml-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 size-4 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -translate-x-[34px] hidden lg:block" />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">{experience.position}</h3>
                        <p className="text-white/60">{experience.company}</p>
                      </div>
                      <div className="inline-flex px-3 py-1 rounded-full bg-gray-800 text-sm">{experience.period}</div>
                    </div>
                    <p className="mt-4 text-white/80">{experience.description}</p>
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-3">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-white/60">
                        {experience.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

