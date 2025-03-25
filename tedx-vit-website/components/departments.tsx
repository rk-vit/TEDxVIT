"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Heart, Palette, Zap, DollarSign, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Departments() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const departments = [
    {
      id: "curation",
      name: "Curation",
      description:
        "Responsible for selecting and preparing speakers, ensuring high-quality content that aligns with TED's mission of 'ideas worth spreading'.",
      icon: <Edit className="h-6 w-6" />,
      color: "#e62b1e",
      responsibilities: [
        "Speaker selection and vetting",
        "Content development and coaching",
        "Talk preparation and rehearsals",
        "Quality assurance of presentations",
      ],
      image: "/department-curation.jpg",
    },
    {
      id: "marketing",
      name: "Marketing",
      description:
        "Drives awareness and engagement through strategic communication, social media management, and promotional campaigns.",
      icon: <Heart className="h-6 w-6" />,
      color: "#e62b1e",
      responsibilities: [
        "Brand management and social media",
        "Content creation and distribution",
        "Audience engagement strategies",
        "Analytics and performance tracking",
      ],
      image: "/department-marketing.jpg",
    },
    {
      id: "design",
      name: "Design",
      description:
        "Creates visual identity and materials that reflect TEDx's brand values while maintaining a unique local character.",
      icon: <Palette className="h-6 w-6" />,
      color: "#e62b1e",
      responsibilities: [
        "Visual identity and branding",
        "Digital and print materials",
        "Stage and venue design",
        "Promotional graphics and videos",
      ],
      image: "/department-design.jpg",
    },
    {
      id: "tech",
      name: "Technical",
      description:
        "Ensures seamless execution of events through sound, lighting, recording, and livestreaming management.",
      icon: <Zap className="h-6 w-6" />,
      color: "#e62b1e",
      responsibilities: [
        "Audio-visual setup and management",
        "Livestreaming and recording",
        "Website maintenance",
        "Technical troubleshooting",
      ],
      image: "/department-tech.jpg",
    },
    {
      id: "sponsorship",
      name: "Sponsorship",
      description: "Builds partnerships with organizations to secure financial and in-kind support for TEDx events.",
      icon: <DollarSign className="h-6 w-6" />,
      color: "#e62b1e",
      responsibilities: [
        "Partnership development",
        "Sponsor relations and management",
        "Funding strategies",
        "Value proposition creation",
      ],
      image: "/department-sponsorship.jpg",
    },
  ]

  return (
    <section id="departments" className="py-24 md:py-32 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[100px] z-0"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e62b1e] opacity-5 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#e62b1e] opacity-5 rounded-full"></div>
      <div className="absolute top-1/3 left-0 w-16 h-64 bg-[#e62b1e]/5 rounded-r-full"></div>
      <div className="absolute bottom-1/3 right-0 w-16 h-64 bg-[#e62b1e]/5 rounded-l-full"></div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block bg-[#e62b1e]/10 text-[#e62b1e] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Our Structure
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Specialized <span className="text-[#e62b1e]">Departments</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Our dedicated teams work together to create extraordinary TEDx experiences, each bringing unique expertise
            to make our events successful.
          </p>
        </motion.div>

        <Tabs defaultValue="curation" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-3 mb-12 bg-transparent">
            {departments.map((dept) => (
              <TabsTrigger
                key={dept.id}
                value={dept.id}
                className="px-6 py-3 rounded-full data-[state=active]:bg-[#e62b1e] data-[state=active]:text-white border border-[#e62b1e]/20 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="flex items-center gap-2">
                  {dept.icon}
                  {dept.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 order-2 md:order-1">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#e62b1e]/10 text-[#e62b1e] mb-6">
                      {dept.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{dept.name} Department</h3>
                    <p className="text-gray-700 mb-8 text-lg">{dept.description}</p>

                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Responsibilities:</h4>
                    <ul className="space-y-3 mb-8">
                      {dept.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#e62b1e] mr-3 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </span>
                          <span className="text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <a
                        href="#contact"
                        className="group inline-flex items-center text-[#e62b1e] font-medium hover:text-[#d42a1c] transition-colors"
                      >
                        Join This Department
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="h-full">
                      <Image
                        src={dept.image || "/placeholder.svg"}
                        alt={`${dept.name} Department`}
                        width={600}
                        height={500}
                        className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

